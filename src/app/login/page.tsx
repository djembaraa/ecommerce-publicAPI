'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, demoCredentials, error: authError, isLoading } = useAuth();
  
  const [username, setUsername] = useState<string>(demoCredentials.username);
  const [password, setPassword] = useState<string>(demoCredentials.password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative bg-[var(--color-surface)]">
        <Link href="/" className="absolute top-8 left-8 sm:left-16 lg:left-24 text-[var(--color-text-muted)] hover:text-[var(--color-text)] flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Store
        </Link>
        
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3 text-[var(--color-text)]">Welcome Back</h1>
            <p className="text-[var(--color-text-muted)]">Please enter your details to sign in to your Cyber Beauty account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              icon={<Mail className="w-5 h-5" />}
              required
            />
            <Input 
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              icon={<Lock className="w-5 h-5" />}
              required
            />
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer select-none">
                <input type="checkbox" className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] mr-2 cursor-pointer w-4 h-4" />
                <span className="text-[var(--color-text-muted)]">Remember me</span>
              </label>
              <a href="#" className="text-[var(--color-text)] font-medium hover:text-[var(--color-accent)] transition-colors">Forgot password?</a>
            </div>

            {authError && (
              <p className="text-[var(--color-danger)] text-sm font-medium">{authError}</p>
            )}

            <Button type="submit" fullWidth size="lg" loading={isLoading}>
              Sign In
            </Button>
            
            <div className="mt-4 p-4 bg-[var(--color-surface-alt)] rounded-xl border border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
              <p className="font-semibold mb-1 text-[var(--color-text)]">Demo Credentials:</p>
              <p>Username: <span className="font-mono bg-gray-200 px-1 rounded">{demoCredentials.username}</span></p>
              <p>Password: <span className="font-mono bg-gray-200 px-1 rounded">{demoCredentials.password}</span></p>
            </div>
          </form>

          <p className="text-center text-[var(--color-text-muted)] mt-10 text-sm">
            Don't have an account? <Link href="/signup" className="text-[var(--color-text)] font-bold hover:text-[var(--color-accent)] transition-colors">Sign up for free</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Decorative Image */}
      <div className="hidden lg:block w-1/2 relative bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-accent)] rounded-full mix-blend-screen blur-[150px] translate-x-1/3 -translate-y-1/3" />
        </div>
        <Image 
          src="https://cdn.dummyjson.com/product-images/skin-care/laneige-lip-sleeping-mask/1.webp" 
          alt="Premium Beauty" 
          fill 
          className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16 text-white z-10">
          <h2 className="text-4xl font-light mb-4">Discover Your <span className="font-bold">Signature Look.</span></h2>
          <p className="text-lg text-gray-300 font-light max-w-md">Join our exclusive community of beauty enthusiasts and get early access to our newest drops.</p>
        </div>
      </div>
    </div>
  );
}
