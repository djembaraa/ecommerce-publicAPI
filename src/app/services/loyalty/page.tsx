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
        
        <SectionHeader title="Loyalty Program" subtitle="Earn rewards with every purchase" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Cyber Beauty Rewards</h3>
        <p className="leading-relaxed mb-4">Join our exclusive loyalty program and earn points for every dollar spent. Unlock premium benefits, early access to sales, and special birthday gifts.</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
          <li><strong>Silver Tier:</strong> 1 point per $1 spent</li>
          <li><strong>Gold Tier:</strong> 1.5 points per $1 spent, plus free standard shipping</li>
          <li><strong>Platinum Tier:</strong> 2 points per $1 spent, free priority shipping, and exclusive events</li>
        </ul>
        <p className="leading-relaxed">Sign up today and get a bonus 500 points to start your journey.</p>
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
