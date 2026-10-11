"use client";

import React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";
import { TREATMENTS } from "@/content/treatments";
import { trackPhoneClick, trackWhatsAppClick, trackConversion } from "@/lib/analytics";

export function Footer() {
  const popularTreatments = TREATMENTS.slice(0, 6);

  return (
    <footer className="bg-espresso text-ivory pt-20 pb-12 border-t border-gold/20 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/Araspa-LOGO.png"
                alt="ARA Spa Luxury Wellness Sanctuary in Jubilee Hills Hyderabad"
                className="h-10 w-auto object-contain brightness-110"
              />
              <span className="font-heading text-2xl font-bold tracking-[0.2em] text-champagne uppercase">
                ARA SPA
              </span>
            </Link>
            <p className="text-ivory/70 font-sans text-sm leading-relaxed max-w-sm">
              A luxury wellness sanctuary in Jubilee Hills, Hyderabad. Dedicated to deep
              muscular recovery, authentic Thai therapy, and restorative privacy.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/80 hover:text-white hover:bg-gold transition-all duration-300"
                aria-label="ARA Spa on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/80 hover:text-white hover:bg-gold transition-all duration-300"
                aria-label="ARA Spa on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("general", "footer_social")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-xs text-[#5bf596] hover:bg-[#25D366]/30 transition-all font-medium"
                aria-label="Connect on WhatsApp"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-taupe pt-2">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>Certified therapists • 100% hygienic private suites</span>
            </div>
          </div>

          {/* Treatments Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-6">
              Therapies & Treatments
            </h3>
            <ul className="space-y-2.5 font-sans text-sm text-ivory/75">
              {popularTreatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/services/${t.slug}`}
                    className="hover:text-gold transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span>{t.name}</span>
                    <span className="text-[11px] text-taupe group-hover:text-gold">
                      {t.startingPrice.split(" ")[0]}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-gold text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>View All 12 Treatments</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-6">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-sm text-ivory/75">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-gold transition-colors">
                  Spa Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  Interior Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors">
                  Questions & Answers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold transition-colors">
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-6">
              Sanctuary Location
            </h3>
            <ul className="space-y-4 font-sans text-sm text-ivory/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <div className="leading-snug">
                  <p className="font-medium text-ivory">Aditya Enclave, 2nd Floor</p>
                  <p className="text-ivory/70 text-xs mt-0.5">
                    Unit 212, Metro Pillar 1677, Jubilee Hills, Hyderabad 500033
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion("click_booking_cta", { placement: "footer_directions" })}
                    className="inline-flex items-center gap-1 text-gold text-xs mt-1 hover:underline font-medium"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-gold" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  onClick={() => trackPhoneClick("footer_phone")}
                  className="hover:text-gold transition-colors font-medium text-ivory"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-gold transition-colors text-xs"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 border-t border-ivory/10">
                <Clock size={18} className="shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="font-medium text-ivory text-xs">
                    Open Every Day: 9:30 AM – 10:00 PM
                  </p>
                  <p className="text-[11px] text-taupe mt-0.5">
                    Appointments welcome daily & holidays
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/50 font-sans gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-ivory transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-ivory transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
