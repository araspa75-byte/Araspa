import type { Metadata } from "next";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

export const metadata: Metadata = {
  title: "ARA Spa Madhapur | Best Spa in Hyderabad — Luxury Massage Near Hitech City",
  description: "ARA Spa is a top rated spa in Hyderabad, located in Madhapur near Hitech City. Deep tissue massage therapy, traditional Thai massage, Swedish massage for stress relief, and couples treatments. Certified therapists, private rooms. Open 7 days.",
  keywords: "best spa in madhapur, luxury spa near hitech city, best spa in hyderabad, massage center in madhapur, full body massage in hyderabad, spa in madhapur hyderabad, top rated spa in hyderabad, premium wellness center hyderabad, body massage in madhapur, best couple massage in madhapur, luxury massage center in hyderabad",
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.4326;78.4071",
    "ICBM": "17.4326, 78.4071"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "ARA Spa",
  "description": "Experience the best massage center in Madhapur and Jubilee Hills. Luxury couple packages near Hitech City. Deep tissue, traditional Thai massage, and Swedish stress relief with certified therapists.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "metro piller no 1677, Ara spa, 2nd floor, unit no 212, Aditya Enclave, Jubilee Hills",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-charcoal flex flex-col min-h-screen">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
