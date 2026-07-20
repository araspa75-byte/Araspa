"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingCTAs() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-charcoal text-cream rounded-full flex items-center justify-center shadow-lg hover:bg-gold transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="tel:+917788993406"
        className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-gold-dark transition-all focus:outline-none"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>

      <a
        href="https://wa.me/917788993406?text=Hello%2C%20I%20would%20like%20to%20book%20a%20spa%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
