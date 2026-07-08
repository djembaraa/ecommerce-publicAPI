<div align="center">

# 🛍️ Cyber Beauty - Premium E-Commerce Catalog

<p>Sebuah aplikasi web e-commerce kecantikan (kosmetik, skincare, parfum) yang dibangun menggunakan <b>Next.js 15</b> dan <b>TanStack Query</b>. Proyek ini awalnya dibuat sebagai bagian dari proses seleksi Frontend Developer di bikinkonten.ai, dan telah <b>dirombak total secara UI/UX</b> untuk mengadopsi desain premium kelas dunia ala "Cyber", dengan navigasi lengkap dan fitur rendering dinamis.</p>

### 🌐 **[Lihat Live Demo](https://ecommerce-public-api.vercel.app/)** 🌐

</div>

<div align="center">

[![Vercel Status](https://img.shields.io/badge/Vercel-live-green?logo=vercel)](https://ecommerce-public-api.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

</div>

---

### ✨ Tampilan & Tema Aplikasi

Aplikasi telah diperbarui dengan tema **Cosmetics & Beauty** yang mewah:
- **Dark Mode Hero Section**: Menampilkan *Luxury Essence* dan *Advanced Skincare* layaknya etalase brand papan atas.
- **Kategori Dinamis**: Ikon spesifik untuk Skincare, Makeup, Fragrances, Hair Care, Bath & Body menggunakan `lucide-react`.
- **Kartu Produk Estetik**: Desain *Product Card* minimalis yang berfokus pada visual produk dengan tombol interaktif.

---

### 🚀 Fitur & Struktur Halaman Baru

-   **Pemanggilan API Efisien**: Menggunakan **TanStack Query** untuk mengambil data produk kecantikan dari `dummyjson.com` secara *real-time* dan *cached*.
-   **Filter Klien (Client-Side)**: Pencarian dan pemfilteran kategori produk yang sangat responsif tanpa membebani server.
-   **Navigasi Lengkap (Next.js App Router)**:
    -   `/` : Halaman Utama (Katalog Produk & Filter)
    -   `/about`, `/contact`, `/blog` : Halaman Informasi Perusahaan
    -   `/cart`, `/wishlist` : Halaman interaksi produk belanja
    -   `/login` : Halaman Autentikasi Pengguna
-   **Rute Dinamis (Dynamic Routes)**:
    -   `/services/[slug]` : Menangani berbagai tautan layanan (*Loyalty Program, VIP Memberships, dll*) dari Footer secara dinamis.
    -   `/help/[slug]` : Menangani tautan bantuan pelanggan (*FAQ, Shipping, Returns, dll*).

---

### 🛠️ Teknologi yang Digunakan

* **Framework**: [Next.js v15](https://nextjs.org/) (App Router & Turbopack)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Data Fetching**: [TanStack Query v5 (React Query)](https://tanstack.com/query/latest)
* **Ikonografi**: [Lucide React](https://lucide.dev/)
* **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
* **Deployment**: [Vercel](https://ecommerce-public-api.vercel.app/)

---

### ⚙️ Panduan Instalasi & Menjalankan Proyek

Jika Anda ingin menjalankan atau mengembangkan proyek ini di komputer lokal, ikuti langkah-langkah mudah berikut:

#### 1. Persyaratan Sistem
Pastikan Anda sudah menginstal **Node.js** (minimal versi 18.x) dan **npm** di komputer Anda.

#### 2. Clone Repository
Buka terminal/command prompt, dan jalankan perintah berikut untuk mengunduh kode sumber:
```bash
git clone https://github.com/djembaraa/ecommerce-publicAPI.git
```

#### 3. Masuk ke Direktori Proyek
```bash
cd ecommerce-publicAPI
```

#### 4. Instalasi Dependency
Instal seluruh paket yang dibutuhkan (seperti Next.js, Tailwind, TanStack, dan Lucide):
```bash
npm install
```

#### 5. Jalankan Server Development
Jalankan aplikasi di mode *development* (Turbopack diaktifkan untuk *loading* lebih cepat):
```bash
npm run dev
```

#### 6. Akses Aplikasi
Buka browser Anda dan kunjungi tautan berikut:
**[http://localhost:3000](http://localhost:3000)**

---

### 🧠 Konsep & Arsitektur

Proyek ini dibangun dengan mengedepankan performa tinggi dan skalabilitas UI:
1.  **Arsitektur Komponen Modular**: Pemisahan komponen UI yang kompleks (`Navbar`, `Hero`, `CategoryList`) untuk kemudahan pemeliharaan (*maintenance*).
2.  **State Management Bebas Repot**: Penggunaan TanStack Query menyingkirkan kebutuhan `useEffect` dan `useState` yang berantakan, dan secara otomatis menangani status *loading*, *error*, dan *caching*.
3.  **Dynamic Rendering Berbasis Folder**: Memanfaatkan keunggulan rute Next.js 15 (`app/services/[slug]`) untuk meminimalisir pembuatan file statis yang berulang.

---

### 📬 Kontak & Dukungan

Jika Anda memiliki pertanyaan, saran, atau masukan tentang struktur kode, silakan hubungi saya melalui:

-   **Nama**: Djembar Arafat
-   **Email**: djembararafat98@gmail.com
-   **LinkedIn**: [Djembar Arafat](https://www.linkedin.com/in/djembar-arafat-9a6602178/)

Terima kasih telah menjelajahi proyek **Cyber Beauty**!
