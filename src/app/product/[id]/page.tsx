import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Product } from "../../types";
import StarRating from "../../components/ui/StarRating";
import Badge from "../../components/ui/Badge";
import ProductActions from "../../components/ProductActions";

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
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/#products" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="bg-[var(--color-surface-alt)] rounded-3xl p-8 aspect-square relative flex items-center justify-center border border-[var(--color-border)]">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain p-8 mix-blend-multiply"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {product.images.map((img, idx) => (
                  <div key={idx} className="bg-[var(--color-surface-alt)] rounded-2xl w-24 h-24 flex-shrink-0 relative border border-[var(--color-border)] cursor-pointer hover:border-[var(--color-primary)] hover:shadow-md transition-all">
                    <Image src={img} alt={`${product.title} - ${idx}`} fill className="object-contain p-2 mix-blend-multiply" sizes="96px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            {/* Brand & Category */}
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">
              <span>{product.category}</span>
              {product.brand && (
                <>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{product.brand}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4 tracking-tight leading-tight">{product.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <StarRating rating={product.rating} showValue size={18} />
              
              <div className="flex gap-2">
                {product.stock > 0 ? (
                  <Badge variant="success">In Stock ({product.stock})</Badge>
                ) : (
                  <Badge variant="danger">Out of Stock</Badge>
                )}
                {product.discountPercentage > 0 && (
                  <Badge variant="sale">Sale</Badge>
                )}
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] mb-10 text-lg leading-relaxed max-w-xl">
              {product.description}
            </p>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-bold text-[var(--color-text)]">
                ${product.price.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <div className="flex flex-col pb-1">
                  <span className="text-sm font-semibold text-[var(--color-danger)]">
                    -{Math.round(product.discountPercentage)}% OFF
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)] line-through decoration-[var(--color-text-muted)]">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Additional details */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-[var(--color-border)] mb-4">
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-1">Return Policy</p>
                <p className="text-sm font-medium">{product.returnPolicy || '30 days return'}</p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-1">Shipping</p>
                <p className="text-sm font-medium">{product.shippingInformation || 'Ships in 1-2 days'}</p>
              </div>
            </div>

            {/* Client Component for Actions */}
            <ProductActions product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
