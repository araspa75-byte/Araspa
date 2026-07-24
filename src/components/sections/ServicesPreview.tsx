import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { supabase } from '@/lib/supabase';

// Fallback services in case Supabase fetch fails
const fallbackServices = [
  {
    title: "Aroma Therapy",
    description: "Organic essential oils like lavender, eucalyptus, and chamomile — worked into your muscles with slow, deliberate strokes. Great for winding down after a long week. Pricing: 30 Min (₹1200) | 45 Min (₹1500) | 1 Hour (₹2000) | 90 Min (₹2500)",
    image: "/images/Aroma-Therapy.png",
    duration: "30 - 90 min",
    href: "/services/aroma-therapy"
  },
  {
    title: "Balinese Therapy",
    description: "An Indonesian technique that mixes gentle stretching with acupressure and warm aromatherapy oils. Loosens you up without the deep pressure. Pricing: 30 Min (₹1500) | 45 Min (₹1800) | 1 Hour (₹2000) | 90 Min (₹2500)",
    image: "/images/Balinese-Therapy.png",
    duration: "30 - 90 min",
    href: "/services/balinese-therapy"
  },
  {
    title: "Deep Tissue",
    description: "Firm, targeted pressure into your deepest muscle layers. Built for stiff shoulders, tight lower backs, and pain that won't quit. Pricing: 30 Min (₹2000) | 45 Min (₹2500) | 1 Hour (₹3200) | 90 Min (₹4500)",
    image: "/images/Deep-Tissue-Massage.png",
    duration: "30 - 90 min",
    href: "/services/deep-tissue-massage"
  },
  {
    title: "Swedish Therapy",
    description: "Long, flowing strokes across your whole body. This is the classic — great for first-timers, stress relief, and anyone who just wants to melt into the table. Pricing: 30 Min (₹1500) | 45 Min (₹2000) | 1 Hour (₹2500) | 90 Min (₹3500)",
    image: "/images/Swedish-massage.png",
    duration: "30 - 90 min",
    href: "/services/swedish-massage"
  },
  {
    title: "Thai Therapy",
    description: "Assisted yoga-like stretches, firm acupressure, and rhythmic compressions. You don't just feel relaxed afterward — you feel taller and looser. Pricing: 30 Min (₹2000) | 45 Min (₹2500) | 1 Hour (₹3000) | 90 Min (₹3500)",
    image: "/images/Thai-Therapy.png",
    duration: "30 - 90 min",
    href: "/services/thai-therapy"
  },
  {
    title: "Tantra Therapy",
    description: "A deeply spiritual and relaxing experience designed to harmonize your body and mind through specialized touch and energy flow techniques.",
    image: "/images/Tantra.png",
    duration: "60 - 90 min",
    href: "/services/tantra"
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
