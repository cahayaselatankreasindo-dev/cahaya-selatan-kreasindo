interface R2BucketLike {
  list(options: { prefix: string; limit: number }): Promise<{ objects: Array<{ key: string; size: number }> }>;
  put(key: string, value: ArrayBuffer, options: {
    httpMetadata: { contentType: string; cacheControl: string };
    customMetadata: Record<string, string>;
  }): Promise<unknown>;
}
interface Env { DESIGN_BUCKET?: R2BucketLike }
type PagesContext<E> = { request: Request; env: E };

const MAX_FILE = 15 * 1024 * 1024;
const MAX_TOTAL = 30 * 1024 * 1024;
const MAX_FILES = 5;
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
});

function detectFile(bytes: Uint8Array): { ext: string; contentType: string } | null {
  if (bytes.length >= 5 && String.fromCharCode(...bytes.slice(0, 5)) === "%PDF-") {
    return { ext: "pdf", contentType: "application/pdf" };
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { ext: "jpg", contentType: "image/jpeg" };
  }
  if (bytes.length >= 8 && [137,80,78,71,13,10,26,10].every((v, i) => bytes[i] === v)) {
    return { ext: "png", contentType: "image/png" };
  }
  return null;
}

export const onRequestPost = async ({ request, env }: PagesContext<Env>) => {
  if (!env.DESIGN_BUCKET) return json({ status: "error", message: "Upload desain belum dikonfigurasi." }, 503);
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_FILE + 64 * 1024) return json({ status: "error", message: "Ukuran file melebihi 15 MB." }, 413);

  let form: FormData;
  try { form = await request.formData(); }
  catch { return json({ status: "error", message: "Format unggahan tidak valid." }, 400); }

  const submissionId = String(form.get("submissionId") || "").trim();
  const file = form.get("file");
  if (String(form.get("websiteUrl") || "").trim()) {
    return json({ status: "success", file: { key: "", name: "ignored", contentType: "application/octet-stream", size: 0 } });
  }
  if (!/^[A-Za-z0-9_-]{16,100}$/.test(submissionId) || !(file instanceof File)) {
    return json({ status: "error", message: "Data unggahan tidak lengkap." }, 400);
  }
  if (file.size < 1 || file.size > MAX_FILE) return json({ status: "error", message: "Ukuran setiap file maksimal 15 MB." }, 413);

  const prefix = "incoming/" + submissionId + "/";
  const existing = await env.DESIGN_BUCKET.list({ prefix, limit: MAX_FILES + 1 });
  const total = existing.objects.reduce((sum, item) => sum + item.size, 0);
  if (existing.objects.length >= MAX_FILES || total + file.size > MAX_TOTAL) {
    return json({ status: "error", message: "Maksimal 5 file dengan total ukuran 30 MB per permintaan." }, 413);
  }

  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const detected = detectFile(bytes);
  if (!detected) return json({ status: "error", message: "Format file harus PDF, JPG, JPEG, atau PNG." }, 415);

  const originalName = file.name.replace(/[\\/\\u0000-\\u001f]/g, "_").slice(0, 180) || "referensi." + detected.ext;
  const key = prefix + crypto.randomUUID() + "." + detected.ext;
  try {
    await env.DESIGN_BUCKET.put(key, buffer, {
      httpMetadata: { contentType: detected.contentType, cacheControl: "private, no-store" },
      customMetadata: { submissionId, originalName, uploadedAt: new Date().toISOString() },
    });
  } catch {
    return json({ status: "error", message: "File gagal disimpan. Silakan coba kembali." }, 502);
  }

  return json({
    status: "success",
    file: { key, name: originalName, contentType: detected.contentType, size: file.size },
  });
};
