const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

const pages = [
  {
    path: 'services/loyalty',
    title: 'Loyalty Program',
    subtitle: 'Earn rewards with every purchase',
    content: `
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
    `
  },
  {
    path: 'services/gift-cards',
    title: 'Gift Cards',
    subtitle: 'The perfect gift of beauty',
    content: `
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Give the Gift of Choice</h3>
        <p className="leading-relaxed mb-4">Not sure what to get them? A Cyber Beauty Gift Card is always the perfect shade. Available in physical cards or instant e-gift cards.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)]">
            <h4 className="font-bold text-lg mb-2">E-Gift Cards</h4>
            <p className="text-sm">Delivered instantly via email. Perfect for last-minute gifting.</p>
          </div>
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)]">
            <h4 className="font-bold text-lg mb-2">Physical Gift Cards</h4>
            <p className="text-sm">Beautifully packaged and shipped directly to their door.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'services/consultation',
    title: 'Beauty Consultation',
    subtitle: 'Expert advice tailored for you',
    content: `
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Personalized Recommendations</h3>
        <p className="leading-relaxed mb-4">Book a 1-on-1 virtual or in-store session with our beauty experts. Whether you need a full skincare routine overhaul or are searching for the perfect foundation match, we are here to help.</p>
        <p className="leading-relaxed font-bold">Services offered:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
          <li>30-minute Skincare Analysis</li>
          <li>45-minute Makeup Tutorial</li>
          <li>15-minute Fragrance Matching</li>
        </ul>
      </section>
    `
  },
  {
    path: 'services/memberships',
    title: 'VIP Memberships',
    subtitle: 'Elevate your beauty experience',
    content: `
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Cyber Beauty VIP</h3>
        <p className="leading-relaxed mb-4">For our most dedicated beauty enthusiasts. A VIP membership grants you unparalleled access to our ecosystem.</p>
        <div className="bg-[var(--color-primary)] text-white p-8 rounded-3xl mt-8">
          <h4 className="text-2xl font-light mb-4">The VIP Pass - $99/year</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">✓ Free expedited shipping on all orders</li>
            <li className="flex items-center gap-2">✓ 4 free virtual consultations per year</li>
            <li className="flex items-center gap-2">✓ Exclusive early access to new product launches</li>
            <li className="flex items-center gap-2">✓ 10% discount on all full-priced items</li>
          </ul>
        </div>
      </section>
    `
  },
  {
    path: 'services/payment',
    title: 'Payment Options',
    subtitle: 'Secure and flexible ways to pay',
    content: `
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
    `
  },
  {
    path: 'help/track-order',
    title: 'Track Your Order',
    subtitle: 'See exactly where your package is',
    content: `
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Order Tracking</h3>
        <p className="leading-relaxed mb-6">Enter your order number and email address below to get real-time updates on your shipment.</p>
        <div className="bg-[var(--color-surface-alt)] p-8 rounded-3xl border border-[var(--color-border)] max-w-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Order Number</label>
              <input type="text" placeholder="e.g. CB-123456" className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <button type="button" className="w-full py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors mt-2">Track Package</button>
          </form>
        </div>
      </section>
    `
  },
  {
    path: 'help/shipping',
    title: 'Shipping & Delivery',
    subtitle: 'Everything you need to know about our shipping policies',
    content: `
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Domestic Shipping (US)</h3>
        <p className="leading-relaxed mb-4">We process all orders within 1-2 business days. Delivery times and costs depend on the shipping method chosen at checkout:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><strong>Standard (3-5 business days):</strong> $5.99 (Free on orders over $50)</li>
          <li><strong>Expedited (2 business days):</strong> $15.00</li>
          <li><strong>Overnight (1 business day):</strong> $25.00</li>
        </ul>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">International Shipping</h3>
        <p className="leading-relaxed">We ship to over 100 countries worldwide. International shipping rates are calculated at checkout based on location and package weight. Please note that customs duties and taxes are the responsibility of the recipient.</p>
      </section>
    `
  },
  {
    path: 'help/returns',
    title: 'Returns & Exchanges',
    subtitle: 'Our 30-day satisfaction guarantee',
    content: `
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
    `
  },
  {
    path: 'help/guarantee',
    title: 'Product Guarantee',
    subtitle: 'Our promise of quality',
    content: `
      <section>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">The Cyber Beauty Standard</h3>
        <p className="leading-relaxed mb-4">We stand behind the quality of every product we sell. All products undergo rigorous dermatological testing and quality control before they reach your hands.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)] text-center">
            <h4 className="font-bold mb-2">Authenticity</h4>
            <p className="text-sm">We guarantee 100% authenticity for all brands sold on our platform.</p>
          </div>
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)] text-center">
            <h4 className="font-bold mb-2">Freshness</h4>
            <p className="text-sm">All products are guaranteed to have at least 12 months shelf life upon arrival.</p>
          </div>
          <div className="bg-[var(--color-surface-alt)] p-6 rounded-2xl border border-[var(--color-border)] text-center">
            <h4 className="font-bold mb-2">Safety</h4>
            <p className="text-sm">We strictly enforce cruelty-free and toxic-free standards.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'help/faq',
    title: 'Frequently Asked Questions',
    subtitle: 'Quick answers to common questions',
    content: `
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
    `
  }
];

const template = (title, subtitle, content, relativePrefix) => `import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "${relativePrefix}components/ui/SectionHeader";

export default function Page() {
  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>
        
        <SectionHeader title="${title}" subtitle="${subtitle}" />

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mt-12 space-y-8">
          ${content}
          
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
`;

pages.forEach(page => {
  const dirPath = path.join(baseDir, page.path);
  fs.mkdirSync(dirPath, { recursive: true });
  
  // Calculate relative path to components.
  // path is like 'services/loyalty' -> depth 2. So we need '../../'
  const depth = page.path.split('/').length;
  const relativePrefix = '../'.repeat(depth);
  
  const fileContent = template(page.title, page.subtitle, page.content, relativePrefix);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), fileContent);
  console.log('Created: ' + page.path);
});
