import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Gallery | ARA Spa Madhapur/Jubilee Hills — See Our Luxury Spa',
  description: 'Photos of ARA Spa’s private treatment rooms, interiors, and facilities in Madhapur/Jubilee Hills, Hyderabad.',
};

import fs from 'fs';
import path from 'path';

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  try {
    const files = fs.readdirSync(galleryDir);
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/) ? (a.match(/\d+/) as RegExpMatchArray)[0] : '0');
        const numB = parseInt(b.match(/\d+/) ? (b.match(/\d+/) as RegExpMatchArray)[0] : '0');
        return numA - numB;
      })
      .map(file => `/gallery/${file}`);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

export default function GalleryPage() {
  const images = getGalleryImages();
  
  return (
    <>
      <section className="bg-charcoal-fixed py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">See the Space</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream-fixed/80 text-lg max-w-2xl mx-auto font-sans">
              Here’s what ARA Spa actually looks like. No stock photos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <ScrollReveal key={index} delay={0.1 * (index % 5)} className="break-inside-avoid">
                <div className="relative group overflow-hidden rounded-xl shadow-md">
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
