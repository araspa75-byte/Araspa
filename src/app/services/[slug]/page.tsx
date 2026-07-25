import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Clock, CheckCircle2 } from 'lucide-react';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

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
    image: "/images/services/aroma-therapy.jpeg",
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
    image: "/images/services/balinese-therapy.jpeg",
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
    image: "/images/services/thai-therapy.jpeg",
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
    image: "/images/services/deep-tissue-massage.jpeg",
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
    image: "/images/services/swedish-massage.jpeg",
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
    image: "/images/services/tantra-therapy.jpeg",
    duration: "30 - 90 min",
    benefits: ["Resets your nervous system", "Mind goes genuinely quiet", "Body and mind feel reconnected", "A deep sense of stillness stays with you"],
    process: ["Guided breathing to slow your system down", "Slow energy work along the body", "Full-body therapeutic touch", "Closing meditation"],
    pricing: [
      { time: "30 MIN", price: "₹1800/-" },
      { time: "45 MIN", price: "₹2200/-" },
      { time: "1 HOUR", price: "₹2700/-" },
      { time: "90 MIN", price: "₹3500/-" }
    ]
  },
  "moroccan-bath-massage": {
    title: "Moroccan Bath Massage",
    description: "An invigorating traditional cleansing ritual featuring exfoliating authentic Moroccan black soap, steam, and a full-body purifying scrub followed by a relaxing hydration massage. Leaves your skin radiant and intensely cleansed.",
    image: "/images/services/moroccan-bath-massage.jpeg",
    duration: "60 - 120 min",
    benefits: ["Deeply exfoliates dead skin cells and cleanses pores", "Stimulates healthy circulation and skin turnover", "Relieves muscle tension through purifying warmth", "Leaves whole-body skin feeling silky and luminous"],
    process: ["Gentle steam relaxation to open pores and soften skin", "Application of authentic mineral-rich Moroccan black soap", "Full-body exfoliation using a traditional kessa exfoliating glove", "Nourishing oil finish and relaxation massage"],
    pricing: [
      { time: "1 HOUR", price: "₹3000/-" },
      { time: "90 MIN", price: "₹4000/-" },
      { time: "2 HOURS", price: "₹5000/-" }
    ]
  },
  "body-scrubbing-massage": {
    title: "Body Scrubbing Massage",
    description: "A rejuvenating combination of full-body organic salt and herbal scrub exfoliation followed by a smooth, relaxing oil massage. Refreshes tired skin, removes dullness, and boosts cellular renewal.",
    image: "/images/services/body-scrubbing-massage.jpeg",
    duration: "45 - 90 min",
    benefits: ["Polishes away dull, rough surface skin", "Encourages deep lymphatic detoxification and circulation", "Prevents ingrown hairs and rough patches", "Leaves body glowing and revitalized"],
    process: ["Warm aroma infused towels applied to muscles", "Full-body thorough exfoliation with natural salts and botanicals", "Gentle rinse and warm towel cleansing", "Hydrating massage with organic botanical oils"],
    pricing: [
      { time: "45 MIN", price: "₹2000/-" },
      { time: "1 HOUR", price: "₹2500/-" },
      { time: "90 MIN", price: "₹3500/-" }
    ]
  },
  "four-hands-massage": {
    title: "Four Hands Massage",
    description: "The ultimate relaxation indulgence where two expert therapists work in seamless, choreographed harmony. With four hands gently melting away tension simultaneously, your racing mind totally surrenders to relaxation.",
    image: "/images/services/four-hands-massage.jpeg",
    duration: "60 - 90 min",
    benefits: ["Induces rapid and profound mental relaxation", "Overwhelms anxiety and stress as the mind surrenders control", "Double the tension release in half the normal time", "An unforgettable, deeply restorative spa experience"],
    process: ["Consultation with both expert therapists on focus areas", "Synchronized warm oil application across both sides of the body", "Harmonious mirror-image strokes and muscle kneading", "Coordinated scalp and foot massage conclusion"],
    pricing: [
      { time: "1 HOUR", price: "₹4500/-" },
      { time: "90 MIN", price: "₹6000/-" }
    ]
  },
  "hot-stone-massage": {
    title: "Hot Stone Massage",
    description: "Smooth, heated volcanic basalt stones are strategically placed on key energy points and glided across tight muscle bands. The gentle heat penetrates deep into muscle cores to melt persistent rigidity and relieve fatigue.",
    image: "/images/services/hot-stone-massage.jpeg",
    duration: "60 - 90 min",
    benefits: ["Deep penetrating heat relaxes stiff muscles without excessive physical pressure", "Improves blood flow and natural body warmth", "Calms the nervous system and relieves chronic stress", "Encourages deep, restful sleep and tranquility"],
    process: ["Basalt stones sanitized and perfectly heated in water bowl", "Warm oil massage to prep muscles and skin", "Placement of heated stones along spinal chakra and muscle zones", "Gliding massage using heated stones as soothing massage tools"],
    pricing: [
      { time: "1 HOUR", price: "₹2800/-" },
      { time: "90 MIN", price: "₹3800/-" }
    ]
  },
  "couple-massage": {
    title: "Couple Massage",
    description: "Share a serene, binding wellness journey with your partner or loved one in our luxury couple's spa suite. Tailored treatments side-by-side with tranquil ambient lighting, aromatic scents, and absolute privacy.",
    image: "/images/services/couple-massage.jpeg",
    duration: "60 - 90 min",
    benefits: ["Shared bonding time in a serene, peaceful luxury suite", "Customized pressure and massage styles for each individual", "Reduces relationship fatigue and invites shared relaxation", "A memorable date or celebratory anniversary retreat"],
    process: ["Individual consultations for both partners in private suite", "Side-by-side treatments performed simultaneously by two therapists", "Customized aroma oils and treatment focus for each person", "Complimentary post-treatment organic tea in relaxation lounge"],
    pricing: [
      { time: "1 HOUR (FOR TWO)", price: "₹4500/-" },
      { time: "90 MIN (FOR TWO)", price: "₹6500/-" }
    ]
  },
  "signature-massage": {
    title: "Signature Massage",
    description: "Our crown jewel therapy combining the finest techniques from Thai stretches, Balinese acupressure, Deep Tissue muscle work, and warm Aromatherapy oils into one masterpiece treatment tailored uniquely to your body.",
    image: "/images/services/signature-massage.jpeg",
    duration: "60 - 120 min",
    benefits: ["The absolute best of East and West massage philosophies combined", "Completely customized to address both surface tension and deep aches", "Restores energetic alignment while stretching out tight joints", "Our highest-rated treatment for complete rejuvenation"],
    process: ["Comprehensive posture and muscular focus assessment", "Beginning dry Thai assisted stretches to awaken joints", "Transition to Deep Tissue and Balinese techniques with signature oils", "Finishing facial acupressure, head massage, and hot herbal towel"],
    pricing: [
      { time: "1 HOUR", price: "₹3500/-" },
      { time: "90 MIN", price: "₹4500/-" },
      { time: "2 HOURS", price: "₹5500/-" }
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
          <div className="absolute inset-0 bg-charcoal-fixed/60 z-10 pointer-events-none" />
          <ImageCarousel
            images={[service.image, service.image.replace('.jpeg', '-alt.jpeg')]}
            alt={service.title}
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
                <ol className="space-y-4 relative border-l border-gold/30 ml-3">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold rounded-full -left-[6.5px] top-2" />
                      <span className="font-sans text-charcoal-light block pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
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
