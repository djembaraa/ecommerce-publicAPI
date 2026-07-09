'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request for signup
    setTimeout(() => {
      setLoading(false);
      alert('Simulated signup successful! Redirecting to login with demo credentials.');
      router.push('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative bg-[var(--color-surface)]">
        <Link href="/" className="absolute top-8 left-8 sm:left-16 lg:left-24 text-[var(--color-text-muted)] hover:text-[var(--color-text)] flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Store
        </Link>
        
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10 mt-12 sm:mt-0">
            <h1 className="text-4xl font-bold mb-3 text-[var(--color-text)]">Create Account</h1>
            <p className="text-[var(--color-text-muted)]">Join Cyber Beauty to enjoy exclusive perks and personalized recommendations.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <Input 
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                icon={<User className="w-5 h-5" />}
                required
              />
              <Input 
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
              />
            </div>
            
            <Input 
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              icon={<Mail className="w-5 h-5" />}
              required
            />
            <Input 
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              icon={<Lock className="w-5 h-5" />}
              required
            />
            
            <div className="flex items-start text-sm mt-4">
              <label className="flex items-start cursor-pointer select-none">
                <input type="checkbox" required className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] mr-3 mt-1 cursor-pointer w-4 h-4 shrink-0" />
                <span className="text-[var(--color-text-muted)] leading-relaxed">
                  I agree to the <Link href="/help/terms" className="text-[var(--color-text)] hover:text-[var(--color-accent)] font-medium underline">Terms of Service</Link> and <Link href="/help/privacy" className="text-[var(--color-text)] hover:text-[var(--color-accent)] font-medium underline">Privacy Policy</Link>.
                </span>
              </label>
            </div>

            <Button type="submit" fullWidth size="lg" loading={loading} className="mt-6">
              Create Account
            </Button>
          </form>

          <p className="text-center text-[var(--color-text-muted)] mt-10 text-sm">
            Already have an account? <Link href="/login" className="text-[var(--color-text)] font-bold hover:text-[var(--color-accent)] transition-colors">Sign in</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Decorative Image */}
      <div className="hidden lg:block w-1/2 relative bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-accent)] rounded-full mix-blend-screen blur-[150px] translate-x-1/3 -translate-y-1/3" />
        </div>
        <Image 
          src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp" 
          alt="Premium Fragrance" 
          fill 
          className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16 text-white z-10">
          <h2 className="text-4xl font-light mb-4">Elevate Your <span className="font-bold">Routine.</span></h2>
          <p className="text-lg text-gray-300 font-light max-w-md">Unlock premium benefits, faster checkout, and exclusive access to limited-edition drops.</p>
        </div>
      </div>
    </div>
  );
}
