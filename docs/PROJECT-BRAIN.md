# PROJECT-BRAIN.md - Cahaya Selatan Kreasindo (CSK)

> Master document. Sumber kebenaran untuk AI agent dan developer.
> Aturan baca: bagian **CONFIRMED** = fakta dari repo. Bagian **RECOMMENDED** = usulan, bukan keputusan.

## Project Identity (CONFIRMED)

- **Nama:** Cahaya Selatan Kreasindo (CSK)
- **Jenis:** Perusahaan B2B advertising production dan visual merchandising.
- **Tagline di kode (`src/site.js`):** `Jasa Pembuatan Stand Event & Booth Pameran Premium`
- **Catatan konflik:** tagline kode menyempit ke booth/event, sementara H1 homepage sudah luas
  (`Production Partner untuk Brand dan Bisnis.`). Update tagline = pekerjaan tertunda, bukan keputusan.
- **Kontak:** WhatsApp `0888-8533-488`, email `cahayaselatankreasindo@gmail.com`,
  workshop Jl. Doel Silem No. 45, Rawa Mekar Jaya, Serpong, Tangerang Selatan.
- **Repo:** Astro + Tailwind, deploy Cloudflare Pages, remote GitHub.

## Business Purpose (CONFIRMED dari konten situs)

Menjadi production partner yang mengerjakan kebutuhan visual/fisik brand dari
desain sampai pemasangan. Alur homepage: Attention ? Understand ? Explore ? Proof ? Contact.
Corak layanan di `src/site.js` ? `serviceDetails` (6 entri) dan `products` (6 grup).

## Target Audience (CONFIRMED dari copy situs)

Brand teams, marketing/trade-marketing, event teams, procurement, retail teams,
agencies, exhibition practitioners di Jabodetabek. Bahasa situs: Indonesia informal-profesional.

## Business Services (CONFIRMED - `serviceDetails`, 6 slug)

| Slug | Judul | Field gambar homepage |
|---|---|---|
| `posm-display` | Jasa Pembuatan POSM & Display Promosi | `assetImage` |
| `rak-display-gondola` | Rak Display Custom & Gondola Supermarket | `assetImage` |
| `booth-pameran` | Jasa Pembuatan Booth Pameran & Stand Event | `assetImage` |
| `neon-box-signage` | Jasa Pembuatan Neon Box, Huruf Timbul & Papan Nama | `assetImage` |
| `visual-merchandising` | Visual Merchandising & In-Store Branding | `assetImage` |
| `sewa-peralatan-event` | Sewa Stand Booth, Tenda, Meja & Kursi Event | `assetImage` |

Setiap entri punya: `nav`, `title`, `metaTitle`, `description`, `lead`, `intro[]`,
`items.groups[]`, `faq[]`, `cat`, `waMsg`, `images[]` (slug lama `src/img`), `assetImage`
(path baru `public/assets`). `cat` = label kategori kartu homepage.

## Website Objectives (CONFIRMED dari struktur)

1. Brand positioning (H1 + 3-panel hero arah bisnis).
2. B2B marketing (6 kartu layanan + halaman detail per layanan).
3. Lead generation (CTA WhatsApp berkonteks per halaman; tanpa form).
4. Sales support (produk per grup, FAQ per layanan + FAQ homepage).
5. Portfolio & capability proof (grid 4 kategori + halaman `/portofolio` + strip proses produksi).

## Actual Technology Stack (CONFIRMED - `package.json`, `.node-version`)

| Lapisan | Fakta |
|---|---|
| Framework | Astro **7.3.1** |
| Rendering | Static (`astro build` ? `dist/`), sitemap via `@astrojs/sitemap` 3.7.4 |
| Styling | Tailwind CSS **v4** (`@tailwindcss/vite` 4.3.3), token di `src/styles/global.css` `@theme` |
| Gambar build-time | `astro:assets` + `sharp` 0.35.4 (komponen `Picture`) |
| Font | Inter + Montserrat self-hosted (`public/fonts/`, 8+8 woff2), preload Montserrat 400/600 |
| Node | 22 (`.node-version`) |
| Deploy | Cloudflare Pages (`.gitignore` memuat `.wrangler`) |
| Script | `npm run dev|build|preview` saja. `scripts/og-image.mjs` = generator `og-image.jpg` manual |

Yang TIDAK ada: CMS, database, API backend, form handler, analytics, test runner, CI config.

## Actual Project Structure (CONFIRMED - scan 2026-09-13)

```text
src/
  site.js                  # SEMUA konten bisnis (kontak, layanan, produk, portfolio lama)
  components/              # 9 file: AssetImage, Picture, Lightbox, Section, Header,
                           # Footer, Breadcrumbs, ServiceIcon, WaIcon
  layouts/Base.astro       # satu-satunya layout
  pages/
    index.astro            # homepage (hero 3-panel, layanan, portfolio 4-kat, FAQ, CTA)
    tentang|layanan|portofolio|area-layanan|kontak|apa-itu-posm.astro
    kebijakan-privasi|syarat-ketentuan.astro
    layanan/[slug].astro   # SATU-SATUNYA dynamic route (getStaticPaths, 6 slug)
    llms.txt.ts, robots.txt.ts, test-assets.astro
  data/                    # assets.js (katalog dipakai test-assets), getAssets.js (helper, 0 pemakai)
  img/                     # 23 webp (sumber komponen Picture)
  styles/                  # global.css, fonts.css
public/
  assets/                  # 183 file, 16 folder (sumber komponen AssetImage)
  fonts/                   # 16 woff2 (Inter + Montserrat)
  img/logo.webp            # logo dipakai header/favicon/JSON-LD (lihat risiko R1)
  og-image.jpg             # kartu share 1200x630
```

Route aktual: `/`, `/tentang`, `/layanan`, `/layanan/:slug` (-6), `/portofolio`,
`/area-layanan`, `/kontak`, `/apa-itu-posm`, `/kebijakan-privasi`, `/syarat-ketentuan`,
`/test-assets` (halaman uji ikut ke-build!), `/llms.txt`, `/robots.txt`, `/sitemap-index.xml`.
Tidak ada `404.astro` kustom, tidak ada `[...slug].astro`.

## Existing Features (CONFIRMED - ada di kode)

- Homepage: hero 3-panel dengan foto asli, 6 kartu layanan bergambar, portfolio 12 item
  dalam 4 kategori, FAQ 6 `<details>` (CTA WhatsApp hanya di item estimasi waktu), CTA final.
- Halaman layanan per slug: intro, CTA penawaran, ruang lingkup, grup item + FAQ + galeri
  sampel + link layanan lain + schema FAQPage.
- Halaman `/portofolio`: filter chip per kategori + galeri per kategori + Lightbox global.
- Lightbox `<dialog>` native: keyboard, swipe, tombol 44px, caption dari `<figcaption>`.
- SEO: title/description per halaman, canonical, OG/Twitter 1200x630, LocalBusiness JSON-LD
  (jam, alamat, area), BreadcrumbList, sitemap, robots, `llms.txt`.
- Aksesibilitas dasar: `lang="id"`, alt deskriptif, aria-label galeri/dialog, antialiased.

## Current Development Status (CONFIRMED - git log + grep, 2026-09-13)

- Migrasi warna `brand-*` ? `csk-*`: selesai di SEMUA file UI (commit `3d04904` +
  `3d5c1cb`). Terakhir lolos grep: 0 match `brand-` di seluruh `src/**/*.astro|css`
  kecuali definisi token di `global.css` (masih ada, belum dihapus).
- `ink` (#0f1720) masih dipakai: `Base.astro` body, 3 tombol Lightbox, `kontak.astro`.
- Belum di-push: working copy 2 commit di depan `origin/main` (cek `git status` saat kerja).

## Architecture Decisions (CONFIRMED)

1. **Dua jalur gambar, by design bukan kecelakaan.**
   `Picture` (astro:assets, dari `src/img/`) untuk galeri halaman layanan/portfolio lama.
   `AssetImage` (`<img>` polos + path `public/assets/`) untuk homepage baru.
2. **Dua sumber portfolio.** `portfolio[]`+`portfolioCats` (site.js) menggerakkan halaman
   `/portofolio`, sampel `[slug]`, dan `llms.txt`. `featuredPortfolio` (hardcode di
   `index.astro`, 12 item) menggerakkan homepage. Keduanya hidup berdampingan.
3. **Konten di `site.js`, presentasi di `.astro`.** Halaman me-map array, bukan hardcode copy.
4. **CTA = WhatsApp/mailto saja.** Tanpa form, tanpa backend.
5. Token lama tidak dihapus sampai semua pemakai migrasi (urutan: migrasi dulu, hapus terakhir).

## Development Principles

- Inspeksi dulu sebelum mengubah; perubahan terkecil yang koheren.
- Jangan rename/move/delete asset di `public/assets` (path dipakai literal di kode).
- Jangan tambah dependensi untuk hal yang bisa beberapa baris.
- `npm run build` adalah gerbang selesai; klaim sukses wajib berbasis output build.
- Jangan commit/push kecuali diminta eksplisit.

## AI Agent Rules

1. Baca file ini + `ARCHITECTURE.md` + `CHANGELOG.md` sebelum kerja besar.
2. Baca kode relevan sebelum menyentuh; jangan berasumsi file tidak ada karena depth listing.
   (`layanan/[slug].astro` pernah lolos dari scan dangkal karena karakter `[ ]`.)
3. Jangan pakai `filesystem_*` - path repo di luar allowlist-nya; pakai `read`/`bash`.
4. Pisahkan FAKTA vs REKOMENDASI di setiap laporan.
5. Jangan klaim selesai tanpa bukti build/tes.

## Major Decisions That Must Not Be Changed Without Review

- Palet `csk-*` + Montserrat-first (brand guideline). Token `brand-*` tinggal definisi mati.
- `public/img/logo.webp` = logo aktif header/favicon/JSON-LD (walau isinya perlu verifikasi - R1).
- Struktur homepage: hero 3-panel ? layanan 6 ? portfolio 4 kategori ? FAQ 6 ? CTA final.
- FAQ homepage: CTA WhatsApp HANYA di item estimasi waktu.
- Filenames dengan `&` (mis. `Neon Box J&T CARGO.jpeg`) rusak saat lewat serialisasi `src`
  Astro ? pakai asset bebas-`&` untuk slot visual (kasus Panel 2 hero).

## Known Technical Risks

- **R1 - logo.webp berisi byte JFIF** (disalin dari `.jfif`, ekstensi tetap `.webp`).
  Dipakai header, favicon, dan JSON-LD `logo`. Perlu verifikasi render + ganti file yang benar.
- **R2 - dua sumber portfolio** bisa divergen (judul/kategori beda antara homepage dan `/portofolio`).
- **R3 - `test-assets.astro` ikut ke-build ke produksi** (`/test-assets`, tanpa layout/SEO).
- **R4 - kode mati:** `ServiceIcon` (0 pemakai), getAssets.js (helper, 0 pemakai); `assetCategories` (katalog dipakai test-assets),
  `src/img/logo.webp` (tak dirujuk), token `brand-*` + `ink` (menunggu hapus/konsolidasi).
- **R5 — 183 file `public/assets` disajikan mentah** (147 .jpg + 17 .mp4 + 14 .jpeg + 3 .jfif + 1 .png + 1 tanpa ekstensi; tanpa optimasi build) — risiko LCP/mobile.
- **R6 - `og-image.jpg` + generatornya masih palet biru lama.**
- **R7 - tagline/JSON-LD/footer ("Event Booth & Exhibition Specialist") masih sempit** vs H1 luas.
- **R8 - navbar/footer masih terang** (gelap menunggu varian logo On Dark).

## Current Priorities (CONFIRMED)

1. Amankan working tree (2 commit belum di-push) - keputusan user.
2. Selesaikan migrasi token: hapus `brand-*` + konsolidasikan `ink` ? `csk-black`.
3. Perbaiki R1 (logo/favicon), buang R4 (test page + kode mati).

## Next Recommended Development Steps (RECOMMENDED)

1. Verifikasi `npm run build` pasca-migrasi + cek visual tiap viewport.
2. Hapus definisi `brand-*`, migrasikan 6 pemakaian `ink` ? `csk-black`, build ulang.
3. Hapus `test-assets.astro`, `ServiceIcon.astro`, `src/img/logo.webp`; putuskan nasib `data/`.
4. Ganti `logo.webp` dengan file benar + regenerasi `og-image.jpg` palet baru.
5. Update tagline `site.js` + footer copyright (butuh keputusan copy).

## Source of Truth Hierarchy

1. File aktual di workspace ? 2. `BRAND_GUIDELINE.md` (visual) ? 3. `CLAUDE.md`
   (instruksi agen) ? 4. docs ini ? 5. riwayat chat (kedaluwarsa duluan).
   Jika bertentangan: kode yang jalan menang; dokumen diperbarui.
