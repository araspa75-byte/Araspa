"use client";

import React, { useState, useEffect } from "react";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export interface GalleryItem {
  id: number;
  src: string;
  category: "Private Suites" | "Couple Sanctuary" | "Ambience & Corridors";
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/spa-interior-1.jpeg",
    category: "Private Suites",
    title: "Signature Private Suite",
    description: "Soundproof VIP treatment chamber with warm lantern ambiance and organic draping.",
  },
  {
    id: 2,
    src: "/gallery/spa-interior-2.jpeg",
    category: "Private Suites",
    title: "Zen Treatment Chamber",
    description: "Minimalist natural stone textures and low-lux indirect luminescence.",
  },
  {
    id: 3,
    src: "/gallery/spa-interior-3.jpeg",
    category: "Ambience & Corridors",
    title: "Sanctuary Reception Foyer",
    description: "Welcoming reception lounge with cedar aromas and warm herbal welcome tea.",
  },
  {
    id: 4,
    src: "/gallery/spa-interior-4.jpeg",
    category: "Private Suites",
    title: "Traditional Thai Chamber",
    description: "Authentic floor-level cushioned mat room for assisted Nuad Bo-Rarn bodywork.",
  },
  {
    id: 5,
    src: "/gallery/spa-interior-5.jpeg",
    category: "Private Suites",
    title: "Aromatherapy Suite",
    description: "Deep relaxation bed equipped for warm botanical oil infusions.",
  },
  {
    id: 6,
    src: "/gallery/spa-interior-6.jpeg",
    category: "Ambience & Corridors",
    title: "Private Consultation Lounge",
    description: "Quiet pre-treatment alcove for pressure and oil personalization.",
  },
  {
    id: 7,
    src: "/gallery/spa-interior-7.jpeg",
    category: "Private Suites",
    title: "Deep Tissue Suite",
    description: "Ergonomic treatment setup optimized for spinal decompression.",
  },
  {
    id: 8,
    src: "/gallery/spa-interior-8.jpeg",
    category: "Private Suites",
    title: "Deluxe Therapy Chamber",
    description: "Architectural curved walls and pristine, sanitized treatment linens.",
  },
  {
    id: 9,
    src: "/gallery/spa-interior-9.jpeg",
    category: "Ambience & Corridors",
    title: "Quiet Waiting Lounge",
    description: "Peaceful pre-session and post-treatment relaxation seating.",
  },
  {
    id: 10,
    src: "/gallery/spa-interior-10.jpeg",
    category: "Private Suites",
    title: "Aromatics & Oils Bar",
    description: "Selection station for cold-pressed lavender, eucalyptus, and spice oils.",
  },
  {
    id: 11,
    src: "/gallery/spa-interior-11.jpeg",
    category: "Couple Sanctuary",
    title: "Executive Couple Suite",
    description: "Spacious side-by-side suites dedicated to partners and shared anniversary retreats.",
  },
  {
    id: 12,
    src: "/gallery/spa-interior-12.jpeg",
    category: "Private Suites",
    title: "Master Suite Interior",
    description: "Generous layout with private ensuite grooming and shower facilities.",
  },
  {
    id: 13,
    src: "/gallery/spa-interior-13.jpeg",
    category: "Ambience & Corridors",
    title: "Illuminated Sanctuary Corridor",
    description: "Serene transit hallway leading to private soundproof therapy suites.",
  },
];

const categories = ["All Spaces", "Private Suites", "Couple Sanctuary", "Ambience & Corridors"] as const;

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<string>("All Spaces");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "All Spaces"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null);
              }}
              className={`text-xs uppercase tracking-wider font-semibold py-2.5 px-6 rounded-full transition-all duration-300 whitespace-nowrap border ${
                activeFilter === cat
                  ? "bg-espresso text-ivory border-espresso shadow-sm"
                  : "bg-linen text-espresso/70 border-espresso/15 hover:border-gold hover:text-espresso"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-[22px] overflow-hidden cursor-pointer shadow-sm hover:shadow-luxury-lg border border-espresso/10 transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-ivory/95 text-espresso flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Eye size={20} />
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-ivory/95 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-sans text-espresso flex flex-col justify-between border border-gold/20 shadow-sm pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-sm">{item.title}</span>
                  <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>
                <span className="text-[11px] text-taupe mt-0.5 line-clamp-1">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Invitation */}
        <div className="mt-20 p-8 sm:p-12 rounded-[24px] bg-linen border border-gold/30 shadow-luxury text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
            Ready to Experience Stillness?
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-espresso mb-4">
            Reserve Your Private Suite Today
          </h3>
          <p className="text-charcoal-light font-sans text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Our therapists prepare every suite individually prior to arrival. Choose your preferred time window.
          </p>
          <Link href="/contact#booking">
            <Button variant="luxury" size="lg" className="text-xs uppercase tracking-widest px-8">
              Request an Appointment
            </Button>
          </Link>
        </div>

      </div>

      {/* Accessible Interactive Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ARA Spa Gallery Lightbox View"
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 sm:right-2 text-ivory hover:text-champagne transition-colors p-2"
              aria-label="Close Lightbox (Esc)"
            >
              <X size={28} />
            </button>

            <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-[22px] overflow-hidden shadow-2xl border border-ivory/20 bg-espresso">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4 w-full flex items-center justify-between text-ivory font-sans text-sm">
              <div>
                <p className="font-heading text-lg text-champagne font-bold">
                  {filteredItems[lightboxIndex].title}
                </p>
                <p className="text-xs text-ivory/70 mt-0.5">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-ivory/15 hover:bg-gold flex items-center justify-center transition-colors text-ivory"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs text-ivory/70 px-2 font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-ivory/15 hover:bg-gold flex items-center justify-center transition-colors text-ivory"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
