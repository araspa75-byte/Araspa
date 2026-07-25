"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clean the phone number by removing spaces, hyphens, and parentheses
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");

    // Validate Indian phone number format
    const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(cleanPhone)) {
      setPhoneError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        service: { value: string };
        date: { value: string };
        message: { value: string };
      };

      const finalService = service === 'other' 
          ? (customService || 'Other') 
          : target.service.value;

      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: target.name.value,
          phone: phone,
          email: target.email.value,
          service: finalService,
          preferred_date: target.date.value || null,
          message: target.message.value || null,
        }
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setPhone("");
      setService("");
      setCustomService("");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-cream shadow-lg rounded-2xl text-center border border-beige">
        <h3 className="text-2xl font-heading font-bold text-forest mb-4">Thank You</h3>
        <p className="text-charcoal-light">
          Your message has been received. We will contact you shortly to confirm your booking.
        </p>
        <Button 
          className="mt-6" 
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-cream p-8 sm:p-10 shadow-xl rounded-2xl border border-beige">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-charcoal">Full Name</label>
          <input 
            id="name" 
            required 
            className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow" 
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">Phone Number</label>
          <input 
            id="phone" 
            type="tel" 
            required 
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (phoneError) setPhoneError("");
            }}
            className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow" 
            placeholder="+91 98765 43210"
          />
          {phoneError && (
            <p className="text-xs text-red-500 mt-1">{phoneError}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-charcoal">Email Address</label>
          <input 
            id="email" 
            type="email" 
            required 
            className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow" 
            placeholder="jane@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-charcoal">Preferred Service</label>
          <select 
            id="service" 
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow text-charcoal-light"
          >
            <option value="">Select a service</option>
            <option value="aroma-therapy">Aroma</option>
            <option value="balinese-therapy">Balinese Therapy</option>
            <option value="thai-therapy">Thai Therapy</option>
            <option value="deep-tissue-massage">Deep Tissue</option>
            <option value="swedish-massage">Swedish Therapy</option>
            <option value="tantra">Tantra</option>
            <option value="moroccan-bath-massage">Moroccan Bath Massage</option>
            <option value="body-scrubbing-massage">Body Scrubbing Massage</option>
            <option value="four-hands-massage">Four Hands Massage</option>
            <option value="hot-stone-massage">Hot Stone Massage</option>
            <option value="couple-massage">Couple Massage</option>
            <option value="signature-massage">Signature Massage</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      {service === 'other' && (
        <div className="space-y-2">
          <label htmlFor="custom_service" className="text-sm font-medium text-charcoal">Custom Service (Optional)</label>
          <input 
            id="custom_service" 
            type="text" 
            value={customService}
            onChange={(e) => setCustomService(e.target.value)}
            className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow" 
            placeholder="Type custom service..."
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-medium text-charcoal">Preferred Date</label>
        <input 
          id="date" 
          type="date" 
          className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow text-charcoal-light" 
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-charcoal">Message (Optional)</label>
        <textarea 
          id="message" 
          rows={4} 
          className="w-full px-4 py-3 bg-cream border border-beige rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow resize-none" 
          placeholder="Tell us about any specific preferences or conditions..."
        ></textarea>
      </div>

      <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Request Appointment'}
        {!isSubmitting && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </Button>
    </form>
  );
}
