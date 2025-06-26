// components/ProductCard.tsx
import { Product } from "../types";
import Image from "next/image"; // Gunakan Image component dari Next.js untuk optimasi

// Komponen ini menerima satu 'product' sebagai properti (prop)
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {/* Gambar Produk */}
      <div className="relative w-full h-48">
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Konten Teks */}
      <div className="p-4">
        <p className="text-sm  text-blue-600 mb-1">{product.category}</p>
        <h3 className="text-lg font-bold truncate text-gray-700">
          {product.title}
        </h3>
        <p className="text-gray-700 mt-2 h-30 overflow-y-auto text-ellipsis">
          {product.description}
        </p>

        {/* Info Harga */}
        <div className="flex items-baseline justify-between mt-4">
          <p className="text-xl font-semibold text-gray-700">
            ${product.price}
          </p>
          <p className="text-sm text-red-500 line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </p>
        </div>

        {/* Rating */}
        <div className="mt-2 text-yellow-700">Rating: {product.rating} ★</div>
      </div>
    </div>
  );
}
