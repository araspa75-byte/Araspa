import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, Shield, Sparkles, Leaf, MapPin, Smile, Heart, CheckCircle } from "lucide-react";

const features = [
  { title: "Certified Trained Professionals", description: "Every therapist completes 200+ hours of hands-on training before they work on a single guest. Deep tissue massage therapy, traditional Thai massage, Swedish techniques — they know anatomy, not just motions.", icon: Award },
  { title: "Spotless, Every Time", description: "Fresh linens for every guest. UV-sterilized tools. Hospital-grade cleaning between sessions. It’s why guests call us the best spa in Madhapur for hygiene alone.", icon: Shield },
  { title: "Thai Experts on Staff", description: "Our Thai therapists trained in Thailand. Authentic assisted stretches, acupressure, and compressions — not a watered-down version. Real traditional Thai massage, right here in Madhapur.", icon: Sparkles },
  { title: "Private, Soundproof Rooms", description: "Each room is spacious, sound-insulated, and climate-controlled. No outside noise, no interruptions. That’s what makes this a luxury spa near Hitech City that feels worlds away.", icon: MapPin },
  { title: "Rejuvenating Aromatherapy Oils", description: "We use rejuvenating aromatherapy oils — lavender, eucalyptus, chamomile — all 100% organic and cruelty-free. Products we’d put on our own skin.", icon: Leaf },
  { title: "Open Every Day", description: "9:30 AM to 10 PM, seven days a week — including public holidays. Before work, after dinner, Sunday morning. We’re the massage center in Madhapur that fits your schedule, not the other way around.", icon: CheckCircle },
  { title: "Best Couple Massage in Madhapur", description: "Side-by-side in a private suite, two therapists, one shared experience. Guests tell us it’s the best couple massage in Madhapur — and it’s booked out most weekends.", icon: Heart },
  { title: "Book in 30 Seconds", description: "Send us a WhatsApp message or call. Tell us the time and treatment. Done. No app downloads, no account creation.", icon: Smile },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-beige">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="The Best Massage Center in Madhapur & Jubilee Hills" 
          subtitle="From our spotless rooms to our certified therapists, discover why corporate professionals choose ARA Spa."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-cream p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gold/10 group"
            >
              <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal-light font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
