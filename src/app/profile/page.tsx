'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { Package, MapPin, CreditCard, Heart, Settings, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-surface)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-accent)]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface)] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[var(--color-primary)] h-48 w-full relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-white hover:text-[var(--color-accent)] mb-8 transition-colors drop-shadow-md">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column - Profile Card */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-[var(--color-border)]">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-gray-100">
                  {user?.image ? (
                    <Image 
                      src={user.image} 
                      alt={`${user.firstName} ${user.lastName}`} 
                      width={128} 
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-[var(--color-text-muted)]">
                      {user?.firstName?.charAt(0)}
                    </div>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-[var(--color-text)]">{user?.firstName} {user?.lastName}</h1>
                <p className="text-[var(--color-text-muted)] text-sm mb-6">@{user?.username}</p>
                
                <div className="w-full border-t border-[var(--color-border)] pt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Email</span>
                    <span className="font-medium text-[var(--color-text)] truncate max-w-[150px]">{user?.email}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Gender</span>
                    <span className="font-medium text-[var(--color-text)] capitalize">{user?.gender || '-'}</span>
                  </div>
                </div>

                <Button 
                  variant="secondary" 
                  fullWidth 
                  className="mt-8 text-[var(--color-danger)] border-[var(--color-danger)] hover:bg-red-50"
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 space-y-6 pt-12 md:pt-0">
            
            {/* Action Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-accent)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-alt)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors mb-3">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">My Orders</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-accent)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-alt)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Addresses</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-accent)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-alt)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors mb-3">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Payments</span>
              </button>
              <Link href="/wishlist" className="flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-accent)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-alt)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Wishlist</span>
              </Link>
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text)]">Recent Orders</h2>
                <button className="text-sm text-[var(--color-accent)] hover:underline font-medium">View All</button>
              </div>
              
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[var(--color-surface-alt)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-[var(--color-text-muted)]" />
                </div>
                <h3 className="text-lg font-medium text-[var(--color-text)] mb-2">No orders yet</h3>
                <p className="text-[var(--color-text-muted)] mb-6">Looks like you haven't made your first purchase.</p>
                <Link href="/">
                  <Button variant="primary">Start Shopping</Button>
                </Link>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Account Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[var(--color-surface-alt)] transition-colors cursor-pointer border border-transparent hover:border-[var(--color-border)]">
                  <div>
                    <h4 className="font-medium text-[var(--color-text)]">Personal Information</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">Update your name, email, and phone number</p>
                  </div>
                  <Button variant="secondary" size="sm">Edit</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[var(--color-surface-alt)] transition-colors cursor-pointer border border-transparent hover:border-[var(--color-border)]">
                  <div>
                    <h4 className="font-medium text-[var(--color-text)]">Change Password</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">Ensure your account stays secure</p>
                  </div>
                  <Button variant="secondary" size="sm">Update</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[var(--color-surface-alt)] transition-colors cursor-pointer border border-transparent hover:border-[var(--color-border)]">
                  <div>
                    <h4 className="font-medium text-[var(--color-text)]">Notification Preferences</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">Manage emails, SMS, and promos</p>
                  </div>
                  <Button variant="secondary" size="sm">Manage</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
