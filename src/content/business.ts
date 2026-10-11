export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    formatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: {
    days: string;
    time: string;
    opens: string;
    closes: string;
    note: string;
  };
  socials: {
    instagram: string;
    facebook: string;
  };
  mapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  googleReviewRating: number;
  googleReviewCount: number;
}

export const BUSINESS_INFO: BusinessConfig = {
  name: "ARA Spa",
  legalName: "ARA Spa & Wellness",
  tagline: "Make Space for Stillness",
  shortDescription:
    "A tranquil luxury sanctuary in Jubilee Hills, Hyderabad. Offering authentic Thai therapy, deep tissue massage, organic body scrubs, and private couple suites.",
  phone: "+917788993406",
  displayPhone: "+91 77889 93406",
  email: "Araspa75@gmail.com",
  address: {
    street: "Unit 212, 2nd Floor, Aditya Enclave",
    landmark: "Opp. Metro Pillar No. 1677",
    area: "Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500033",
    country: "India",
    formatted:
      "Unit 212, 2nd Floor, Aditya Enclave, Metro Pillar 1677, Jubilee Hills, Hyderabad, Telangana 500033",
  },
  geo: {
    latitude: 17.4326,
    longitude: 78.4071,
  },
  hours: {
    days: "Monday – Sunday (All 7 Days)",
    time: "9:30 AM – 10:00 PM",
    opens: "09:30",
    closes: "22:00",
    note: "Open all days including public holidays",
  },
  socials: {
    instagram: "https://www.instagram.com/araspahyd/",
    facebook: "https://www.facebook.com/profile.php?id=61582245003749",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5033098838217!2d78.402298!3d17.4356082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91528c4653ef%3A0x3a1779b1f643662e!2sAra%20Spa!5e0!3m2!1sen!2sin!4v1783422007588!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?cid=4185948183911949870",
  googleReviewRating: 4.9,
  googleReviewCount: 180,
};

/**
 * Generate a WhatsApp enquiry URL with pre-filled, properly encoded message
 */
export function getWhatsAppUrl(details?: {
  treatmentName?: string;
  preferredDate?: string;
  preferredTime?: string;
  guestCount?: number | string;
  guestName?: string;
}): string {
  const phone = "917788993406";
  let message = "Hello ARA Spa, I would like to enquire about a spa appointment.";

  if (details?.treatmentName) {
    message = `Hello ARA Spa, I would like to request an appointment for *${details.treatmentName}*`;
    if (details.preferredDate) {
      message += ` on *${details.preferredDate}*`;
    }
    if (details.preferredTime) {
      message += ` at *${details.preferredTime}*`;
    }
    if (details.guestCount && Number(details.guestCount) > 1) {
      message += ` for *${details.guestCount} guests*`;
    }
    if (details.guestName) {
      message += `. My name is *${details.guestName}*.`;
    } else {
      message += ".";
    }
    message += " Please share availability.";
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
