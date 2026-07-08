import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative">
        <Link href="/" className="absolute top-8 left-8 sm:left-16 lg:left-24 text-gray-500 hover:text-black flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Store
        </Link>
        
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3">Welcome Back</h1>
            <p className="text-gray-500">Please enter your details to sign in to your Cyber Beauty account.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition-colors bg-transparent" 
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-2 transition-colors bg-transparent" 
                placeholder="Enter your password" 
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2 cursor-pointer" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-black font-medium hover:underline">Forgot password?</a>
            </div>

            <button type="button" className="w-full bg-black text-white font-medium py-4 rounded-xl hover:bg-gray-800 transition-colors mt-8 shadow-lg hover:shadow-xl">
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-500 mt-10 text-sm">
            Don't have an account? <a href="#" className="text-black font-bold hover:underline">Sign up for free</a>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block w-1/2 relative bg-black">
        <Image 
          src="https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Beauty Portrait" 
          fill 
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16 text-white">
          <h2 className="text-4xl font-light mb-4">Discover Your <span className="font-bold">Signature Look.</span></h2>
          <p className="text-lg text-gray-300 font-light">Join our exclusive community of beauty enthusiasts and get early access to our newest drops.</p>
        </div>
      </div>
    </div>
  );
}
