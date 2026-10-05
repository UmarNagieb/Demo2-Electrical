# Solusi Kelistrikan Pro

Website profil dan layanan instalasi listrik yang dibangun dengan React dan Vite.

## Menjalankan secara lokal

1. Install dependensi dengan `npm install`.
2. Jalankan server pengembangan dengan `npm run dev`.
3. Buka URL yang ditampilkan oleh Vite.

## Pemeriksaan

- `npm run lint` menjalankan ESLint.
- `npm run build` membuat build produksi di folder `dist`.

## Build produksi

Jalankan `npm run build` untuk membuat aset produksi di folder `dist`.

## Deploy ke Cloudflare Workers & Pages

Konfigurasi [wrangler.jsonc](./wrangler.jsonc) menerbitkan folder `dist` sebagai static assets dan mengaktifkan fallback SPA agar URL aplikasi tetap terbuka saat di-reload.

1. Push proyek ke repository GitHub.
2. Di Cloudflare Dashboard, buka **Workers & Pages** dan buat aplikasi Worker dengan menghubungkan repository tersebut.
3. Atur root directory ke `.`, build command ke `npm run build`, dan deploy command ke `npx wrangler deploy`.
4. Deploy aplikasi. Wrangler membaca pengaturan static assets dari `wrangler.jsonc`.

Untuk deploy dari terminal setelah build, jalankan `npx wrangler deploy`. Login ke Cloudflare terlebih dahulu dengan `npx wrangler login`.
