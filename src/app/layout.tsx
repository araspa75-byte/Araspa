import type { Metadata } from "next";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Luxury Spa & Relaxation in Hyderabad | ARA Spa",
  description: "ARA Spa is a top-rated spa in Madhapur/Jubilee Hills. Deep tissue, traditional Thai, and couples massage. Open 7 days. Call/WhatsApp: +91 77889 93406",
  keywords: "best spa in Madhapur/Jubilee Hills, luxury spa, best spa in hyderabad, massage center in Madhapur/Jubilee Hills, full body massage in hyderabad, spa in Madhapur/Jubilee Hills hyderabad, top rated spa in hyderabad, premium wellness center hyderabad, body massage in Madhapur/Jubilee Hills, best couple massage in Madhapur/Jubilee Hills, luxury massage center in hyderabad",
  metadataBase: new URL("https://www.araspa.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Spa & Relaxation in Hyderabad | ARA Spa",
    description: "ARA Spa is a top-rated spa in Madhapur/Jubilee Hills. Deep tissue, traditional Thai, and couples massage. Open 7 days. Call/WhatsApp: +91 77889 93406",
    url: "https://www.araspa.co.in",
    siteName: "ARA Spa",
    locale: "en_IN",
    type: "website",
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.4326;78.4071",
    "ICBM": "17.4326, 78.4071"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ARA Spa",
  "url": "https://www.araspa.co.in/"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "ARA Spa",
  "description": "Experience the best massage center in Madhapur/Jubilee Hills. Luxury couple packages. Deep tissue, traditional Thai massage, and Swedish stress relief with certified therapists.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "metro piller no 1677, Ara spa, 2nd floor, unit no 212, Aditya Enclave, Madhapur/Jubilee Hills",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500033",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4326,
    "longitude": 78.4071
  },
  "telephone": "+917788993406",
  "email": "Araspa75@gmail.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:30",
      "closes": "22:00"
    }
  ],
  "priceRange": "$$"
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
      <body className="font-sans antialiased bg-cream text-charcoal flex flex-col min-h-screen">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
