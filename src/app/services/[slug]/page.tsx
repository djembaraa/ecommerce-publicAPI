import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default async function ServicesPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rawTitle = resolvedParams.slug.replace(/-/g, ' ');
  const title = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-400">Services</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-black capitalize">{title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">{title}</h1>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-10 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-xl leading-relaxed mb-8">
            Welcome to the Cyber Beauty <strong>{title}</strong> page. We are committed to providing our customers with world-class service that matches the quality of our premium cosmetics and skincare lines.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-12 mb-4">Overview</h2>
          <p className="mb-6">
            Our {title} program is designed to enhance your shopping experience, ensuring that you receive the highest level of care and exclusivity. We understand that beauty is personal, and our services are tailored to meet your unique needs.
          </p>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 my-10">
            <h3 className="text-xl font-bold text-black mb-4">Key Benefits</h3>
            <ul className="space-y-3 list-none p-0">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Exclusive access to premium and limited-edition beauty drops.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Personalized consultations with our in-house dermatologists and makeup artists.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Priority customer support, available 24/7 for all your inquiries.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-black mt-12 mb-4">How It Works</h2>
          <p className="mb-6">
            To take full advantage of the {title} offerings, ensure that you are logged into your Cyber Beauty account before making a purchase. Your benefits will be automatically applied at checkout, and our concierges will reach out to coordinate any personal services.
          </p>

          <hr className="my-12 border-gray-200" />
          
          <p className="text-sm text-gray-400">
            Last updated: October 2026. For more information, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
