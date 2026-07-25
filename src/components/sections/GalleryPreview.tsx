"use client";

import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function GalleryPreview({ images: propImages }: { images?: string[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const defaultImages = [
    "/images/A-Luxury-Spa-in-Hyderabad-for-Deep-Relaxation.png",
    "/gallery/spa-interior-8.jpeg",
    "/images/services/aroma-therapy.jpeg",
    "/images/services/balinese-therapy.jpeg",
    "/images/services/deep-tissue-massage.jpeg",
    "/images/services/thai-therapy.jpeg",
    "/images/services/swedish-massage.jpeg"
  ];
  
  const images = propImages && propImages.length > 0 ? propImages : defaultImages;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };
  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-24 bg-cream border-t border-beige">
      <div className="container mx-auto px-4 md:px-8 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-2">Our Spa Environment</h2>
          <p className="text-charcoal-light font-sans text-sm md:text-base">Take a look inside our premium facilities in Jubilee Hills.</p>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-beige dark:border-white/10 bg-white dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gold/10 dark:hover:bg-gold/20 transition-colors shadow-sm group">
            <ArrowLeft size={20} className="text-charcoal dark:text-cream group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-beige dark:border-white/10 bg-white dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-gold/10 dark:hover:bg-gold/20 transition-colors shadow-sm group">
            <ArrowRight size={20} className="text-charcoal dark:text-cream group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="w-full pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] select-none">
        <div 
          ref={scrollContainerRef} 
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide touch-pan-x cursor-grab active:cursor-grabbing" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => (
            <div key={index} className="shrink-0 w-[280px] md:w-[320px] lg:w-[380px] aspect-[4/5] snap-start rounded-[24px] overflow-hidden shadow-lg border border-black/5 bg-charcoal/10 relative group pointer-events-none">
              <img 
                src={src} 
                alt={`Spa Interior ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar completely via inline styles for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
