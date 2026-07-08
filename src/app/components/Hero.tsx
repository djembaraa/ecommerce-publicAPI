import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[#111111] text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side: Main Feature (Perfume) */}
        <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:px-24">
          <div className="max-w-md">
            <h3 className="text-gray-400 font-semibold mb-2">Premium Collection.</h3>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
              Luxury <span className="font-bold">Essence</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Discover the true essence of pure beauty and elegance. Created to make you shine.
            </p>
            <Link 
              href="#products" 
              className="inline-block px-12 py-3 border border-white rounded-md hover:bg-white hover:text-black transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side: Grid of other products */}
        <div className="md:w-1/2 bg-[#111111] border-l border-gray-800">
          
          {/* Top Half (Skincare) */}
          <div className="h-1/2 border-b border-gray-800 flex items-center bg-white text-black p-8 relative overflow-hidden">
            <div className="relative z-10 w-2/3">
              <h2 className="text-4xl font-bold mb-2">Advanced Skincare</h2>
              <p className="text-gray-500 mb-4 text-sm">
                Revitalize your skin with our deeply hydrating and nourishing formulas. Feel the ultimate glow.
              </p>
            </div>
          </div>

          {/* Bottom Half Grid */}
          <div className="h-1/2 flex">
            
            {/* Bottom Left: Makeup & Bath */}
            <div className="w-1/2 border-r border-gray-800 flex flex-col">
              
              {/* Makeup */}
              <div className="h-1/2 border-b border-gray-800 bg-[#ededed] text-black p-6 flex flex-col justify-center relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="text-2xl font-light">Flawless<br/><span className="font-bold">Makeup</span></h3>
                   <p className="text-gray-500 text-xs mt-2">Enhance your natural beauty flawlessly.</p>
                 </div>
                 <div className="absolute right-[-20%] bottom-[-20%] w-24 h-24 bg-[#ffb6c1] rounded-full blur-2xl opacity-50"></div>
              </div>
              
              {/* Bath */}
              <div className="h-1/2 bg-[#353535] p-6 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-light">Bath &<br/><span className="font-bold">Body Care</span></h3>
                  <p className="text-gray-400 text-xs mt-2">A soothing experience for everyday luxury.</p>
                </div>
              </div>

            </div>

            {/* Bottom Right: Signature Perfumes */}
            <div className="w-1/2 bg-[#ededed] text-black p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-light mb-2">Signature <span className="font-bold">Scents</span></h2>
                <p className="text-gray-500 text-xs mb-4">
                  Find the perfect fragrance that matches your unique personality and style.
                </p>
                <Link 
                  href="#products" 
                  className="inline-block px-8 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors text-sm"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
