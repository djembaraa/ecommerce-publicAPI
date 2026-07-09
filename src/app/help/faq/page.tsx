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
        
        <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers to common questions" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section className="space-y-6">
        <div>
          <h4 className="font-bold text-lg mb-2">Are your products cruelty-free?</h4>
          <p className="leading-relaxed text-[var(--color-text-muted)]">Yes, absolutely. Cyber Beauty has a strict no-animal-testing policy. All brands on our platform must prove they are 100% cruelty-free.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Do you offer samples?</h4>
          <p className="leading-relaxed text-[var(--color-text-muted)]">Yes! Every order includes 3 complimentary samples of your choice at checkout.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">How can I change my order?</h4>
          <p className="leading-relaxed text-[var(--color-text-muted)]">Orders can be modified or cancelled within 1 hour of placement. Please contact customer support immediately for assistance.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">What if I have an allergic reaction?</h4>
          <p className="leading-relaxed text-[var(--color-text-muted)]">If you experience an adverse reaction to any product, please discontinue use immediately. We will issue a full refund for any product that causes an allergic reaction within 30 days of purchase.</p>
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
