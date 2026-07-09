'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, User, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { totalItems: cartCount } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-[var(--color-primary)] text-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wider shrink-0">
            Cyber Beauty
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 ml-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-sm mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/20 transition-all"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <Link href="/wishlist" className="relative text-gray-300 hover:text-white transition-colors">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-accent)] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative text-gray-300 hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-accent)] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-xs font-bold text-white">
                    {user?.firstName?.charAt(0)}
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 hidden sm:block" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white text-[var(--color-text)] rounded-xl shadow-lg border border-[var(--color-border)] overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-[var(--color-border)]">
                      <p className="text-sm font-semibold">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-[var(--color-text-muted)] truncate">{user?.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-[var(--color-text)] hover:bg-gray-50 transition-colors cursor-pointer border-b border-[var(--color-border)]"
                    >
                      <User className="h-4 w-4" />
                      My Profile
                    </Link>
                    <button
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-[var(--color-danger)] hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                <User className="h-5 w-5" />
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-300 hover:text-white cursor-pointer"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20"
              />
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
