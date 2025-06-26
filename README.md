<div align="center">

# 🛍️ Katalog Produk - Submission Test bikinkonten.ai

<p>Sebuah aplikasi web katalog produk yang dibangun sebagai bagian dari proses seleksi Frontend Developer di bikinkonten.ai. Aplikasi ini menampilkan daftar produk dari API publik dengan fitur pencarian dan filter kategori secara real-time di sisi klien.</p>

</div>

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

</div>

---

### ✨ Tampilan Aplikasi

<div align="center">

*Tampilan Desktop & Fitur Filter*

![Tampilan Desktop Aplikasi](https://qrswqbfuolwuqvfsonia.supabase.co/storage/v1/object/public/asset//Screenshot%202025-06-26%20231018.png)

</div>

<br>

**Demo Responsif (GIF)**

<div align="center">

![djembaraa-web front-3](https://github.com/user-attachments/assets/bfcd87ac-2981-4439-9e42-4eb8be3b7582)
![djembaraa-web front-3](https://github.com/user-attachments/assets/bfcd87ac-2981-4439-9e42-4eb8be3b7582)
![Uploading djembaraa-web front-3.gif…]()
![Uploading djembaraa-web front-3.gif…]()
![djembaraa-web front-3](https://github.com/user-attachments/assets/5e1e7ce0-cc92-4db9-b25e-e897145f9492)
![djembaraa-web front-3](https://github.com/user-attachments/assets/5e1e7ce0-cc92-4db9-b25e-e897145f9492)


</div>

---

### 🚀 Fitur Utama

-   **Browse Produk**: Menampilkan daftar produk dalam tampilan kartu (Card View) yang bersih dan modern.
-   **Pemanggilan API Efisien**: Menggunakan **TanStack Query** untuk fetching, caching, dan sinkronisasi data dari server.
-   **Loading & Error State**: Memberikan feedback visual kepada pengguna saat data sedang dimuat atau jika terjadi kegagalan API.
-   **Filter Real-time**:
    -   🔎 **Pencarian berdasarkan Nama Produk**: Filter produk secara dinamis saat pengguna mengetik.
    -   🏷️ **Filter berdasarkan Kategori/Tag**: Memfilter produk berdasarkan tag yang dipilih dari dropdown.
-   **Desain Responsif**: Tampilan yang dapat beradaptasi dengan baik di berbagai ukuran layar, dari mobile hingga desktop.
-   **Modern UI/UX**: Didesain dengan **Tailwind CSS**, termasuk *hover effects* yang subtle dan layout yang intuitif.

---

### 🛠️ Teknologi yang Digunakan

* **Framework**: [Next.js v15](https://nextjs.org/) (App Router & Turbopack)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management & Data Fetching**: [TanStack Query v5 (React Query)](https://tanstack.com/query/latest)
* **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
* **Deployment**: [Vercel](https://vercel.com/) (atau sebutkan platform lain jika kamu deploy)
* **Linting & Formatting**: ESLint & Prettier

---

### ⚙️ Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut:

1.  **Clone repository ini**
    ```bash
    git clone https://github.com/djembaraa/ecommerce-publicAPI.git
    ```

2.  **Masuk ke direktori proyek**
    ```bash
    cd ecommerce-publicAPI
    ```

3.  **Install semua dependency yang dibutuhkan**
    ```bash
    npm install
    ```

4.  **Jalankan server development**
    ```bash
    npm run dev
    ```

5.  **Buka browser** dan kunjungi `http://localhost:3000`.

---

### 🧠 Konsep & Pembelajaran

Proyek ini menjadi sarana untuk mengimplementasikan beberapa konsep penting dalam pengembangan frontend modern:

1.  **Client-Side Data Fetching**: Menggunakan TanStack Query untuk mengelola siklus hidup data (fetching, caching, re-fetching) tanpa perlu state management manual yang kompleks (`useState` + `useEffect` boilerplate).
2.  **Client-Side Filtering**: Logika filter diimplementasikan di sisi klien menggunakan `useMemo` untuk performa yang optimal, memastikan UI hanya diperbarui ketika data atau kriteria filter benar-benar berubah.
3.  **Utility-First CSS**: Memanfaatkan kekuatan Tailwind CSS untuk membangun UI kustom dengan cepat tanpa meninggalkan file HTML/TSX.
4.  **Component-Based Architecture**: Memecah UI menjadi komponen-komponen yang dapat digunakan kembali (reusable), seperti `ProductCard`, untuk kode yang lebih bersih dan terorganisir.

---

### 📬 Kontak

Jika Anda memiliki pertanyaan atau feedback, jangan ragu untuk menghubungi saya.

-   **Nama**: Djembar Arafat
-   **Email**: djembararafat98@gmail.com
-   **LinkedIn**: `https://www.linkedin.com/in/djembar-arafat-9a6602178/`

Terima kasih telah mereview proyek saya!
