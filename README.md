<div align="center">

# 🛍️ Cyber Beauty - Premium E-Commerce Catalog

<p>A premium beauty e-commerce web application built with <b>Next.js 15</b> and <b>TanStack Query</b>. Originally created as part of a Frontend Developer selection process at bikinkonten.ai, this project has been <b>completely redesigned</b> to adopt a world-class "Cyber" premium e-commerce theme, featuring modern layouts, an immersive hero section, and comprehensive dynamic routing.</p>

### 🌐 **[View Live Demo](https://ecommerce-public-api.vercel.app/)** 🌐

</div>

<div align="center">

[![Vercel Status](https://img.shields.io/badge/Vercel-live-green?logo=vercel)](https://ecommerce-public-api.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

</div>

---

### ✨ Application UI & Theme

The application has been upgraded with a luxurious **Cosmetics & Beauty** theme:
- **Dark Mode Hero Section**: Showcasing *Luxury Essence* and *Advanced Skincare* like a high-end brand storefront.
- **Dynamic Categories**: Specific iconography for Skincare, Makeup, Fragrances, Hair Care, and Bath & Body using `lucide-react`.
- **Aesthetic Product Cards**: Minimalist product card design focusing on product visuals, enhanced with interactive wishlist and cart buttons.

---

### 🚀 Key Features & Routing Structure

-   **Efficient API Fetching**: Utilizes **TanStack Query** to fetch, cache, and synchronize beauty product data from `dummyjson.com` in real-time.
-   **Client-Side Filtering**: Highly responsive category filtering and product search that executes instantly without overloading the server.
-   **Comprehensive Navigation (Next.js App Router)**:
    -   `/` : Main Page (Product Catalog & Filters)
    -   `/about`, `/contact`, `/blog` : Company Information Pages
    -   `/cart`, `/wishlist` : Shopping interaction pages
    -   `/login` : User Authentication Page
-   **Dynamic Routes**:
    -   `/services/[slug]` : Dynamically handles various service links (*Loyalty Program, VIP Memberships, etc.*) from the Footer.
    -   `/help/[slug]` : Handles customer assistance links (*FAQ, Shipping, Returns, etc.*).

---

### 🛠️ Technologies Used

* **Framework**: [Next.js v15](https://nextjs.org/) (App Router & Turbopack)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Data Fetching**: [TanStack Query v5 (React Query)](https://tanstack.com/query/latest)
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Deployment**: [Vercel](https://ecommerce-public-api.vercel.app/)

---

### ⚙️ Installation & Setup Guide

To run or develop this project on your local machine, follow these simple steps:

#### 1. System Requirements
Make sure you have **Node.js** (minimum version 18.x) and **npm** installed on your computer.

#### 2. Clone the Repository
Open your terminal or command prompt and run the following command to download the source code:
```bash
git clone https://github.com/djembaraa/ecommerce-publicAPI.git
```

#### 3. Navigate to the Project Directory
```bash
cd ecommerce-publicAPI
```

#### 4. Install Dependencies
Install all required packages (including Next.js, Tailwind, TanStack, and Lucide):
```bash
npm install
```

#### 5. Start the Development Server
Run the application in development mode (Turbopack enabled for faster loading):
```bash
npm run dev
```

#### 6. Access the Application
Open your browser and visit the following link:
**[http://localhost:3000](http://localhost:3000)**

---

### 🧠 Core Concepts & Architecture

This project is built prioritizing high performance and UI scalability:
1.  **Modular Component Architecture**: Separation of complex UI components (`Navbar`, `Hero`, `CategoryList`) for ease of maintenance.
2.  **Hassle-free State Management**: The use of TanStack Query eliminates the need for messy `useEffect` and `useState` hooks, automatically handling loading, error, and caching states.
3.  **Folder-based Dynamic Rendering**: Leveraging the power of Next.js 15 routing (`app/services/[slug]`) to minimize repetitive static file creation.

---

### 📬 Contact & Support

If you have any questions, suggestions, or feedback regarding the codebase, please feel free to reach out:

-   **Name**: Djembar Arafat
-   **Email**: djembararafat98@gmail.com
-   **LinkedIn**: [Djembar Arafat](https://www.linkedin.com/in/djembar-arafat-9a6602178/)

Thank you for exploring the **Cyber Beauty** project!
