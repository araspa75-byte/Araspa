import { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Spa Etiquette",
  description:
    "Everything you need to know before visiting ARA Spa in Jubilee Hills. Arrival etiquette, privacy and draping, couple suites, therapist certifications, and booking.",
  alternates: {
    canonical: "/faq",
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
      name: "FAQ",
      item: "https://www.araspa.co.in/faq",
    },
  ],
};

const faqs = [
  {
    title: "How early should I arrive for my appointment?",
    content:
      "We recommend arriving 15 minutes prior to your scheduled time. This allows you to check in peacefully, enjoy a warm herbal welcome beverage, and complete a brief consultation with your therapist regarding pressure preferences and muscular focus areas.",
  },
  {
    title: "What is your privacy and draping standard?",
    content:
      "Your dignity and comfort are absolute priorities. All treatments occur in fully soundproof private rooms. You are provided with fresh luxury robes and slippers. During bodywork, our certified therapists utilize professional draping techniques, exposing only the specific body zone receiving active therapy.",
  },
  {
    title: "Can I request a specific therapist or gender preference?",
    content:
      "Yes. If you have a preference for a female or male therapist, or wish to re-book with a specific practitioner you enjoyed previously, please inform us when submitting your appointment request so we can ensure their schedule aligns.",
  },
  {
    title: "Do you have private suites for couples?",
    content:
      "Yes. ARA Spa features dedicated luxury couple suites equipped with side-by-side therapy tables, tranquil ambient lighting, and ensuite facilities. It is ideal for anniversaries, celebrations, or shared weekend relaxation.",
  },
  {
    title: "What type of massage oils and skincare products do you use?",
    content:
      "We exclusively use 100% cold-pressed organic carrier oils (such as sweet almond and jojoba) infused with therapeutic-grade botanical essential oils (lavender, eucalyptus, lemongrass, chamomile). Our products contain zero mineral oil fillers or synthetic parabens.",
  },
  {
    title: "Is parking available at Aditya Enclave?",
    content:
      "Yes. Dedicated building parking and convenient valet assistance are available at Aditya Enclave, located directly near Metro Pillar 1677 on Road No. 36 in Jubilee Hills.",
  },
  {
    title: "What is your cancellation and rescheduling policy?",
    content:
      "We request at least 2 hours of advance notice for rescheduling or cancellations so we can offer the reserved therapist and suite to waiting guests.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.content,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Editorial Header */}
      <section className="bg-espresso text-ivory py-20 md:py-28 text-center relative overflow-hidden border-b border-gold/20">
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Guest Information &amp; Etiquette
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Everything you need to know about preparing for your session at ARA Spa Jubilee Hills.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-linen/60 p-6 sm:p-12 rounded-[24px] shadow-luxury border border-gold/25">
            <Accordion items={faqs} />
          </div>

          {/* Need help banner */}
          <div className="mt-16 p-8 rounded-[22px] bg-espresso text-ivory text-center border border-gold/30">
            <h3 className="font-heading text-2xl font-bold text-ivory mb-2">
              Have a question not addressed here?
            </h3>
            <p className="text-ivory/75 font-sans text-sm mb-6 max-w-md mx-auto">
              Our Jubilee Hills reception is on hand to assist seven days a week.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+917788993406">
                <Button variant="luxury" size="sm" className="bg-champagne text-espresso hover:bg-white text-xs uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>Call +91 77889 93406</span>
                </Button>
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso text-xs uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
