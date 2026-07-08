import { Product } from "../types";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-[#f6f6f6] rounded-xl p-6 flex flex-col items-center relative transition-transform hover:scale-105 group">
      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
        <Heart className="h-6 w-6" />
      </button>

      {/* Image */}
      <div className="relative w-40 h-40 mb-6 mt-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="mix-blend-multiply"
        />
      </div>

      {/* Content */}
      <div className="w-full text-center flex-grow flex flex-col justify-end">
        <h3 className="text-lg font-medium text-black mb-4 truncate w-full" title={product.title}>
          {product.title}
        </h3>
        
        <p className="text-xl font-bold text-black mb-6">
          ${product.price}
        </p>

        <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
}
