import Button from './ui/Button';

export default function Banner() {
  return (
    <div className="w-full relative overflow-hidden bg-black text-white py-24 md:py-32">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-10 text-center">
        <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
          Exclusive Offer
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          The Summer <span className="font-light italic text-gray-300">Beauty Edit</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg leading-relaxed text-lg">
          Refresh your routine with our seasonal curation of lightweight skincare and vibrant makeup essentials.
        </p>
        <Button href="#products" size="lg" variant="accent">
          Explore the Edit
        </Button>
      </div>

      {/* Modern CSS Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20 transform -translate-x-1/3 -translate-y-1/3 pointer-events-none">
         <div className="w-full h-full bg-[var(--color-accent)] rounded-full mix-blend-screen blur-[100px]"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
         <div className="w-full h-full bg-white rounded-full mix-blend-screen blur-[120px]"></div>
      </div>
    </div>
  );
}
