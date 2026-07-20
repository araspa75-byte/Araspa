import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { BookingSection } from '@/components/sections/BookingSection';
import { ContactPreview } from '@/components/sections/ContactPreview';
import { FeatureHighlights } from '@/components/sections/FeatureHighlights';

export const metadata: Metadata = {
  title: 'Luxury Spa in Jubilee Hills | Best Spa in Hyderabad',
  description: 'Experience the best massage center in Madhapur and Jubilee Hills. Luxury couple packages near Hitech City. Call +91 77889 93406 to book your retreat today.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <WhyChooseUs />
      <FeatureHighlights />
      <ServicesPreview />
      <TestimonialsPreview />
      <BookingSection />
      <ContactPreview />
    </>
  );
}
