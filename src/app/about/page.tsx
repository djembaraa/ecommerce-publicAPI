import Image from "next/image";
import { Leaf, ShieldCheck, HeartPulse } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-text)] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-[var(--color-primary)] overflow-hidden">
        {/* CSS Background blobs instead of external images */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-screen filter blur-[150px] opacity-10 -translate-x-1/4 translate-y-1/4" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Redefining <span className="font-light italic text-gray-300">Beauty.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Cyber Beauty is your sanctuary for premium skincare, flawless makeup, and signature fragrances.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Our <span className="font-light italic text-[var(--color-text-muted)]">Philosophy</span></h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mb-8"></div>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
            We believe that true beauty stems from confidence and self-care. At Cyber Beauty, we curate only the finest ingredients and most advanced formulas from around the world to ensure your skin receives the royal treatment it deserves.
          </p>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            Our mission is not to mask your features, but to elevate your natural glow. Every product in our catalog is a testament to quality, luxury, and visible results.
          </p>
        </div>
        <div className="md:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
          <Image 
            src="https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp" 
            alt="Skincare Philosophy" 
            fill 
            className="object-cover"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-[var(--color-surface-alt)] section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Core Values" 
            subtitle="The principles that guide everything we do and every product we select."
            className="text-center md:text-left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-[var(--color-primary)]/20">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clean Ingredients</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">Sourced ethically, formulated without harmful toxins. Pure care for your skin and the environment.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-[var(--color-primary)]/20">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clinically Proven</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">Backed by science and rigorous dermatological testing for maximum efficacy and visible results.</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-[var(--color-primary)]/20">
                <HeartPulse className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cruelty-Free</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">We love animals as much as we love beauty. None of our products or ingredients are tested on animals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
