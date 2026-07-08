import Image from "next/image";
import { Leaf, ShieldCheck, HeartPulse } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-[#111111] overflow-hidden">
        {/* Placeholder for a beautiful background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-6">
            Redefining <span className="font-bold">Beauty.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            Cyber Beauty is your sanctuary for premium skincare, flawless makeup, and signature fragrances.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-light mb-6">Our <span className="font-bold">Philosophy</span></h2>
          <div className="w-20 h-1 bg-black mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We believe that true beauty stems from confidence and self-care. At Cyber Beauty, we curate only the finest ingredients and most advanced formulas from around the world to ensure your skin receives the royal treatment it deserves.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is not to mask your features, but to elevate your natural glow. Every product in our catalog is a testament to quality, luxury, and visible results.
          </p>
        </div>
        <div className="md:w-1/2 relative h-[500px] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Skincare Philosophy" 
            fill 
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light">Core <span className="font-bold">Values</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clean Ingredients</h3>
              <p className="text-gray-600">Sourced ethically, formulated without harmful toxins. Pure care for your skin.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clinically Proven</h3>
              <p className="text-gray-600">Backed by science and rigorous dermatological testing for maximum efficacy.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <HeartPulse className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cruelty-Free</h3>
              <p className="text-gray-600">We love animals as much as we love beauty. None of our products are tested on animals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
