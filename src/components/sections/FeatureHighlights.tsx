import React from "react";
import Image from "next/image";
import { ScrollReveal } from "../ui/animations/ScrollReveal";

const highlights = [
  {
    title: "Certified Trained Professionals",
    description: "Our therapists undergo rigorous training and certification processes to ensure you receive the highest standard of care, authentic techniques, and a deeply restorative experience every time.",
    image: "/images/Certified-Trained-Professionals.png"
  },
  {
    title: "Proactive Therapeutic Care",
    description: "We focus on proactive wellness. Our treatments are designed not just for immediate relaxation, but to address deep muscle tension, improve circulation, and maintain your body's natural balance.",
    image: "/images/Proactive-Therapeutic-Care.png"
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} delay={0.2 * index}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-full h-80 relative rounded-[24px] overflow-hidden mb-8 shadow-xl border border-beige">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal-light font-sans text-lg max-w-md">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
