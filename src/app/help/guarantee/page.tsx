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
        
        <SectionHeader title="Product Guarantee" subtitle="Our promise of quality" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">The Cyber Beauty Standard</h3>
        <p className="leading-relaxed mb-4">We stand behind the quality of every product we sell. All products undergo rigorous dermatological testing and quality control before they reach your hands.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)] text-center">
            <h4 className="font-bold mb-2">Authenticity</h4>
            <p className="text-sm">We guarantee 100% authenticity for all brands sold on our platform.</p>
          </div>
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)] text-center">
            <h4 className="font-bold mb-2">Freshness</h4>
            <p className="text-sm">All products are guaranteed to have at least 12 months shelf life upon arrival.</p>
          </div>
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)] text-center">
            <h4 className="font-bold mb-2">Safety</h4>
            <p className="text-sm">We strictly enforce cruelty-free and toxic-free standards.</p>
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
