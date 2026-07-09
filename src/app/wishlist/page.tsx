'use client';

import { useWishlist } from '../context/WishlistContext';
import { Heart } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import ProductCard from '../components/ProductCard';

export default function WishlistPage() {
  const { items, totalItems } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-surface)] px-4">
        <div className="w-24 h-24 bg-[var(--color-surface-alt)] rounded-full flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-[var(--color-text-muted)]" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-3">Your Wishlist is Empty</h2>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-md text-center">
          Save items you love to your wishlist. Review them anytime and easily move them to your cart.
        </p>
        <Button href="/" size="lg">Discover Favorites</Button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface-alt)] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="My Wishlist" 
          subtitle={`${totalItems} saved ${totalItems === 1 ? 'item' : 'items'}`} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
