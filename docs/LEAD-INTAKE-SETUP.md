# CSK Website Lead Intake — Deployment & Verification

Dokumen ini menjelaskan aktivasi form inquiry website ke Leads CRM pada Advertising Business OS. Kode dapat diuji di GitHub, tetapi form **belum siap menerima pelanggan** sampai konfigurasi Cloudflare dan Apps Script di bawah selesai.

## 1. Arsitektur

```text
Visitor
  │
  ▼
/permintaan-penawaran/
  │  FormData + Turnstile token + optional attachments
  ▼
Cloudflare Pages Function: POST /api/lead-intake
  ├─ same-origin check
  ├─ Cloudflare Turnstile verification
  ├─ field validation and upload signature checks
  ├─ optional private R2 upload
  └─ server-side secret only
       │
       ▼
Google Apps Script: public_lead_intake
  ├─ create-only endpoint
  ├─ forces source=Website and status=new
  ├─ submission ID deduplication
  └─ appends Lead to existing Google Sheets database
       │
       ▼
Advertising Business OS → Leads CRM
```

Lampiran disimpan di bucket R2 privat. CRM hanya dapat mengunduhnya setelah Apps Script memverifikasi sesi login dan memastikan object key tersebut benar-benar terhubung ke Lead yang diminta.

Persetujuan privasi wajib diperiksa kembali di server. Apps Script mencatat waktu persetujuan dari server dan versi kebijakan (`2026-11-18`) bersama Lead agar tersedia jejak audit.

## 2. Konfigurasi Cloudflare Pages

Set konfigurasi berikut pada **Production** dan **Preview** secara terpisah. Preview sebaiknya menggunakan Apps Script deployment dan Google Sheet staging, bukan database pelanggan aktif.

### Environment variables

| Variable | Type | Isi |
|---|---|---|
| `CSK_APPS_SCRIPT_URL` | Secret / variable | URL Web App Apps Script yang berakhiran `/exec` |
| `CSK_PUBLIC_INTAKE_SECRET` | Secret | Secret acak yang sama dengan Script Property Apps Script |
| `CSK_TURNSTILE_SECRET_KEY` | Secret | Secret key dari Cloudflare Turnstile |
| `PUBLIC_TURNSTILE_SITE_KEY` | Public build variable | Site key Turnstile; boleh terlihat di HTML |
| `CSK_CRM_ALLOWED_ORIGINS` | Plain text | Origin aplikasi CRM, tanpa path |

Contoh origin CRM jika masih menggunakan GitHub Pages:

```text
https://cahayaselatankreasindo-dev.github.io
```

Jika aplikasi CRM juga tersedia dari domain lain, tambahkan origin persisnya dipisahkan koma. Jangan memakai wildcard.

### R2 binding (lampiran opsional)

1. Buat bucket R2 khusus, misalnya `csk-lead-design-private`.
2. Jangan aktifkan public bucket access atau custom public domain.
3. Di Cloudflare Pages → Settings → Functions → R2 bucket bindings, bind bucket dengan nama:
   `CSK_DESIGN_FILES`.
4. Lakukan konfigurasi pada Production dan Preview sesuai bucket masing-masing.

Form teks dapat bekerja tanpa R2. Jika R2 belum dikonfigurasi, pengiriman dengan lampiran akan ditolak secara eksplisit; pengunjung masih dapat mengirim inquiry tanpa lampiran.

### Turnstile

1. Buat widget Turnstile untuk domain produksi `cahayaselatankreasindo.my.id`.
2. Tambahkan hostname preview yang akan digunakan untuk pengujian.
3. Set site key ke `PUBLIC_TURNSTILE_SITE_KEY` sebagai build environment variable.
4. Set secret key ke `CSK_TURNSTILE_SECRET_KEY` sebagai secret.
5. Pastikan action widget adalah `csk_lead_intake` (sudah diatur di komponen form).

### Rate limiting

Tambahkan Cloudflare WAF/rate-limiting rule untuk `POST /api/lead-intake`, berbasis IP, agar endpoint publik tidak dapat dibanjiri. Turnstile dan honeypot sudah menjadi lapisan tambahan, bukan pengganti rate limiting.

## 3. Konfigurasi Google Apps Script

1. Buat spreadsheet Google Sheets staging baru yang kosong. Jangan menyalin baris data pelanggan produksi ke staging. Buat Apps Script terpisah yang terikat ke spreadsheet staging tersebut.
2. Buka Extensions → Apps Script pada spreadsheet staging.
3. Ambil `apps-script/Code.gs` dari branch `feature/website-lead-intake-foundation` pada [PR #25](https://github.com/cahayaselatankreasindo-dev/advertising-business-os/pull/25), lalu gunakan kode tersebut untuk backend staging. Jangan mengambil versi `main` sebelum PR #25 digabungkan.
4. Jalankan fungsi `setupSheet` satu kali dari editor Apps Script staging. Fungsi ini membuat tab CRM dan menambahkan header kontrak; periksa hasilnya sebelum melanjutkan.
5. Dari menu spreadsheet **CSK Security → Setup PIN Owner & Tim**, buat kredensial PIN khusus staging. Jangan gunakan PIN produksi untuk pengujian.
6. Simpan dan deploy sebagai Web App staging: **Execute as: akun pemilik spreadsheet (Me)** dan **Who has access: Anyone**. Endpoint publik tetap dilindungi secret intake; aksi CRM lainnya tetap memerlukan sesi login. Pastikan URL berakhiran `/exec` dan gunakan URL ini hanya pada environment Preview.
7. Pada spreadsheet staging, buka menu **CSK Security → Setup Secret Website Intake**.
8. Buat secret acak minimal 32 karakter (disarankan 48 karakter atau lebih). Anda dapat membuatnya secara lokal, misalnya dengan `openssl rand -hex 32`; jangan tempelkan secret ke chat atau repository.
9. Masukkan secret tersebut ke Cloudflare environment Preview sebagai `CSK_PUBLIC_INTAKE_SECRET`. Simpan secret berbeda untuk Production.

Secret tidak boleh dimasukkan ke `src/`, `public/`, HTML, JavaScript browser, GitHub Actions log, atau chat. Secret hanya berada di Apps Script Script Properties dan Cloudflare Pages secret.

Backend menambahkan kolom Lead baru di ujung tabel, tanpa menggeser kolom lama. Kolom tersebut mencakup UTM, landing page, referrer host, click ID iklan, serta bukti persetujuan privasi (`PrivacyConsent`, `PrivacyConsentAt`, `PrivacyPolicyVersion`). Semua kolom ditambahkan di ujung kontrak agar posisi kolom lama tidak bergeser. Backup spreadsheet sebelum pembaruan skema tetap disarankan.

## 4. Private design downloads di CRM

Untuk file desain:

- R2 harus tetap privat.
- Business OS harus berjalan pada origin yang terdaftar di `CSK_CRM_ALLOWED_ORIGINS`.
- Apps Script backend harus sudah memiliki action `authorize_design_download`.
- CRM mengirim session ID aktif, Lead ID, dan object key ke `POST /api/design-download`.
- Cloudflare baru membaca R2 setelah Apps Script mengembalikan `authorized: true`.
- Pada layar login CRM tersedia kolom **Endpoint unduhan lampiran (opsional)**. Nilai default tetap endpoint produksi `https://cahayaselatankreasindo.my.id/api/design-download`.
- Untuk uji staging, isi endpoint Preview, misalnya `https://feature-website-inquiry-crm.cahaya-selatan-kreasindo.pages.dev/api/design-download`, lalu tekan **Simpan Endpoint Unduhan** sebelum login.
- Gunakan URL Apps Script staging pada kolom backend CRM saat pengujian. Jangan gabungkan endpoint Preview dengan sesi/database Apps Script produksi.
- Setelah pengujian selesai, kembalikan endpoint unduhan ke URL produksi sebelum kembali memakai CRM produksi.

Jangan membuat URL publik atau signed URL jangka panjang untuk lampiran pelanggan.

## 5. Pengujian sebelum produksi

1. Deploy kode website ke Preview.
2. Gunakan Preview-specific Turnstile hostname/site key.
3. Gunakan Apps Script staging yang menunjuk ke spreadsheet staging.
4. Uji inquiry tanpa lampiran.
5. Uji inquiry dengan PDF/JPG/PNG valid.
6. Uji file dengan ekstensi/MIME yang tidak cocok; harus ditolak.
7. Pastikan lead hanya muncul sekali saat submission ID yang sama dikirim ulang.
8. Uji akses download dengan sesi CRM valid dan sesi tidak valid.
9. Uji CORS dari origin CRM yang diizinkan dan origin asing.
10. Periksa event `generate_lead` di GA4 DebugView setelah menyetujui analitik. Pastikan tidak ada nama, email, nomor WhatsApp, atau isi pesan pada payload event.
11. Tolak atau cabut persetujuan analitik, lalu pastikan event klik dan `generate_lead` tidak lagi dikirim. Jika persetujuan diberikan kembali, event boleh berjalan lagi.
12. Setelah semua lolos, baru isi environment Production dan deploy.

Automated checks:

```bash
node --test tests/_shared.test.mjs tests/lead-intake.test.mjs tests/design-download.test.mjs tests/analytics-consent.test.mjs
npm ci
npm run build
```

## 6. Status dan batasan

- Kode Cloudflare Pages Functions dan halaman inquiry sudah ditambahkan pada branch fitur.
- Apps Script intake endpoint dan CRM download controls berada pada PR terpisah di repository Business OS.
- GitHub Actions tests memverifikasi validasi, isolasi endpoint, atribusi, signature file, dan otorisasi download.
- Tidak ada Apps Script production deployment, Cloudflare secret, R2 bucket, Turnstile widget, atau spreadsheet pelanggan yang diubah oleh perubahan kode ini.
- Sampai konfigurasi dan Preview verification selesai, gunakan WhatsApp sebagai jalur inquiry utama.
