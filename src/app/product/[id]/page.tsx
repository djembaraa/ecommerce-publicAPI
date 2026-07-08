import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft, Heart, ShoppingCart } from "lucide-react";
import { Product } from "../../types";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link href="/#products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="bg-[#f6f6f6] rounded-2xl p-8 h-[500px] relative flex items-center justify-center">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain p-8 mix-blend-multiply"
            />
          </div>
          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="bg-[#f6f6f6] rounded-xl w-24 h-24 flex-shrink-0 relative border border-gray-200 cursor-pointer hover:border-black transition-colors">
                  <Image src={img} alt={`${product.title} - ${idx}`} fill className="object-contain p-2 mix-blend-multiply" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Brand & Category */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 capitalize">
            <span>{product.category}</span>
            {product.brand && (
              <>
                <span>•</span>
                <span>{product.brand}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl font-bold text-black mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-1 text-black font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-green-600 font-medium bg-green-100 px-2 py-1 rounded-md">
              In Stock: {product.stock}
            </span>
          </div>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-end gap-4 mb-8">
            <span className="text-4xl font-bold text-black">${product.price}</span>
            {product.discountPercentage > 0 && (
              <div className="flex flex-col">
                <span className="text-sm text-red-500 font-medium">-{product.discountPercentage}% OFF</span>
                <span className="text-sm text-gray-400 line-through">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto border-t border-gray-200 pt-8">
            <Link href="/cart" className="flex-1 bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-lg">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Link>
            <Link href="/wishlist" className="px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-black transition-colors flex items-center justify-center group">
              <Heart className="h-6 w-6 text-gray-400 group-hover:text-red-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
