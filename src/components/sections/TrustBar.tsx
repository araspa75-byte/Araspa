import React from "react";
import { Star, CheckCircle2, ShieldCheck, Heart, Sparkles, Clock } from "lucide-react";

const trustItems = [
  { icon: Star, text: "5.0 Google Rating" },
  { icon: CheckCircle2, text: "Certified Therapists" },
  { icon: ShieldCheck, text: "Top Rated in Hyderabad" },
  { icon: Sparkles, text: "Luxury Private Rooms" },
  { icon: Heart, text: "Couple Friendly" },
  { icon: Clock, text: "Madhapur/Jubilee Hills" },
];

export function TrustBar() {
  return (
    <section className="bg-[#f8f9fa] dark:bg-[#1a1a1a] py-5 border-y border-black/5 dark:border-white/5 relative z-30 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-charcoal dark:text-cream font-semibold transition-colors">
              <item.icon className="w-5 h-5 text-gold" />
              <span className="font-sans text-sm md:text-[15px] tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
