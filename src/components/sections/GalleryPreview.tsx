"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "../ui/Button";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const previewImages: GalleryImage[] = [
  {
    src: "/gallery/spa-interior-1.jpeg",
    alt: "Private luxury therapy suite with warm ambient lantern glow at ARA Spa",
    caption: "Private Therapy Suite",
  },
  {
    src: "/gallery/spa-interior-11.jpeg",
    alt: "Spacious luxury couple treatment suite with side-by-side therapy beds",
    caption: "Couple's Sanctuary Suite",
  },
  {
    src: "/gallery/spa-interior-13.jpeg",
    alt: "Tranquil ambient relaxation hallway and private room entrance",
    caption: "Sanctuary Corridor",
  },
  {
    src: "/gallery/spa-interior-4.jpeg",
    alt: "Dedicated Thai therapy room equipped with traditional cushioned mat",
    caption: "Traditional Thai Chamber",
  },
  {
    src: "/gallery/spa-interior-7.jpeg",
    alt: "Soothing aromatic relaxation area with fresh linens and botanical oils",
    caption: "Aroma Therapy Chamber",
  },
  {
    src: "/gallery/spa-interior-12.jpeg",
    alt: "Soundproof VIP treatment chamber with soft warm overhead backlighting",
    caption: "VIP Wellness Suite",
  },
];

export function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? previewImages.length - 1 : (prev as number) - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === previewImages.length - 1 ? 0 : (prev as number) + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Sanctuary Ambience
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-[1.15]">
              Step Inside ARA Spa
            </h2>
            <p className="text-charcoal-light font-sans text-base md:text-lg mt-3">
              Explore our soundproof suites and serene interiors in Jubilee Hills.
            </p>
          </div>

          <Link href="/gallery" className="shrink-0">
            <Button variant="outline" size="lg" className="text-xs uppercase tracking-[0.16em]">
              <span>View Full 13-Photo Gallery</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-luxury-lg border border-espresso/10 transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-ivory/90 text-espresso flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Eye size={20} />
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 bg-ivory/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-espresso flex items-center justify-between border border-gold/20 shadow-sm pointer-events-none">
                <span>{img.caption}</span>
                <span className="text-[10px] text-taupe uppercase tracking-wider">Jubilee Hills</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Spa Interior Lightbox View"
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 sm:right-2 text-ivory hover:text-champagne transition-colors p-2"
              aria-label="Close Lightbox (Esc)"
            >
              <X size={28} />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full aspect-[16/10] max-h-[78vh] rounded-[20px] overflow-hidden shadow-2xl border border-ivory/20 bg-espresso">
              <img
                src={previewImages[lightboxIndex].src}
                alt={previewImages[lightboxIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption & Controls Bar */}
            <div className="mt-4 w-full flex items-center justify-between text-ivory font-sans text-sm">
              <p className="font-heading text-base text-champagne">
                {previewImages[lightboxIndex].caption}
                <span className="text-xs text-ivory/60 font-sans block mt-0.5">
                  {previewImages[lightboxIndex].alt}
                </span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === 0 ? previewImages.length - 1 : (prev as number) - 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-ivory/15 hover:bg-gold flex items-center justify-center transition-colors text-ivory"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs text-ivory/70 px-2">
                  {lightboxIndex + 1} / {previewImages.length}
                </span>
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev === previewImages.length - 1 ? 0 : (prev as number) + 1
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
