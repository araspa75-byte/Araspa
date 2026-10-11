import { Metadata } from "next";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BUSINESS_INFO } from "@/content/business";

export const metadata: Metadata = {
  title: "Guest Reviews & Testimonials from Jubilee Hills Sanctuary",
  description:
    "Read genuine reviews from guests at ARA Spa in Jubilee Hills, Hyderabad. Verified feedback on our Thai bodywork, couples suites, and certified practitioners.",
  alternates: {
    canonical: "/testimonials",
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
      name: "Testimonials",
      item: "https://www.araspa.co.in/testimonials",
    },
  ],
};

const reviews = [
  {
    name: "Mallesh B",
    source: "Google Business Review",
    rating: 5,
    therapy: "Full Body Massage",
    date: "Verified Guest",
    content:
      "Good ambiance, The experience in Ara spa was amazing the management and staff are very friendly and helpful, massage was good and body relaxation for me. Prices and Overall its a good experience for me recommended.",
  },
  {
    name: "Meena Meena",
    source: "Google Business Review",
    rating: 5,
    therapy: "Rejuvenation Spa Visit",
    date: "Verified Guest",
    content:
      "Visited Ara Spa today it was an absolutely amazing experience! The ambiance was peaceful, the staff were warm and professional and every moment felt rejuvenating. I left feeling relaxed, refreshed and totally pampered. Highly recommend!",
  },
  {
    name: "Vadde Sivaram",
    source: "Google Business Review",
    rating: 5,
    therapy: "Traditional Thai Bodywork",
    date: "Verified Guest",
    content:
      "Very well neat maintained hygiene spa and good atmosphere. Such a very good professional massage and also Thai experts are available and good receiving.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Editorial Header */}
      <section className="bg-espresso text-ivory py-20 md:py-28 text-center relative overflow-hidden border-b border-gold/20">
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Real Guest Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory mb-6 leading-tight">
            Guest Reflections
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Genuine verified experiences from clients who visited our Jubilee Hills sanctuary.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-linen/60 rounded-[24px] p-8 sm:p-10 border border-gold/25 shadow-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-gold">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] uppercase tracking-widest text-taupe font-semibold">
                      {review.source}
                    </span>
                  </div>

                  <p className="text-charcoal-light font-sans text-sm sm:text-base leading-relaxed mb-8 italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-espresso/10">
                  <h3 className="font-heading text-lg font-bold text-espresso">
                    {review.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-taupe font-sans mt-1">
                    <span>{review.therapy}</span>
                    <span className="text-gold font-medium">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Invitation Call to Action */}
          <div className="mt-20 p-8 sm:p-12 rounded-[24px] bg-linen border border-gold/30 shadow-luxury text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              Experience the Stillness
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-espresso mb-4">
              Reserve Your Treatment
            </h3>
            <p className="text-charcoal-light font-sans text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Step into an unhurried sanctuary in Jubilee Hills.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact#booking">
                <Button variant="luxury" size="lg" className="text-xs uppercase tracking-widest px-8">
                  Request an Appointment
                </Button>
              </Link>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="text-xs uppercase tracking-widest px-6">
                  <span>View on Google Maps</span>
                  <ArrowUpRight size={14} className="ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
