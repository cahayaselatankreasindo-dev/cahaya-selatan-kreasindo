import { requireAdmin } from '../../../_lib/admin-auth.js';

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
});
const statuses = ['new', 'contacted', 'quoted', 'won', 'lost', 'archived'];
const clean = (value, max = 1000) => String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

export async function onRequestPatch({ request, env, params }) {
  const auth = await requireAdmin(request, env);
  if (!auth.ok) return auth.response;
  if (!env.DB) return json({ ok: false, message: 'Database dashboard belum terhubung.' }, 503);
  const id = String(params.id || '');
  if (!/^[0-9a-f-]{36}$/i.test(id)) return json({ ok: false, message: 'ID permintaan tidak valid.' }, 400);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, message: 'Format data tidak valid.' }, 400); }
  const nextStatus = String(body.status || '');
  if (!statuses.includes(nextStatus)) return json({ ok: false, message: 'Status tidak dikenal.' }, 400);
  const note = clean(body.note, 1000);
  try {
    const current = await env.DB.prepare('SELECT status FROM quote_requests WHERE id = ?').bind(id).first();
    if (!current) return json({ ok: false, message: 'Permintaan tidak ditemukan.' }, 404);
    const update = env.DB.prepare('UPDATE quote_requests SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').bind(nextStatus, id);
    const history = env.DB.prepare(`INSERT INTO quote_status_history (id, quote_id, from_status, to_status, changed_by, note)
      VALUES (?, ?, ?, ?, ?, ?)`).bind(crypto.randomUUID(), id, current.status, nextStatus, auth.email, note || null);
    await env.DB.batch([update, history]);
    return json({ ok: true, id, status: nextStatus });
  } catch (error) {
    console.error('admin status update failed', error);
    return json({ ok: false, message: 'Status belum berhasil diperbarui.' }, 500);
  }
}