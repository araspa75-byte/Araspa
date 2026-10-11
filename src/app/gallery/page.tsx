import { Metadata } from "next";
import { GalleryClient } from "@/components/ui/GalleryClient";

export const metadata: Metadata = {
  title: "Sanctuary Ambience & Private Suite Gallery in Jubilee Hills",
  description:
    "View authentic interior photographs of ARA Spa in Jubilee Hills, Hyderabad. Explore private acoustic massage rooms, couple suites, and relaxing sanctuary corridors.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "ARA Spa Interior & Private Suite Gallery | Jubilee Hills Hyderabad",
    description:
      "Explore genuine photography of our soundproof treatment suites, Thai mats, and luxury couple suites in Jubilee Hills.",
    images: [
      {
        url: "/gallery/spa-interior-1.jpeg",
        width: 1200,
        height: 800,
        alt: "ARA Spa Sanctuary Interior Jubilee Hills",
      },
    ],
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
      name: "Gallery",
      item: "https://www.araspa.co.in/gallery",
    },
  ],
};

export default function GalleryPage() {
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
            Real Ambience &amp; Facilities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-wide text-ivory mb-6 leading-tight">
            See the Space
          </h1>
          <p className="text-ivory/80 text-base sm:text-lg font-sans font-light leading-relaxed">
            Authentic photographs of ARA Spa&apos;s private soundproof chambers, couple suites, and tranquil hallways in Jubilee Hills, Hyderabad.
          </p>
        </div>
      </section>

      {/* Interactive Filter & Lightbox Catalog */}
      <GalleryClient />
    </>
  );
}
