'use client';

import { Product } from '../types';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Button from './ui/Button';
import Badge from './ui/Badge';
import StarRating from './ui/StarRating';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const isWished = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col relative border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 group">
      
      {/* Badges Overlay */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.discountPercentage > 0 && (
          <Badge variant="sale">-{Math.round(product.discountPercentage)}%</Badge>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <Badge variant="warning">Low Stock</Badge>
        )}
      </div>

      {/* Wishlist Toggle */}
      <button 
        onClick={(e) => {
          e.preventDefault(); // Prevent triggering link if wrapped
          toggleItem(product);
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--color-border)] text-gray-400 hover:text-[var(--color-danger)] transition-colors cursor-pointer"
        aria-label="Toggle Wishlist"
      >
        <Heart className={`h-5 w-5 ${isWished ? 'fill-[var(--color-danger)] text-[var(--color-danger)]' : ''}`} />
      </button>

      {/* Image Area */}
      <Link href={`/product/${product.id}`} className="relative w-full aspect-square mb-4 block rounded-xl overflow-hidden bg-[var(--color-surface-alt)] p-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
            {product.brand || product.category}
          </span>
          <StarRating rating={product.rating} showValue size={12} />
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="text-base font-bold text-[var(--color-text)] mb-2 line-clamp-2 hover:text-[var(--color-accent)] transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-[var(--color-text)]">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <Button 
            onClick={() => addItem(product, 1)}
            variant="primary" 
            fullWidth 
            className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to Cart
          </Button>
        </div>
      </div>

    </div>
  );
}
