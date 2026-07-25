import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ScrollReveal } from '@/components/ui/animations/ScrollReveal';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'All Spa Treatments | ARA Spa Madhapur/Jubilee Hills — Massage Center in Hyderabad',
  description: '12 massage and therapy options at our spa in Madhapur/Jubilee Hills Hyderabad — from deep tissue massage therapy and Swedish massage to traditional Thai massage, Balinese, and couples treatments.',
};

export const revalidate = 0; // Disable cache so database updates show immediately
export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  // Fetch services from Supabase
  const { data: services, error } = await supabase
    .from('services')
    .select('*')
    .order('order_index', { ascending: true });

  const displayServices = services || [];

  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Spa Services</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
              Every treatment explained. Pick what sounds right, or call us and we’ll help you choose.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          {error && (
            <div className="text-center text-red-500 mb-8">
              Failed to load services. Please try again later.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service: any, index: number) => (
              <ScrollReveal key={service.id || index} delay={0.1 * (index % 3)}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  duration={service.duration}
                  href={service.href}
                />
              </ScrollReveal>
            ))}
          </div>
          {displayServices.length === 0 && !error && (
            <div className="text-center text-charcoal-light py-12">
              No services found. Please check back later.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
