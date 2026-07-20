import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "../ui/ContactForm";

export function BookingSection() {
  return (
    <section className="py-24 bg-beige/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Couple Massage Packages Hyderabad" 
          subtitle="Book a private suite for you and your partner. Tell us what you need and when, and we'll confirm shortly."
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
