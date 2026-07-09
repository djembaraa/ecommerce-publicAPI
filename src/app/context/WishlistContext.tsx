'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { Product } from '../types';

interface WishlistContextType {
  items: Product[];
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Restore wishlist from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cb_wishlist');
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem('cb_wishlist');
    }
    setIsHydrated(true);
  }, []);

  // Persist wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('cb_wishlist', JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const toggleItem = useCallback((product: Product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const isInWishlist = useCallback(
    (productId: number): boolean => {
      return items.some((item) => item.id === productId);
    },
    [items]
  );

  const clearWishlist = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = useMemo(() => items.length, [items]);

  const value: WishlistContextType = {
    items,
    toggleItem,
    isInWishlist,
    clearWishlist,
    totalItems,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist(): WishlistContextType {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
