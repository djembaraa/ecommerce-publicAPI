'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useState } from 'react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'BEAUTY10') {
      setDiscount(totalPrice * 0.1);
      alert('Promo code applied: 10% off!');
    } else {
      setDiscount(0);
      alert('Invalid promo code. Try "BEAUTY10"');
    }
  };

  const finalTotal = Math.max(0, totalPrice - discount + 5.99); // +$5.99 shipping

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-surface)] px-4">
        <div className="w-24 h-24 bg-[var(--color-surface-alt)] rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-[var(--color-text-muted)]" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-3">Your Cart is Empty</h2>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-md text-center">
          Looks like you haven't added anything to your cart yet. Discover our premium collections and find your new favorites.
        </p>
        <Button href="/" size="lg">Start Shopping</Button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface-alt)] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Your Shopping Cart" subtitle={`${totalItems} items in your bag`} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="lg:w-2/3 space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="bg-[var(--color-surface)] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 border border-[var(--color-border)] shadow-sm">
                
                {/* Product Image */}
                <Link href={`/product/${item.product.id}`} className="w-full sm:w-32 aspect-square relative bg-gray-50 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    fill
                    className="object-contain p-2"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 w-full flex flex-col sm:flex-row justify-between">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                      {item.product.brand || item.product.category}
                    </p>
                    <Link href={`/product/${item.product.id}`}>
                      <h3 className="text-lg font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors mb-2">
                        {item.product.title}
                      </h3>
                    </Link>
                    <p className="text-xl font-bold text-[var(--color-text)]">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-4">
                    <div className="flex items-center gap-3 bg-[var(--color-surface-alt)] rounded-lg p-1 border border-[var(--color-border)]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--color-text)] hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-4 text-center font-medium text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--color-text)] hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-danger)] transition-colors flex items-center gap-1.5"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[var(--color-text-muted)]">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[var(--color-text-muted)]">
                  <span>Shipping Estimate</span>
                  <span>$5.99</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[var(--color-success)] font-medium">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t border-[var(--color-border)] pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold text-[var(--color-text)]">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={applyPromo} className="mb-8 flex gap-2">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (Try BEAUTY10)"
                  className="!py-2.5 text-sm"
                />
                <Button type="submit" variant="secondary" className="shrink-0">
                  Apply
                </Button>
              </form>

              <Button fullWidth size="lg" onClick={() => alert('Checkout flow is disabled in this demo.')}>
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <div className="mt-6 text-center">
                <Link href="/" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors underline underline-offset-4">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
