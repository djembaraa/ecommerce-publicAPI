import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Glass Skin",
      excerpt: "Discover the 7-step Korean skincare routine that promises poreless, luminous skin without the heavy makeup.",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Oct 12, 2026"
    },
    {
      id: 2,
      title: "Top 5 Autumn Fragrances",
      excerpt: "Transition into the cooler months with these warm, woody, and subtly sweet signature scents.",
      category: "Fragrance",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Oct 08, 2026"
    },
    {
      id: 3,
      title: "Why Clean Beauty Matters",
      excerpt: "Unpacking the ingredients you should avoid and why the clean beauty movement is here to stay.",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Sep 28, 2026"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Blog Header */}
      <div className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-black tracking-tight mb-6">
          The <span className="font-bold">Editorial</span>
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Insider beauty tips, product deep-dives, and industry trends straight from our experts.
        </p>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden group cursor-pointer">
          <Image 
            src="https://images.unsplash.com/photo-1512496115851-a52bc9a39281?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Featured Article" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-white">
            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">Makeup Trends</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Mastering the "No-Makeup" Makeup Look for 2026</h2>
            <p className="text-gray-300 text-lg mb-6 line-clamp-2 md:line-clamp-none">Achieving that flawless, barely-there look requires more skincare prep than you think. Here is our definitive guide to looking effortlessly perfect.</p>
            <div className="flex items-center gap-2 font-medium hover:underline">
              Read Full Article <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-10 border-b border-gray-200 pb-4">Latest Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="font-semibold text-black uppercase tracking-wider">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">{post.title}</h4>
              <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center gap-2 font-medium text-black mt-auto">
                Read More <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
