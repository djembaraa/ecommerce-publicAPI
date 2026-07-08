import Link from "next/link";
import { Hash, Globe, Mail, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-3xl font-bold tracking-wider inline-block mb-4">
              Cyber
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Hash className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Bonus program</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Gift cards</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Credit and payment</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Service contracts</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Non-cash account</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Payment</Link></li>
            </ul>
          </div>

          {/* Assistance */}
          <div>
            <h4 className="text-lg font-bold mb-6">Assistance to the buyer</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Find an order</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of delivery</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Exchange and return of goods</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Guarantee</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Frequently asked questions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of use of the site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
