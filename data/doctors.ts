import { Doctor } from "@/types/doctor";

export const doctors: Doctor[] = [
  {
    slug: "meera-kapoor",
    name: "Dr. Meera Kapoor",
    credentials: "BDS, MDS (Prosthodontics & Crown and Bridge)",
    specialty: "Cosmetic & Restorative Dentistry",
    yearsExperience: 12,
    bio: "Dr. Meera Kapoor is the founding dentist and creative force behind Aurelia Dental Studio. With over twelve years of experience in cosmetic and restorative dentistry, she has transformed thousands of smiles using advanced techniques such as porcelain veneers, composite bonding, and full-mouth rehabilitation. She trained at Nair Hospital Dental College and completed a fellowship in Aesthetic Dentistry at the University of Manchester. Dr. Kapoor believes that every patient deserves a smile they are proud of, and she blends meticulous clinical skill with genuine artistic sensibility to achieve natural, lasting results.",
    portraitUrl: "/images/doctors/meera-kapoor.webp",
    featuredTreatments: ["dental-veneers", "teeth-whitening", "dental-crowns"],
  },
  {
    slug: "arjun-sharma",
    name: "Dr. Arjun Sharma",
    credentials: "BDS, MDS (Orthodontics & Dentofacial Orthopaedics)",
    specialty: "Orthodontics",
    yearsExperience: 15,
    bio: "Dr. Arjun Sharma brings fifteen years of orthodontic expertise to the team, having corrected complex bite and alignment issues for patients of all ages. A graduate of Government Dental College, Mumbai, he later pursued advanced training in lingual braces and clear aligner therapy at Tokyo Medical and Dental University. He is a certified Invisalign provider and has published research on accelerated orthodontic treatment in the Indian Orthodontic Journal. Known for his calm chairside manner and precise treatment planning, Dr. Sharma ensures every patient understands each stage of their journey toward a straighter, healthier smile.",
    portraitUrl: "/images/doctors/arjun-sharma.webp",
    featuredTreatments: ["orthodontic-braces", "clear-aligners"],
  },
  {
    slug: "priya-nair",
    name: "Dr. Priya Nair",
    credentials: "BDS, MDS (Paediatric & Preventive Dentistry)",
    specialty: "Pediatric Dentistry",
    yearsExperience: 8,
    bio: "Dr. Priya Nair specialises in making dental visits a positive experience for children and adolescents. After earning her MDS in Paediatric and Preventive Dentistry from Manipal College of Dental Sciences, she completed a clinical attachment at Great Ormond Street Hospital in London. Her gentle, play-based approach helps anxious young patients feel safe while she manages everything from routine check-ups and fluoride treatments to early orthodontic assessments. Parents appreciate her thorough explanations and preventive focus, which empower families to build lifelong oral-health habits from the very first tooth.",
    portraitUrl: "/images/doctors/priya-nair.webp",
    featuredTreatments: ["pediatric-dentistry"],
  },
  {
    slug: "rohan-desai",
    name: "Dr. Rohan Desai",
    credentials: "BDS, MDS (Oral & Maxillofacial Surgery), FICOI",
    specialty: "Oral Surgery & Implantology",
    yearsExperience: 18,
    bio: "Dr. Rohan Desai is a board-certified oral and maxillofacial surgeon with eighteen years of surgical experience, including over three thousand successfully placed dental implants. He completed his surgical residency at KEM Hospital, Mumbai, and earned his Fellowship of the International Congress of Oral Implantologists in New York. He is skilled in advanced bone-grafting procedures, sinus-lift surgeries, and immediate-load implant protocols that allow patients to leave with functional teeth on the same day. Dr. Desai's precision-driven approach and commitment to minimally invasive techniques consistently deliver predictable, long-lasting outcomes.",
    portraitUrl: "/images/doctors/rohan-desai.webp",
    featuredTreatments: ["dental-implants", "root-canal-therapy"],
  },
];
