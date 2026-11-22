# DEVELOPMENT-ROADMAP.md - Cahaya Selatan Kreasindo

> Status per 2026-11-22, berdasarkan inspeksi repo, deployment Cloudflare Pages, dan crawl URL produksi.

## PHASE 1 - FOUNDATION [COMPLETED]

- [COMPLETED] Repo Astro 7 + Tailwind v4 + sitemap (package.json, astro.config.mjs)
- [COMPLETED] Node 22 pin, gitignore (node_modules/dist/.astro/.wrangler)
- [COMPLETED] Satu layout Base + SEO head + JSON-LD dasar
- [COMPLETED] Konten terpusat `src/site.js`
- [COMPLETED] Font self-hosted + preload

## PHASE 2 - CORE WEBSITE [COMPLETED]

- [COMPLETED] Homepage: hero 3-panel, layanan 6 kartu bergambar, portfolio 4 kategori (12 item), FAQ 6, CTA final
- [COMPLETED] Header sticky + menu mobile; target sentuh 44 px, Footer kontak/workshop/legal
- [COMPLETED] Lightbox native di 3 permukaan galeri
- [COMPLETED] Palet `csk-*` + Montserrat-first di seluruh UI (grep 0 `brand-` di luar definisi token)

## PHASE 3 - SERVICE PAGES [COMPLETED]

- [COMPLETED] `/layanan` hub: kartu + daftar produk + CTA
- [COMPLETED] `/layanan/:slug` -6 via `getStaticPaths`: intro, scope, grup item, galeri sampel, FAQ+schema, layanan lain
- [COMPLETED] `/apa-itu-posm` edukasi + FAQ + CTA

## PHASE 4 - PORTFOLIO [COMPLETED dengan catatan]

- [COMPLETED] Homepage 12 item / 4 kategori + lightbox
- [COMPLETED] Halaman `/portofolio`: chip anchor + grup per kategori + lightbox
- [IN PROGRESS] Sinkronisasi dua sumber (`featuredPortfolio` vs `portfolio[]`) - judul/kategori bisa divergen

## PHASE 5 - LEAD GENERATION [COMPLETED minimal]

- [COMPLETED] CTA WhatsApp berkonteks (`waLink(msg)` per halaman/layanan/FAQ)
- [NOT STARTED] Form inquiry / tracking konversi (tidak ada backend - butuh keputusan)

## PHASE 6 - SEO [IN PROGRESS]

- [COMPLETED] Title/description/canonical/OG/Twitter per halaman, sitemap, robots, llms.txt, LocalBusiness+Breadcrumb+FAQ schema
- [COMPLETED] Crawl 24 URL sitemap dan 40 tautan internal: seluruh 24 path internal terdaftar di sitemap, tanpa redirect mismatch pada URL yang diuji
- [IN PROGRESS] Tagline/JSON-LD/footer masih perlu audit konsistensi copy
- [NOT STARTED] Keyword research formal dan audit Rich Results

## PHASE 7 - PERFORMANCE [IN PROGRESS]

- [COMPLETED] Gambar utama dan galeri berbasis `Picture.astro` menggunakan `astro:assets` dengan varian responsif 400/800/1200 px; gambar hero memakai eager loading + fetch priority tinggi, gambar bawah lipatan lazy-loaded
- [COMPLETED] Menghapus generator gambar responsif yang tidak memiliki consumer dan hook build/dev terkait
- [IN PROGRESS] Audit visual mobile dan pengukuran Lighthouse/Core Web Vitals; belum ada hasil lab/field metric yang tervalidasi

## PHASE 8 - ANALYTICS [IN PROGRESS]

- [COMPLETED] GA4 dipasang di `Base.astro`; event klik WhatsApp dan klik layanan dari artikel sudah memiliki handler
- [IN PROGRESS] Validasi event di GA4 DebugView dan pemeriksaan duplikasi konversi
- [NOT STARTED] Monitoring error frontend

## CURRENT PRIORITY

Lanjutkan uji visual pada viewport 360 px dan 390 px serta ukur Core Web Vitals; setelah itu validasi event WhatsApp di GA4 DebugView dan sinkronisasi sumber data homepage/portofolio.

## NEXT 5 RECOMMENDED ACTIONS

1. Uji visual viewport 360 px dan 390 px pada perangkat/browser nyata; catat overflow, overlap, dan target sentuh.
2. Jalankan Lighthouse/PageSpeed untuk mobile dan desktop; simpan skor LCP, INP, CLS, dan temuan aksesibilitas.
3. Validasi event `klik_whatsapp` dan `klik_layanan` di GA4 DebugView.
4. Sinkronkan sumber data `featuredPortfolio` dan `portfolio[]` agar homepage serta halaman portofolio konsisten.
5. Audit sisa kode/aset yang benar-benar tidak digunakan sebelum menghapusnya.
