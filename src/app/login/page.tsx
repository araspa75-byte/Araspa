"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get('callbackUrl') || '/appointments-view';

  useEffect(() => {
    // Redirect if already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push(callbackUrl);
      }
    });
  }, [router, callbackUrl]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push(callbackUrl);
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-charcoal">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
            placeholder="Enter email address..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-charcoal">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
            placeholder="Enter password..."
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gold text-charcoal-fixed font-medium rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-70"
        >
          {loading ? 'Authenticating...' : 'Access Dashboard'}
        </button>
      </form>
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4">
      <div className="max-w-md w-full bg-beige p-8 rounded-2xl shadow-sm border border-gold/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-charcoal mb-2">Secure Access</h1>
          <p className="text-charcoal-light font-sans">Please enter your email and password to view this dashboard.</p>
        </div>

        <Suspense fallback={<div className="text-center py-4 text-charcoal-light">Loading form...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
