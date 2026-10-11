"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Send, MessageSquare, PhoneCall, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { TREATMENTS } from "@/content/treatments";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/content/business";
import { trackWhatsAppClick, trackFormSubmission } from "@/lib/analytics";
import toast from "react-hot-toast";

interface ContactFormProps {
  defaultTreatmentSlug?: string;
}

export function ContactForm({ defaultTreatmentSlug }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultTreatmentSlug || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Afternoon (1:00 PM - 5:00 PM)");
  const [guests, setGuests] = useState("1 Person");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const selectedTreatment = TREATMENTS.find((t) => t.slug === service);

  const handlePhoneChange = (val: string) => {
    setPhone(val);
    if (phoneError) setPhoneError("");
  };

  const handleWhatsAppEnquiry = () => {
    const treatmentName = selectedTreatment?.name || (service ? service : "Spa Treatment");
    trackWhatsAppClick(treatmentName, "contact_form_whatsapp_btn");
    // Generate pre-filled WhatsApp message
    const url = getWhatsAppUrl({
      treatmentName,
      preferredDate: date || "Upcoming Date",
      preferredTime: timeSlot,
      guestCount: guests,
      guestName: name || undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clean phone number
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(cleanPhone)) {
      setPhoneError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const treatmentName = selectedTreatment?.name || service || "General Enquiry";

      const submissionPayload = {
        name,
        phone: cleanPhone,
        email: email || null,
        service: `${treatmentName} (${guests}, ${timeSlot})`,
        preferred_date: date ? date : null,
        message: message ? message : null,
        status: "Pending",
      };

      if (isSupabaseConfigured) {
        try {
          const { error } = await supabase
            .from("contact_submissions")
            .insert([submissionPayload]);

          if (error) {
            console.warn("Supabase insertion notice:", error.message || error);
          }
        } catch (dbErr) {
          console.warn("Supabase connection unavailable, falling back gracefully:", dbErr);
        }
      }

      trackFormSubmission(treatmentName);
      setIsSubmitted(true);
      toast.success("Appointment request submitted successfully!");
    } catch (err) {
      console.error("Submission error:", err);
      // Still show success since it's an enquiry and provide instant WhatsApp fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 bg-ivory shadow-luxury-lg rounded-[24px] text-center border border-gold/30">
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6 text-gold">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-espresso mb-3">
          Appointment Request Received
        </h3>
        <p className="text-charcoal-light font-sans max-w-lg mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-espresso">{name || "valued guest"}</strong>. Our Jubilee Hills concierge will review your preferred slot and contact you via call or WhatsApp to confirm therapist availability.
        </p>

        <div className="p-4 bg-linen/60 rounded-xl max-w-md mx-auto text-xs text-taupe font-sans mb-8">
          <span>Requested: </span>
          <strong className="text-espresso">
            {selectedTreatment?.name || service || "Spa Session"}
          </strong>
          {date && <span> on {date} ({timeSlot})</span>}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="default"
            onClick={handleWhatsAppEnquiry}
            className="w-full sm:w-auto text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59]"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Confirm Faster on WhatsApp</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setName("");
              setPhone("");
              setMessage("");
            }}
            className="w-full sm:w-auto text-xs uppercase tracking-wider"
          >
            Request Another Time
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory p-6 sm:p-10 md:p-12 shadow-luxury-lg rounded-[24px] border border-gold/25 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-espresso/10">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold block mb-1">
            Concierge Booking
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-espresso">
            Request an Appointment
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-taupe font-sans">
          <Clock className="w-4 h-4 text-gold shrink-0" />
          <span>Open Daily 9:30 AM – 10:00 PM</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="booking-name" className="text-xs uppercase tracking-wider font-semibold text-espresso">
              Your Full Name <span className="text-gold">*</span>
            </label>
            <input
              id="booking-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso placeholder:text-taupe transition-all"
              placeholder="e.g. Aditi Sharma"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="booking-phone" className="text-xs uppercase tracking-wider font-semibold text-espresso">
              Contact Phone <span className="text-gold">*</span>
            </label>
            <input
              id="booking-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso placeholder:text-taupe transition-all"
              placeholder="+91 98765 43210"
            />
            {phoneError && (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle size={13} />
                <span>{phoneError}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email & Treatment Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="booking-service" className="text-xs uppercase tracking-wider font-semibold text-espresso">
              Select Therapy / Treatment <span className="text-gold">*</span>
            </label>
            <select
              id="booking-service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso transition-all"
            >
              <option value="">Choose a treatment...</option>
              {TREATMENTS.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.name} ({t.startingPrice})
                </option>
              ))}
              <option value="couple-suite">Private Couple Suite Package</option>
              <option value="custom-consultation">Therapist Recommendation / Not Sure</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="booking-guests" className="text-xs uppercase tracking-wider font-semibold text-espresso">
              Number of Guests
            </label>
            <select
              id="booking-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso transition-all"
            >
              <option value="1 Person">1 Person (Individual Room)</option>
              <option value="2 Persons (Couple Suite)">2 Persons (Couple Suite)</option>
              <option value="3+ Guests (Group)">3+ Guests (Group Retreat)</option>
            </select>
          </div>
        </div>

        {/* Date & Time Slot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="booking-date" className="text-xs uppercase tracking-wider font-semibold text-espresso">
              Preferred Date
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="booking-time" className="text-xs uppercase tracking-wider font-semibold text-espresso">
              Preferred Time Window
            </label>
            <select
              id="booking-time"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso transition-all"
            >
              <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM – 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
              <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
              <option value="Late Evening (7:00 PM - 10:00 PM)">Late Evening (7:00 PM – 10:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Email & Special Notes */}
        <div className="space-y-2">
          <label htmlFor="booking-email" className="text-xs uppercase tracking-wider font-semibold text-espresso">
            Email Address <span className="text-taupe font-normal">(Optional for confirmation receipt)</span>
          </label>
          <input
            id="booking-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso placeholder:text-taupe transition-all"
            placeholder="your.email@domain.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="booking-message" className="text-xs uppercase tracking-wider font-semibold text-espresso">
            Special Requests or Muscular Focus Areas <span className="text-taupe font-normal">(Optional)</span>
          </label>
          <textarea
            id="booking-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-linen/50 border border-espresso/15 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-sm text-espresso placeholder:text-taupe transition-all resize-none"
            placeholder="e.g. Focus on neck & shoulder stiffness, prefer female therapist, anniversary celebration..."
          ></textarea>
        </div>

        {/* Submit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Button
            type="submit"
            variant="luxury"
            size="lg"
            className="w-full sm:flex-1 text-xs uppercase tracking-[0.16em] py-3.5"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting Request..."
            ) : (
              <>
                <span>Request Appointment</span>
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleWhatsAppEnquiry}
            className="w-full sm:w-auto text-xs uppercase tracking-[0.14em] py-3.5 border-[#25D366]/50 text-[#128C7E] hover:bg-[#25D366]/10"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-[#25D366]" />
            <span>Enquire on WhatsApp</span>
          </Button>
        </div>

        <p className="text-[11px] text-taupe text-center font-sans">
          * Submitting an enquiry does not charge your card. Our reception will contact you to confirm timing and therapist availability.
        </p>
      </form>
    </div>
  );
}
