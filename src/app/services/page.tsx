import { Metadata } from "next";
import { TREATMENTS } from "@/content/treatments";
import { ServiceCard } from "@/components/ui/ServiceCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sparkles, Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";

export const metadata: Metadata = {
  title: "Luxury Spa Therapies & Wellness Menu in Jubilee Hills",
  description:
    "Explore our complete catalog of 12 luxury wellness therapies in Jubilee Hills, Hyderabad — from Deep Tissue and Thai Therapy to Moroccan Hammam Baths and Couple Massages.",
  alternates: {
    canonical: "/services",
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
      name: "Treatments & Therapies",
      item: "https://www.araspa.co.in/services",
    },
  ],
};

const serviceCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Luxury Wellness Therapies Menu at ARA Spa",
  description:
    "Comprehensive catalog of 12 luxury bodywork and spa therapies at ARA Spa, Jubilee Hills, Hyderabad.",
  numberOfItems: TREATMENTS.length,
  itemListElement: TREATMENTS.map((t, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: t.name,
    url: `https://www.araspa.co.in/services/${t.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      {/* Luxury Editorial Header */}
      <section className="bg-espresso text-ivory py-20 md:py-28 relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-espresso/80 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Treatment Menu &amp; Therapies
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory leading-tight mb-6">
            Crafted for Profound Release
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed mb-8">
            Each ritual at ARA Spa is delivered by certified therapists using cold-pressed botanical oils and tailored pressure adjustments. Discover our twelve signature offerings below.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+917788993406">
              <Button variant="luxury" size="sm" className="bg-champagne text-espresso hover:bg-white text-xs uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>Call Concierge: +91 77889 93406</span>
              </Button>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso text-xs uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#25D366]" />
                <span>Quick WhatsApp Enquiry</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 12 Treatments Complete Grid */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.map((treatment) => (
              <ServiceCard key={treatment.id} treatment={treatment} />
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-20 p-8 sm:p-12 rounded-[24px] bg-linen/70 border border-gold/30 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                <Sparkles size={14} />
                <span>Need Personalized Guidance?</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-espresso mb-2">
                Consult With Our Master Therapist
              </h3>
              <p className="text-charcoal-light font-sans text-sm sm:text-base leading-relaxed">
                Whether seeking relief for acute lower back rigidity or an anniversary couple package, our reception will assist you in selecting the ideal duration and technique.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link href="/contact#booking">
                <Button variant="luxury" size="lg" className="w-full sm:w-auto text-xs uppercase tracking-widest">
                  Request an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
