import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & Spa Etiquette Guidelines",
  description: "Terms of service, reservation policies, and sanctuary etiquette for ARA Spa in Jubilee Hills, Hyderabad.",
  alternates: {
    canonical: "/terms-conditions",
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
      name: "Terms & Conditions",
      item: "https://www.araspa.co.in/terms-conditions",
    },
  ],
};

export default function TermsPage() {
  return (
    <div className="py-24 bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl font-sans text-charcoal-light">
        <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
          Sanctuary Guidelines
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-espresso mb-8">Terms &amp; Conditions</h1>
        
        <div className="space-y-6 leading-relaxed bg-linen/50 p-8 sm:p-12 rounded-[24px] border border-espresso/10">
          <p className="text-xs text-taupe">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">1. Appointments &amp; Reservations</h2>
          <p>
            Advance booking is strongly recommended to guarantee your preferred therapist, private suite, and time slot. When submitting an online enquiry, our concierge will confirm therapist availability prior to finalizing your booking.
          </p>

          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">2. Arrival &amp; Etiquette</h2>
          <p>
            We kindly ask guests to arrive approximately 15 minutes before the scheduled start time. This allows you to check in peacefully and complete your preliminary consultation. In the event of late arrival, your therapy may be abbreviated to honor subsequent appointments.
          </p>

          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">3. Sanctuary Environment</h2>
          <p>
            To preserve the quiet stillness of our premises for all guests, mobile devices should be switched to silent mode upon entering the sanctuary.
          </p>

          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">4. Health &amp; Physical Considerations</h2>
          <p>
            Please notify your therapist or reception if you have acute spinal conditions, recent surgeries, high blood pressure, or are expecting. Our certified practitioners will customize techniques accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
