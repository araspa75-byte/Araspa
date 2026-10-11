"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../ui/Button";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";
import { trackPhoneClick, trackWhatsAppClick, trackBookingCtaClick } from "@/lib/analytics";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-ivory/98 backdrop-blur-xl py-3 border-b border-gold/30 shadow-luxury"
            : "bg-ivory/95 backdrop-blur-md py-4 md:py-5 border-b border-espresso/10"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus-visible:ring-gold focus-visible:ring-2 rounded-lg"
            aria-label="ARA Spa & Wellness Home"
          >
            <img
              src="/images/Araspa-LOGO.png"
              alt="ARA Spa Emblem"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg md:text-xl font-bold tracking-[0.18em] text-espresso uppercase leading-none">
                ARA SPA
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-taupe font-sans mt-1">
                Jubilee Hills • Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 relative py-1 focus-visible:ring-1 focus-visible:ring-gold",
                    isActive
                      ? "text-gold font-semibold"
                      : "text-espresso/80 hover:text-espresso"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+917788993406"
              onClick={() => trackPhoneClick("navbar_header")}
              className="text-xs uppercase tracking-wider text-espresso/70 hover:text-espresso flex items-center gap-1.5 transition-colors font-medium mr-2"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 77889 93406</span>
            </a>
            <Link 
              href="/contact#booking"
              onClick={() => trackBookingCtaClick("general", "navbar_desktop_btn")}
            >
              <Button
                variant="luxury"
                size="sm"
                className="rounded-full px-5 text-xs uppercase tracking-[0.14em]"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link 
              href="/contact#booking" 
              className="sm:hidden"
              onClick={() => trackBookingCtaClick("general", "navbar_mobile_btn")}
            >
              <Button
                variant="default"
                size="sm"
                className="text-[11px] uppercase tracking-wider px-3.5 py-1.5 h-8"
              >
                Book
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-espresso hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold rounded-md"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Refined Luxury Mobile Slide Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-espresso/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-ivory shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden border-l border-gold/20"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Drawer Top */}
              <div className="p-6 border-b border-espresso/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/Araspa-LOGO.png"
                    alt="ARA Spa"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="font-heading text-base font-bold tracking-widest text-espresso">
                    ARA SPA
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-espresso/70 hover:text-espresso rounded-full hover:bg-linen transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-6 py-8 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "font-heading text-xl tracking-wide transition-colors py-1.5 flex items-center justify-between border-b border-espresso/5",
                        isActive
                          ? "text-gold font-bold"
                          : "text-espresso hover:text-gold"
                      )}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-taupe font-sans">✦</span>
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Bottom Actions & Info */}
              <div className="p-6 bg-linen/50 border-t border-espresso/10 space-y-4">
                <Link
                  href="/contact#booking"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    trackBookingCtaClick("general", "navbar_drawer_btn");
                  }}
                  className="block w-full"
                >
                  <Button
                    variant="luxury"
                    size="lg"
                    className="w-full text-xs uppercase tracking-widest"
                  >
                    Request Appointment
                  </Button>
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="tel:+917788993406"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackPhoneClick("navbar_drawer");
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-ivory border border-espresso/10 text-xs font-medium text-espresso hover:border-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackWhatsAppClick("general", "navbar_drawer");
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-medium text-[#128C7E] hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-taupe space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>9:30 AM – 10:00 PM Daily</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3 h-3 text-gold mt-0.5 shrink-0" />
                    <span className="leading-tight">
                      Jubilee Hills, Hyderabad (Pillar 1677)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
