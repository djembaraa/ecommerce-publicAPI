import Link from 'next/link';
import { FOOTER_SERVICES, FOOTER_HELP } from '../constants';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wider inline-block mb-4">
              Cyber Beauty
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your destination for premium skincare, flawless makeup, and signature fragrances. Embrace your unique glow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-white transition-all text-sm font-bold">
                X
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-white transition-all text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-white transition-all text-sm font-bold">
                FB
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Help & Support</h4>
            <ul className="space-y-3">
              {FOOTER_HELP.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for exclusive drops, beauty tips, and special offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/15 focus:border-white/20 transition-all"
              />
              <Button variant="accent" size="sm" className="shrink-0">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Cyber Beauty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/help/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Terms
            </Link>
            <Link href="/help/faq" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
