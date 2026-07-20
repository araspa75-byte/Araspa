"use client";

import { useState, useEffect } from 'react';
import { CalendarCheck, DollarSign, Users, TrendingUp } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState({
    appointmentsCount: 0,
    servicesCount: 0,
    uniqueCustomers: 0,
    recentAppointments: [] as any[]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
        const [
            { count: apptCount, data: recentData }, 
            { count: srvCount }, 
            { data: allSubmissions }
        ] = await Promise.all([
            supabase.from('contact_submissions').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(5),
            supabase.from('services').select('*', { count: 'exact', head: true }),
            supabase.from('contact_submissions').select('email, phone')
        ]);

        let uniqueCount = 0;
        if (allSubmissions) {
            const phoneToEmail = new Map();
            const emailToPhone = new Map();
            
            // First pass: Build associations
            allSubmissions.forEach(sub => {
                const phone = sub.phone ? String(sub.phone).replace(/\D/g, '').slice(-10) : null;
                const email = sub.email ? String(sub.email).toLowerCase().trim() : null;
                
                if (phone && email) {
                    phoneToEmail.set(phone, email);
                    emailToPhone.set(email, phone);
                }
            });

            const uniqueIdentities = new Set();

            // Second pass: Count unique identities
            allSubmissions.forEach(sub => {
                const phone = sub.phone ? String(sub.phone).replace(/\D/g, '').slice(-10) : null;
                const email = sub.email ? String(sub.email).toLowerCase().trim() : null;
                
                let identity = null;
                
                if (phone && phone.length >= 10) {
                    identity = phone;
                } else if (email) {
                    // If we only have email, check if it maps to a known phone
                    identity = emailToPhone.get(email) || email;
                } else if (phone) {
                     // Fallback for short phones
                     identity = phone;
                }
                
                if (identity) {
                    uniqueIdentities.add(identity);
                }
            });
            
            uniqueCount = uniqueIdentities.size;
        }

        setMetrics({
            appointmentsCount: apptCount || 0,
            servicesCount: srvCount || 0,
            uniqueCustomers: uniqueCount,
            recentAppointments: recentData || []
        });
        setLoading(false);
    }
    fetchMetrics();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-charcoal">Dashboard Overview</h1>
        <p className="text-charcoal-light mt-2 font-sans">Welcome back to the Ara Spa CRM.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-beige p-6 rounded-xl shadow-sm border border-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-light">Total Inquiries</p>
              <h3 className="text-2xl font-bold text-charcoal mt-1">
                {loading ? <div className="h-8 w-16 bg-cream animate-pulse rounded mt-1"></div> : metrics.appointmentsCount}
              </h3>
            </div>
            <div className="p-3 bg-forest/10 rounded-lg">
              <CalendarCheck className="w-6 h-6 text-forest" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-charcoal-light">All time requests</span>
          </div>
        </div>

        <div className="bg-beige p-6 rounded-xl shadow-sm border border-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-light">Unique Customers</p>
              <h3 className="text-2xl font-bold text-charcoal mt-1">
                {loading ? <div className="h-8 w-16 bg-cream animate-pulse rounded mt-1"></div> : metrics.uniqueCustomers}
              </h3>
            </div>
            <div className="p-3 bg-gold/10 rounded-lg">
              <Users className="w-6 h-6 text-gold-dark" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-charcoal-light">From contact forms</span>
          </div>
        </div>

        <div className="bg-beige p-6 rounded-xl shadow-sm border border-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-light">Active Services</p>
              <h3 className="text-2xl font-bold text-charcoal mt-1">
                {loading ? <div className="h-8 w-16 bg-cream animate-pulse rounded mt-1"></div> : metrics.servicesCount}
              </h3>
            </div>
            <div className="p-3 bg-forest/10 rounded-lg">
              <TrendingUp className="w-6 h-6 text-forest" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-charcoal-light">Listed on website</span>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-beige rounded-xl shadow-sm border border-gold/20 overflow-hidden">
        <div className="p-6 border-b border-gold/20 flex justify-between items-center">
          <h2 className="text-lg font-heading font-bold text-charcoal">Recent Inquiries</h2>
          <a href="/admin/appointments" className="text-sm text-gold hover:text-gold-dark hover:underline">View All</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-sans">
            <thead className="bg-cream/50 text-charcoal-light">
              <tr>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Pref. Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-charcoal-light">
                        <div className="flex justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-forest"></div></div>
                    </td>
                </tr>
              ) : metrics.recentAppointments.length === 0 ? (
                <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-charcoal-light">
                        No recent inquiries.
                    </td>
                </tr>
              ) : null}
              {metrics.recentAppointments.map((apt: any) => (
                  <tr key={apt.id} className="hover:bg-cream/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">{apt.name}</div>
                      <div className="text-xs text-charcoal-light">{apt.email || apt.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-charcoal capitalize">{apt.service ? apt.service.replace('-', ' ') : 'Not specified'}</td>
                    <td className="px-6 py-4 text-charcoal">{formatDate(apt.preferred_date)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-bold border shadow-sm rounded-full ${
                        apt.status?.toLowerCase() === 'confirmed' ? 'bg-forest text-cream-fixed border-forest-dark' :
                        apt.status?.toLowerCase() === 'completed' ? 'bg-charcoal text-cream-fixed border-charcoal-dark' :
                        apt.status?.toLowerCase() === 'cancelled' ? 'bg-red-600 text-white border-red-700' :
                        'bg-gold text-charcoal-fixed border-gold-dark'
                      }`}>
                        {apt.status || 'Pending'}
                      </span>
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
