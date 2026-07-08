import Image from "next/image";
import Link from "next/link";
import { HeartCrack, ArrowRight, ShoppingCart, Trash2 } from "lucide-react";

export default function WishlistPage() {
  // Using some dummy wishlist items based on the dummyjson API beauty products
  const wishlistItems = [
    {
      id: 1,
      title: "Red Lipstick",
      brand: "L'Oreal Paris",
      price: 12.99,
      image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
      id: 2,
      title: "Skin Beauty Serum",
      brand: "Dior",
      price: 49.99,
      image: "https://cdn.dummyjson.com/products/images/beauty/Skin%20Beauty%20Serum/thumbnail.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#111111] text-white pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light">Your <span className="font-bold">Wishlist</span></h1>
          <p className="text-gray-400 mt-2">Items you've fallen in love with, saved for later.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group relative">
                <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-10">
                  <Trash2 className="h-5 w-5" />
                </button>
                <div className="relative w-full h-48 mb-6 bg-[#f6f6f6] rounded-xl overflow-hidden cursor-pointer">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-1">{item.title}</h3>
                  <p className="text-xl font-bold text-black mb-6">${item.price}</p>
                  <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
            
            {/* Discover More Card */}
            <Link href="/#products" className="bg-[#f6f6f6] border border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[350px] text-gray-500 hover:text-black hover:bg-gray-50 hover:border-black transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discover More</h3>
              <p className="text-center text-sm px-4">Browse our catalog to find more beauty favorites.</p>
            </Link>
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <HeartCrack className="h-10 w-10 text-gray-300" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Looks like you haven't saved any beauty products yet. Explore our premium collection and find your new holy grail.
            </p>
            <Link href="/#products" className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Start Exploring <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
