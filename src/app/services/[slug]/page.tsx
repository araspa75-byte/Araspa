import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Clock, CheckCircle2 } from 'lucide-react';

const serviceDetails: Record<string, {
  title: string;
  description: string;
  image: string;
  duration: string;
  benefits: string[];
  process: string[];
  pricing: { time: string; price: string }[];
}> = {
  "aroma-therapy": {
    title: "Aroma",
    description: "Organic essential oils like lavender, eucalyptus, and chamomile — worked into your muscles with slow, deliberate strokes. Great for winding down after a long week.",
    image: "/images/Aroma-Therapy.png",
    duration: "30 - 90 min",
    benefits: ["Lifts your mood noticeably", "Quiets a busy, overworked mind", "Hydrates and nourishes dry skin", "Puts you in a state of deep calm"],
    process: ["Choose your preferred scent blend", "Gentle oil application across your whole body", "Lymphatic drainage to reduce puffiness", "Finishing scalp massage"],
    pricing: [
      { time: "30 MIN", price: "₹1200/-" },
      { time: "45 MIN", price: "₹1500/-" },
      { time: "1 HOUR", price: "₹2000/-" },
      { time: "90 MIN", price: "₹2500/-" }
    ]
  },
  "balinese-therapy": {
    title: "Balinese Therapy",
    description: "An Indonesian technique that mixes gentle stretching with acupressure and warm aromatherapy oils. Loosens you up without the deep pressure.",
    image: "/images/Balinese-Therapy.png",
    duration: "30 - 90 min",
    benefits: ["Whole body feels renewed", "Stiff joints loosen up", "Helps flush out metabolic waste", "Leaves you in a deeply calm state"],
    process: ["Aromatherapy oils warmed and applied", "Gentle stretching of arms and legs", "Acupressure on key tension points", "Full-body flowing massage"],
    pricing: [
      { time: "30 MIN", price: "₹1500/-" },
      { time: "45 MIN", price: "₹1800/-" },
      { time: "1 HOUR", price: "₹2000/-" },
      { time: "90 MIN", price: "₹2500/-" }
    ]
  },
  "thai-therapy": {
    title: "Thai Therapy",
    description: "Assisted yoga-like stretches, firm acupressure, and rhythmic compressions. You don't just feel relaxed afterward — you feel taller and looser.",
    image: "/images/Thai-Therapy.png",
    duration: "30 - 90 min",
    benefits: ["Noticeably more flexible after one session", "Joint stiffness and aches ease up", "Energy levels bounce back", "Range of motion improves right away"],
    process: ["Assisted yoga-like stretches", "Firm acupressure along key lines", "Rhythmic compressions across your body", "Quiet rest period to close"],
    pricing: [
      { time: "30 MIN", price: "₹2000/-" },
      { time: "45 MIN", price: "₹2500/-" },
      { time: "1 HOUR", price: "₹3000/-" },
      { time: "90 MIN", price: "₹3500/-" }
    ]
  },
  "deep-tissue-massage": {
    title: "Deep Tissue",
    description: "Firm, targeted pressure into your deepest muscle layers. Built for stiff shoulders, tight lower backs, and pain that won't quit.",
    image: "/images/Deep-Tissue-Massage.png",
    duration: "30 - 90 min",
    benefits: ["Breaks up chronic muscle knots", "Gets stiff joints moving again", "Works through old scar tissue", "Reduces pain that's been lingering for weeks"],
    process: ["Talk through your pain points with your therapist", "Deep, targeted pressure on problem areas", "Cross-fiber friction to release tight bands", "Gentle stretching and cooldown"],
    pricing: [
      { time: "30 MIN", price: "₹2000/-" },
      { time: "45 MIN", price: "₹2500/-" },
      { time: "1 HOUR", price: "₹3200/-" },
      { time: "90 MIN", price: "₹4500/-" }
    ]
  },
  "swedish-massage": {
    title: "Swedish Therapy",
    description: "Long, flowing strokes across your whole body. This is the classic — great for first-timers, stress relief, and anyone who just wants to melt into the table.",
    image: "/images/Swedish-massage.png",
    duration: "30 - 90 min",
    benefits: ["Loosens tight, tired muscles", "Circulation improves noticeably", "Stress drops fast — you'll feel it", "Most guests sleep better that night"],
    process: ["Warm oil applied to your skin", "Long, smooth strokes covering your whole body", "Kneading and circular pressure on tight spots", "Hot towel to finish"],
    pricing: [
      { time: "30 MIN", price: "₹1500/-" },
      { time: "45 MIN", price: "₹2000/-" },
      { time: "1 HOUR", price: "₹2500/-" },
      { time: "90 MIN", price: "₹3500/-" }
    ]
  },
  "tantra": {
    title: "Tantra",
    description: "A slow, intentional practice focused on breath and energy. Designed to quiet a racing mind and bring your whole body into a deep state of calm.",
    image: "/images/Tantra.png",
    duration: "30 - 90 min",
    benefits: ["Resets your nervous system", "Mind goes genuinely quiet", "Body and mind feel reconnected", "A deep sense of stillness stays with you"],
    process: ["Guided breathing to slow your system down", "Slow energy work along the body", "Full-body therapeutic touch", "Closing meditation"],
    pricing: [
      { time: "30 MIN", price: "₹1800/-" },
      { time: "45 MIN", price: "₹2200/-" },
      { time: "1 HOUR", price: "₹2700/-" },
      { time: "90 MIN", price: "₹3500/-" }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.slug as keyof typeof serviceDetails];
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} | ARA Spa`,
    description: service.description,
  };
}

// Generate static params for SSG
export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetail({ params }: Props) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal-fixed/60 z-10" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            {service.title}
          </h1>
          <div className="inline-flex items-center text-gold bg-charcoal-fixed/80 px-6 py-2 rounded-full font-sans">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-medium">{service.duration}</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-cream p-8 md:p-16 rounded-2xl shadow-xl border border-beige -mt-32 relative z-30">
            <SectionHeading title="Overview" align="left" className="mb-6" />
            <p className="text-lg text-charcoal-light font-sans leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                      <span className="font-sans text-charcoal-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">The Process</h3>
                <ol className="space-y-4 relative border-l border-gold/30 ml-3 mb-10">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold rounded-full -left-[6.5px] top-2" />
                      <span className="font-sans text-charcoal-light block pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Pricing</h3>
                  <ul className="list-disc list-inside space-y-2 text-charcoal-light font-sans">
                    {service.pricing.map((p, idx) => (
                      <li key={idx}>
                        <span className="font-medium text-charcoal">{p.time}</span> - {p.price}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-beige flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">Book This Treatment</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Back to Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
