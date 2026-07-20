import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Star } from "lucide-react";
import { Carousel } from "../ui/Carousel";

const reviews = [
  {
    name: "Mallesh B",
    role: "Google Review",
    content: "Good ambiance, The experience in Ara spa was amazing the management and staff are very friendly and helpful, massage was good and body relaxation for me. Prices and Overall its a good experience for me recommended.",
    rating: 5,
  },
  {
    name: "Meena Meena",
    role: "Google Review",
    content: "Visited Ara Spa today it was an absolutely amazing experience! The ambiance was peaceful, the staff were warm and professional and every moment felt rejuvenating. I left feeling relaxed, refreshed and totally pampered. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vadde Sivaram",
    role: "Google Review",
    content: "Very well neat maintained hygiene spa and good atmosphere. Such a very good professional massage and also Thai experts are available and good receiving.",
    rating: 5,
  }
];

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-beige">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="What Our Guests Say" 
          subtitle="Real reviews from real people. We didn't write these."
        />

        <div className="mt-16 w-full max-w-4xl mx-auto">
          <Carousel interval={6000}>
            {reviews.map((review, index) => (
              <div key={index} className="w-full px-4 md:px-12 pb-8">
                <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-sm h-full flex flex-col items-center text-center">
                  <div className="flex text-gold mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal-light font-sans italic mb-8 text-lg md:text-xl leading-relaxed">
                    "{review.content}"
                  </p>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-xl">{review.name}</h4>
                    <span className="text-sm text-charcoal-light/70 uppercase tracking-widest">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
