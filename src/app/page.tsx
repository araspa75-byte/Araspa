import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { BookingSection } from '@/components/sections/BookingSection';
import { ContactPreview } from '@/components/sections/ContactPreview';
import { Marquee } from '@/components/sections/Marquee';
import { GalleryPreview } from '@/components/sections/GalleryPreview';

export const metadata: Metadata = {
  title: 'Luxury Spa in Jubilee Hills | Best Spa in Hyderabad',
  description: 'Experience the best massage center in Madhapur and Jubilee Hills. Luxury couple packages near Hitech City. Call +91 77889 93406 to book your retreat today.',
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
