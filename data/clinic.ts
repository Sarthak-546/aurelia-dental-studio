import { Clinic } from "@/types/clinic";

export const clinic: Clinic = {
  name: "Aurelia Dental Studio",
  tagline: "Where Art Meets Dentistry",
  description:
    "Aurelia Dental Studio is a premier dental practice in the heart of Mumbai, blending clinical excellence with a warm, design-forward environment. Our team of specialists delivers personalised care across cosmetic, restorative, orthodontic, and pediatric dentistry — using the latest technology and evidence-based techniques to craft healthy, confident smiles.",
  foundedYear: 2012,
  contact: {
    phone: "+91 22 4862 7100",
    email: "hello@aureliadentalstudio.in",
    address: {
      line1: "3rd Floor, Aurelia Health Centre",
      line2: "14 Turner Road, Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400050",
      country: "India",
    },
    /* Google Maps live embed — resolved from https://maps.app.goo.gl/gZTEXkqJfGpBeSs18
       (JS ref: Google Maps Embed API — pb!1m2!1sen!2s... format, no API key required for free embeds) */
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117.0!2d88.4355985!3d22.5693347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ad4a9c0a17%3A0xa39e0a93d0519baa!2sDrSafeHands!5e0!3m2!1sen!2sin",
  },
  openingHours: [
    { day: "Mon", open: "09:00", close: "19:00" },
    { day: "Tue", open: "09:00", close: "19:00" },
    { day: "Wed", open: "09:00", close: "19:00" },
    { day: "Thu", open: "09:00", close: "19:00" },
    { day: "Fri", open: "09:00", close: "19:00" },
    { day: "Sat", open: "10:00", close: "16:00" },
    { day: "Sun", open: "00:00", close: "00:00", closed: true },
  ],
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/aureliadentalstudio" },
    { platform: "Facebook", url: "https://facebook.com/aureliadentalstudio" },
    { platform: "Twitter", url: "https://twitter.com/aureliadental" },
    { platform: "YouTube", url: "https://youtube.com/@aureliadentalstudio" },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/aurelia-dental-studio",
    },
  ],
};
