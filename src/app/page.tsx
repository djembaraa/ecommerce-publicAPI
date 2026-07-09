'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product, ProductsResponse } from './types';
import { API_BASE_URL, BEAUTY_CATEGORIES } from './constants';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import CategoryList from './components/CategoryList';
import Banner from './components/Banner';
import SectionHeader from './components/ui/SectionHeader';
import Input from './components/ui/Input';
import Button from './components/ui/Button';
import { Search } from 'lucide-react';

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/products?limit=100`);
  if (!res.ok) throw new Error('Network response was not ok');
  
  const data: ProductsResponse = await res.json();
  
  // Filter only beauty-related categories
  return data.products.filter((product) => 
    BEAUTY_CATEGORIES.includes(product.category as any)
  );
};

function HomeContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q'); // For category filtering from CategoryList or Search

  const [activeTab, setActiveTab] = useState('New Arrival');
  const [filter, setFilter] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  // Sync URL query param to our filter
  useEffect(() => {
    if (queryParam) {
      if (BEAUTY_CATEGORIES.includes(queryParam as any)) {
        // Since we don't have a category select, we can put it in the text filter or tag
        // Actually, dummyjson category names are exactly the slug
        // Let's just use it in the title/category filter
        setFilter(queryParam);
      } else {
        setFilter(queryParam);
      }
    }
  }, [queryParam]);

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

    // Tab Sorting
    if (activeTab === 'Bestseller') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (activeTab === 'Featured Products') {
      products.sort((a, b) => b.price - a.price);
    } else {
      // New Arrival (default), just reverse API order
      products.reverse();
    }

    // Tag Filter
    if (selectedTag !== 'all') {
      products = products.filter((product) =>
        product.tags && product.tags.includes(selectedTag)
      );
    }

    // Text Filter (search by title or category)
    if (filter) {
      const lowerFilter = filter.toLowerCase();
      products = products.filter((product) =>
        product.title.toLowerCase().includes(lowerFilter) ||
        product.category.toLowerCase().includes(lowerFilter)
      );
    }
    return products;
  }, [data, filter, selectedTag, activeTab]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, selectedTag, activeTab]);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const tabs = ['New Arrival', 'Bestseller', 'Featured Products'];

  return (
    <div className="bg-[var(--color-surface)] min-h-screen font-sans">
      <Hero />
      <CategoryList />

      {/* Products Section */}
      <div id="products" className="bg-[var(--color-surface)] section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            title="Curated For You" 
            subtitle="Explore our most loved beauty essentials, from everyday staples to luxurious indulgences."
          />

          {/* Filtering & Tabs Container (Common Region) */}
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl mb-12 border border-[var(--color-border)]">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-[var(--color-border)] pb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'bg-transparent text-[var(--color-text-muted)] hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search by product name..."
                  icon={<Search className="w-5 h-5" />}
                />
              </div>
              <div className="w-full sm:w-64 shrink-0">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all duration-200 cursor-pointer appearance-none capitalize"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="all">All Tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-96 w-full" />
              ))}
            </div>
          ) : isError ? (
            <div className="py-16 text-center">
              <p className="text-[var(--color-danger)] font-medium mb-4">Failed to load products: {error.message}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : (
            <>
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center bg-[var(--color-surface-alt)] rounded-3xl border border-[var(--color-border)]">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">No Products Found</h3>
                  <p className="text-[var(--color-text-muted)] mb-6">We couldn't find anything matching your current filters.</p>
                  <Button onClick={() => { setFilter(''); setSelectedTag('all'); }}>
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-6">
                  <Button
                    variant="secondary"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="secondary"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Banner />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
