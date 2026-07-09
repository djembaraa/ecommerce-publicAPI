import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";

export default function Page() {
  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>
        
        <SectionHeader title="Track Your Order" subtitle="See exactly where your package is" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Order Tracking</h3>
        <p className="leading-relaxed mb-6">Enter your order number and email address below to get real-time updates on your shipment.</p>
        <div className="bg-[var(--color-surface-alt)] p-8 rounded-3xl border border-[var(--color-border)] max-w-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Order Number</label>
              <input type="text" placeholder="e.g. CB-123456" className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <button type="button" className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors mt-2">Track Package</button>
          </form>
        </div>
      </section>
    
          
          <section className="bg-[var(--color-surface-alt)] p-8 rounded-3xl border border-[var(--color-border)] mt-12">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Still need help?</h3>
            <p className="mb-6">Our beauty advisors and customer support team are here for you.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
