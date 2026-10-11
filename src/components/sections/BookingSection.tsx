import React from "react";
import { ContactForm } from "../ui/ContactForm";

export function BookingSection() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-linen/50 scroll-mt-24 border-t border-espresso/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
