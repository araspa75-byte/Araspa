import React from "react";

export function Marquee() {
  const highlights = [
    "THAILAND-TRAINED SPECIALISTS",
    "PRIVATE SOUNDPROOF SUITES",
    "COLD-PRESSED ORGANIC BOTANICALS",
    "HYGIENIC & SANITIZED SANCTUARY",
    "BESPOKE COUPLE SUITES",
    "JUBILEE HILLS • HYDERABAD",
  ];

  const duplicated = [...highlights, ...highlights, ...highlights];

  return (
    <div
      className="w-full overflow-hidden bg-espresso text-champagne py-3.5 flex items-center border-y border-gold/20 select-none"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee shrink-0 min-w-max">
        {duplicated.map((item, idx) => (
          <span key={idx} className="flex items-center mx-5">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-champagne">
              {item}
            </span>
            <span className="mx-6 text-gold/60 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
