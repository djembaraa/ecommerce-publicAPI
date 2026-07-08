export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-12 text-center">Beauty Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200 w-full"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">October 24, 2026</p>
              <h2 className="text-xl font-semibold mb-2">Top 10 Skincare Routines</h2>
              <p className="text-gray-600 mb-4">Discover the best practices for maintaining a healthy and glowing skin all year round.</p>
              <button className="text-black font-medium underline">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
