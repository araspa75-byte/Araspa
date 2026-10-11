"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export function FloatingCTAs() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
    >
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-espresso/90 text-ivory border border-gold/30 flex items-center justify-center shadow-luxury hover:bg-charcoal hover:border-gold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct Call Pill */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        onClick={() => trackPhoneClick("floating_pill")}
        className="h-11 px-3.5 sm:px-4 rounded-full bg-espresso text-ivory border border-gold/40 flex items-center gap-2 shadow-luxury hover:border-gold hover:bg-charcoal hover:-translate-y-0.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Call ARA Spa directly"
      >
        <Phone size={15} className="text-gold" />
        <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline">
          Call Now
        </span>
      </a>

      {/* WhatsApp Floating Action */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("general", "floating_pill")}
        className="h-11 px-3.5 sm:px-4 rounded-full bg-[#25D366] text-white flex items-center gap-2 shadow-luxury hover:bg-[#20ba59] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Chat with ARA Spa on WhatsApp"
      >
        <MessageCircle size={18} />
        <span className="text-xs uppercase tracking-wider font-semibold">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
