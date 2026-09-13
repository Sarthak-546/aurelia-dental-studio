export const NAV_LINKS = [
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA_LABELS = {
  bookAppointment: "Book Appointment",
  bookAppointmentHref: "/book",
} as const;

export const SITE_CONFIG = {
  name: "Aurelia Dental Studio",
  tagline: "Where Art Meets Dentistry",
  description:
    "Aurelia Dental Studio offers comprehensive dental care in a warm, modern environment. From preventive hygiene to cosmetic transformations, our experienced team delivers personalized treatment with an artistic touch.",
  url: "https://www.aureliadental.studio",
  ogImage: "/og-image.webp",
  phone: "(555) 123-4567",
  phoneLink: "tel:+15551234567",
  email: "hello@aureliadental.studio",
  address: "123 Serenity Lane, Beverly Hills, CA 90210",
  mapsUrl:
    "https://www.google.com/maps/search/123+Serenity+Lane+Beverly+Hills+CA+90210",
  social: {
    instagram: "https://instagram.com/aureliadental",
    facebook: "https://facebook.com/aureliadental",
    twitter: "https://twitter.com/aureliadental",
  },
} as const;