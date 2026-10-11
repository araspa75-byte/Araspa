"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";

export function ContactPreview() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden border-t border-espresso/10">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            Location & Access
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-[1.15]">
            Visit Our Jubilee Hills Sanctuary
          </h2>
          <p className="text-charcoal-light font-sans text-base md:text-lg mt-3">
            Conveniently situated right off Road No. 36 at Aditya Enclave. Open seven days a week.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Luxury Info Card */}
          <div className="w-full lg:w-5/12 p-8 sm:p-12 flex flex-col justify-between bg-espresso rounded-[24px] shadow-luxury-lg border border-gold/30 text-ivory">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-ivory/10 text-champagne text-[11px] uppercase tracking-widest font-medium mb-6">
                Direct Contact
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-champagne mb-8">
                Reception & Reservations
              </h3>

              <div className="space-y-7">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-ivory/10 border border-gold/30 flex items-center justify-center shrink-0 text-champagne">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-champagne font-semibold mb-1">
                      Phone & Reservations
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-base text-ivory font-medium hover:text-champagne transition-colors"
                    >
                      {BUSINESS_INFO.displayPhone}
                    </a>
                    <div className="pt-1">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#5bf596] hover:underline flex items-center gap-1 font-medium"
                      >
                        <MessageSquare size={13} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-ivory/10 border border-gold/30 flex items-center justify-center shrink-0 text-champagne">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-champagne font-semibold mb-1">
                      Sanctuary Address
                    </h4>
                    <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                      {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.landmark}
                      <br />
                      {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}{" "}
                      {BUSINESS_INFO.address.postalCode}
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-champagne hover:underline mt-1.5 font-medium"
                    >
                      <span>Get Google Directions</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-ivory/10 border border-gold/30 flex items-center justify-center shrink-0 text-champagne">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-champagne font-semibold mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-ivory/80 font-sans">
                      {BUSINESS_INFO.hours.time}
                    </p>
                    <p className="text-xs text-taupe mt-0.5">
                      {BUSINESS_INFO.hours.note}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-ivory/10 border border-gold/30 flex items-center justify-center shrink-0 text-champagne">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-champagne font-semibold mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm text-ivory/80 hover:text-champagne transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-ivory/15">
              <a href="tel:+917788993406">
                <Button
                  variant="luxury"
                  size="lg"
                  className="w-full text-xs uppercase tracking-widest bg-champagne text-espresso hover:bg-white"
                >
                  Call +91 77889 93406
                </Button>
              </a>
            </div>
          </div>

          {/* Google Maps Container */}
          <div className="w-full lg:w-7/12 flex items-stretch">
            <div className="w-full min-h-[380px] md:min-h-[460px] lg:min-h-full rounded-[24px] overflow-hidden shadow-luxury border border-espresso/15 bg-linen flex">
              {isMounted ? (
                <iframe
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[380px] md:min-h-[460px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ARA Spa Location Map in Jubilee Hills Hyderabad"
                />
              ) : (
                <div className="w-full h-full min-h-[380px] flex items-center justify-center bg-linen text-taupe text-sm">
                  Loading interactive map...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
