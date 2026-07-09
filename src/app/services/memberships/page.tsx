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
        
        <SectionHeader title="VIP Memberships" subtitle="Elevate your beauty experience" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Cyber Beauty VIP</h3>
        <p className="leading-relaxed mb-4">For our most dedicated beauty enthusiasts. A VIP membership grants you unparalleled access to our ecosystem.</p>
        <div className="bg-[var(--color-primary)] text-white p-8 rounded-3xl mt-8">
          <h4 className="text-2xl font-light mb-4">The VIP Pass - $99/year</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">✓ Free expedited shipping on all orders</li>
            <li className="flex items-center gap-2">✓ 4 free virtual consultations per year</li>
            <li className="flex items-center gap-2">✓ Exclusive early access to new product launches</li>
            <li className="flex items-center gap-2">✓ 10% discount on all full-priced items</li>
          </ul>
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
