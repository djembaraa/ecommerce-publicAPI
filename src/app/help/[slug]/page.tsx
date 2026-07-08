import Link from "next/link";
import { ArrowLeft, ChevronRight, HelpCircle } from "lucide-react";

export default async function HelpPage({ params }: { params: Promise<{ slug: string }> }) {
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
            <span className="text-gray-400">Help Center</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-black capitalize">{title}</span>
          </div>
          <div className="flex items-center gap-4">
            <HelpCircle className="h-10 w-10 text-black" />
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">{title}</h1>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-10 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-xl leading-relaxed mb-8 font-medium text-black">
            Need assistance with {title}? You've come to the right place. Browse our comprehensive support guide below to find the answers you're looking for.
          </p>
          
          <h2 className="text-2xl font-bold text-black mt-12 mb-4">General Information</h2>
          <p className="mb-6">
            At Cyber Beauty, we strive to make your shopping and beauty experience as seamless as possible. This section covers the most critical information regarding <strong>{title}</strong>. If you cannot find what you are looking for, our customer support team is always ready to assist you.
          </p>

          <div className="space-y-6 my-10">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-black mb-2">Q: How do I get more help regarding {title}?</h3>
              <p className="text-gray-600">A: You can reach out to our support team directly via the <Link href="/contact" className="text-black font-medium underline">Contact Us</Link> page. We typically respond within 24 hours.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-black mb-2">Q: Are there any specific policies I should be aware of?</h3>
              <p className="text-gray-600">A: Yes, all our standard Cyber Beauty terms apply. Please ensure you review our products' ingredients and usage guidelines carefully to ensure the best results for your skin type.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mt-12 mb-4">Additional Resources</h2>
          <p className="mb-6">
            For further reading, we recommend checking out our <Link href="/blog" className="text-black font-medium underline border-b border-black">Editorial Blog</Link> where our beauty experts share in-depth guides and tutorials that might help answer your questions.
          </p>

          <div className="bg-[#111111] text-white rounded-2xl p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
              <p className="text-gray-400">Our beauty concierges are available 24/7 to assist you.</p>
            </div>
            <Link href="/contact" className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
