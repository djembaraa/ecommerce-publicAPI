import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>
        
        <SectionHeader title="Privacy Policy" subtitle="Last updated: October 2026" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">1. Information We Collect</h3>
            <p className="leading-relaxed">
              We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested, delivery notes, and other information you choose to provide.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">2. How We Use Your Information</h3>
            <p className="leading-relaxed">
              We use the information we collect about you to provide, maintain, and improve our services. This includes using the information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Process your transactions and send related information (e.g., confirmations and receipts).</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests, and provide customer service.</li>
              <li>Communicate with you about products, services, offers, and promotions.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">3. Data Security</h3>
            <p className="leading-relaxed">
              Cyber Beauty takes reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We utilize industry-standard encryption technologies when transferring and receiving consumer data.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">4. Cookies and Tracking</h3>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">5. Your Rights</h3>
            <p className="leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data. To exercise these rights, please contact us.
            </p>
          </section>

          <section className="bg-[var(--color-surface-alt)] p-8 rounded-3xl border border-[var(--color-border)] mt-12">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Privacy Concerns?</h3>
            <p className="mb-6">If you have any questions or concerns about our Privacy Policy, please reach out to our privacy team.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors">
              Contact Privacy Team
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
