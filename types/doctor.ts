export interface Doctor {
  slug: string;
  name: string;
  credentials: string;
  specialty: string;
  yearsExperience: number;
  bio: string;
  portraitUrl: string;
  featuredTreatments?: string[];
}
