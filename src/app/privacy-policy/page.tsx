import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy & Guest Data Protection",
  description: "Privacy policy and client data protection guidelines for ARA Spa in Jubilee Hills, Hyderabad.",
  alternates: {
    canonical: "/privacy-policy",
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
      name: "Privacy Policy",
      item: "https://www.araspa.co.in/privacy-policy",
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl font-sans text-charcoal-light">
        <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
          Legal & Privacy
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-espresso mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 leading-relaxed bg-linen/50 p-8 sm:p-12 rounded-[24px] border border-espresso/10">
          <p className="text-xs text-taupe">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">1. Introduction</h2>
          <p>
            ARA Spa &amp; Wellness (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to safeguarding your personal information. 
            This privacy policy outlines how we handle your enquiry details when you request appointment reservations through our website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">2. The Information We Collect</h2>
          <p>
            When you request an appointment or message our concierge, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-espresso/90">
            <li><strong>Identity &amp; Contact:</strong> Full name, telephone/WhatsApp contact number, and optional email address.</li>
            <li><strong>Service Preferences:</strong> Desired therapy (e.g. Thai therapy, couple massage), preferred date, time window, and guest count.</li>
            <li><strong>Muscular Notes:</strong> Any optional focus areas or physical considerations you provide in your message.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-espresso mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We strictly utilize your contact information to coordinate your spa appointment, confirm therapist scheduling, and send reservation reminders. We never sell, rent, or distribute client contact information to third-party advertisers.
          </p>

          <p className="mt-12 text-sm pt-6 border-t border-espresso/10">
            For data inquiries, contact our front desk at <a href="mailto:Araspa75@gmail.com" className="text-gold font-medium hover:underline">Araspa75@gmail.com</a> or call <a href="tel:+917788993406" className="text-gold font-medium hover:underline">+91 77889 93406</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
