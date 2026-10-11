"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { Treatment } from "@/content/treatments";
import { getWhatsAppUrl } from "@/content/business";
import { trackBookingCtaClick, trackWhatsAppClick } from "@/lib/analytics";

interface ServiceCardProps {
  treatment: Treatment;
  priority?: boolean;
}

export function ServiceCard({ treatment }: ServiceCardProps) {
  const whatsappUrl = getWhatsAppUrl({ treatmentName: treatment.name });

  return (
    <article className="group flex flex-col bg-ivory rounded-[22px] overflow-hidden border border-espresso/10 hover:border-gold/50 shadow-sm hover:shadow-luxury-lg hover:-translate-y-1.5 transition-all duration-500 h-full">
      {/* Visual Image Container with subtle ratio and overlay */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-espresso/5">
        <img
          src={treatment.image}
          alt={`${treatment.name} therapy at ARA Spa Jubilee Hills`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium bg-ivory/95 backdrop-blur-md text-espresso px-3 py-1 rounded-full shadow-sm">
            {treatment.category}
          </span>
          {treatment.isSignature && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold bg-gold text-white px-2.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Signature</span>
            </span>
          )}
        </div>

        {/* Bottom Image Overlay Bar: Starting Price & Duration */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs font-sans text-white z-10">
          <span className="font-semibold bg-espresso/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {treatment.startingPrice}
          </span>
          <span className="inline-flex items-center gap-1 bg-espresso/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[11px] text-champagne">
            <Clock className="w-3 h-3 text-gold" />
            <span>{treatment.duration}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-espresso group-hover:text-gold transition-colors duration-300 mb-1.5">
          <Link href={`/services/${treatment.slug}`} className="focus-visible:ring-1 focus-visible:ring-gold rounded">
            {treatment.name}
          </Link>
        </h3>
        <p className="text-xs uppercase tracking-widest text-taupe font-sans mb-3">
          {treatment.tagline}
        </p>

        <p className="text-charcoal-light text-sm font-sans leading-relaxed line-clamp-3 mb-6 flex-grow">
          {treatment.description}
        </p>

        {/* Quick Tiers Preview */}
        <div className="pt-3 pb-4 border-t border-espresso/5 flex items-center justify-between text-[11px] text-taupe font-sans">
          <span>Available durations:</span>
          <div className="flex gap-1.5">
            {treatment.pricing.slice(0, 3).map((tier, idx) => (
              <span
                key={idx}
                className="bg-linen px-2 py-0.5 rounded text-espresso/80 font-medium"
              >
                {tier.time.split(" ")[0]}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-2 mt-auto">
          <Link 
            href={`/services/${treatment.slug}`} 
            className="flex-1"
            onClick={() => trackBookingCtaClick(treatment.slug, "service_card_details")}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs uppercase tracking-wider py-2 h-9"
            >
              <span>Explore Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(treatment.name, "service_card_enquire")}
            className="flex-shrink-0"
            title={`Enquire on WhatsApp for ${treatment.name}`}
          >
            <Button
              variant="default"
              size="sm"
              className="h-9 px-3.5 text-xs uppercase tracking-wider"
            >
              Enquire
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}
