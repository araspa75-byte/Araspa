import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { Carousel } from "../ui/Carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Aroma",
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
  }
];

export function ServicesPreview() {
  // Combine services and the "View All" card data
  const allItems = [
    ...services.map(s => ({ type: 'service', data: s })),
    { type: 'view-all' }
  ];

  // Group into chunks of 3 for the slides
  const slides = [];
  for (let i = 0; i < allItems.length; i += 3) {
    slides.push(allItems.slice(i, i + 3));
  }

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading 
            title="Our Specialized Therapies" 
            subtitle="Explore our range of treatments, from Moroccan baths to deep tissue relief."
            align="left"
            className="mb-0"
          />
        </div>

        <div className="w-full">
          <Carousel interval={2000} autoPlay={true}>
            {slides.map((slideItems, slideIndex) => (
              <div key={slideIndex} className="w-full px-4 md:px-12 pb-8 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                  {slideItems.map((item, itemIndex) => {
                    if ('data' in item) {
                      return <ServiceCard key={itemIndex} {...item.data} className="h-full" />;
                    } else {
                      return (
                        <Link key="view-all" href="/services" className="group flex flex-col items-center justify-center bg-cream rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-beige h-full min-h-[400px] p-8 text-center cursor-pointer">
                          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                            <ArrowRight className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-500" />
                          </div>
                          <h3 className="text-3xl font-heading font-bold text-charcoal mb-4">See All 6 Treatments</h3>
                          <p className="text-charcoal-light font-sans text-lg">
                            Browse every massage, scrub, and therapy at our massage center in Madhapur — with details on what each one does.
                          </p>
                          <div className="mt-8 text-gold uppercase tracking-widest font-semibold text-sm group-hover:underline">
                            Discover More
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
