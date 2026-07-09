import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";

export default async function HelpPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Help Center
        </Link>
        
        <SectionHeader title={title} subtitle="Cyber Beauty Support" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)]">
          <div className="bg-[var(--color-surface-alt)] p-8 md:p-12 rounded-3xl border border-[var(--color-border)] mb-8">
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Information Not Available</h3>
            <p className="leading-relaxed mb-6">
              The details for "{title}" are currently being updated. If you need immediate assistance regarding this topic, please don't hesitate to reach out to our customer support team.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
