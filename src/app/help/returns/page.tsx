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
        
        <SectionHeader title="Returns & Exchanges" subtitle="Our 30-day satisfaction guarantee" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Return Policy</h3>
        <p className="leading-relaxed mb-6">If you are not entirely satisfied with your purchase, we're here to help. You have 30 calendar days to return an item from the date you received it.</p>
        <h4 className="font-bold text-lg mb-2">Conditions for Returns</h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Your item must be unused and in the same condition that you received it.</li>
          <li>Your item must be in the original packaging.</li>
          <li>Your item needs to have the receipt or proof of purchase.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">How to Return</h4>
        <p className="leading-relaxed">To initiate a return, please visit our Returns Portal or contact our support team. We will provide you with a prepaid shipping label. A $5.00 restocking fee will be deducted from your refund.</p>
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
