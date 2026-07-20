import React from "react";
import { Star, CheckCircle2, ShieldCheck, Heart, Sparkles, Clock } from "lucide-react";

const trustItems = [
  { icon: Star, text: "5.0 Google Rating" },
  { icon: CheckCircle2, text: "Certified Therapists" },
  { icon: ShieldCheck, text: "Top Rated in Hyderabad" },
  { icon: Sparkles, text: "Luxury Private Rooms" },
  { icon: Heart, text: "Couple Friendly" },
  { icon: Clock, text: "Madhapur · Near Hitech City" },
];

export function TrustBar() {
  return (
    <section className="bg-charcoal-fixed py-8 border-y border-gold/20 relative z-30 -mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-cream-fixed/90">
              <item.icon className="w-5 h-5 text-gold" />
              <span className="font-sans text-sm md:text-base font-medium tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
