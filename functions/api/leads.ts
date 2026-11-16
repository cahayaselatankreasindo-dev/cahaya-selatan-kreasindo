interface Env {
  CSK_GAS_WEB_APP_URL: string;
  CSK_PUBLIC_INTAKE_SECRET: string;
}

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
});
const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.CSK_GAS_WEB_APP_URL || !env.CSK_PUBLIC_INTAKE_SECRET) return json({ status: "error", message: "Layanan formulir belum dikonfigurasi." }, 503);
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 32768) return json({ status: "error", message: "Data formulir terlalu besar." }, 413);
  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; }
  catch { return json({ status: "error", message: "Format permintaan tidak valid." }, 400); }
  if (text(body.websiteUrl, 200)) return json({ status: "success", message: "Permintaan diterima." });
  const intakeType = body.intakeType === "project_brief" ? "project_brief" : "quick_contact";
  const lead = {
    submissionId: text(body.submissionId, 100), intakeType, name: text(body.name, 160),
    phone: text(body.phone, 30), email: text(body.email, 180), projectType: text(body.projectType, 120),
    dimensions: text(body.dimensions, 300), quantity: body.quantity === "" || body.quantity == null ? "" : Number(body.quantity),
    location: text(body.location, 180), deadline: text(body.deadline, 10), notes: text(body.notes, 1500),
    designFiles: Array.isArray(body.designFiles) ? body.designFiles.slice(0, 5) : [],
    designLinks: Array.isArray(body.designLinks) ? body.designLinks.slice(0, 5) : [],
  };
  if (!lead.submissionId || lead.name.length < 2 || !lead.phone) return json({ status: "error", message: "Nama, WhatsApp, dan ID pengiriman wajib diisi." }, 400);
  try {
    const upstream = await fetch(env.CSK_GAS_WEB_APP_URL, { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ action: "public_lead_intake", secret: env.CSK_PUBLIC_INTAKE_SECRET, lead }) });
    const result = await upstream.json() as Record<string, unknown>;
    if (!upstream.ok || result.status !== "success") return json({ status: "error", message: "Permintaan belum dapat disimpan. Silakan coba kembali." }, 502);
    return json({ status: "success", id: result.id, duplicate: result.duplicate === true });
  } catch { return json({ status: "error", message: "Layanan sedang tidak tersedia. Silakan coba kembali." }, 502); }
};
