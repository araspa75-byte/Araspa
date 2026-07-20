"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./Button";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function Carousel({ children, autoPlay = true, interval = 5000, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = children.length - 1;
      if (nextIndex >= children.length) nextIndex = 0;
      return nextIndex;
    });
  }, [children.length]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, paginate]);

  return (
    <div 
      className={cn("relative overflow-hidden w-full flex flex-col items-center", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full flex-grow flex items-center justify-center min-h-[300px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full flex flex-col justify-center"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-charcoal/50 hover:text-charcoal hover:bg-charcoal/10 rounded-full transition-all bg-transparent border-none cursor-pointer"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-charcoal/50 hover:text-charcoal hover:bg-charcoal/10 rounded-full transition-all bg-transparent border-none cursor-pointer"
          onClick={() => paginate(1)}
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-8 z-10">
        {children.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              index === currentIndex ? "bg-gold w-6" : "bg-gold/30 hover:bg-gold/60"
            )}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
