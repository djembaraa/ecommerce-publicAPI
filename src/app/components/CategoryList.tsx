import { Smartphone, Watch, Camera, Headphones, Laptop, Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryList() {
  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Smart Watches", icon: Watch },
    { name: "Cameras", icon: Camera },
    { name: "Headphones", icon: Headphones },
    { name: "Computers", icon: Laptop },
    { name: "Gaming", icon: Gamepad2 },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Browse By Category</h2>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:text-black">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-black">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="bg-gray-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
            >
              <cat.icon className="h-10 w-10 mb-4 text-gray-800" strokeWidth={1.5} />
              <span className="text-sm font-medium text-gray-800">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
