import React from "react";
import { cn } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { ArrowRight, Clock } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  image,
  duration,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col bg-cream rounded-[20px] overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-beige",
        className
      )}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
        <ImageCarousel 
          images={image.startsWith('/') ? [image, image.replace('.jpeg', '-alt.jpeg')] : [image]} 
          alt={title} 
        />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal">
            {title}
          </h3>
          {duration && (
            <div className="flex items-center text-gold text-xs font-medium bg-gold/10 px-3 py-1 rounded-full whitespace-nowrap">
              <Clock className="w-3 h-3 mr-1.5" />
              {duration}
            </div>
          )}
        </div>
        <p className="text-charcoal-light text-sm md:text-base font-sans mb-6 flex-grow line-clamp-3">
          {description.split('Pricing:')[0].trim()}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <Link href={href} className="flex-grow mr-3">
            <Button variant="outline" className="w-full rounded-full border-charcoal/30 hover:bg-charcoal hover:text-white transition-colors text-xs md:text-sm">
              Read More
            </Button>
          </Link>
          <Link href="/#booking" className="flex-shrink-0">
            <Button variant="ghost" className="px-2 group/btn rounded-full hover:bg-gold/10">
              <span className="sr-only">Book {title}</span>
              <ArrowRight className="text-gold group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
