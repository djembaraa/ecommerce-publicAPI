"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import { Product } from "./types";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import Banner from "./components/Banner";

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  // Filter only beauty-related categories so tech items don't appear
  const beautyCategories = ["beauty", "fragrances", "skin-care"];
  return data.products.filter((product: Product) => 
    beautyCategories.includes(product.category)
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("New Arrival");
  const [filter, setFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Tampilkan 8 produk per halaman

  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const allTags = useMemo(() => {
    if (!data) return [];
    const tagsSet = new Set<string>();
    data.forEach((product) => {
      if (product.tags) {
         product.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet);
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    let products = [...data];

    // Dummy logic to make the tabs show different items based on user request
    if (activeTab === "Bestseller") {
      products.sort((a, b) => b.rating - a.rating);
    } else if (activeTab === "Featured Products") {
      // Just an arbitrary sort to make it look different (e.g. by highest price)
      products.sort((a, b) => b.price - a.price);
    } else {
      // New Arrival (default), just show as is or reversed
      products.reverse();
    }

    if (selectedTag !== "all") {
      products = products.filter((product) =>
        product.tags && product.tags.includes(selectedTag)
      );
    }

    if (filter) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return products;
  }, [data, filter, selectedTag, activeTab]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, selectedTag, activeTab]);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const tabs = ["New Arrival", "Bestseller", "Featured Products"];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Hero />
      <CategoryList />

      {/* Products Section */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-black text-black"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Existing Filters (Integrated below tabs for functionality) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search product by title..."
            className="w-full sm:w-2/3 p-3 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-black transition"
          />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full sm:w-1/3 p-3 border border-gray-200 rounded-lg bg-white text-black focus:outline-none focus:ring-1 focus:ring-black transition"
          >
            <option value="all">All Categories</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag} className="capitalize">
                {tag}
              </option>
            ))}
          </select>
        </div>

        {isLoading ? (
          <div className="py-16 text-center text-gray-500">Loading products...</div>
        ) : isError ? (
          <div className="py-16 text-center text-red-500">Error: {error.message}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-16">
                  <h3 className="text-xl font-medium mb-2">No Products Found</h3>
                  <p>Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-black transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-600 font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-black transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Banner />
    </div>
  );
}
