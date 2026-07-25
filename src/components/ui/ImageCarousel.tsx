"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "./Button";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
}

export function ImageCarousel({ images, alt, className, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    
    // Auto-advance if not hovered
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval, isHovered]);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className={cn("relative w-full h-full overflow-hidden group/carousel", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={`${alt} - view ${idx + 1}`}
          fill
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out group-hover:scale-105",
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          )}
          priority={idx === 0}
        />
      ))}
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-charcoal/50 hover:bg-gold text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-charcoal/50 hover:bg-gold text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "bg-gold w-4" : "bg-white/70 w-1.5 hover:bg-white"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
