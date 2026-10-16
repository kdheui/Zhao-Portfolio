import { handleAsk } from './handler.mjs';
export default { fetch: (request, env) => handleAsk(request, env) };

// Durable counters persist across Worker isolates and restarts. No chat text is stored.
export class AskRateLimiter {
  constructor(ctx) { this.ctx = ctx; }
  async fetch(request) {
    const { minute, day } = await request.json();
    const now = Date.now(), minuteKey = Math.floor(now / 60000), dayKey = Math.floor(now / 86400000);
    const allowed = await this.ctx.storage.transaction(async storage => {
      const previous = await storage.get('counts') || {};
      const counts = { minuteKey, dayKey, minute: previous.minuteKey === minuteKey ? previous.minute : 0, day: previous.dayKey === dayKey ? previous.day : 0 };
      if (counts.minute >= minute || counts.day >= day) return false;
      counts.minute++; counts.day++;
      await storage.put('counts', counts);
      return true;
    });
    return new Response(null, { status: allowed ? 204 : 429 });
  }
}
