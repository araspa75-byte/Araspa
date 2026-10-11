import { Metadata } from "next";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { ContactForm } from "@/components/ui/ContactForm";
import { Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";

export const metadata: Metadata = {
  title: "Reserve an Appointment & Contact Concierge in Jubilee Hills",
  description:
    "Request your appointment at ARA Spa in Jubilee Hills, Hyderabad. Book online, chat on WhatsApp, or call +91 77889 93406. Open 9:30 AM to 10:00 PM every day.",
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.araspa.co.in/contact#webpage",
  url: "https://www.araspa.co.in/contact",
  name: "Contact ARA Spa Jubilee Hills",
  description: "Direct reservation request, WhatsApp concierge, and verified phone contact for ARA Spa Jubilee Hills.",
  mainEntity: {
    "@type": "DaySpa",
    "@id": "https://www.araspa.co.in/#organization",
    name: "ARA Spa",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.landmark}`,
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: "IN",
    },
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
      name: "Contact & Reservations",
      item: "https://www.araspa.co.in/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Editorial Header */}
      <section className="bg-espresso text-ivory py-20 md:py-28 text-center relative overflow-hidden border-b border-gold/20">
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Reservations &amp; Concierge
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory mb-6 leading-tight">
            Reserve Your Time
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed mb-8">
            Select your preferred treatment and time window below. Our reception team will reach out promptly to confirm your therapist and suite.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+917788993406">
              <Button
                variant="luxury"
                size="sm"
                className="bg-champagne text-espresso hover:bg-white text-xs uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>Call +91 77889 93406</span>
              </Button>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 md:py-28 bg-ivory scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ContactForm />
        </div>
      </section>

      {/* Location & Map Preview */}
      <ContactPreview />
    </>
  );
}
