# ARCHITECTURE.md - Cahaya Selatan Kreasindo

> Arsitektur AKTUAL per 2026-09-13 (scan workspace). Rekomendasi masa depan hanya di bagian bawah.

## Framework

Astro **7.3.1** (`astro.config.mjs`): `site: https://cahayaselatankreasindo.my.id`,
integrasi `@astrojs/sitemap` + `@tailwindcss/vite`. Tanpa adapter SSR ? output statis.

## Astro Version

`astro: ^7.3.1`, `@astrojs/sitemap: ^3.7.4`. Node 22 (`.node-version`).
Halaman `.ts` memakai `import type { APIRoute }` (endpoint, bukan SSR page).

## Rendering Strategy

Static-first penuh. `npm run build` ? `dist/` (di-ignore git + Cloudflare).
Sitemap otomatis (`/sitemap-index.xml`). Lightbox/summary accordion = JS/CSS client minimal,
tanpa framework client.

## Project Structure

```text
src/site.js            konten bisnis tunggal (kontak, hours, areas, products,
                       portfolio[22], portfolioCats, serviceDetails[6])
src/layouts/Base.astro satu-satunya layout (head, SEO, JSON-LD, header, footer)
src/components/        9 komponen (lihat bawah)
src/pages/             11 route statis + 1 dynamic ([slug]) + 2 endpoint + 1 halaman uji
src/data/              assets.js (katalog kategori), getAssets.js (helper fs)
src/img/               23 .webp sumber komponen Picture
src/styles/            global.css (@theme), fonts.css (@font-face)
public/assets/         183 file foto/video, 16 folder
public/fonts/          Inter + Montserrat self-hosted (8+8 woff2)
public/img/logo.webp   logo aktif (CATATAN: berisi byte JFIF - risiko R1)
public/og-image.jpg    kartu share 1200x630
scripts/og-image.mjs   generator og-image manual (sharp)
```

## Pages Architecture

| Route | File | Pola data |
|---|---|---|
| `/` | `index.astro` | `featuredPortfolio` lokal 12 item + `serviceDetails/areas/waLink` |
| `/layanan` | `layanan.astro` | `serviceDetails` + `products` + `portfolio.find` (sampel) |
| `/layanan/:slug` | `layanan/[slug].astro` | `getStaticPaths` dari `serviceDetails` (6 halaman), sampel dari `portfolio` |
| `/portofolio` | `portofolio.astro` | `portfolio` + `portfolioCats` (chip anchor per kategori) |
| `/tentang`, `/area-layanan`, `/kontak`, `/apa-itu-posm` | masing-masing | `site/areas` + Section |
| `/kebijakan-privasi`, `/syarat-ketentuan` | masing-masing | konten hardcode + `site/waLink` |
| `/test-assets` | `test-assets.astro` | halaman uji mentah (ikut build - hapus) |
| `/llms.txt`, `/robots.txt` | `.ts` | render teks dari `site.js` |

## Components Architecture

| Komponen | Dipakai oleh | Peran |
|---|---|---|
| `Base` | semua page | head/meta/OG/JSON-LD, canonical, preload font, slot main |
| `Header` | Base | sticky nav + menu mobile `<details>` + CTA WA |
| `Footer` | Base | kontak, workshop, jam, link legal |
| `Section` | semua page konten | eyebrow/title/lead standar (`as` prop untuk h1) |
| `Breadcrumbs` | semua page (kecuali index) | trail Beranda ? halaman |
| `AssetImage` | index, test-assets | `<img>` polos, path literal `public/assets` |
| `Picture` | layanan, [slug], portofolio | `astro:assets` dari `src/img/`, widths 400/800/1200 |
| `Lightbox` | index (portfolio), [slug], portofolio | `<dialog>` native, keyboard+swipe+touch target 44px |
| `WaIcon` | Header/Footer/CTA | path SVG WhatsApp (duplikat inline juga ada di FAQ index) |
| `ServiceIcon` | - | 0 pemakai (kode mati, kandidat hapus) |

## Layout Architecture

Satu layout (`Base`), tidak ada layout bersarang. Aturan implisit: tiap page
mengirim `title/description(/breadcrumbs)` ke Base; H1 pertama milik halaman
(via `Section as="h1"` atau `<h1>` langsung). Pola ini konsisten di semua page.

## Styling Architecture

Tailwind v4. Token di `global.css` `@theme`:
aktif `csk-black/white/amber/gray` + `--color-ink` + `--font-sans/heading/body`
(Montserrat-first, Inter fallback). Token `--color-brand-*` masih terdefinisi tapi
0 pemakaian di kode. Font via `fonts.css` (@font-face latin+latin-ext), preload
Montserrat 400/600 di `Base`. Tidak ada `tailwind.config.*`, tidak ada CSS module.

## Assets

- `public/assets/`: disajikan apa adanya (tanpa resize/kompres build). Nama file dipakai
  literal - JANGAN rename/move/delete. Hindari `&` di slot visual (rusak saat serialisasi `src`).
- `src/img/*.webp`: dioptimasi build-time oleh `astro:assets` (hanya via `Picture`).
- `public/fonts/`: self-hosted penuh; `public/img/logo.webp`, `public/og-image.jpg`: URL langsung.

## JavaScript Usage

- Build/dev: Node (Astro, Tailwind Vite plugin, sitemap, sharp).
- Runtime: hanya skrip Lightbox (~90 baris) + perilaku native (`<details>`, `<dialog>`).
  `getAssets.js` + `scripts/og-image.mjs` berjalan di Node, bukan di browser.

## Dependencies

`astro`, `@astrojs/sitemap`, `@tailwindcss/vite`, `tailwindcss`, `sharp`. Tanpa framework
client, tanpa CMS, tanpa analytics, tanpa test runner.

## Deployment Configuration

Cloudflare Pages (indikasi: `.wrangler` di `.gitignore`). Output `dist/`.
Remote GitHub. Urutan aman: `npm run build` lokal ? commit ? push `main` ? deploy otomatis.
(Detail dashboard Cloudflare tidak ada di repo.)

## Version Control Workflow

Git + GitHub. Koreksi di sesi ini: commit tanpa `--global`, push hanya bila diminta.
File besar (183 file) ikut git - clone penuh terverifikasi, bukan shallow/sparse.
Folder kerja lokal `cahaya-selatan-kreasindo-work` ? path Codespaces `/workspaces/...`.

## Architecture Rules

1. Konten bisnis hanya di `site.js` (atau `data/` bila disepakati) - jangan hardcode duplikat di page.
2. `featuredPortfolio` (index) vs `portfolio` (site.js) = dua sumber resmi; sinkronkan judul/kategori saat ubah.
3. Slot gambar homepage baru wajib file tanpa `&` dan wajib ada di disk sebelum dipakai.
4. Satu H1 per page; CTA selalu `waLink()` (satu sumber nomor).
5. Kelas warna lama `brand-*`/`ink` tidak boleh masuk kode baru.

## Dependency Rules

- Dilarang tambah dependensi untuk hal yang bisa beberapa baris.
- `sharp` hanya untuk build/generate; jangan impor ke komponen runtime.
- Jangan ubah `package.json`/config build tanpa alasan tercatat di CHANGELOG.

## Rules Before Major Architecture Changes

Redesign total, ganti framework, tambah backend/CMS/form-handler, atau gabungkan dua
jalur gambar ? wajib: (1) baca PROJECT-BRAIN, (2) tulis rencana, (3) minta persetujuan
eksplisit. Default: perubahan terkecil yang koheren.

## Future Recommendations (bukan fakta)

- Kompres 183 file atau pindahkan slot penting ke pipeline `astro:assets`.
- `404.astro` kustom; hapus `test-assets.astro`; putuskan nasib `data/` vs `site.js`.
- Analytics ringan + monitoring build; form inquiry bila WhatsApp saja kurang.
