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
        
        <SectionHeader title="Shipping & Delivery" subtitle="Everything you need to know about our shipping policies" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Domestic Shipping (US)</h3>
        <p className="leading-relaxed mb-4">We process all orders within 1-2 business days. Delivery times and costs depend on the shipping method chosen at checkout:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong>Standard (3-5 business days):</strong> $5.99 (Free on orders over $50)</li>
          <li><strong>Expedited (2 business days):</strong> $15.00</li>
          <li><strong>Overnight (1 business day):</strong> $25.00</li>
        </ul>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">International Shipping</h3>
        <p className="leading-relaxed">We ship to over 100 countries worldwide. International shipping rates are calculated at checkout based on location and package weight. Please note that customs duties and taxes are the responsibility of the recipient.</p>
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
