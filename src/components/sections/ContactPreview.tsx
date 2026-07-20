import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPreview() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/50 -skew-x-12 translate-x-20 hidden lg:block" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12 space-y-12">
            <SectionHeading 
              title="Visit Our Body Massage Spa Near Hitech City" 
              subtitle="Conveniently located in Jubilee Hills, serving all of Madhapur. Pick a time that works for you — we're open every day."
              align="left"
            />

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0 mr-6 text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-charcoal mb-1">Call or WhatsApp</h4>
                  <p className="text-charcoal-light font-sans mb-1">+91 77889 93406</p>
                  <a href="https://wa.me/917788993406?text=Hi%2C+I+need+service.+Please+share+details." target="_blank" rel="noopener" className="text-sm font-medium text-gold hover:underline">Message on WhatsApp</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0 mr-6 text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-charcoal mb-1">Visit Us</h4>
                  <p className="text-charcoal-light font-sans">metro piller no 1677, Ara spa, 2nd floor, unit no 212, Aditya Enclave<br/>Jubilee Hills, Hyderabad, Telangana 500033<br/><span className="text-sm text-charcoal-light/70">Serving Jubilee Hills, Madhapur & Hitech City</span></p>
                  <a href="https://maps.google.com/?cid=4185948183911949870" target="_blank" rel="noopener" className="text-sm font-medium text-gold hover:underline mt-1 inline-block">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0 mr-6 text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-charcoal mb-1">Opening Hours</h4>
                  <p className="text-charcoal-light font-sans">Sun - Sat: 9:30 AM - 10:00 PM<br/>Open all days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex items-center justify-center">
            <div className="w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5033098838217!2d78.402298!3d17.4356082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91528c4653ef%3A0x3a1779b1f643662e!2sAra%20Spa!5e0!3m2!1sen!2sin!4v1783422007588!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ARA Spa Location - Luxury Spa in Jubilee Hills"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
