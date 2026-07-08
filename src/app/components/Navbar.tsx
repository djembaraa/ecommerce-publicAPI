import { Search, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              Cyber Beauty
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-gray-300 text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-400 hover:text-white text-sm font-medium">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm font-medium">Contact Us</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm font-medium">Blog</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 ml-6">
            <Link href="/wishlist" className="text-gray-400 hover:text-white">
              <Heart className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="text-gray-400 hover:text-white relative">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/login" className="text-gray-400 hover:text-white">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
