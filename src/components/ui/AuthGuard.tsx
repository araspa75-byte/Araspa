"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      }
    };
    
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsAuthenticated(true);
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  if (!mounted) return null; // Prevent hydration mismatch

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4">
      <div className="max-w-md w-full bg-beige p-8 rounded-2xl shadow-sm border border-gold/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-charcoal mb-2">Secure Access</h1>
          <p className="text-charcoal-light font-sans">Please enter your credentials to view this dashboard.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-charcoal">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
              placeholder="admin@example.com"
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
            {loading ? "Authenticating..." : "Access Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
