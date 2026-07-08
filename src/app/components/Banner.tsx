import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center justify-center relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-light mb-4">
          Big Summer <span className="font-bold">Sale</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="px-12 py-3 border border-white rounded-md hover:bg-white hover:text-black transition-colors">
          Shop Now
        </button>
      </div>

      {/* Decorative Images (placeholders since we don't have the exact ones) */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-50 transform -translate-x-1/4 -translate-y-1/4">
         <div className="w-full h-full bg-blue-500 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-50 transform translate-x-1/4 translate-y-1/4">
         <div className="w-full h-full bg-purple-500 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>
    </div>
  );
}
