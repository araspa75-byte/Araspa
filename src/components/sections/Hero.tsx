"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowDown, Sparkles, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";
import { trackBookingCtaClick, trackConversion } from "@/lib/analytics";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full px-4 md:px-8 pt-2 pb-8 md:pb-14 flex items-center justify-center bg-ivory">
      <div className="w-full max-w-[1400px] min-h-[640px] md:h-[82vh] relative rounded-[28px] overflow-hidden shadow-luxury-lg flex items-center justify-center border border-espresso/10">
        
        {/* Cinematic Backdrop with Multi-Layer Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/spa-interior-1.jpeg"
            alt="ARA Spa Luxury Suite in Jubilee Hills Hyderabad"
            loading="eager"
            className="w-full h-full object-cover object-center scale-100 animate-slow-zoom"
          />
          {/* Refined Luxury Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/65 to-espresso/45" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-espresso/70" />
        </div>

        {/* Central Content Column with High Contrast & Editorial Typography */}
        <div className="relative z-10 w-[94%] max-w-[840px] py-12 px-6 sm:px-10 md:px-14 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Top Brand Monogram Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-champagne/30 text-champagne text-xs uppercase tracking-[0.22em] font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>Luxury Wellness Sanctuary • Jubilee Hills</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-heading font-medium text-ivory tracking-wide leading-[1.08] mb-6 drop-shadow-sm"
            >
              Make Space for <br />
              <span className="italic font-serif-accent text-champagne font-normal">
                Stillness.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-ivory/85 font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
            >
              Discover a considered approach to relaxation and restorative bodywork.
              Soundproof private suites, certified therapists, and pure organic botanicals.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
            >
              <Link 
                href="/contact#booking" 
                className="w-full sm:w-auto"
                onClick={() => trackBookingCtaClick("general", "hero_request_btn")}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto text-xs uppercase tracking-[0.16em] px-8 py-4 shadow-luxury-gold hover:shadow-xl font-semibold"
                >
                  Request an Appointment
                </Button>
              </Link>

              <Link 
                href="/services" 
                className="w-full sm:w-auto"
                onClick={() => trackConversion("click_booking_cta", { placement: "hero_explore_btn" })}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-xs uppercase tracking-[0.16em] px-8 py-4 bg-ivory/10 backdrop-blur-md text-ivory border-ivory/40 hover:bg-ivory hover:text-espresso"
                >
                  Explore Treatments
                </Button>
              </Link>
            </motion.div>

            {/* Verified Location & Hours Chips */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-ivory/15 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory/70 font-sans"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Aditya Enclave, Pillar 1677, Jubilee Hills</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Open 7 Days • 9:30 AM – 10:00 PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle Bottom Scroll Cue */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:flex flex-col items-center text-ivory/50">
          <span className="text-[10px] uppercase tracking-[0.25em] mb-1">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
