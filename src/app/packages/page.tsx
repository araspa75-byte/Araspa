import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/animations/ScrollReveal';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Spa Packages | ARA Spa — Bundled Treatments, Better Value',
  description: 'Multi-treatment packages at ARA Spa. The Executive Reset (2 hrs), Signature Day (4 hrs), and Romantic Escape for couples. See what’s included.',
};

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function PackagesPage() {
  // Fetch packages from Supabase
  const { data: packages, error } = await supabase
    .from('packages')
    .select('*')
    .order('order_index', { ascending: true });

  const displayPackages = packages || [];

  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Wellness Packages</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
              Multiple treatments bundled together. Better value, less decision-making.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          {error && (
            <div className="text-center text-red-500 mb-8">
              Failed to load packages. Please try again later.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {displayPackages.map((pkg: any, index: number) => (
              <ScrollReveal key={pkg.id || index} delay={0.1 * index} className="h-full">
                <div 
                  className={`bg-cream rounded-2xl shadow-xl border relative flex flex-col h-full ${pkg.is_popular ? 'border-gold shadow-gold/10' : 'border-beige'} overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
                >
                  {pkg.is_popular && (
                    <div className="bg-gold text-white text-xs font-bold uppercase tracking-wider text-center py-2">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">{pkg.name}</h3>
                    <div className="text-gold font-sans font-medium mb-4">{pkg.duration}</div>
                    <p className="text-charcoal-light font-sans mb-8 text-sm">{pkg.description}</p>
                    
                    <div className="text-3xl font-heading font-bold text-charcoal mb-8 pb-8 border-b border-beige">
                      {pkg.price}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {(pkg.features || []).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                          <span className="font-sans text-charcoal-light text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Link href="/contact">
                      <Button variant={pkg.is_popular ? 'default' : 'outline'} className="w-full">
                        Book Package
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {displayPackages.length === 0 && !error && (
            <div className="text-center text-charcoal-light py-12">
              No packages found. Please check back later.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
