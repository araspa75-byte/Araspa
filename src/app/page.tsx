import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { BUSINESS_INFO } from "@/content/business";

export const metadata: Metadata = {
  title: {
    absolute: "ARA Spa | Luxury Spa & Wellness Sanctuary in Jubilee Hills, Hyderabad",
  },
  description:
    "Experience bespoke body therapies, authentic Thai bodywork, deep tissue massage, and private couple suites at ARA Spa in Jubilee Hills, Hyderabad. Book an appointment today.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <BookingSection />
      <ContactPreview />
    </>
  );
}
