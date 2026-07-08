import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {/* Cart Items Placeholder */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6 mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">Luxury Skincare Serum</h3>
              <p className="text-gray-500 text-sm">Volume: 30ml</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-3 py-1 hover:bg-gray-100">-</button>
                <span className="px-3 py-1 border-x border-gray-300">1</span>
                <button className="px-3 py-1 hover:bg-gray-100">+</button>
              </div>
              <p className="font-bold w-20 text-right">$120.00</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 bg-gray-50 p-6 rounded-xl h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-4 text-gray-600">
            <span>Subtotal</span>
            <span>$120.00</span>
          </div>
          <div className="flex justify-between mb-4 text-gray-600">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex justify-between mb-8 font-bold text-lg">
            <span>Total</span>
            <span>$120.00</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Proceed to Checkout
          </button>
          <Link href="/" className="block text-center mt-4 text-sm text-gray-500 hover:text-black underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
