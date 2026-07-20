import React from "react";
import { cn } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { ArrowRight, Clock } from "lucide-react";

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
        "group flex flex-col bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-beige",
        className
      )}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-heading font-bold text-charcoal">
            {title}
          </h3>
          {duration && (
            <div className="flex items-center text-gold text-sm font-medium bg-gold/10 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              {duration}
            </div>
          )}
        </div>
        <p className="text-charcoal-light font-sans mb-8 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <Link href={href} className="flex-grow mr-4">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Link href="/contact" className="flex-shrink-0">
            <Button variant="ghost" className="px-2 group/btn">
              <span className="sr-only">Book {title}</span>
              <ArrowRight className="text-gold group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
