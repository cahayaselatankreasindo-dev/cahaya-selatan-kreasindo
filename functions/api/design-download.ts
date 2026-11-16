interface R2BucketLike {
  get(key: string): Promise<{
    body: ReadableStream;
    size: number;
    httpMetadata?: { contentType?: string };
    customMetadata?: Record<string, string>;
  } | null>;
}
interface Env {
  DESIGN_BUCKET?: R2BucketLike;
  CSK_GAS_WEB_APP_URL: string;
  CSK_BUSINESS_OS_ORIGIN: string;
}
type PagesContext<E> = { request: Request; env: E };

const json = (body: unknown, status: number, headers: Record<string, string> = {}) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
});

function corsHeaders(origin: string): Record<string, string> {
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "600",
    "vary": "Origin",
  };
}

export const onRequestOptions = async ({ request, env }: PagesContext<Env>) => {
  const origin = request.headers.get("origin") || "";
  if (!env.CSK_BUSINESS_OS_ORIGIN || origin !== env.CSK_BUSINESS_OS_ORIGIN) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
};

export const onRequestPost = async ({ request, env }: PagesContext<Env>) => {
  const origin = request.headers.get("origin") || "";
  if (!env.CSK_BUSINESS_OS_ORIGIN || origin !== env.CSK_BUSINESS_OS_ORIGIN) {
    return json({ status: "error", message: "Origin aplikasi tidak diizinkan." }, 403);
  }
  const headers = corsHeaders(origin);
  if (!env.DESIGN_BUCKET || !env.CSK_GAS_WEB_APP_URL) {
    return json({ status: "error", message: "Layanan unduh file belum dikonfigurasi." }, 503, headers);
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("INVALID_BODY");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ status: "error", message: "Permintaan tidak valid." }, 400, headers);
  }

  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
  const leadId = typeof body.leadId === "string" ? body.leadId : "";
  const key = typeof body.key === "string" ? body.key : "";
  if (!/^[A-Za-z0-9_-]{40,100}$/.test(sessionId) ||
      !/^WEB-[A-Z0-9]{10,30}$/.test(leadId) ||
      !/^incoming\/[A-Za-z0-9_-]{16,100}\/[0-9a-f-]{36}\.(pdf|jpg|png)$/i.test(key)) {
    return json({ status: "error", message: "Identitas atau referensi file tidak valid." }, 400, headers);
  }

  let upstreamUrl: URL;
  try {
    upstreamUrl = new URL(env.CSK_GAS_WEB_APP_URL);
    if (upstreamUrl.protocol !== "https:" || upstreamUrl.hostname !== "script.google.com" ||
        !/^\/macros\/s\/[^/]+\/exec$/.test(upstreamUrl.pathname)) throw new Error("INVALID_UPSTREAM");
  } catch {
    return json({ status: "error", message: "Konfigurasi layanan tidak valid." }, 503, headers);
  }

  try {
    const authResponse = await fetch(upstreamUrl.toString(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action: "authorize_design_download", sessionId, leadId, key }),
    });
    const auth = await authResponse.json() as Record<string, unknown>;
    if (!authResponse.ok || auth.status !== "success" || auth.authorized !== true) {
      return json({ status: "error", message: "Akses file ditolak. Periksa sesi dan hak akses Anda." }, 403, headers);
    }
  } catch {
    return json({ status: "error", message: "Validasi akses file gagal. Silakan coba kembali." }, 502, headers);
  }

  const object = await env.DESIGN_BUCKET.get(key);
  if (!object) return json({ status: "error", message: "File tidak ditemukan." }, 404, headers);
  const contentType = object.httpMetadata?.contentType || "application/octet-stream";
  if (!["application/pdf", "image/jpeg", "image/png"].includes(contentType)) {
    return json({ status: "error", message: "Tipe file tidak diizinkan." }, 415, headers);
  }
  const originalName = String(object.customMetadata?.originalName || "referensi").replace(/[\\r\\n"]/g, "_").slice(0, 180);
  const safeAscii = originalName.replace(/[^A-Za-z0-9._-]/g, "_") || "referensi";
  const responseHeaders = new Headers(headers);
  responseHeaders.set("content-type", contentType);
  responseHeaders.set("content-length", String(object.size));
  responseHeaders.set("content-disposition", "attachment; filename=\"" + safeAscii + "\"; filename*=UTF-8''" + encodeURIComponent(originalName));
  responseHeaders.set("cache-control", "private, no-store, max-age=0");
  responseHeaders.set("x-content-type-options", "nosniff");
  return new Response(object.body, { status: 200, headers: responseHeaders });
};
