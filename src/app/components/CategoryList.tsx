import { Sparkles, Brush, FlaskConical, Scissors, Bath, ShoppingBag } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Link from "next/link";

export default function CategoryList() {
  const categories = [
    { name: "Skincare", icon: Sparkles, slug: "skin-care" },
    { name: "Makeup", icon: Brush, slug: "beauty" },
    { name: "Fragrances", icon: FlaskConical, slug: "fragrances" },
    { name: "Hair Care", icon: Scissors, slug: "beauty" }, // Fallback to beauty since dummyjson lacks this
    { name: "Bath & Body", icon: Bath, slug: "beauty" },
    { name: "Accessories", icon: ShoppingBag, slug: "beauty" },
  ];

  return (
    <div className="bg-[var(--color-surface-alt)] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          title="Browse By Category" 
          subtitle="Explore our carefully curated collections tailored for your beauty routine."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/?q=${cat.slug}`}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors text-[var(--color-text)]">
                <cat.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-[var(--color-text)] text-center group-hover:text-[var(--color-primary)]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
