# Website ke Business OS: Lead Intake

Status: fondasi implementasi pada branch `feature/website-lead-intake-foundation`. Belum dideploy.

## Kontrak saat ini
- Website Pages Function: `POST /api/leads`.
- Function menerima whitelist field publik dan meneruskan data ke Google Apps Script.
- File desain disimpan di bucket R2 privat melalui `POST /api/design-upload`; Lead hanya menerima referensi file yang sudah diverifikasi keberadaannya dan metadata-nya.
- Unduhan file melalui `POST /api/design-download` memerlukan sesi aktif Business OS dan pemeriksaan bahwa object key benar-benar tercatat pada Lead tersebut.
- Apps Script action `public_lead_intake` terisolasi sebelum autentikasi sesi dan hanya dapat membuat Lead.
- Lead dipaksa dari server: `source=Website`, `status=new`; pengunjung tidak dapat mengatur estimasi nilai, skor, PIC, atau status CRM.
- `submissionId` diperiksa di bawah Script Lock untuk mencegah Lead duplikat.
- Kolom baru ditambahkan di ujung kontrak Lead; urutan kolom lama dipertahankan.

## Konfigurasi Cloudflare Pages
Mulai dari environment Preview, bukan Production.

Buat bucket R2 bernama sesuai standar penyimpanan CSK, misalnya `csk-design-files-preview`. Jangan aktifkan public access atau custom public domain. Tambahkan binding R2 pada Pages project:
- Binding name: `DESIGN_BUCKET`
- Bucket: bucket R2 privat untuk environment Preview.

Buat variable/secret berikut:
- `CSK_GAS_WEB_APP_URL`: URL Google Apps Script Web App yang sudah dideploy.
- `CSK_PUBLIC_INTAKE_SECRET`: secret acak minimal 32 karakter.
- `CSK_BUSINESS_OS_ORIGIN`: origin frontend Business OS, tanpa path. Untuk GitHub Pages saat ini: `https://cahayaselatankreasindo-dev.github.io`.

Jangan masukkan secret ke kode browser, Git, atau variabel build publik. Pisahkan bucket Preview dan Production.

Jangan masukkan kedua nilai ke kode browser, Git, atau variabel build publik.

## Konfigurasi Apps Script
1. Deploy Web App Apps Script sesuai kebijakan deployment CSK yang sudah berjalan.
2. Pada Google Sheets, buka menu `CSK Security → Setup Secret Website Intake`.
3. Masukkan secret yang sama dengan Cloudflare.
4. Secret disimpan di Script Properties, bukan di sel spreadsheet.
5. Uji dengan Lead percobaan sebelum memakai data calon klien.

## Formulir website
- Halaman `/permintaan` menyediakan dua jalur: kontak singkat dan brief proyek lengkap.
- Halaman `/kontak` mengarahkan calon klien ke formulir tersebut.
- Brief dapat menyertakan link desain/referensi HTTPS dan unggahan langsung PDF/JPG/JPEG/PNG.
- Batas unggah: 5 file per submission, maksimal 15 MB per file dan 30 MB total.
- Upload memakai `POST /api/design-upload`; server memeriksa signature file, membuat object key acak, dan menyimpan metadata submission di R2.
- `POST /api/leads` memeriksa ulang setiap object key dengan R2 HEAD serta mencocokkan submission ID, nama file, ukuran, dan MIME type sebelum meneruskan Lead ke Apps Script.
- Unduhan memakai `POST /api/design-download`. Endpoint memeriksa origin GitHub Pages, sesi melalui Apps Script, dan keterkaitan key dengan Lead sebelum mengalirkan file privat.
- Pengiriman Lead memakai honeypot dan validasi server-side.

## Akses dan keamanan file
- Bucket wajib privat; jangan membuat URL publik atau menyimpan file dalam bucket publik.
- Unduhan hanya tersedia bagi pengguna yang memiliki sesi Business OS aktif. Apps Script memeriksa bahwa file key tercatat pada Lead yang diminta.
- Origin unduh dibatasi ke `CSK_BUSINESS_OS_ORIGIN`.
- Validasi signature file dilakukan di Cloudflare; MIME type dari browser tidak dipercaya.
- File yang terunggah tetapi tidak pernah dikirim bersama Lead dapat menjadi orphan object. Proses pembersihan orphan belum dibuat.
- Turnstile, rate limiting, monitoring kuota, dan retensi/penghapusan file perlu diselesaikan sebelum endpoint diaktifkan untuk trafik produksi.
- Konfigurasi R2 binding dan environment variables belum dilakukan; jangan mengaktifkan form upload sebelum bucket serta secrets Preview tersedia.

## Belum termasuk
- Pengujian end-to-end menggunakan bucket R2 dan Apps Script Preview yang nyata.
- Turnstile, rate limiting, pembersihan orphan, dan kebijakan retensi file.
- Konfigurasi domain/origin aktual bila hosting Business OS berubah dari GitHub Pages.

Tidak ada deployment atau penulisan ke spreadsheet live dalam pekerjaan ini.