import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, HeartHandshake, Leaf, Sparkles, MapPin, Clock, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/content/business";

export const metadata: Metadata = {
  title: "About Our Luxury Wellness Sanctuary in Jubilee Hills",
  description:
    "Learn about ARA Spa in Jubilee Hills, Hyderabad. Dedicated to authentic Thai therapy, certified bodywork practitioners, acoustic privacy, and pure organic botanicals.",
  alternates: {
    canonical: "/about",
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
      name: "About Us",
      item: "https://www.araspa.co.in/about",
    },
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.araspa.co.in/about#webpage",
  url: "https://www.araspa.co.in/about",
  name: "About ARA Spa Jubilee Hills",
  description:
    "Learn about ARA Spa in Jubilee Hills, Hyderabad. Dedicated to authentic Thai therapy, certified bodywork practitioners, acoustic privacy, and pure organic botanicals.",
  mainEntity: {
    "@id": "https://www.araspa.co.in/#organization",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Editorial Header */}
      <section className="bg-espresso text-ivory py-20 md:py-28 text-center relative overflow-hidden border-b border-gold/20">
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Our Heritage &amp; Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory mb-6 leading-tight">
            Considered Stillness
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            ARA Spa was founded on a simple premise: a spa in Hyderabad should feel like a true retreat — deliberate, unhurried, and deeply restorative.
          </p>
        </div>
      </section>

      {/* Narrative Section with Layered Photography */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
                The ARA Spa Standard
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-espresso leading-snug">
                An Oasis Above the Rush of Jubilee Hills
              </h2>
              <div className="space-y-4 text-charcoal-light font-sans text-base leading-relaxed">
                <p>
                  Located on the 2nd floor of Aditya Enclave, near Metro Pillar 1677, ARA Spa offers sanctuary right beside Hyderabad&apos;s corporate corridors. We created an environment where urban noise simply drops away the moment you step through our doors.
                </p>
                <p>
                  We collaborate with certified practitioners, including specialists trained in traditional Thailand bodywork techniques. Every oil we apply is cold-pressed, organic, and cruelty-free.
                </p>
                <p>
                  Most importantly, we do not believe in clock-watching or rushed 45-minute conveyor belts. Every session begins with a conversation about where your posture carries tension, and every session concludes in quiet relaxation.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link href="/services">
                  <Button variant="luxury" size="lg" className="text-xs uppercase tracking-widest">
                    <span>Explore Our Treatments</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact#booking">
                  <Button variant="outline" size="lg" className="text-xs uppercase tracking-widest">
                    Reserve Suite
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-luxury-lg border border-espresso/10">
                <img
                  src="/images/A-Luxury-Spa-in-Hyderabad-for-Deep-Relaxation.png"
                  alt="ARA Spa Luxury Interior in Hyderabad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ivory p-6 rounded-2xl border border-gold/30 shadow-luxury max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-widest mb-1">
                  <Sparkles size={14} />
                  <span>Sanctuary Promise</span>
                </div>
                <p className="text-xs text-charcoal-light font-sans leading-relaxed">
                  100% soundproof private suites and bespoke temperature controls for every guest.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hallmarks & Core Pillars */}
      <section className="py-20 bg-linen/60 border-y border-espresso/10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Our Core Pillars
            </span>
            <h3 className="font-heading text-3xl font-bold text-espresso">
              What Defines an ARA Spa Session
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-[22px] border border-espresso/10 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-6">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-heading text-xl font-bold text-espresso mb-3">
                Certified Therapists
              </h4>
              <p className="text-charcoal-light text-sm font-sans leading-relaxed">
                Our practitioners undergo thorough training in anatomy, meridian pathways, and therapeutic draping protocols to guarantee safe, effective relief.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-[22px] border border-espresso/10 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-6">
                <Leaf size={24} />
              </div>
              <h4 className="font-heading text-xl font-bold text-espresso mb-3">
                Organic Cold-Pressed Oils
              </h4>
              <p className="text-charcoal-light text-sm font-sans leading-relaxed">
                Zero synthetic fragrances or mineral oil fillers. We formulate bespoke infusions with organic lavender, sweet almond, chamomile, and eucalyptus.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-[22px] border border-espresso/10 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-6">
                <HeartHandshake size={24} />
              </div>
              <h4 className="font-heading text-xl font-bold text-espresso mb-3">
                Couples Suites &amp; Absolute Privacy
              </h4>
              <p className="text-charcoal-light text-sm font-sans leading-relaxed">
                Dedicated suites allowing partners to share restorative therapies side-by-side with tranquil lighting and dedicated ensuite showers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Landmark Banner */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="p-8 sm:p-12 rounded-[24px] bg-espresso text-ivory border border-gold/30 shadow-luxury-lg">
            <div className="inline-flex items-center gap-1.5 text-champagne text-xs uppercase tracking-widest font-semibold mb-4">
              <MapPin size={14} />
              <span>Jubilee Hills • Hyderabad</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ivory mb-4">
              Conveniently Located at Aditya Enclave
            </h3>
            <p className="text-ivory/80 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.landmark}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city} 500033. Open 7 days from 9:30 AM to 10:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact#booking">
                <Button variant="luxury" size="lg" className="w-full sm:w-auto text-xs uppercase tracking-widest bg-champagne text-espresso hover:bg-white">
                  Schedule Your Visit
                </Button>
              </Link>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-xs uppercase tracking-widest border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
