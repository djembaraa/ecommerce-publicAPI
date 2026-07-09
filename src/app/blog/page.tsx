import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Glass Skin",
      excerpt: "Discover the 7-step Korean skincare routine that promises poreless, luminous skin without the heavy makeup.",
      category: "Skincare",
      image: "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
      date: "Oct 12, 2026"
    },
    {
      id: 2,
      title: "Top 5 Autumn Fragrances",
      excerpt: "Transition into the cooler months with these warm, woody, and subtly sweet signature scents.",
      category: "Fragrance",
      image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      date: "Oct 08, 2026"
    },
    {
      id: 3,
      title: "Why Clean Beauty Matters",
      excerpt: "Unpacking the ingredients you should avoid and why the clean beauty movement is here to stay.",
      category: "Wellness",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
      date: "Sep 28, 2026"
    }
  ];

  return (
    <div className="bg-[var(--color-surface)] min-h-screen pb-24 text-[var(--color-text)]">
      {/* Blog Header */}
      <div className="section-padding px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          The <span className="font-light italic text-[var(--color-text-muted)]">Editorial</span>
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] font-light leading-relaxed">
          Insider beauty tips, product deep-dives, and industry trends straight from our experts.
        </p>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden group cursor-pointer border border-[var(--color-border)] shadow-xl">
          <Image 
            src="https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp" 
            alt="Featured Article" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-white z-10">
            <Badge variant="new" className="mb-4">Makeup Trends</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Mastering the "No-Makeup" Makeup Look for 2026</h2>
            <p className="text-gray-300 text-lg mb-6 line-clamp-2 md:line-clamp-none leading-relaxed">Achieving that flawless, barely-there look requires more skincare prep than you think. Here is our definitive guide to looking effortlessly perfect.</p>
            <div className="flex items-center gap-2 font-medium hover:text-[var(--color-accent)] transition-colors">
              Read Full Article <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Latest Articles" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6 border border-[var(--color-border)] shadow-sm group-hover:shadow-md transition-all">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)] mb-3">
                <span className="font-semibold text-[var(--color-text)] uppercase tracking-wider">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{post.title}</h4>
              <p className="text-[var(--color-text-muted)] line-clamp-3 mb-4 flex-grow leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-2 font-medium text-[var(--color-text)] mt-auto group-hover:text-[var(--color-accent)] transition-colors">
                Read More <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
