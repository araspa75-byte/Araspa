"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

// Dynamically import 3D scene to prevent blocking main thread / SSR
const SpaSanctuaryScene = dynamic(
  () => import("@/components/3d/SpaSanctuaryScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[440px] rounded-[24px] bg-espresso/90 flex flex-col items-center justify-center text-champagne">
        <Sparkles className="w-6 h-6 animate-pulse mb-2 text-gold" />
        <span className="text-xs uppercase tracking-widest font-sans">
          Loading Sanctuary Environment...
        </span>
      </div>
    ),
  }
);

export function SanctuaryExperience() {
  return (
    <section className="py-24 md:py-32 bg-espresso text-ivory relative overflow-hidden border-b border-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Narrative Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block">
              Architectural Serenity
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ivory leading-[1.15]">
              Form, Stillness &amp; Somatic Balance
            </h2>

            <p className="text-ivory/80 font-sans text-base leading-relaxed">
              Every detail within our Jubilee Hills retreat is curated to quiet overstimulated minds. From balanced natural stone textures to aromatic cedar and warm ambient candlelight, our spaces prepare you for deep, uninterrupted renewal.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-ivory/85">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Acoustic Isolation:</strong> Soundproof treatment suites shielding you completely from urban traffic.
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ivory/85">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Natural Materials:</strong> Heated volcanic basalt stones, organic river stones, and unbleached cotton draping.
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ivory/85">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span>
                  <strong>Considered Lighting:</strong> Low-lux indirect luminescence designed to calm optic nerve fatigue.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link href="/services">
                <Button
                  variant="luxury"
                  size="lg"
                  className="bg-champagne text-espresso hover:bg-white text-xs uppercase tracking-widest"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact#booking">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso text-xs uppercase tracking-widest"
                >
                  Reserve Suite
                </Button>
              </Link>
            </div>
          </div>

          {/* 3D Scene Viewport (7 cols) */}
          <div className="lg:col-span-7 relative h-[450px] md:h-[520px] rounded-[24px] overflow-hidden shadow-2xl border border-gold/30">
            <SpaSanctuaryScene />
          </div>

        </div>
      </div>
    </section>
  );
}
