<div align="center">

# Cyber Beauty - Premium E-Commerce Platform

<p>A sophisticated beauty e-commerce web application built with <b>Next.js 15</b> and <b>TanStack Query</b>. Originally created as part of a Frontend Developer selection process at bikinkonten.ai, this project has been significantly expanded and redesigned into a premium "Cyber Beauty" storefront, featuring modern layouts, an immersive user interface, and comprehensive dynamic routing architecture.</p>

### **[View Live Demo](https://ecommerce-public-api.vercel.app/)**

[![Vercel Status](https://img.shields.io/badge/Vercel-live-green?logo=vercel)](https://ecommerce-public-api.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)

</div>

---

## Application Architecture & Features

This platform emphasizes high performance, scalability, and an elevated user experience.

### Core Capabilities
- **Advanced Data Fetching**: Utilizes **TanStack Query (React Query)** to fetch, cache, and synchronize beauty product data from the `dummyjson.com` API seamlessly.
- **Client-Side Data Manipulation**: Instantaneous category filtering, dynamic sorting (Bestseller, Featured, New Arrival), and search functionalities that execute without server roundtrips.
- **Image Optimization**: Fully configured Next.js `<Image />` components integrated with external CDNs (Unsplash and DummyJSON) for high-resolution, lazy-loaded visual assets.

### Comprehensive Routing Structure (Next.js App Router)
The project utilizes the Next.js App Router paradigm to organize a complete e-commerce flow:

**Primary Routes:**
- `/` : Product Catalog & Landing Page (Features dynamic tabs and filtering)
- `/product/[id]` : Dynamic Single Product Detail Page
- `/cart` : Simulated Shopping Cart with order summary and subtotal calculations
- `/wishlist` : User's saved items grid

**Corporate & Information Routes:**
- `/about` : Editorial-style brand manifesto
- `/blog` : Magazine-layout beauty journal
- `/contact` : Split-screen contact form and studio information
- `/login` : Premium split-screen authentication portal

**Dynamic Infrastructure Routes:**
- `/services/[slug]` : Programmatically handles all service-related links (Loyalty Program, VIP Memberships, etc.) from the footer layout.
- `/help/[slug]` : Generates support documents (FAQ, Shipping, Returns) on demand.

---

## Technical Stack

* **Framework**: [Next.js v15](https://nextjs.org/) (App Router)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management**: [TanStack Query v5](https://tanstack.com/query/latest)
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## Installation & Setup Guide

To run or develop this project on your local machine, follow these steps:

### 1. Prerequisites
Ensure you have **Node.js** (minimum version 18.x) and **npm** installed on your system.

### 2. Clone the Repository
Open your terminal and clone the source code:
```bash
git clone https://github.com/djembaraa/ecommerce-publicAPI.git
```

### 3. Navigate to the Directory
```bash
cd ecommerce-publicAPI
```

### 4. Install Dependencies
Install all required packages:
```bash
npm install
```

### 5. Start the Development Server
Run the application in development mode:
```bash
npm run dev
```

### 6. Access the Application
Open your browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**

---

## Design Philosophy

The application has been explicitly designed with a luxurious **Cosmetics & Beauty** theme in mind:
- **Dark Mode Aesthetics**: Implementation of high-contrast black and white palettes to simulate a high-end storefront.
- **Editorial Typography**: Utilizing clean, sans-serif fonts structured similarly to modern fashion magazines.
- **Curated Content**: Integration of professional, royalty-free photography from Unsplash to elevate the visual standard of static pages.

---

## Contact & Support

For inquiries, suggestions, or technical feedback regarding this repository, please reach out:

- **Name**: Djembar Arafat
- **Email**: djembararafat98@gmail.com
- **LinkedIn**: [Djembar Arafat](https://www.linkedin.com/in/djembar-arafat-9a6602178/)
