"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const verifiedReviews = [
  {
    name: "Mallesh B",
    platform: "Google Verified Review",
    rating: 5,
    highlight: "Friendly staff & deeply restorative massage",
    content:
      "Good ambiance. The experience in Ara Spa was amazing. The management and staff are very friendly and helpful. The massage was good and provided true body relaxation for me. Prices and overall it’s a good experience, highly recommended.",
  },
  {
    name: "Meena Meena",
    platform: "Google Verified Review",
    rating: 5,
    highlight: "Peaceful ambiance & warm professional therapists",
    content:
      "Visited Ara Spa today and it was an absolutely amazing experience! The ambiance was peaceful, the staff were warm and professional, and every moment felt rejuvenating. I left feeling relaxed, refreshed and totally pampered.",
  },
  {
    name: "Vadde Sivaram",
    platform: "Google Verified Review",
    rating: 5,
    highlight: "Hygienic atmosphere & Thai experts available",
    content:
      "Very neat and well-maintained hygiene spa with a good atmosphere. Such a high standard professional massage — Thai experts are available and the reception was very welcoming.",
  },
];

export function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? verifiedReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === verifiedReviews.length - 1 ? 0 : prev + 1));
  };

  const current = verifiedReviews[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            Guest Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-[1.15]">
            Reflections from Our Guests
          </h2>
          <p className="text-charcoal-light font-sans text-base md:text-lg mt-3">
            Real guest accounts from our Google Business profile.
          </p>
        </div>

        {/* Testimonial Showcase Box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-linen/60 rounded-[28px] p-8 sm:p-14 md:p-16 border border-gold/30 shadow-luxury relative min-h-[340px] flex flex-col justify-between">
            <Quote className="w-16 h-16 text-gold/20 absolute top-8 right-8 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Star rating & verified badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex text-gold">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-taupe font-sans font-medium">
                    {current.platform}
                  </span>
                </div>

                <p className="font-heading text-xl sm:text-2xl text-espresso font-medium leading-snug">
                  &ldquo;{current.content}&rdquo;
                </p>

                <div className="pt-4 border-t border-espresso/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-espresso">
                      {current.name}
                    </h4>
                    <p className="text-xs text-taupe font-sans mt-0.5">
                      {current.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-espresso/10">
              <div className="flex gap-2">
                {verifiedReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-8 bg-gold" : "w-2 bg-espresso/20"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full bg-ivory border border-espresso/15 flex items-center justify-center text-espresso hover:border-gold hover:text-gold transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full bg-ivory border border-espresso/15 flex items-center justify-center text-espresso hover:border-gold hover:text-gold transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
