# Ask Zhaolin — Cloudflare Worker

GitHub Pages continues to host the portfolio. This Worker is the server-only OpenAI Responses API proxy. No API key belongs in `ask-config.js`, HTML, browser storage or Git.

## Deploy once, from this repository

Use Node.js 22 LTS or a supported current Node.js version with npm installed.

```sh
npx --yes wrangler@4 login
npx --yes wrangler@4 deploy --config worker/wrangler.toml
npx --yes wrangler@4 secret put OPENAI_API_KEY --config worker/wrangler.toml
```

The last command prompts securely for an OpenAI **API** key. A ChatGPT subscription/session is not an API key. Do not paste a key into chat, source files or command arguments. The key needs permission to create Responses and API billing available. Never commit `.dev.vars` or `.env` files.

After deployment, set the returned public Worker URL in `ask-config.js`:

```js
window.PORTFOLIO_ASK = Object.freeze({
  endpoint: 'https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev/api/ask'
});
```

Commit and push that public configuration to update GitHub Pages. Leave it empty until the Worker and secret are configured and a real end-to-end answer succeeds. With an empty endpoint, the website uses explicitly labeled preset preview answers; it does not claim an AI answer.

## Settings and behavior

- `OPENAI_MODEL` defaults to `gpt-4.1-mini`; change `worker/wrangler.toml` and redeploy to select another model available to the API account.
- `ALLOWED_ORIGINS` includes only `https://kdheui.github.io`. For local Worker testing, add `http://localhost:8000` or the actual local origin explicitly. An origin includes scheme and host, not the `/Zhao-Portfolio/` path.
- `RATE_LIMITS` is a SQLite Durable Object binding created by the included migration. It enforces 6 requests/minute and 50/day per hashed client IP, plus 30/minute and 500/day site-wide, in fixed windows. Quotas are request ceilings, not a currency budget; set OpenAI project billing controls separately. CORS is browser policy, not user authentication, and callers can forge Origin; the global quota bounds this public endpoint's exposure.
- Requests accept up to 11 alternating user/assistant messages, 2,000 characters per question and 16,000 total characters. The browser keeps the last 3 successful exchanges in memory, not local storage. Conversations are sent only to the configured Worker, then OpenAI. The Worker sets `store: false` and does not log or persist conversations. OpenAI's API data policies still apply.
- The Worker uses only verified portfolio context in `portfolio-context.mjs`. Update it when published project facts change. Missing contact details, metrics and experience must not be invented.
- Upstream responses have a 25-second deadline and a 700-token output limit. The browser allows 30 seconds, cancels requests when closing the dialog, and supports retry. Failures are shown explicitly; a failed API request does not silently become a preset answer.

## Validation

```sh
node --test worker/handler.test.mjs
npx --yes wrangler@4 deploy --dry-run --config worker/wrangler.toml
```

Automated tests mock the provider and rate-limit binding. They check message validation, upstream payload/context, CORS, missing credentials, durable counters, timeouts and error redaction. They do **not** verify a real OpenAI account, model access or live deployment. After configuring the secret, test a real question from GitHub Pages, a follow-up, and retry behavior before enabling the public endpoint.

Official reference: https://developers.openai.com/api/docs/guides/text
