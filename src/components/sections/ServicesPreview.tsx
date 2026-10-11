"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { ServiceCard } from "../ui/ServiceCard";
import { TREATMENTS, Treatment } from "@/content/treatments";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Treatments",
  "Holistic & Traditional",
  "Deep Relief",
  "Exfoliation & Bath",
  "Specialty & Couples",
] as const;

export function ServicesPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("All Treatments");

  const filteredTreatments =
    activeCategory === "All Treatments"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 md:py-32 bg-linen/40 border-y border-espresso/10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Bespoke Spa Menu
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-[1.15]">
              Signature Treatments & Therapies
            </h2>
            <p className="text-charcoal-light font-sans text-base md:text-lg mt-3">
              Twelve curated rituals designed to decompress muscles, dissolve chronic knots, and calm the senses.
            </p>
          </div>

          <Link href="/services" className="shrink-0">
            <Button variant="outline" size="lg" className="text-xs uppercase tracking-[0.16em]">
              <span>View All 12 Treatments</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Working Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-wider font-semibold py-2.5 px-5 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? "bg-espresso text-ivory border-espresso shadow-sm"
                    : "bg-ivory text-espresso/70 border-espresso/15 hover:border-gold hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Animated Treatment Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTreatments.map((treatment: Treatment) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <ServiceCard treatment={treatment} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-[24px] bg-ivory border border-gold/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-espresso mb-1">
              Unsure which therapy fits your tension?
            </h3>
            <p className="text-charcoal-light font-sans text-sm">
              Our front desk can recommend the ideal session based on your fatigue level and preferred pressure.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+917788993406">
              <Button variant="luxury" size="sm" className="text-xs uppercase tracking-wider">
                Call Reception
              </Button>
            </a>
            <Link href="/contact#booking">
              <Button variant="default" size="sm" className="text-xs uppercase tracking-wider">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
