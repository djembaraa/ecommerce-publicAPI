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
        
        <SectionHeader title="Payment Options" subtitle="Secure and flexible ways to pay" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Accepted Payment Methods</h3>
        <p className="leading-relaxed mb-6">We want your shopping experience to be as seamless as possible. Cyber Beauty accepts the following payment methods globally:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-center">
          <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border)]">Credit/Debit Cards</div>
          <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border)]">PayPal</div>
          <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border)]">Apple Pay</div>
          <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border)]">Google Pay</div>
        </div>
        <h4 className="font-bold text-lg mb-2">Buy Now, Pay Later</h4>
        <p className="leading-relaxed">We partner with Afterpay and Klarna to let you split your purchase into 4 interest-free payments.</p>
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
