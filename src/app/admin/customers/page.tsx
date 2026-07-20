"use client";

import { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      const { data: submissions, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error("Error fetching customers:", error);
        setError(true);
        setLoading(false);
        return;
      }

      // Process unique customers using two-pass identity merge
      const phoneToEmail = new Map();
      const emailToPhone = new Map();
      
      if (submissions) {
          // First pass: Build associations
          submissions.forEach((sub: any) => {
              const phone = sub.phone ? String(sub.phone).replace(/\D/g, '').slice(-10) : null;
              const email = sub.email ? String(sub.email).toLowerCase().trim() : null;
              
              if (phone && email) {
                  phoneToEmail.set(phone, email);
                  emailToPhone.set(email, phone);
              }
          });
      }

      const customersMap = new Map();
      
      if (submissions) {
          submissions.forEach((sub: any) => {
              const phone = sub.phone ? String(sub.phone).replace(/\D/g, '').slice(-10) : null;
              const email = sub.email ? String(sub.email).toLowerCase().trim() : null;
              
              let identifier = null;
              
              if (phone && phone.length >= 10) {
                  identifier = phone;
              } else if (email) {
                  // If we only have email, check if it maps to a known phone
                  identifier = emailToPhone.get(email) || email;
              } else if (phone) {
                  // Fallback for short phones
                  identifier = phone;
              }

              if (identifier && !customersMap.has(identifier)) {
                  customersMap.set(identifier, {
                      name: sub.name,
                      email: sub.email,
                      phone: sub.phone,
                      lastVisit: sub.created_at,
                      totalBookings: 1
                  });
              } else if (identifier) {
                  const existing = customersMap.get(identifier);
                  existing.totalBookings += 1;
                  // Merge best available contact info if missing on first observed record
                  if (!existing.email && sub.email) existing.email = sub.email;
                  if (!existing.phone && sub.phone) existing.phone = sub.phone;
                  
                  customersMap.set(identifier, existing);
              }
          });
      }

      setCustomers(Array.from(customersMap.values()));
      setLoading(false);
    }
    
    fetchCustomers();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Customers</h1>
          <p className="text-charcoal-light mt-1 font-sans">Directory of all clients who have contacted the spa.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gold text-charcoal-fixed rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors w-full sm:w-auto font-sans shadow-sm cursor-not-allowed opacity-50" title="Coming soon">
          <Plus size={16} />
          Add Customer
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 font-sans">
          Failed to load customers from the database.
        </div>
      )}

      <div className="bg-beige rounded-xl shadow-sm border border-gold/20 overflow-hidden">
        <div className="p-4 border-b border-gold/20">
            <div className="relative w-full sm:w-96 font-sans">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                <input 
                    type="text" 
                    placeholder="Search customers by name, email or phone..." 
                    className="w-full pl-10 pr-4 py-2 bg-cream/50 border border-gold/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder:text-charcoal-light/70 cursor-not-allowed"
                    disabled
                    title="Search coming soon"
                />
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap font-sans">
            <thead className="bg-cream/50 text-charcoal-light border-b border-gold/20">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Contact Info</th>
                <th className="px-6 py-4 font-medium">Total Inquiries</th>
                <th className="px-6 py-4 font-medium">Last Contact</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {loading ? (
                <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-charcoal-light">
                        <div className="flex justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-forest"></div></div>
                    </td>
                </tr>
              ) : customers.length === 0 && !error ? (
                <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-charcoal-light">
                        No customers found.
                    </td>
                </tr>
              ) : null}
              {customers.map((customer: any, idx: number) => (
                  <tr key={idx} className="hover:bg-cream/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">{customer.name}</div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-charcoal">{customer.email || 'N/A'}</div>
                        <div className="text-xs text-charcoal-light">{customer.phone || 'N/A'}</div>
                    </td>
                    <td className="px-6 py-4 text-charcoal">{customer.totalBookings}</td>
                    <td className="px-6 py-4 text-charcoal">{formatDate(customer.lastVisit)}</td>
                    <td className="px-6 py-4 text-right">
                        <button className="text-forest hover:text-forest-dark hover:underline font-medium text-sm cursor-not-allowed opacity-50" title="Coming soon">View Profile</button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
