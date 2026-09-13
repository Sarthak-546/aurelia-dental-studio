export interface Treatment {
  slug: string;
  category:
    | "General"
    | "Cosmetic"
    | "Orthodontics"
    | "Implants"
    | "Pediatric"
    | "Preventive";
  name: string;
  shortDescription: string;
  overview: string;
  whoItsFor: string;
  process: { step: string; description: string }[];
  timeline?: string;
  relatedTreatmentSlugs: string[];
  faqSlugIds: string[];
  heroImageUrl: string;
}
