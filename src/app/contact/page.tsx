'use client';

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message. We'll get back to you shortly.");
  };

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-[var(--color-text)] mb-4 leading-tight">
            Get in <span className="font-light italic text-[var(--color-text-muted)]">Touch</span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            Whether you have a question about our products, need beauty advice, or want to partner with us, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 bg-[var(--color-surface-alt)] p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold mb-8 text-[var(--color-text)]">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="First Name" placeholder="Jane" required />
                <Input label="Last Name" placeholder="Doe" required />
              </div>
              <Input label="Email Address" type="email" placeholder="jane@example.com" required />
              
              <div className="w-full">
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-[var(--color-surface-alt)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                >
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="w-full">
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Message</label>
                <textarea 
                  rows={5} 
                  required
                  className="w-full px-4 py-3 bg-[var(--color-surface-alt)] border border-[var(--color-border)] rounded-xl text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200 resize-none" 
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              
              <Button type="submit" fullWidth size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 text-[var(--color-text)] tracking-tight">Contact <span className="font-light italic text-[var(--color-text-muted)]">Information</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mt-1 shadow-md shadow-[var(--color-primary)]/20">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Our Studio</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    123 Beauty Boulevard, Suite 400<br />
                    Beverly Hills, CA 90210<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mt-1 shadow-md shadow-[var(--color-primary)]/20">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Call Us</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    +1 (800) 123-4567<br />
                    <span className="text-sm">Toll-free across North America</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mt-1 shadow-md shadow-[var(--color-primary)]/20">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Email Us</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    hello@cyberbeauty.com<br />
                    support@cyberbeauty.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mt-1 shadow-md shadow-[var(--color-primary)]/20">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">Business Hours</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                    Saturday: 10:00 AM - 4:00 PM (PST)<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
