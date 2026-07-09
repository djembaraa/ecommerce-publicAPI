import Link from 'next/link';
import Button from './ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full bg-[var(--color-primary)] text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center section-padding px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Copy & CTA */}
        <div className="md:w-1/2 flex flex-col items-start z-10 mb-12 md:mb-0">
          <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Redefine Your <br />
            <span className="font-light italic text-gray-300">Natural Glow</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Discover the true essence of pure beauty with our curated selection of premium skincare, flawless makeup, and signature fragrances.
          </p>
          <div className="flex gap-4">
            <Button href="#products" size="lg" variant="accent">
              Shop the Collection
            </Button>
            <Button href="/about" size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              Our Story
            </Button>
          </div>
        </div>

        {/* Right Side: Imagery */}
        <div className="md:w-1/2 w-full relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            alt="Essence Mascara - Premium Beauty"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability if it ever overlaps */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

      </div>
    </div>
  );
}
