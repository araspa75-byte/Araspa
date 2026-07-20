import { Metadata } from 'next';
import { ContactPreview } from '@/components/sections/ContactPreview';
import { ContactForm } from '@/components/ui/ContactForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact & Book | ARA Spa — Massage Center in Madhapur, Hyderabad',
  description: 'Book your appointment at ARA Spa. Call, WhatsApp, or fill out the form. A luxury spa near Hitech City in Madhapur, Hyderabad — open 9:30 AM to 10 PM, every day.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
              Have a question or ready to book? Here’s how to reach us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Book Your Appointment" 
            subtitle="Tell us what you need and when. We’ll confirm your slot within a few hours."
          />
          <ScrollReveal delay={0.4} direction="up">
            <div className="max-w-3xl mx-auto mt-12">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactPreview />
    </>
  );
}
