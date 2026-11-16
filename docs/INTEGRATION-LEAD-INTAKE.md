# Website ke Business OS: Lead Intake

Status: fondasi implementasi pada branch `feature/website-lead-intake-foundation`. Belum dideploy.

## Kontrak saat ini
- Website Pages Function: `POST /api/leads`.
- Function menerima whitelist field publik dan meneruskan data ke Google Apps Script.
- Apps Script action `public_lead_intake` terisolasi sebelum autentikasi sesi dan hanya dapat membuat Lead.
- Lead dipaksa dari server: `source=Website`, `status=new`; pengunjung tidak dapat mengatur estimasi nilai, skor, PIC, atau status CRM.
- `submissionId` diperiksa di bawah Script Lock untuk mencegah Lead duplikat.
- Kolom baru ditambahkan di ujung kontrak Lead; urutan kolom lama dipertahankan.

## Konfigurasi Cloudflare Pages
Buat variable/secret berikut pada environment Preview terlebih dahulu:
- `CSK_GAS_WEB_APP_URL`: URL Google Apps Script Web App yang sudah dideploy.
- `CSK_PUBLIC_INTAKE_SECRET`: secret acak minimal 32 karakter.

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
- Brief dapat menyertakan satu link desain/referensi HTTPS. File upload langsung belum tersedia.
- Pengiriman memakai `POST /api/leads`; honeypot sederhana dan validasi server-side aktif.

## Upload desain
Kontrak Lead telah menyediakan `designFiles` dan `designLinks`. Upload file belum diaktifkan pada commit fondasi ini. Sebelum diaktifkan, siapkan bucket R2 privat, validasi signature file dan ukuran di edge, serta endpoint unduh khusus staf yang terautentikasi. Jangan membuat bucket publik.

## Belum termasuk
- Endpoint upload R2 dan unduh privat.
- Tampilan detail brief pada CRM.
- Turnstile dan rate limiting produksi.
- Build Astro/Cloudflare Pages dan uji end-to-end pada environment Preview.

Tidak ada deployment atau penulisan ke spreadsheet live dalam pekerjaan ini.