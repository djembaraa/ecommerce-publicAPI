# Cyber Beauty E-Commerce 🌟

A premium beauty e-commerce web application featuring a modern, immersive user interface and seamless shopping experience. Built with Next.js 15, React, and Tailwind CSS.

## 🎨 Design Philosophy
This project was entirely overhauled following **Gestalt Principles** and **UI/UX 2026** trends:
- **Proximity & Common Region**: Distinct visual boundaries and logical grouping of elements using shared section containers and rounded cards.
- **Similarity**: Consistent use of reusable components (Buttons, Inputs, Badges, StarRatings) across all pages.
- **Closure**: Subtle borders and hover elevations that create satisfying boundaries for products and articles.
- **Design System**: Centralized design tokens (CSS custom properties) powering the entire aesthetic with a dark, luxurious theme (`--color-primary: #0f0f0f`, `--color-accent: #c9a96e`).

## ✨ Features
- **Full Authentication State**: Context-based authentication simulating login/signup.
- **Dynamic Shopping Cart**: Client-side cart management (add, remove, adjust quantity, mock promo codes) persisted via localStorage.
- **Wishlist System**: Save favorite products for later, persisted across sessions.
- **Live Search & Filtering**: Client-side filtering of products by category and tags on the homepage.
- **API Integration**: Fully integrated with the [DummyJSON API](https://dummyjson.com/docs/products).

## 🛠️ Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: React Context API & `localStorage`
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) (React Query)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Demo Credentials
To test the authentication and user state, use the following DummyJSON credentials on the `/login` page:
- **Username**: `emilys`
- **Password**: `emilyspass`

## 📁 Project Structure
- `/src/app/components/ui/` - Reusable primitives (Button, Input, Badge, SectionHeader, StarRating)
- `/src/app/components/` - Major layout blocks (Navbar, Footer, Hero, ProductCard)
- `/src/app/context/` - Global state managers (AuthContext, CartContext, WishlistContext)
- `/src/app/constants/` - Centralized config, navigation, and API URLs
- `/src/app/types/` - TypeScript interfaces mapped to the DummyJSON API

## 📝 License
This project is open-source and available under the MIT License.
