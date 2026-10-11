import React from "react";
import { ShieldCheck, Sparkles, HeartHandshake, Leaf, Clock, MapPin } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Certified Therapists" },
  { icon: Sparkles, text: "Soundproof Private Suites" },
  { icon: Leaf, text: "Organic Cruelty-Free Oils" },
  { icon: HeartHandshake, text: "Dedicated Couple Suites" },
  { icon: MapPin, text: "Jubilee Hills Landmark" },
  { icon: Clock, text: "Open 9:30 AM – 10:00 PM Daily" },
];

export function TrustBar() {
  return (
    <section className="bg-linen py-6 border-b border-espresso/10 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 items-center justify-center">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2.5 text-espresso justify-center sm:justify-start lg:justify-center"
            >
              <item.icon className="w-4 h-4 text-gold shrink-0" />
              <span className="font-sans text-xs md:text-xs tracking-wider uppercase font-semibold text-espresso/90">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
