import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      brand: "Essence",
      price: 9.99,
      quantity: 2,
      image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      brand: "Glamour Beauty",
      price: 19.99,
      quantity: 1,
      image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="bg-[#111111] text-white pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-light">Your <span className="font-bold">Cart</span></h1>
          <Link href="/#products" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Continue Shopping
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-100 p-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6">
                    <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                      <div className="relative w-24 h-24 bg-[#f6f6f6] rounded-xl flex-shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-contain p-2 mix-blend-multiply" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-black">{item.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{item.brand}</p>
                        <button className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium transition-colors">
                          <Trash2 className="h-4 w-4" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 text-left md:text-center font-medium">
                      <span className="md:hidden text-gray-500 text-sm mr-2">Price:</span>
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button className="px-3 py-1 hover:bg-gray-100 transition-colors">-</button>
                        <span className="px-3 py-1 font-medium border-x border-gray-300">{item.quantity}</span>
                        <button className="px-3 py-1 hover:bg-gray-100 transition-colors">+</button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 text-left md:text-right font-bold text-lg">
                      <span className="md:hidden text-gray-500 text-sm mr-2 font-normal">Subtotal:</span>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-black">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-black">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-black">Total</span>
                  <span className="text-3xl font-bold text-black">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Enter code" />
                  <button className="bg-gray-200 text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">Apply</button>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl">
                <ShoppingBag className="h-5 w-5" /> Proceed to Checkout
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
                {/* Mock payment icons could go here */}
                <span className="text-sm font-medium">Secure Encrypted Checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
