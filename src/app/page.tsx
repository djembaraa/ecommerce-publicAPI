// app/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Product } from "./types";
import ProductCard from "./components/ProductCard";

const getProducts = async (): Promise<Product[]> => {
  // Ambil lebih banyak produk agar kita punya banyak tags untuk di-filter
  const res = await fetch("https://dummyjson.com/products?limit=100");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.products;
};

export default function Home() {
  const [filter, setFilter] = useState("");
  // <-- BARU: State untuk menyimpan tag yang dipilih. 'all' berarti tidak ada filter tag.
  const [selectedTag, setSelectedTag] = useState("all");

  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // <-- BARU: Logika untuk mengumpulkan semua tag unik dari data
  const allTags = useMemo(() => {
    if (!data) return [];
    // Gunakan Set untuk secara otomatis menangani duplikasi
    const tagsSet = new Set<string>();
    data.forEach((product) => {
      product.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet); // Ubah kembali Set menjadi Array
  }, [data]); // Hanya hitung ulang saat 'data' berubah

  // <-- DIPERBARUI: Logika filter sekarang menggabungkan filter teks dan tag
  const filteredProducts = useMemo(() => {
    if (!data) return [];

    let products = data;

    // 1. Terapkan filter tag terlebih dahulu
    if (selectedTag !== "all") {
      products = products.filter((product) =>
        product.tags.includes(selectedTag)
      );
    }

    // 2. Kemudian, terapkan filter teks pada hasil filter tag
    if (filter) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return products;
  }, [data, filter, selectedTag]); // <-- BARU: Tambahkan selectedTag sebagai dependency

  if (isLoading) {
    return <main className="p-8 text-center">Loading...</main>;
  }

  if (isError) {
    return <main className="p-8 text-center">Error: {error.message}</main>;
  }

  return (
    <main className="p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* Lebarkan sedikit max-width */}
        <h1 className="text-3xl font-bold mb-6 text-center">Product Catalog</h1>
        {/* <-- BARU: Kontainer untuk semua filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Input untuk Filtering Teks */}
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search product by title..."
            className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
          />

          {/* <-- BARU: Dropdown untuk Filtering Tag */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full sm:w-1/3 p-2 border border-gray-300 text-gray-700 rounded-md shadow-sm bg-white"
          >
            <option value="all">All Tags</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag} className="capitalize">
                {tag}
              </option>
            ))}
          </select>
        </div>
        {/* Tampilan Grid untuk Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            // <-- BARU: Pesan jika tidak ada hasil
            <p className="col-span-full text-center text-gray-500">
              No products found. Try adjusting your filters.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
