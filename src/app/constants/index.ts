// ──────────────────────────────────────────────
// API
// ──────────────────────────────────────────────

export const API_BASE_URL = 'https://dummyjson.com';

// ──────────────────────────────────────────────
// Categories
// ──────────────────────────────────────────────

export const BEAUTY_CATEGORIES = ['beauty', 'fragrances', 'skin-care'] as const;

export type BeautyCategory = (typeof BEAUTY_CATEGORIES)[number];

// ──────────────────────────────────────────────
// Demo credentials (DummyJSON test user)
// ──────────────────────────────────────────────

export const DEMO_CREDENTIALS = {
  username: 'emilys',
  password: 'emilyspass',
} as const;

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

// ──────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────

export const FOOTER_SERVICES = [
  { label: 'Loyalty Program', href: '/services/loyalty' },
  { label: 'Gift Cards', href: '/services/gift-cards' },
  { label: 'Beauty Consultation', href: '/services/consultation' },
  { label: 'VIP Memberships', href: '/services/memberships' },
  { label: 'Payment Options', href: '/services/payment' },
] as const;

export const FOOTER_HELP = [
  { label: 'Track Order', href: '/help/track-order' },
  { label: 'Shipping & Delivery', href: '/help/shipping' },
  { label: 'Returns & Exchanges', href: '/help/returns' },
  { label: 'Product Guarantee', href: '/help/guarantee' },
  { label: 'FAQ', href: '/help/faq' },
  { label: 'Terms of Service', href: '/help/terms' },
] as const;
