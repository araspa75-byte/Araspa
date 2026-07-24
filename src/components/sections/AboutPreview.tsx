import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/animations/ScrollReveal";

export function AboutPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <ScrollReveal direction="right" delay={0.2} className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gold/20 -translate-x-6 translate-y-6 rounded-t-full rounded-b-md" />
              <img
                src="/gallery/spa-interior-8.jpeg"
                alt="ARA Spa Interior - Luxury spa in Jubilee Hills"
                className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-b-md shadow-2xl"
              />
            </ScrollReveal>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <SectionHeading 
              title="A Luxury Spa in Jubilee Hills" 
              subtitle="No noise. No rush. Just you, a private room, and a therapist who actually listens."
              align="left"
            />
            
            <div className="space-y-4 text-charcoal-light font-sans text-lg leading-relaxed">
              <ScrollReveal delay={0.4}>
                <p>
                  Your search for a premium body massage spa near Hitech City ends here. We offer a quiet escape from the corporate rush of the IT corridor.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p>
                  Our soundproof rooms and certified therapists create the perfect environment for deep relaxation. We proudly serve guests from Jubilee Hills, Madhapur, and beyond.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <p>
                  Every visit starts with a conversation. Your therapist adjusts pressure and focus areas based on your body, ensuring you leave feeling completely restored.
                </p>
              </ScrollReveal>
            </div>

            <div className="pt-4">
              <ScrollReveal delay={0.6}>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    More About Us
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
