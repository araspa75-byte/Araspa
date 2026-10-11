import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TREATMENTS, getTreatmentBySlug } from "@/content/treatments";
import { ContactForm } from "@/components/ui/ContactForm";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) return { title: "Treatment Not Found" };

  return {
    title: `${treatment.name} Therapy in Jubilee Hills`,
    description: `${treatment.description} (${treatment.duration}). Private acoustic suite, certified therapist at ARA Spa Jubilee Hills.`,
    alternates: {
      canonical: `/services/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.name} in Jubilee Hills | ARA Spa Hyderabad`,
      description: treatment.description,
      images: [
        {
          url: treatment.image,
          width: 800,
          height: 600,
          alt: `${treatment.name} therapy at ARA Spa Jubilee Hills`,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({
    slug: t.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const treatment = getTreatmentBySlug(resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  // Related treatments (same category or nearby)
  const relatedTreatments = TREATMENTS.filter(
    (t) => t.slug !== treatment.slug
  ).slice(0, 3);

  const whatsappBookingUrl = getWhatsAppUrl({
    treatmentName: treatment.name,
  });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.araspa.co.in/services/${treatment.slug}#service`,
    name: `${treatment.name} at ARA Spa`,
    serviceType: treatment.category,
    description: treatment.description,
    provider: {
      "@type": "DaySpa",
      "@id": "https://www.araspa.co.in/#organization",
      name: "ARA Spa",
      telephone: BUSINESS_INFO.phone,
      url: "https://www.araspa.co.in/",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.landmark}`,
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Jubilee Hills" },
    ],
    offers: treatment.pricing.map((tier) => ({
      "@type": "Offer",
      name: `${treatment.name} (${tier.time})`,
      eligibleDuration: tier.time,
      availability: "https://schema.org/InStock",
      url: `https://www.araspa.co.in/services/${treatment.slug}`,
    })),
    image: `https://www.araspa.co.in${treatment.image}`,
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
        name: "Treatments",
        item: "https://www.araspa.co.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: treatment.name,
        item: `https://www.araspa.co.in/services/${treatment.slug}`,
      },
    ],
  };

  const treatmentFaqs = [
    {
      q: `What should I expect during a ${treatment.name} session?`,
      a: `${treatment.longDescription} Your therapist will customize pressure according to your preferences.`,
    },
    {
      q: `How long is the ${treatment.name} session?`,
      a: `${treatment.name} durations range from ${treatment.duration}. Session timings and customizable pressure areas are tailored to your physical recovery needs.`,
    },
    {
      q: `Is advance appointment booking required?`,
      a: `Advance requests via website or WhatsApp (+91 77889 93406) are recommended to ensure your private suite and preferred therapist are reserved and prepared.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatmentFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumbs"
        className="bg-linen/60 border-b border-espresso/10 py-3 text-xs text-taupe font-sans"
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-espresso transition-colors">
            Treatments
          </Link>
          <ChevronRight size={12} />
          <span className="text-espresso font-semibold">{treatment.name}</span>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center bg-espresso overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={treatment.image}
            alt={`${treatment.name} therapy suite`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-champagne/30 text-champagne text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <span>{treatment.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium text-ivory tracking-wide mb-4 leading-tight">
            {treatment.name}
          </h1>

          <p className="text-base sm:text-lg text-champagne font-sans font-normal max-w-2xl mx-auto mb-8">
            {treatment.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-ivory">
            <span className="inline-flex items-center gap-1.5 bg-espresso/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>Duration: {treatment.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-espresso/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Private Acoustic Suite</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Details & Narrative Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* AEO: Direct Answer At-a-Glance Summary */}
              <div className="p-6 bg-linen/70 rounded-2xl border border-gold/30">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold block mb-3">
                  Quick Facts • At a Glance
                </span>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div>
                    <dt className="text-taupe font-medium uppercase tracking-wider">Classification</dt>
                    <dd className="font-semibold text-espresso text-sm mt-0.5">{treatment.category}</dd>
                  </div>
                  <div>
                    <dt className="text-taupe font-medium uppercase tracking-wider">Verified Durations</dt>
                    <dd className="font-semibold text-espresso text-sm mt-0.5">{treatment.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-taupe font-medium uppercase tracking-wider">Consultation</dt>
                    <dd className="font-semibold text-espresso text-sm mt-0.5">Complimentary wellness consultation</dd>
                  </div>
                  <div>
                    <dt className="text-taupe font-medium uppercase tracking-wider">Treatment Setting</dt>
                    <dd className="font-semibold text-espresso text-sm mt-0.5">Private soundproof suite, Jubilee Hills</dd>
                  </div>
                </dl>
              </div>

              {/* Overview */}
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
                  Therapy Overview
                </span>
                <h2 className="font-heading text-3xl font-bold text-espresso mb-4">
                  The Experience
                </h2>
                <p className="text-charcoal-light font-sans text-base sm:text-lg leading-relaxed">
                  {treatment.longDescription}
                </p>
              </div>

              {/* Alt Image & Atmosphere */}
              <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden shadow-luxury border border-espresso/10">
                <img
                  src={treatment.altImage}
                  alt={`${treatment.name} technique detail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-4 bg-espresso/80 backdrop-blur-md text-ivory text-xs px-3.5 py-1.5 rounded-full border border-white/10">
                  Certified ARA Spa Protocol
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-espresso mb-6">
                  Key Physiological Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-linen/50 rounded-xl border border-espresso/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-espresso font-medium leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Sequence */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-espresso mb-6">
                  Therapeutic Ritual Steps
                </h3>
                <ol className="space-y-4 relative border-l border-gold/30 ml-3">
                  {treatment.process.map((step, idx) => (
                    <li key={idx} className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold rounded-full -left-[6.5px] top-1.5 ring-4 ring-ivory" />
                      <div className="bg-linen/40 p-4 rounded-xl border border-espresso/5">
                        <span className="text-[11px] uppercase tracking-wider text-taupe font-semibold block mb-0.5">
                          Step 0{idx + 1}
                        </span>
                        <span className="font-sans text-espresso font-medium text-sm leading-relaxed block">
                          {step}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sanitation & Care Note */}
              <div className="p-6 bg-linen rounded-2xl border border-gold/30 flex items-start gap-4 text-xs text-charcoal-light font-sans">
                <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-espresso text-sm mb-1">
                    Hygiene &amp; Privacy Commitment
                  </h4>
                  <p className="leading-relaxed">
                    All treatments take place in private soundproof rooms. Fresh organic linens and sanitized equipment are prepared prior to each session. Our therapists respect modest draping throughout.
                  </p>
                </div>
              </div>

              {/* AEO: Frequently Asked Questions */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-espresso">
                  Common Questions About {treatment.name}
                </h3>
                <div className="space-y-3">
                  {treatmentFaqs.map((faq, idx) => (
                    <div key={idx} className="p-5 bg-linen/50 rounded-xl border border-espresso/10">
                      <h4 className="font-sans font-semibold text-espresso text-sm mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-charcoal-light font-sans text-xs leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Column: Verified Pricing Matrix & Quick Booking (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Session Durations Breakdown Card */}
              <div className="bg-linen/80 rounded-[24px] p-6 sm:p-8 border border-gold/30 shadow-luxury">
                <div className="flex items-center justify-between pb-4 border-b border-espresso/10 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold font-semibold block">
                      Session Timings
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-espresso">
                      Available Durations
                    </h3>
                  </div>
                  <Clock className="w-5 h-5 text-gold" />
                </div>

                <div className="space-y-3">
                  {treatment.pricing.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-espresso/10 hover:border-gold transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold" />
                        <span className="font-sans text-sm font-semibold text-espresso">
                          {tier.time}
                        </span>
                      </div>
                      <span className="text-xs font-sans text-taupe font-medium">
                        Customized Session
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-taupe font-sans mt-4 text-center">
                  * All sessions include private suite amenities and fresh herbal tea.
                </p>

                {/* Direct Action Buttons */}
                <div className="pt-6 border-t border-espresso/10 mt-6 space-y-3">
                  <a
                    href="#inline-booking"
                    className="block w-full"
                  >
                    <Button
                      variant="luxury"
                      size="lg"
                      className="w-full text-xs uppercase tracking-widest py-3.5"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Request This Treatment</span>
                    </Button>
                  </a>

                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full text-xs uppercase tracking-widest py-3.5 border-[#25D366]/60 text-[#128C7E] hover:bg-[#25D366]/10"
                    >
                      <MessageSquare className="w-4 h-4 mr-2 text-[#25D366]" />
                      <span>WhatsApp Reservation</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Concierge Call Box */}
              <div className="p-6 bg-ivory rounded-[20px] border border-espresso/10 text-center">
                <p className="text-xs text-taupe uppercase tracking-wider mb-1 font-semibold">
                  Prefer To Speak With Someone?
                </p>
                <p className="text-xs text-charcoal-light mb-4">
                  Call our Jubilee Hills reception for immediate availability.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-gold transition-colors"
                >
                  <Phone size={15} className="text-gold" />
                  <span>{BUSINESS_INFO.displayPhone}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Inline Dedicated Booking Section */}
          <div id="inline-booking" className="mt-24 pt-16 border-t border-espresso/10">
            <div className="max-w-3xl mx-auto">
              <ContactForm defaultTreatmentSlug={treatment.slug} />
            </div>
          </div>

          {/* Related Treatments Grid */}
          <div className="mt-28 pt-16 border-t border-espresso/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-1">
                  Complementary Sessions
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-espresso">
                  Explore Other Treatments
                </h3>
              </div>
              <Link href="/services">
                <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider">
                  View Full Menu
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTreatments.map((t) => (
                <ServiceCard key={t.id} treatment={t} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
