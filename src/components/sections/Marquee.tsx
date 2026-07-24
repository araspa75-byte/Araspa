import React from "react";

export function Marquee() {
  const words = [
    "THAILAND TRAINED THERAPISTS",
    "HYGIENIC & SANITIZED",
    "PREMIUM OILS",
    "LUXURY AMBIENCE",
    "COUPLE ROOMS AVAILABLE",
  ];

  // Repeat the words to ensure a smooth continuous loop
  const duplicatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full overflow-hidden bg-charcoal text-gold py-3 flex items-center border-y border-gold/20">
      <div className="flex whitespace-nowrap animate-marquee shrink-0 min-w-max">
        {duplicatedWords.map((word, idx) => (
          <span key={idx} className="flex items-center mx-4">
            <span className="text-[13px] font-bold tracking-[0.15em] uppercase">{word}</span>
            <span className="mx-8 text-gold/50 text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
