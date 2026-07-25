import { Metadata } from 'next';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guest Reviews | ARA Spa Madhapur/Jubilee Hills — Top Rated Spa in Hyderabad',
  description: 'Read what real guests say about ARA Spa. 5-star Google reviews from people in Hyderabad who found the best spa in Madhapur/Jubilee Hills and keep coming back.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">What Guests Say</h1>
          <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
            Real reviews from real people. See why guests keep coming back.
          </p>
        </div>
      </section>

      <TestimonialsPreview />

      <section className="py-24 bg-cream border-t border-gold/10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Want to see what the fuss is about?
          </h2>
          <Link href="/contact">
            <Button size="lg" className="px-12">Book Your Appointment</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
