import type { Metadata } from "next";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import { BUSINESS_INFO } from "@/content/business";
import { TREATMENTS } from "@/content/treatments";

export const metadata: Metadata = {
  title: {
    default: "ARA Spa | Luxury Spa & Wellness Sanctuary in Jubilee Hills, Hyderabad",
    template: "%s | ARA Spa Hyderabad",
  },
  description:
    "ARA Spa is a premier luxury wellness center in Jubilee Hills, Hyderabad. Offering authentic Thai therapy, deep tissue massage, organic scrubs, and private couple suites. Call +91 77889 93406.",
  keywords: [
    "luxury spa jubilee hills",
    "best spa in hyderabad",
    "couples massage hyderabad",
    "thai massage jubilee hills",
    "deep tissue massage hyderabad",
    "massage center near me",
    "aditya enclave spa",
    "moroccan bath hyderabad",
    "swedish therapy jubilee hills",
    "ara spa hyderabad",
  ],
  metadataBase: new URL("https://www.araspa.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ARA Spa | Luxury Spa & Wellness Sanctuary in Jubilee Hills, Hyderabad",
    description:
      "A tranquil wellness retreat in Jubilee Hills, Hyderabad. Dedicated to deep muscular recovery, authentic Thai therapy, and restorative privacy.",
    url: "https://www.araspa.co.in",
    siteName: "ARA Spa",
    images: [
      {
        url: "/images/A-Luxury-Spa-in-Hyderabad-for-Deep-Relaxation.png",
        width: 1200,
        height: 630,
        alt: "ARA Spa - Luxury Spa in Jubilee Hills Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARA Spa | Luxury Spa in Jubilee Hills, Hyderabad",
    description:
      "Authentic Thai therapy, deep tissue bodywork, and private couple suites in Jubilee Hills.",
    images: ["/images/A-Luxury-Spa-in-Hyderabad-for-Deep-Relaxation.png"],
  },
  verification: {
    google: "google1183e51014c9a23b.html",
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Jubilee Hills, Hyderabad",
    "geo.position": `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`,
    ICBM: `${BUSINESS_INFO.geo.latitude}, ${BUSINESS_INFO.geo.longitude}`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.araspa.co.in/#website",
  name: "ARA Spa",
  url: "https://www.araspa.co.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.araspa.co.in/services?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "DaySpa"],
  "@id": "https://www.araspa.co.in/#organization",
  name: "ARA Spa",
  legalName: BUSINESS_INFO.legalName,
  image: "https://www.araspa.co.in/images/A-Luxury-Spa-in-Hyderabad-for-Deep-Relaxation.png",
  logo: "https://www.araspa.co.in/images/Araspa-LOGO.png",
  url: "https://www.araspa.co.in/",
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "AdministrativeArea", name: "Jubilee Hills" },
    { "@type": "AdministrativeArea", name: "Madhapur" },
    { "@type": "AdministrativeArea", name: "Banjara Hills" },
    { "@type": "AdministrativeArea", name: "Hitec City" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.landmark}`,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: BUSINESS_INFO.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.geo.latitude,
    longitude: BUSINESS_INFO.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: BUSINESS_INFO.hours.opens,
      closes: BUSINESS_INFO.hours.closes,
    },
  ],
  sameAs: [
    BUSINESS_INFO.socials.instagram,
    BUSINESS_INFO.socials.facebook,
    BUSINESS_INFO.googleMapsDirectionsUrl,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ARA Spa Therapies & Wellness Catalog",
    itemListElement: TREATMENTS.map((t, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: t.name,
        description: t.description,
      },
      price: t.pricing[0].priceNumber,
      priceCurrency: "INR",
      position: index + 1,
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-ivory text-espresso flex flex-col min-h-screen">
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1A1614",
              color: "#F8F5EE",
              border: "1px solid rgba(173, 141, 91, 0.4)",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
            },
          }}
        />
        {process.env.NODE_ENV === "production" &&
          Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL) && (
            <>
              <SpeedInsights />
              <Analytics />
            </>
          )}
      </body>
    </html>
  );
}
