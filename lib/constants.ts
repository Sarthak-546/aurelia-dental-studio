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
  phone: "+91 22 4862 7100",
  phoneLink: "tel:+912248627100",
  email: "hello@aureliadentalstudio.in",
  address: "3rd Floor, Aurelia Health Centre, 14 Turner Road, Bandra West, Mumbai, Maharashtra 400050",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("3rd Floor, Aurelia Health Centre, 14 Turner Road, Bandra West, Mumbai, Maharashtra 400050, India"),
  social: {
    instagram: "https://instagram.com/aureliadental",
    facebook: "https://facebook.com/aureliadental",
    twitter: "https://twitter.com/aureliadental",
  },
} as const;