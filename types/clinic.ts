export interface Clinic {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  contact: ContactInformation;
  openingHours: OpeningHours[];
  socialLinks: { platform: string; url: string }[];
}

export interface ContactInformation {
  phone: string;
  email: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  mapEmbedUrl?: string;
}

export interface OpeningHours {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  open: string;
  close: string;
  closed?: boolean;
}
