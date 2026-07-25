import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { supabase } from '@/lib/supabase';

// Fallback services in case Supabase fetch fails
const fallbackServices = [
  {
    title: "Aroma Therapy",
    description: "Organic essential oils like lavender, eucalyptus, and chamomile — worked into your muscles with slow, deliberate strokes. Great for winding down after a long week. Pricing: 30 Min (₹1200) | 45 Min (₹1500) | 1 Hour (₹2000) | 90 Min (₹2500)",
    image: "/images/services/aroma-therapy.jpeg",
    duration: "30 - 90 min",
    href: "/services/aroma-therapy"
  },
  {
    title: "Balinese Therapy",
    description: "An Indonesian technique that mixes gentle stretching with acupressure and warm aromatherapy oils. Loosens you up without the deep pressure. Pricing: 30 Min (₹1500) | 45 Min (₹1800) | 1 Hour (₹2000) | 90 Min (₹2500)",
    image: "/images/services/balinese-therapy.jpeg",
    duration: "30 - 90 min",
    href: "/services/balinese-therapy"
  },
  {
    title: "Deep Tissue",
    description: "Firm, targeted pressure into your deepest muscle layers. Built for stiff shoulders, tight lower backs, and pain that won't quit. Pricing: 30 Min (₹2000) | 45 Min (₹2500) | 1 Hour (₹3200) | 90 Min (₹4500)",
    image: "/images/services/deep-tissue-massage.jpeg",
    duration: "30 - 90 min",
    href: "/services/deep-tissue-massage"
  },
  {
    title: "Swedish Therapy",
    description: "Long, flowing strokes across your whole body. This is the classic — great for first-timers, stress relief, and anyone who just wants to melt into the table. Pricing: 30 Min (₹1500) | 45 Min (₹2000) | 1 Hour (₹2500) | 90 Min (₹3500)",
    image: "/images/services/swedish-massage.jpeg",
    duration: "30 - 90 min",
    href: "/services/swedish-massage"
  },
  {
    title: "Thai Therapy",
    description: "Assisted yoga-like stretches, firm acupressure, and rhythmic compressions. You don't just feel relaxed afterward — you feel taller and looser. Pricing: 30 Min (₹2000) | 45 Min (₹2500) | 1 Hour (₹3000) | 90 Min (₹3500)",
    image: "/images/services/thai-therapy.jpeg",
    duration: "30 - 90 min",
    href: "/services/thai-therapy"
  },
  {
    title: "Tantra Therapy",
    description: "A deeply spiritual and relaxing experience designed to harmonize your body and mind through specialized touch and energy flow techniques.",
    image: "/images/services/tantra-therapy.jpeg",
    duration: "60 - 90 min",
    href: "/services/tantra"
  },
  {
    title: "Moroccan Bath Massage",
    description: "An invigorating traditional cleansing ritual featuring exfoliating authentic Moroccan black soap, steam, and a full-body purifying scrub followed by a relaxing hydration massage. Pricing: 1 Hour (₹3000) | 90 Min (₹4000) | 2 Hours (₹5000)",
    image: "/images/services/moroccan-bath-massage.jpeg",
    duration: "60 - 120 min",
    href: "/services/moroccan-bath-massage"
  },
  {
    title: "Body Scrubbing Massage",
    description: "A rejuvenating combination of full-body organic salt and herbal scrub exfoliation followed by a smooth, relaxing oil massage. Refreshes tired skin, removes dullness, and boosts cellular renewal. Pricing: 45 Min (₹2000) | 1 Hour (₹2500) | 90 Min (₹3500)",
    image: "/images/services/body-scrubbing-massage.jpeg",
    duration: "45 - 90 min",
    href: "/services/body-scrubbing-massage"
  },
  {
    title: "Four Hands Massage",
    description: "The ultimate relaxation indulgence where two expert therapists work in seamless, choreographed harmony. With four hands gently melting away tension simultaneously, your racing mind totally surrenders. Pricing: 1 Hour (₹4500) | 90 Min (₹6000)",
    image: "/images/services/four-hands-massage.jpeg",
    duration: "60 - 90 min",
    href: "/services/four-hands-massage"
  },
  {
    title: "Hot Stone Massage",
    description: "Smooth, heated volcanic basalt stones are strategically placed on key energy points and glided across tight muscle bands. The gentle heat penetrates deep into muscle cores to melt persistent rigidity. Pricing: 1 Hour (₹2800) | 90 Min (₹3800)",
    image: "/images/services/hot-stone-massage.jpeg",
    duration: "60 - 90 min",
    href: "/services/hot-stone-massage"
  },
  {
    title: "Couple Massage",
    description: "Share a serene, binding wellness journey with your partner or loved one in our luxury couple's spa suite. Tailored treatments side-by-side with tranquil ambient lighting, aromatic scents, and absolute privacy. Pricing: 1 Hour (₹4500 for two) | 90 Min (₹6500 for two)",
    image: "/images/services/couple-massage.jpeg",
    duration: "60 - 90 min",
    href: "/services/couple-massage"
  },
  {
    title: "Signature Massage",
    description: "Our crown jewel therapy combining the finest techniques from Thai stretches, Balinese acupressure, Deep Tissue muscle work, and warm Aromatherapy oils into one masterpiece treatment. Pricing: 1 Hour (₹3500) | 90 Min (₹4500) | 2 Hours (₹5500)",
    image: "/images/services/signature-massage.jpeg",
    duration: "60 - 120 min",
    href: "/services/signature-massage"
  }
];

export async function ServicesPreview() {
  // Fetch all services from Supabase
  const { data: services, error } = await supabase
    .from('services')
    .select('*')
    .order('order_index', { ascending: true });

  const displayServices = (services && services.length > 0) ? services : fallbackServices;

  return (
    <section className="py-24 bg-cream transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading 
            title="Our Services" 
            subtitle="Explore our complete range of treatments, from deep tissue relief to traditional therapies."
            align="left"
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service: any, index: number) => (
            <ServiceCard 
              key={service.id || index} 
              title={service.title}
              description={service.description}
              image={service.image}
              duration={service.duration}
              href={service.href || `/#booking`}
              className="h-full" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
