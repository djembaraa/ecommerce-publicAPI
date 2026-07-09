'use client';

import { ShoppingCart, Heart } from 'lucide-react';
import Button from './ui/Button';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../types';

export default function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const isWished = isInWishlist(product.id);

  return (
    <div className="flex gap-4 mt-auto border-t border-[var(--color-border)] pt-8">
      <Button 
        onClick={() => addItem(product, 1)}
        size="lg"
        fullWidth
        className="flex items-center justify-center gap-2"
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
      <button 
        onClick={() => toggleItem(product)}
        className={`px-6 py-4 border-2 rounded-xl transition-all flex items-center justify-center group ${
          isWished 
            ? 'border-[var(--color-danger)] bg-red-50' 
            : 'border-[var(--color-border)] hover:border-[var(--color-primary)]'
        }`}
        aria-label="Toggle Wishlist"
      >
        <Heart className={`h-6 w-6 transition-colors ${
          isWished ? 'fill-[var(--color-danger)] text-[var(--color-danger)]' : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-danger)]'
        }`} />
      </button>
    </div>
  );
}
