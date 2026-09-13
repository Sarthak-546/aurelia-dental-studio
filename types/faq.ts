export interface FAQ {
  id: string;
  category: "General" | "Treatments" | "Booking" | "Insurance" | "Pediatric";
  question: string;
  answer: string;
}
