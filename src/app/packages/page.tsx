import { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, Clock, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";

export const metadata: Metadata = {
  title: "Wellness Retreat Packages & Couple Suites in Jubilee Hills",
  description:
    "Explore multi-treatment wellness retreats and luxury couple packages at ARA Spa Jubilee Hills. Bundled therapeutic experiences for total restoration.",
  alternates: {
    canonical: "/packages",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.araspa.co.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Packages",
      item: "https://www.araspa.co.in/packages",
    },
  ],
};

const defaultPackages = [
  {
    id: "executive-reset",
    name: "The Executive Reset",
    duration: "90 Minutes",
    price: "₹3,500",
    description: "Designed for desk stiffness, neck rigidity, and corporate mental exhaustion.",
    features: [
      "60-min targeted Deep Tissue massage",
      "30-min cranial acupressure & scalp release",
      "Heated herbal towel spinal compress",
      "Complimentary organic antioxidant tea",
    ],
    isPopular: false,
  },
  {
    id: "couples-sanctuary",
    name: "Couples Sanctuary Escape",
    duration: "90 Minutes (For Two)",
    price: "₹6,500",
    description: "Our signature romantic and celebratory retreat inside the private VIP couple suite.",
    features: [
      "90-min side-by-side Balinese or Aroma Therapy",
      "Private luxury couple suite with ensuite shower",
      "Customized organic essential oil selection",
      "Complimentary post-treatment tea & relaxation",
    ],
    isPopular: true,
  },
  {
    id: "hammam-glow",
    name: "Hammam & Glow Ritual",
    duration: "120 Minutes",
    price: "₹5,500",
    description: "Total epidermal purification paired with luxurious muscle unwinding.",
    features: [
      "Aromatic steam bath pore softening",
      "Moroccan black soap full-body kessa scrub",
      "60-min nourishing botanical oil massage",
      "Complete epidermal glow & hydration seal",
    ],
    isPopular: false,
  },
  {
    id: "signature-master",
    name: "Signature Master Retreat",
    duration: "120 Minutes",
    price: "₹5,500",
    description: "The complete journey combining East-West bodywork and heated volcanic stones.",
    features: [
      "Dry Thai yoga assisted joint mobilizations",
      "Gliding heated basalt stone therapy",
      "Deep tissue tension knot release",
      "Revitalizing facial pressure point finish",
    ],
    isPopular: false,
  },
];

const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Curated Wellness Packages & Retreats at ARA Spa",
  description:
    "Curated multi-therapy spa retreat packages and luxury couples suites at ARA Spa, Jubilee Hills, Hyderabad.",
  itemListElement: defaultPackages.map((pkg, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: pkg.name,
    description: `${pkg.duration} — ${pkg.description}`,
  })),
};

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSchema) }}
      />
      {/* Editorial Header */}
      <section className="bg-espresso text-ivory py-20 md:py-28 text-center relative overflow-hidden border-b border-gold/20">
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Bundled Retreats &amp; Celebrations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory mb-6 leading-tight">
            Wellness Packages
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Multi-treatment therapies designed to combine deep muscular release, exfoliation, and tranquil private suite downtime.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-linen/60 rounded-[24px] border flex flex-col h-full transition-all duration-300 hover:shadow-luxury-lg hover:-translate-y-1.5 ${
                  pkg.isPopular
                    ? "border-gold shadow-luxury-gold bg-linen/90"
                    : "border-espresso/15 shadow-sm"
                } overflow-hidden`}
              >
                {pkg.isPopular && (
                  <div className="bg-gold text-white text-[11px] font-bold uppercase tracking-[0.2em] text-center py-2 flex items-center justify-center gap-1.5">
                    <Sparkles size={12} />
                    <span>Most Requested Package</span>
                  </div>
                )}

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-espresso mb-2">
                    {pkg.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold font-sans font-semibold mb-4">
                    <Clock size={13} />
                    <span>{pkg.duration}</span>
                  </div>
                  <p className="text-charcoal-light font-sans text-xs sm:text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="text-3xl font-heading font-bold text-espresso mb-6 pb-6 border-b border-espresso/10">
                    {pkg.price}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm font-sans text-espresso/90">
                        <Check className="w-4 h-4 text-gold mr-2.5 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-auto space-y-2">
                    <Link
                      href={`/contact#booking`}
                      className="block w-full"
                    >
                      <Button
                        variant={pkg.isPopular ? "default" : "luxury"}
                        size="sm"
                        className="w-full text-xs uppercase tracking-wider py-2.5"
                      >
                        Request Package
                      </Button>
                    </Link>
                    <a
                      href={getWhatsAppUrl({ treatmentName: pkg.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs uppercase tracking-wider py-2 border-[#25D366]/50 text-[#128C7E] hover:bg-[#25D366]/10"
                      >
                        <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#25D366]" />
                        <span>Enquire on WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Guidance */}
          <div className="mt-20 p-8 sm:p-12 rounded-[24px] bg-espresso text-ivory border border-gold/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-2">
                Custom Groups &amp; Celebrations
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ivory mb-2">
                Celebrating an Anniversary or Special Occasion?
              </h3>
              <p className="text-ivory/80 font-sans text-sm sm:text-base max-w-xl">
                We can customize suite arrangements, add private scrub rituals, or coordinate dual therapists for your party.
              </p>
            </div>
            <a href="tel:+917788993406">
              <Button variant="luxury" size="lg" className="bg-champagne text-espresso hover:bg-white text-xs uppercase tracking-widest shrink-0">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Concierge</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
