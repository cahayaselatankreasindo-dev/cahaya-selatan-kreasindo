const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
});

export async function onRequestGet({ env }) {
  if (!env.DB) return json({ ok: false, service: 'csk-quote-api', database: 'not_configured' }, 503);
  try {
    await env.DB.prepare('SELECT 1 AS ready').first();
    return json({
      ok: true,
      service: 'csk-quote-api',
      database: 'connected',
      attachmentStorage: env.QUOTE_ATTACHMENTS ? 'configured' : 'pending_r2_activation'
    });
  } catch (error) {
    console.error('health check failed', error);
    return json({ ok: false, service: 'csk-quote-api', database: 'unavailable' }, 503);
  }
}