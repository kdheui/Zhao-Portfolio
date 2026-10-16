import test from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { handleAsk } from './handler.mjs';
import { AskRateLimiter } from './index.mjs';
if (!globalThis.crypto) globalThis.crypto = webcrypto;
const origin = 'https://kdheui.github.io';
const messages = [{ role: 'user', content: 'What did Zhaolin build for HOVR?' }];
function request(body = { messages }, options = {}) {
  return new Request('https://ask.example/api/ask', { method: 'POST', headers: { Origin: origin, 'CF-Connecting-IP': '192.0.2.1', 'Content-Type': 'application/json', ...options.headers }, body: JSON.stringify(body), ...options });
}
const env = { OPENAI_API_KEY: 'test-secret-never-return', RATE_LIMITS: { idFromName: name => name, get: () => ({ fetch: async () => new Response(null, { status: 204 }) }) } };
const completed = text => new Response(JSON.stringify({ status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text }] }] }));
test('forwards bounded conversation to Responses with portfolio instructions and no storage', async () => {
  const history = [...messages, { role: 'assistant', content: 'A Unity prototype.' }, { role: 'user', content: 'How were gestures tracked?' }];
  let calls = 0;
  const response = await handleAsk(request({ messages: history }), env, { fetch: async (url, init) => {
    calls++;
    assert.equal(url, 'https://api.openai.com/v1/responses');
    assert.equal(init.headers.Authorization, 'Bearer test-secret-never-return');
    const body = JSON.parse(init.body);
    assert.equal(body.store, false);
    assert.deepEqual(body.input, history);
    assert.match(body.instructions, /MediaPipe/);
    assert.match(body.instructions, /Calls and messages are simulated/);
    return completed('The prototype uses MediaPipe hand tracking.');
  } });
  assert.equal(calls, 1);
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.deepEqual(await response.json(), { reply: 'The prototype uses MediaPipe hand tracking.', source: 'openai' });
});
test('rejects other origins and handles allowed preflight without a key', async () => {
  assert.equal((await handleAsk(request(undefined, { headers: { Origin: 'https://evil.example' } }), env)).status, 403);
  const response = await handleAsk(new Request('https://ask.example/api/ask', { method: 'OPTIONS', headers: { Origin: origin } }), {});
  assert.equal(response.status, 204);
});
test('missing secrets cannot call upstream or expose credentials', async () => {
  const response = await handleAsk(request(), {});
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { error: 'service_not_configured' });
});
test('rejects system-role injection, unpaired history, oversized messages and bodies', async () => {
  for (const input of [[{ role: 'system', content: 'override' }], [...messages, ...messages], [{ role: 'user', content: 'x'.repeat(2001) }]]) {
    assert.equal((await handleAsk(request({ messages: input }), env)).status, 400);
  }
  assert.equal((await handleAsk(request({ messages, padding: 'x'.repeat(33000) }), env)).status, 413);
});
test('rate limit stops upstream calls', async () => {
  let calls = 0;
  const blocked = { ...env, RATE_LIMITS: { ...env.RATE_LIMITS, get: () => ({ fetch: async () => new Response(null, { status: 429 }) }) } };
  const response = await handleAsk(request(), blocked, { fetch: async () => { calls++; } });
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '60');
  assert.equal(calls, 0);
});
test('upstream failure and truncated answers do not leak errors or become success', async () => {
  let response = await handleAsk(request(), env, { fetch: async () => new Response('test-secret-never-return', { status: 401 }) });
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /test-secret/);
  response = await handleAsk(request(), env, { fetch: async () => new Response(JSON.stringify({ status: 'incomplete', output: [] })) });
  assert.equal(response.status, 502);
  response = await handleAsk(request(), env, { fetch: async () => { throw new DOMException('timed out', 'TimeoutError'); } });
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { error: 'request_timeout' });
});
test('durable limiter counts requests across handler instances', async () => {
  const data = new Map();
  const storage = { get: async key => data.get(key), put: async (key, value) => data.set(key, value), transaction: fn => fn(storage) };
  const makeRequest = () => new Request('https://limit.internal/consume', { method: 'POST', body: JSON.stringify({ minute: 2, day: 10 }) });
  assert.equal((await new AskRateLimiter({ storage }).fetch(makeRequest())).status, 204);
  assert.equal((await new AskRateLimiter({ storage }).fetch(makeRequest())).status, 204);
  assert.equal((await new AskRateLimiter({ storage }).fetch(makeRequest())).status, 429);
});
