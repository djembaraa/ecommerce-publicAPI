// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../providers"; // <-- Import provider kita

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Geneated API By Djembar Arafat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {" "}
          {/* <-- Bungkus children dengan Providers */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
