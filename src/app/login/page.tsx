"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { authenticate } from './actions';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/appointments-view';

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    try {
      const result = await authenticate(null, formData);
      if (result?.error) {
        setError(result.error);
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4">
      <div className="max-w-md w-full bg-beige p-8 rounded-2xl shadow-sm border border-gold/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-charcoal mb-2">Secure Access</h1>
          <p className="text-charcoal-light font-sans">Please enter your email and password to view this dashboard.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-6">
          <input type="hidden" name="callbackUrl" value={callbackUrl} />
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-charcoal">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
              placeholder="Enter email address..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-charcoal">Password</label>
            <input 
              type="password" 
              name="password"
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
      </div>
    </div>
  );
}
