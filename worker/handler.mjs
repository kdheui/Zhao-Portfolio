import { instructions } from './portfolio-context.mjs';

export async function handleAsk(request, env, dependencies = {}) {
  const origin = request.headers.get('Origin');
  const allowedOrigins = (env.ALLOWED_ORIGINS || 'https://kdheui.github.io').split(',').map(s => s.trim());
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Vary': 'Origin', 'X-Content-Type-Options': 'nosniff' };
  if (origin && allowedOrigins.includes(origin)) headers['Access-Control-Allow-Origin'] = origin;
  const json = (data, status = 200, extra = {}) => new Response(JSON.stringify(data), { status, headers: { ...headers, ...extra } });
  if (!origin || !allowedOrigins.includes(origin)) return json({ error: 'origin_not_allowed' }, 403);
  if (new URL(request.url).pathname !== '/api/ask') return json({ error: 'not_found' }, 404);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { ...headers, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400' } });
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405, { Allow: 'POST, OPTIONS' });
  if (!env.OPENAI_API_KEY || !env.RATE_LIMITS) return json({ error: 'service_not_configured' }, 503);
  if (!(request.headers.get('Content-Type') || '').startsWith('application/json')) return json({ error: 'invalid_content_type' }, 415);
  if (Number(request.headers.get('Content-Length')) > 32768) return json({ error: 'request_too_large' }, 413);
  let payload;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json({ error: 'invalid_request' }, 400);
    let total = 0;
    const parts = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > 32768) { await reader.cancel(); return json({ error: 'request_too_large' }, 413); }
      parts.push(value);
    }
    const bytes = new Uint8Array(total);
    let offset = 0;
    for (const part of parts) { bytes.set(part, offset); offset += part.byteLength; }
    payload = JSON.parse(new TextDecoder().decode(bytes));
  } catch { return json({ error: 'invalid_request' }, 400); }
  const messages = payload?.messages;
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > 11 || messages.length % 2 !== 1) return json({ error: 'invalid_messages' }, 400);
  if (messages.some((m, i) => !m || m.role !== (i % 2 ? 'assistant' : 'user') || typeof m.content !== 'string' || !m.content.trim() || m.content.length > (m.role === 'user' ? 2000 : 6000)) || messages.reduce((sum, m) => sum + m.content.length, 0) > 16000) return json({ error: 'invalid_messages' }, 400);

  try {
    const client = request.headers.get('CF-Connecting-IP');
    if (!client) return json({ error: 'service_unavailable' }, 503);
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(client));
    const clientId = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
    for (const [name, minute, day] of [[clientId, 6, 50], ['site-wide', 30, 500]]) {
      const id = env.RATE_LIMITS.idFromName(name);
      const result = await env.RATE_LIMITS.get(id).fetch('https://limit.internal/consume', { method: 'POST', body: JSON.stringify({ minute, day }) });
      if (result.status === 429) return json({ error: 'rate_limited' }, 429, { 'Retry-After': '60' });
      if (!result.ok) return json({ error: 'service_unavailable' }, 503);
    }
    const upstream = await (dependencies.fetch || fetch)('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + env.OPENAI_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: env.OPENAI_MODEL || 'gpt-4.1-mini', instructions, input: messages.map(m => ({ role: m.role, content: m.content.trim() })), max_output_tokens: 700, store: false }),
      signal: AbortSignal.timeout(25000)
    });
    if (!upstream.ok) return json({ error: 'upstream_unavailable' }, upstream.status === 429 ? 429 : 502);
    const data = await upstream.json();
    const reply = (data.output || []).filter(item => item.type === 'message').flatMap(item => item.content || []).filter(item => item.type === 'output_text').map(item => item.text).join('\n').trim();
    if (!reply || data.status !== 'completed') return json({ error: 'incomplete_response' }, 502);
    return json({ reply, source: 'openai' });
  } catch (error) {
    return json({ error: error.name === 'TimeoutError' || error.name === 'AbortError' ? 'request_timeout' : 'service_unavailable' }, 503);
  }
}
