"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/animations/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      {/* Subtle organic background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* Architectural Imagery */}
          <div className="w-full lg:w-[390px] shrink-0 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-[390px]">
              {/* Main Primary Image */}
              <ScrollReveal direction="right" delay={0.2} className="relative aspect-[4/4.6] w-full rounded-[24px] overflow-hidden shadow-luxury border border-espresso/10">
                <img
                  src="/gallery/spa-interior-8.jpeg"
                  alt="ARA Spa private treatment suite in Jubilee Hills"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent pointer-events-none" />
                
                {/* Decorative Luxury Tag */}
                <div className="absolute top-5 left-5 bg-ivory/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/30 shadow-sm text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-espresso">
                  Private • Soundproof • Hygienic
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Editorial Brand Narrative */}
          <div className="w-full lg:flex-1 max-w-xl space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
                Our Sanctuary Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-[1.15]">
                A Quiet Escape Above the City&apos;s Rush
              </h2>
            </div>

            <div className="space-y-4 text-charcoal-light font-sans text-base md:text-lg leading-relaxed">
              <p>
                ARA Spa was created around a single clear principle: wellness should feel truly personal, never rushed. Located in Aditya Enclave in Jubilee Hills, we provide an oasis of stillness right beside the metropolitan IT corridor.
              </p>
              <p>
                Every treatment begins with a private conversation. Your therapist adjusts pressure and focus areas based on your muscular posture, ensuring you step back out feeling restored, loose, and clear-headed.
              </p>
            </div>

            {/* Hallmarks List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Thailand-trained massage therapists",
                "100% pure organic cold-pressed oils",
                "Complete privacy & hygienic draping",
                "Spacious couples suites available",
              ].map((hallmark, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-espresso font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>{hallmark}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-6 flex items-center gap-4">
              <Link href="/about">
                <Button variant="luxury" size="lg" className="text-xs uppercase tracking-[0.16em]">
                  <span>Discover Our Philosophy</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-xs uppercase tracking-[0.16em]">
                  View Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
