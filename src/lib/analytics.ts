/**
 * Privacy-safe analytics and conversion measurement for ARA Spa.
 * Dispatches to standard gtag (GA4) if present on window, as well as
 * custom DOM events for GTM / local event logging.
 * NEVER tracks personal information (PII) such as phone numbers, names, or messages.
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      targetIdOrAction: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type ConversionAction =
  | "click_phone_call"
  | "click_whatsapp_enquiry"
  | "click_booking_cta"
  | "submit_appointment_form"
  | "view_treatment_details";

export function trackConversion(action: ConversionAction, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  // 1. Dispatch to window.gtag if present (Google Analytics 4 / Google Ads)
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", action, {
        event_category: "Engagement & Conversions",
        ...params,
      });
    } catch (e) {
      // Suppress analytics error
    }
  }

  // 2. Dispatch CustomEvent for GTM or third-party monitoring
  try {
    const customEvent = new CustomEvent("ara_spa:conversion", {
      detail: { action, params, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(customEvent);
  } catch (e) {
    // Suppress custom event error
  }
}

export function trackPhoneClick(locationTag: string) {
  trackConversion("click_phone_call", {
    placement: locationTag,
  });
}

export function trackWhatsAppClick(treatmentName?: string, locationTag?: string) {
  trackConversion("click_whatsapp_enquiry", {
    treatment: treatmentName || "general",
    placement: locationTag || "floating_cta",
  });
}

export function trackBookingCtaClick(treatmentSlug?: string, locationTag?: string) {
  trackConversion("click_booking_cta", {
    treatment_slug: treatmentSlug || "general",
    placement: locationTag || "page_hero",
  });
}

export function trackFormSubmission(serviceRequested?: string) {
  trackConversion("submit_appointment_form", {
    service_type: serviceRequested || "general_enquiry",
  });
}
