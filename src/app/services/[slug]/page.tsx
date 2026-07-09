import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <SectionHeader title={title} subtitle="Premium Services at Cyber Beauty" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)]">
          <p className="lead text-xl mb-8">
            Experience our exclusive {title.toLowerCase()} tailored to elevate your beauty journey.
          </p>
          <div className="bg-[var(--color-surface-alt)] p-8 rounded-3xl border border-[var(--color-border)] mb-8">
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Coming Soon</h3>
            <p>
              We are currently revamping our service offerings to provide you with an unparalleled experience. Please check back later for detailed information about this service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
