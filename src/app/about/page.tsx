import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'About ARA Spa | Our Story — Madhapur/Jubilee Hills, Hyderabad',
  description: 'Meet the team behind ARA Spa. Certified therapists, organic products, private rooms — and why thousands of guests in Hyderabad keep coming back.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Who We Are</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
              A spa in Madhapur/Jubilee Hills run by people who actually care whether you feel better when you leave.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <SectionHeading title="How We Got Here" align="left" className="mb-6" />
              <div className="space-y-4 text-charcoal-light font-sans text-lg leading-relaxed">
                <ScrollReveal delay={0.2}>
                  <p>
                    ARA Spa started with a simple idea: what if a spa in Hyderabad actually felt personal? Not a conveyor belt of guests in and out. Not rushed 45-minute sessions where the therapist is watching the clock.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p>
                    We hired therapists who trained for years — including Thai specialists who learned their craft in Thailand. We sourced organic, cruelty-free oils and skincare that we’d use on ourselves. And we designed rooms that are soundproof, clean, and private enough that you actually forget you’re in the middle of Madhapur/Jubilee Hills.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <p>
                    The result? Guests who book once and keep coming back. Our 4.8-star Google rating comes from people who walked in stressed and walked out wondering why they waited so long to visit.
                  </p>
                </ScrollReveal>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="left" delay={0.3}>
                <img 
                  src="/images/A-Luxury-Spa-in-Hyderabad-for-Deep-Relaxation.png" 
                  alt="ARA Spa - Luxury Spa in Hyderabad" 
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-beige"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-cream border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionHeading title="By the Numbers" subtitle="The short version of what we’re about." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { stat: "4.8 ★", label: "Google Rating" },
              { stat: "12+", label: "Therapy Types" },
              { stat: "Pro", label: "Certified Therapists" },
              { stat: "7/7", label: "Open All Days" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-beige rounded-full flex items-center justify-center mb-4 text-gold font-bold text-xl">{item.stat}</div>
                  <p className="font-heading font-medium text-charcoal">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
