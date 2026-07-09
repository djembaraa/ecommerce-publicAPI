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
        
        <SectionHeader title="Gift Cards" subtitle="The perfect gift of beauty" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Give the Gift of Choice</h3>
        <p className="leading-relaxed mb-4">Not sure what to get them? A Cyber Beauty Gift Card is always the perfect shade. Available in physical cards or instant e-gift cards.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)]">
            <h4 className="font-bold text-lg mb-2">E-Gift Cards</h4>
            <p className="text-sm">Delivered instantly via email. Perfect for last-minute gifting.</p>
          </div>
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)]">
            <h4 className="font-bold text-lg mb-2">Physical Gift Cards</h4>
            <p className="text-sm">Beautifully packaged and shipped directly to their door.</p>
          </div>
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
