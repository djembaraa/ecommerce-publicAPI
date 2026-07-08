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
              Cyber Beauty
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your ultimate destination for premium skincare, flawless makeup, and signature fragrances. Embrace your unique glow.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Hash className="h-5 w-5" />
              </a>
              <a href="https://cyberbeauty.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Globe className="h-5 w-5" />
              </a>
              <a href="mailto:support@cyberbeauty.com" className="text-white hover:text-gray-300">
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
              <li><Link href="/services/loyalty" className="text-gray-400 hover:text-white text-sm">Loyalty Program</Link></li>
              <li><Link href="/services/gift-cards" className="text-gray-400 hover:text-white text-sm">Gift Cards</Link></li>
              <li><Link href="/services/consultation" className="text-gray-400 hover:text-white text-sm">Beauty Consultation</Link></li>
              <li><Link href="/services/memberships" className="text-gray-400 hover:text-white text-sm">VIP Memberships</Link></li>
              <li><Link href="/services/payment" className="text-gray-400 hover:text-white text-sm">Payment Options</Link></li>
            </ul>
          </div>

          {/* Assistance */}
          <div>
            <h4 className="text-lg font-bold mb-6">Assistance to the buyer</h4>
            <ul className="space-y-4">
              <li><Link href="/help/track-order" className="text-gray-400 hover:text-white text-sm">Track Order</Link></li>
              <li><Link href="/help/shipping" className="text-gray-400 hover:text-white text-sm">Shipping & Delivery</Link></li>
              <li><Link href="/help/returns" className="text-gray-400 hover:text-white text-sm">Returns & Exchanges</Link></li>
              <li><Link href="/help/guarantee" className="text-gray-400 hover:text-white text-sm">Product Guarantee</Link></li>
              <li><Link href="/help/faq" className="text-gray-400 hover:text-white text-sm">Frequently Asked Questions</Link></li>
              <li><Link href="/help/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
