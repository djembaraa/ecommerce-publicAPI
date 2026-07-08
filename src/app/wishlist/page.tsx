import Link from "next/link";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <Heart className="h-12 w-12 text-gray-400" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Your Wishlist is empty</h1>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Save items you love to your wishlist. Review them anytime and easily move them to your cart.
      </p>
      <Link href="/#products" className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
        Explore Products
      </Link>
    </div>
  );
}
