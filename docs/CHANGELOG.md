## 2026-11-22 - Digital printing & large-format graphics ditambahkan ke katalog

- Menambahkan kategori digital printing dan large-format graphics: stiker/vinyl, banner, poster, backlit film, window graphics, wall wrap, floor decal, panel branding, dan cutting sticker.
- Memperluas halaman Neon Box & Signage dengan kelompok produk cetak skala besar, cakupan pekerjaan, serta FAQ untuk permintaan cetak tanpa pemasangan.
- Detail media, finishing, jumlah, artwork, dan instalasi tetap ditentukan melalui brief proyek.

## 2026-11-22 - Katalog POSM diperluas dan halaman Glorifier ditambahkan

- Memperluas katalog produk dengan product glorifier, illuminated/backlit display, tabletop display, pedestal/plinth, product riser, acrylic showcase, mannequin/product stage, sidekick/clip-strip, dump bin, pallet display, materi rak, retail graphics, dan campaign kits.
- Menambah halaman layanan khusus `/layanan/glorifier-product-display/` dan menampilkannya pada homepage serta hub layanan melalui data `serviceDetails`.
- Memperluas halaman POSM dan panduan `/apa-itu-posm/` dengan fungsi serta contoh format display yang lebih lengkap.
- Galeri halaman Glorifier menggunakan dokumentasi display akrilik, light box, dan floor display yang memang tersedia. Tidak ada foto yang diberi label sebagai proyek glorifier khusus karena belum ada bukti foto glorifier tersebut di portofolio publik.
- Kapabilitas LED, material kombinasi, prototipe, packing per lokasi, distribusi, dan instalasi dinyatakan mengikuti spesifikasi serta persetujuan lingkup proyek.

## 2026-11-22 - Channel 512 project gallery added

- Added all six original Slow Move Bazaar WebP photos to the Booth & Pameran portfolio.
- Kept the main booth photo as the homepage feature; the five supporting photos are available in the full portfolio.
- Added all six photos to the Booth Pameran & Event service-page gallery.
- Preserved the original 1200 × 800 WebP files through the existing `Picture.astro` component path.


## 2026-11-22 - Mobile usability, reduced motion, dan build cleanup

- Header mobile: tombol menu dan tautan navigasi memiliki target sentuh minimal 44 px serta indikator fokus keyboard.
- Navigasi kategori portofolio memiliki target sentuh minimal 44 px dan indikator fokus.
- Tombol WhatsApp melayang mempertahankan jarak minimum dari tepi layar, memperhitungkan safe area perangkat, dan menampilkan indikator fokus keyboard.
- `global.css` menghormati `prefers-reduced-motion` dengan menonaktifkan smooth scrolling untuk pengguna yang memilih pengurangan gerakan.
- Menghapus `scripts/generate-homepage-images.mjs` dan hook `predev`/`prebuild` setelah pencarian repo memastikan manifest dan folder `/_responsive/` yang dihasilkannya tidak dipakai oleh halaman.
- Verifikasi Cloudflare Pages: build dan deploy sukses pada commit `cd2c41ce294cb9e435702a5c653641ed7b987fd1`.
- Crawl produksi: 24 URL sitemap berhasil dibuka tanpa perubahan URL/redirect; 40 tautan internal mengarah ke 24 path yang seluruhnya terdaftar di sitemap.
- Batas verifikasi: simulasi viewport perangkat dan pengukuran Lighthouse/Core Web Vitals belum dijalankan; perbaikan mobile di atas berdasarkan audit kode dan verifikasi deployment.
# CHANGELOG.md - Cahaya Selatan Kreasindo

> Perubahan dicatat setelah diverifikasi melalui git, Cloudflare Pages, dan pemeriksaan URL produksi.

## 2026-11-20 - Navigasi dan URL kanonis

Tautan internal dan breadcrumb menggunakan URL akhir dengan garis miring. Footer menautkan halaman kontak workshop. Build berhasil, dan seluruh 23 URL sitemap dapat dijangkau dari beranda melalui HTML.

## 2026-09-21 - Ganti email kontak ke domain CSK

Files modified:

- `src/site.js` — field `site.email` diubah dari
  `cahayaselatankreasindo@gmail.com` → `halo@cahayaselatankreasindo.my.id`.
  Satu-satunya sumber email; semua pemakaian lain (Footer, Base JSON-LD,
  halaman kontak / syarat-ketentuan / kebijakan-privasi, endpoint
  llms.txt) membaca `site.email` sehingga ikut ter-update otomatis tanpa
  menyentuh file lain.

Verification: `npm run build` 18 pages, 0 error; `dist/index.html` +
`dist/kontak/index.html` memuat `halo@cahayaselatankreasindo.my.id`,
string Gmail tidak muncul lagi.

## 2026-09-21 - Rapikan klaim "6+ tahun" jadi kalimat formal

Files modified:

- `src/site.js` — field `proof.stat` di 6 layanan (`posm-display`,
  `rak-display-gondola`, `booth-pameran`, `neon-box-signage`,
  `visual-merchandising`, `sewa-peralatan-event`) diubah dari
  `'6+ tahun'` → `'Lebih dari 6 tahun'`. Field `proof.text` tidak
  merujuk "6+ tahun" di semua layanan sehingga tidak perlu disentuh.

Verification: `npm run build` 18 pages, 0 error; `dist/layanan/*/index.html`
memuat "Lebih dari 6 tahun" (tidak ada lagi "6+ tahun").

## 2026-09-21 - Tambah schema Service (JSON-LD) di halaman layanan [slug]

Files modified:

- `src/pages/layanan/[slug].astro` — tambah `serviceSchema` di frontmatter
  (sebelah `faqSchema`), tipe `Service`: `name` (s.title), `description`
  (s.description), `provider` referensi ke `LocalBusiness @id`, `areaServed`
  (s.areas), `url` (permalink layanan), `image` (s.assetImage absolut), dan
  `hasOfferCatalog` yang diflat dari `s.items.groups` — tiap item jadi
  `Offer` dengan `itemOffered: Service { name: item, serviceType: group.name }`.
  Schema di-render sebagai `<script application/ld+json>` kedua, setelah
  FAQPage, sebelum `<Lightbox />`. FAQPage tidak disentuh. Tanpa
  `priceRange`/`aggregateRating` (data tidak tersedia di site.js).

Verification: `npm run build` 18 pages, 0 error; `dist/layanan/posm-display/`
memuat 2× `"OfferCatalog"`; tidak ada `priceRange`/`aggregateRating` di
service schema.

## 2026-09-21 - Google Analytics 4 dipasang di Base.astro

Files modified:

- `src/layouts/Base.astro` — tambahan `const GA_ID = 'G-YH56PC1XQZ'` di frontmatter
  + script GA4 sebelum `</head>`: 1 tag external `googletagmanager.com/gtag/js` +
  1 inline (via `set:html`) `gtag('js')` & `gtag('config')`. Dibungkus
  `import.meta.env.PROD && (...)` sehingga script hanya muncul di build produksi
  (deploy Cloudflare), tidak di dev server.

Verification: `npm run build` 18 pages, 0 error; `dist/index.html` berisi
`googletagmanager.com` + `G-YH56PC1XQZ`.

## 2026-09-21 - Tahap 3.2: Optimasi aset public/assets/ (video orphans + kompresi gambar)

Perubahan struktur:

- `public/assets/video-produksi/` (18 file, ~74.9 MB) dipindah ke `_raw-videos/` di root
  proyek. Folder ini berisi video MP4 yang TIDAK dirujuk di `src/` sama sekali — orphans
  staging yang ikut ke deploy. Folder tidak dihapus, hanya dipindah keluar dari `public/`.
- `_raw-videos/` + `_raw-assets-original/` ditambahkan ke `.gitignore` agar tidak ikut
  commit/deploy.

Kompresi:

- 76 file gambar (webp/png/jfif) > 100 KB di `public/assets/` dikompres ulang via
  `sharp` quality 80, output WebP, menimpa file yang sama (nama tidak berubah).
- 8 aset LCP homepage dikecualikan (sudah WebP kecil, optimal): rak-display-bioxine/1ebe3b6d,
  neon-box/neon-box-sakala, booth-exhibition/0452bbb6, display-akrilik-custom/
  {gondola-supermarket-neon-sign-led, akrilik-kosmetik-produk-kecantikan-golden},
  neon-box/neon-box-custom-relis-studio, branding-store/20bd3285, tenda-event/a46ab99c.
- Backup asli (sebelum kompres) disimpan di `_raw-assets-original/` (root, gitignored).
- Target: 76 file (before 24.7 MB → after 22.2 MB, hemat ~2.5 MB pada subset gambar).
- Hasil: `public/assets/` turun dari 104.9 MB → ~30 MB (gambar tersisa + LCP; video pindah).

Verification: `npm run build` sukses, 18 pages, 0 error. `public/assets/video-produksi/`
hilang dari disk; `_raw-videos/` berisi 18 file video.

## 2026-09-21 - Tahap 2: Perbaikan menengah (font Inter, kode mati, 404, token)

Files deleted:

- `public/fonts/inter-400/500/600/700-latin(-ext).woff2` — 8 file Inter. Inter hanya
  muncul di fallback stack font (tidak dipakai langsung oleh UI), jadi aman dihapus.
- `src/data/getAssets.js` — helper fs, 0 pemakai di seluruh `src/`.
- `src/data/assets.js` — katalog `assetCategories`, 0 pemakai (sumber terkenalnya
  `test-assets.astro` sudah dihapus di Tahap 1). Folder `src/data/` ikut dihapus
  karena sudah kosong.
- `src/components/ServiceIcon.astro` — 0 pemakai di seluruh `src/`.

Files created:

- `src/pages/404.astro` — halaman 404 custom dengan layout Base. Heading "404"
  (text-csk-amber, 7xl), teks "Halaman tidak ditemukan" (text-csk-gray), tombol
  "Kembali ke Beranda" (bg-csk-amber / text-csk-black). Konsisten dengan palet CSK.

Files modified:

- `src/styles/fonts.css` — 8 blok `@font-face` Inter dihapus; sekarang hanya
  Montserrat 400/500/600/700 (latin + latin-ext, 8 file).
- `src/styles/global.css` — fallback `"Inter"` dihapus dari `--font-sans`,
  `--font-heading`, `--font-body` (Montserrat-first, sekarang tanpa Inter).

Verification: `npm run build` sukses, 18 pages (+404), 0 error.

## 2026-09-21 - Tahap 1: Quick wins (test page, satukan portfolio, tagline, logo, OG)

Files deleted:

- `src/pages/test-assets.astro` — halaman uji mentah yang ikut ke-build; tidak ada link
  dari navigasi/footer/sitemap, jadi aman dihapus.

Files modified:

- `src/site.js` — `tagline` diupdate ke "Production Partner untuk Brand dan Bisnis"
  (field description tidak disentuh). Flag `featured: true` ditambahkan ke 11 item
  `portfolio`: 4 Rak Display (gondola-potens, rak-toko-potens, floor-evo, counter-nky),
  2 Neon Box & Signage (huruf-timbul-gorisa, signage-zakku), 1 Booth & Pameran
  (mini-counter-beco), 4 Proses Produksi (workshop, finishing, quality-check, standee-potens).
- `src/pages/index.astro` — `featuredPortfolio` lokal 12 item dihapus; sekarang
  `portfolio.filter(p => p.featured)` (11 item). Kategori homepage diubah dari
  "Retail & Merchandising / Signage & Branding / Booth & Custom Build" menjadi
  kategori `site.js` yang sudah ada: Rak Display, Neon Box & Signage, Booth & Pameran,
  Proses Produksi. Gambar portfolio pakai komponen `Picture` (astro:assets, dioptimasi
  build-time) menggantikan `AssetImage` mentah.
- `src/components/Footer.astro` — copyright lama "Event Booth & Exhibition Specialist"
  diganti ke `site.tagline` dinamis (muncul di semua footer via Base.astro).
- `public/img/logo.webp` — di-regenerate dari `public/img/logo-horizontal.svg`
  (SVG asli) dengan sharp: 76 KB JFIF → 7 KB WebP valid (magic `RIFF`+`WEBP`).
- `scripts/og-image.mjs` — generator diupdate ke palet CSK: background `#0B0B0B`,
  strip bawah `#FF8A3D`, teks `#F8F7F4`/`#FF8A3D`, pakai `site.tagline` dinamis,
  logo dari SVG. Output WebP menggantikan JPEG (1200×630, 27 KB).

Verification: `npm run build` sukses, 17 pages (test-assets dihapus), 0 error.

## 2026-09-21 - Enrichment konten halaman layanan (kapabilitas & material)

Files modified:

- `src/pages/layanan/[slug].astro` — section baru "Spesifikasi & Material" di bawah grid
  item, muncul di semua 6 halaman layanan. 3 kartu: Material tersedia (akrilik, plat besi
  & metal cutting, ACP, MDF/HMR, plywood, LED & kelistrikan, large format printing),
  Metode fabrikasi (pemotongan presisi laser/CNC, pengelasan rangka, finishing cat &
  stiker, instalasi LED, sistem knock-down event), Kapasitas & lead time (workshop Serpong,
  Jabodetabek, lead time 7–14 hari kerja, kapasitas 50+ unit/bulan).
- `src/site.js` — meta description 5 layanan diperkaya kata kunci teknis: booth → "vendor
  fabrikasi booth Jakarta"; posm & rak-display → "posm manufacturer"/"display manufacturer
  Jakarta"; signage → "Signage & neon box Jakarta"; visual-merchandising → "fit out
  contractor Jakarta".
- `docs/SEO-STRATEGY.md` — cluster baru "Partner/Vendor" (target EO/agensi/arsitek, bukan
  end client) + tabel mapping 6 slug ke kata kunci vendor.

Verification: `npm run build` sukses, 18 pages, 0 error.

## 2026-09-13 - Documentation system created

Files created:

- `docs/PROJECT-BRAIN.md` (master document: identitas, stack aktual, status, risiko R1-R8)
- `docs/ARCHITECTURE.md` (arsitektur aktual: Astro 7.3.1, Tailwind v4, dua jalur gambar, satu layout)
- `docs/DEVELOPMENT-ROADMAP.md` (fase 1-8 + 5 aksi berikut)
- `docs/SEO-STRATEGY.md` (implementasi saat ini + daftar riset yang belum dilakukan)
- `docs/CHANGELOG.md` (file ini)

Files modified: (tidak ada - dokumentasi saja)

Important findings from the audit (fakta, bukan asumsi):

- Struktur lengkap: 51 file di `src/` (9 komponen, 11 route statis, 1 dynamic `[slug].astro`,
  2 endpoint teks, 1 layout, 23 webp, 2 css, 2 data js); `public/assets` = 183 file / 16 folder.
- Satu-satunya dynamic route: `layanan/[slug].astro` (6 slug, `getStaticPaths`). Tidak ada `[...slug]`.
- Dua jalur gambar resmi: `Picture` (astro:assets?`src/img/`) dan `AssetImage` (mentah?`public/assets/`).
- Dua sumber portfolio resmi: `featuredPortfolio` (index, 12 item) vs `portfolio[]` (site.js, 22 item).
- Helper `getAssets.js` (0 pemakai) dan `ServiceIcon` (0 pemakai) = kode mati; `assetCategories` dipakai test-assets.
- 0 pemakaian `brand-*` di kode UI; 6 pemakaian `ink`; token `--color-brand-*` tinggal definisi.
- `public/img/logo.webp` berisi byte JFIF (risiko favicon/JSON-LD); `test-assets.astro` ikut ke-build.
- Working copy 2 commit di depan `origin/main` (belum di-push saat audit).

## History (ringkas, dari `git log`)

- 2026-09-13: `3d04904` migrasi 8 pages `brand-*` ? `csk-*`; `3d5c1cb` Breadcrumbs ? amber.
- 2026-09-10/11: fondasi brand (Montserrat + token `csk-*`, BRAND_GUIDELINE.md, CLAUDE.md),
  redesign homepage (hero 3-panel, layanan bergambar, portfolio 4 kategori, FAQ, CTA final).
- 2026-09-09: katalog aset `public/assets` (183 file) + `AssetImage` + featured portfolio.
- 2026-09-06: hero/services gallery + konten.
- 2026-09-05: checkpoint sebelum AI agent.
- 2026-09-02: halaman layanan per-keyword + panduan POSM + rename gambar SEO + halaman legal.
