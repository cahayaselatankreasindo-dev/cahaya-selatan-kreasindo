interface Env {
  CSK_GAS_WEB_APP_URL: string;
  CSK_PUBLIC_INTAKE_SECRET: string;
}

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
});
const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

type PagesContext<E> = { request: Request; env: E };

export const onRequestPost = async ({ request, env }: PagesContext<Env>) => {
  if (!env.CSK_GAS_WEB_APP_URL || !env.CSK_PUBLIC_INTAKE_SECRET) {
    return json({ status: "error", message: "Layanan formulir belum dikonfigurasi." }, 503);
  }

  let upstreamUrl: URL;
  try {
    upstreamUrl = new URL(env.CSK_GAS_WEB_APP_URL);
    if (upstreamUrl.protocol !== "https:" || upstreamUrl.hostname !== "script.google.com" ||
        !/^\/macros\/s\/[^/]+\/exec$/.test(upstreamUrl.pathname)) throw new Error("INVALID_UPSTREAM");
  } catch {
    return json({ status: "error", message: "Konfigurasi layanan formulir tidak valid." }, 503);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 32768) return json({ status: "error", message: "Data formulir terlalu besar." }, 413);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > 32768) {
      return json({ status: "error", message: "Data formulir terlalu besar." }, 413);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("INVALID_BODY");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ status: "error", message: "Format permintaan tidak valid." }, 400);
  }

  if (text(body.websiteUrl, 200)) return json({ status: "success", message: "Permintaan diterima." });

  const intakeType = body.intakeType === "project_brief" ? "project_brief" : "quick_contact";
  const rawQuantity = body.quantity;
  const quantity = rawQuantity === "" || rawQuantity == null ? "" : Number(rawQuantity);
  if (quantity !== "" && (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1000000)) {
    return json({ status: "error", message: "Jumlah pekerjaan harus berupa angka bulat yang valid." }, 400);
  }

  const lead = {
    submissionId: text(body.submissionId, 100), intakeType, name: text(body.name, 160),
    phone: text(body.phone, 30), email: text(body.email, 180), projectType: text(body.projectType, 120),
    dimensions: text(body.dimensions, 300), quantity,
    location: text(body.location, 180), deadline: text(body.deadline, 10), notes: text(body.notes, 1500),
    designFiles: Array.isArray(body.designFiles) ? body.designFiles.slice(0, 5) : [],
    designLinks: Array.isArray(body.designLinks) ? body.designLinks.slice(0, 5) : [],
  };
  if (!/^[A-Za-z0-9_-]{16,100}$/.test(lead.submissionId) || lead.name.length < 2 || !lead.phone) {
    return json({ status: "error", message: "Nama, WhatsApp, dan data pengiriman wajib diisi dengan benar." }, 400);
  }
  if (!lead.projectType || (intakeType === "project_brief" &&
      (!lead.dimensions || quantity === "" || !lead.location || !/^\d{4}-\d{2}-\d{2}$/.test(lead.deadline)))) {
    return json({ status: "error", message: "Lengkapi jenis pekerjaan dan seluruh detail proyek yang wajib diisi." }, 400);
  }

  try {
    const upstream = await fetch(upstreamUrl.toString(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action: "public_lead_intake", secret: env.CSK_PUBLIC_INTAKE_SECRET, lead }),
    });
    const result = await upstream.json() as Record<string, unknown>;
    if (!upstream.ok || result.status !== "success") {
      return json({ status: "error", message: "Permintaan belum dapat disimpan. Silakan coba kembali." }, 502);
    }
    return json({ status: "success", id: result.id, duplicate: result.duplicate === true });
  } catch {
    return json({ status: "error", message: "Layanan sedang tidak tersedia. Silakan coba kembali." }, 502);
  }
};
