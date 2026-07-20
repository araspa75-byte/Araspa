import { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'FAQ | ARA Spa — What to Know Before Your Visit',
  description: 'Answers to common questions about booking, cancellations, what to wear, therapist requests, and our organic products at ARA Spa.',
};

const faqs = [
  {
    title: "How early should I arrive for my appointment?",
    content: "About 15–20 minutes early is ideal. That gives you time to check in, have a quick chat with your therapist about what you need, and actually settle in before things start. No need to rush."
  },
  {
    title: "What should I wear to the spa?",
    content: "Whatever’s comfortable. We give you a robe and slippers when you arrive. During the treatment, you’re properly draped the whole time — privacy is a given here."
  },
  {
    title: "What is your cancellation policy?",
    content: "We ask for at least 24 hours’ notice if you need to cancel or reschedule. Less than that, and there’s a 50% fee — we hold the slot and turn away other guests, so it’s only fair."
  },
  {
    title: "Can I request a specific therapist?",
    content: "Of course. If you’ve had a great session with someone before, or if you have a preference for a male or female therapist, just tell us when you book. We’ll do our best to match you."
  },
  {
    title: "Do you offer prenatal massages?",
    content: "Yes — for expecting mothers past the first trimester. Let us know when you book so we can prepare the right setup and techniques for you."
  },
  {
    title: "Are your products organic?",
    content: "Every product we use is 100% organic and cruelty-free. We’re picky about this. If we wouldn’t put it on our own skin, it’s not going on yours."
  }
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">FAQ</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
              Questions we hear every day. If you don't see yours, just call us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-cream p-8 md:p-12 rounded-2xl shadow-lg border border-beige">
             <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
