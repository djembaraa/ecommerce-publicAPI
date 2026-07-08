import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[#111111] text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side: Main Feature (iPhone) */}
        <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:px-24">
          <div className="max-w-md">
            <h3 className="text-gray-400 font-semibold mb-2">Pro.Beyond.</h3>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Created to change everything for the better. For everyone.
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
          
          {/* Top Half (Playstation) */}
          <div className="h-1/2 border-b border-gray-800 flex items-center bg-white text-black p-8 relative overflow-hidden">
            <div className="relative z-10 w-2/3">
              <h2 className="text-4xl font-bold mb-2">Playstation 5</h2>
              <p className="text-gray-500 mb-4 text-sm">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
            {/* Placeholder for PS5 Image */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full bg-gray-200">
              {/* Add actual image if available */}
            </div>
          </div>

          {/* Bottom Half Grid */}
          <div className="h-1/2 flex">
            
            {/* Bottom Left: AirPods & Vision Pro */}
            <div className="w-1/2 border-r border-gray-800 flex flex-col">
              
              {/* AirPods */}
              <div className="h-1/2 border-b border-gray-800 bg-[#ededed] text-black p-6 flex flex-col justify-center relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="text-2xl font-light">Apple<br/><span className="font-bold">AirPods Max</span></h3>
                   <p className="text-gray-500 text-xs mt-2">Computational audio. Listen, it's powerful</p>
                 </div>
                 <div className="absolute right-[-20%] bottom-[-20%] w-24 h-24 bg-gray-300 rounded-full blur-2xl"></div>
              </div>
              
              {/* Vision Pro */}
              <div className="h-1/2 bg-[#353535] p-6 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-light">Apple<br/><span className="font-bold">Vision Pro</span></h3>
                  <p className="text-gray-400 text-xs mt-2">An immersive way to experience entertainment</p>
                </div>
              </div>

            </div>

            {/* Bottom Right: Macbook */}
            <div className="w-1/2 bg-[#ededed] text-black p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-light mb-2">Macbook <span className="font-bold">Air</span></h2>
                <p className="text-gray-500 text-xs mb-4">
                  The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
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
