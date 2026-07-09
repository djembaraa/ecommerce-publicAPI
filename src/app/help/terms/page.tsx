import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";

export default function TermsPage() {
  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>
        
        <SectionHeader title="Terms of Service" subtitle="Last updated: October 2026" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">1. Acceptance of Terms</h3>
            <p className="leading-relaxed">
              By accessing and using Cyber Beauty, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">2. Privacy Policy</h3>
            <p className="leading-relaxed">
              We respect your privacy and are committed to protecting it. Our Privacy Policy governs the processing of all personal data collected from you in connection with your purchase of products or services through our website. Please review our <Link href="/help/privacy" className="text-[var(--color-accent)] hover:underline">Privacy Policy</Link> for more details.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">3. Products and Pricing</h3>
            <p className="leading-relaxed">
              All products listed on the website are subject to change, as is product pricing. Cyber Beauty reserves the right, at any time, to modify, suspend, or discontinue the sale of any product with or without notice. We are not liable to you or to any third party for any modification, price change, suspension, or discontinuance of the site.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">4. Shipping and Returns</h3>
            <p className="leading-relaxed">
              Please review our specific policies regarding Shipping and Returns. We strive to process all orders within 24 hours. Returns must be initiated within 30 days of receiving the item, and the product must be in its original packaging and unused condition.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">5. User Accounts</h3>
            <p className="leading-relaxed">
              If you create an account on our website, you are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account. You must immediately notify Cyber Beauty of any unauthorized uses of your account or any other breaches of security.
            </p>
          </section>

          <section className="bg-[var(--color-surface-alt)] p-8 rounded-3xl border border-[var(--color-border)] mt-12">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Have questions?</h3>
            <p className="mb-6">If you have any questions about these Terms, please contact us.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors">
              Contact Support
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
