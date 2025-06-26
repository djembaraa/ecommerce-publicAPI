// // app/page.tsx
// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { useState, useMemo } from "react";
// import { Product } from "./types";
// import ProductCard from "./components/ProductCard";

// const getProducts = async (): Promise<Product[]> => {
//   // Ambil lebih banyak produk agar kita punya banyak tags untuk di-filter
//   const res = await fetch("https://dummyjson.com/products?limit=100");
//   if (!res.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await res.json();
//   return data.products;
// };

// export default function Home() {
//   const [filter, setFilter] = useState("");
//   // <-- BARU: State untuk menyimpan tag yang dipilih. 'all' berarti tidak ada filter tag.
//   const [selectedTag, setSelectedTag] = useState("all");

//   const { data, isLoading, isError, error } = useQuery<Product[]>({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   // <-- BARU: Logika untuk mengumpulkan semua tag unik dari data
//   const allTags = useMemo(() => {
//     if (!data) return [];
//     // Gunakan Set untuk secara otomatis menangani duplikasi
//     const tagsSet = new Set<string>();
//     data.forEach((product) => {
//       product.tags.forEach((tag) => tagsSet.add(tag));
//     });
//     return Array.from(tagsSet); // Ubah kembali Set menjadi Array
//   }, [data]); // Hanya hitung ulang saat 'data' berubah

//   // <-- DIPERBARUI: Logika filter sekarang menggabungkan filter teks dan tag
//   const filteredProducts = useMemo(() => {
//     if (!data) return [];

//     let products = data;

//     // 1. Terapkan filter tag terlebih dahulu
//     if (selectedTag !== "all") {
//       products = products.filter((product) =>
//         product.tags.includes(selectedTag)
//       );
//     }

//     // 2. Kemudian, terapkan filter teks pada hasil filter tag
//     if (filter) {
//       products = products.filter((product) =>
//         product.title.toLowerCase().includes(filter.toLowerCase())
//       );
//     }

//     return products;
//   }, [data, filter, selectedTag]); // <-- BARU: Tambahkan selectedTag sebagai dependency

//   if (isLoading) {
//     return <main className="p-8 text-center">Loading...</main>;
//   }

//   if (isError) {
//     return <main className="p-8 text-center">Error: {error.message}</main>;
//   }

//   return (
//     <main className="p-4 sm:p-6 md:p-8">
//       <div className="max-w-5xl mx-auto">
//         {" "}
//         {/* Lebarkan sedikit max-width */}
//         <h1 className="text-3xl font-bold mb-6 text-center">Product Catalog</h1>
//         {/* <-- BARU: Kontainer untuk semua filter */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-8">
//           {/* Input untuk Filtering Teks */}
//           <input
//             type="text"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             placeholder="Search product by title..."
//             className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-md shadow-sm"
//           />

//           {/* <-- BARU: Dropdown untuk Filtering Tag */}
//           <select
//             value={selectedTag}
//             onChange={(e) => setSelectedTag(e.target.value)}
//             className="w-full sm:w-1/3 p-2 border border-gray-300 text-gray-700 rounded-md shadow-sm bg-white"
//           >
//             <option value="all">All Tags</option>
//             {allTags.map((tag) => (
//               <option key={tag} value={tag} className="capitalize">
//                 {tag}
//               </option>
//             ))}
//           </select>
//         </div>
//         {/* Tampilan Grid untuk Card */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             // <-- BARU: Pesan jika tidak ada hasil
//             <p className="col-span-full text-center text-gray-500">
//               No products found. Try adjusting your filters.
//             </p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

// app/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import { Product } from "./types";
import ProductCard from "./components/ProductCard";

const getProducts = async (): Promise<Product[]> => {
  // Ambil lebih banyak produk agar kita punya banyak data untuk paginasi
  const res = await fetch("https://dummyjson.com/products?limit=100");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.products;
};

export default function Home() {
  const [filter, setFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Tampilkan 12 produk per halaman

  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const allTags = useMemo(() => {
    if (!data) return [];
    const tagsSet = new Set<string>();
    data.forEach((product) => {
      product.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    let products = data;

    if (selectedTag !== "all") {
      products = products.filter((product) =>
        product.tags.includes(selectedTag)
      );
    }

    if (filter) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return products;
  }, [data, filter, selectedTag]);

  // Efek untuk mereset ke halaman 1 setiap kali filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, selectedTag]);

  // Logika untuk menghitung produk di halaman saat ini
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handler untuk navigasi halaman
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  if (isLoading) {
    return <main className="p-8 text-center">Loading...</main>;
  }

  if (isError) {
    return <main className="p-8 text-center">Error: {error.message}</main>;
  }

  return (
    <main className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Product Catalog
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search product by title..."
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg text-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full sm:w-1/3 p-3 border border-gray-300 text-gray-700 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="all">All Tags</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag} className="capitalize">
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-16">
              <h3 className="text-2xl font-semibold mb-2">No Products Found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
