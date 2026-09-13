import type { Treatment } from "@/types/treatment";

export const treatments: Treatment[] = [
  {
    slug: "comprehensive-exam-and-hygiene",
    category: "Preventive",
    name: "Comprehensive Exam & Hygiene",
    shortDescription:
      "A thorough full-mouth examination and professional cleaning that sets the foundation for lifelong oral health.",
    overview:
      "Your journey to a healthy smile begins here. Our comprehensive exam combines digital radiography, intraoral scanning, and a detailed soft and hard tissue assessment with a gentle, thorough professional clean.",
    whoItsFor:
      "Ideal for new patients and those due for their six-month check-up, or anyone who wants a complete and accurate picture of their oral health.",
    process: [
      {
        step: "Consultation & history",
        description:
          "We review your medical and dental history, current concerns, and the goals you have for your smile.",
      },
      {
        step: "Digital examination",
        description:
          "Low-radiation digital X-rays and an intraoral scan give us a precise view of every tooth and its supporting structures.",
      },
      {
        step: "Professional cleaning",
        description:
          "Gentle ultrasonic and hand scaling, polishing, and flossing remove plaque, calculus, and surface stain.",
      },
      {
        step: "Personalised plan",
        description:
          "We share our findings and tailor a preventive schedule — hygiene, diet, and any further care — around your needs.",
      },
    ],
    timeline: "60–90 minutes",
    relatedTreatmentSlugs: ["teeth-whitening", "cosmetic-bonding"],
    faqSlugIds: ["how-often-should-i-see-the-dentist", "does-cleaning-hurt"],
    heroImageUrl: "/images/treatments/comprehensive-exam-and-hygiene.webp",
  },
  {
    slug: "teeth-whitening",
    category: "Cosmetic",
    name: "Teeth Whitening",
    shortDescription:
      "In-surgery and take-home whitening that lifts years of stain to reveal a brighter, more confident smile.",
    overview:
      "Our professional whitening systems use clinically proven photo-activated gels to penetrate enamel and lift deep and surface stains. We map each shade before and after so you know exactly what to expect.",
    whoItsFor:
      "Suited to healthy teeth and gums with intrinsic or extrinsic discolouration — from coffee, tea, tobacco, or simply time.",
    process: [
      {
        step: "Shade mapping",
        description:
          "We photograph and digitally map your current shade to set a clear, measurable target.",
      },
      {
        step: "Gum protection",
        description:
          "Your soft tissues are isolated so the activating solution only ever touches enamel.",
      },
      {
        step: "Photo-activated whitening",
        description:
          "A high-quality whitening gel is applied and activated in controlled cycles.",
      },
      {
        step: "After-care & top-up",
        description:
          "Custom take-home trays and a maintenance routine keep your new shade bright for longer.",
      },
    ],
    timeline: "Single 60-minute visit",
    relatedTreatmentSlugs: ["porcelain-veneers", "cosmetic-bonding"],
    faqSlugIds: ["is-whitening-safe", "how-long-does-whitening-last"],
    heroImageUrl: "/images/treatments/teeth-whitening.webp",
  },
  {
    slug: "porcelain-veneers",
    category: "Cosmetic",
    name: "Porcelain Veneers",
    shortDescription:
      "Ultra-thin, hand-layered porcelain that artfully corrects shape, shade, and alignment.",
    overview:
      "Each veneer is a bespoke shell of high-strength ceramic, designed digitally and hand-finished to mimic natural enamel translucency. They offer a permanent, stain-resistant solution for a redesigned smile.",
    whoItsFor:
      "For patients wanting to transform chipped, stained, gapped, or slightly misaligned front teeth with minimal preparation.",
    process: [
      {
        step: "Smile design",
        description:
          "Digital photography and smile simulation help us preview your result before any treatment begins.",
      },
      {
        step: "Minimal preparation",
        description:
          "A feather-thin layer of enamel is conservatively shaped to receive the veneer.",
      },
      {
        step: "Crafting the veneers",
        description:
          "Provisional restorations are placed while your final veneers are layered and glazed in the laboratory.",
      },
      {
        step: "Bonding & polish",
        description:
          "Each veneer is tried in, bonded with precision, and polished into a seamless, natural finish.",
      },
    ],
    timeline: "2–3 visits over two weeks",
    relatedTreatmentSlugs: ["teeth-whitening", "cosmetic-bonding"],
    faqSlugIds: ["are-veneers-permanent", "do-veneers-look-natural"],
    heroImageUrl: "/images/treatments/porcelain-veneers.webp",
  },
  {
    slug: "invisalign-clear-aligners",
    category: "Orthodontics",
    name: "Invisalign Clear Aligners",
    shortDescription:
      "A nearly invisible path to straighter teeth, using a clinically planned series of custom aligners.",
    overview:
      "Instead of brackets and wires, Invisalign moves your teeth with a progressive series of clear, removable aligners. A digital 3D plan maps every movement from first tray to final smile.",
    whoItsFor:
      "Great for teens and adults with crowding, spacing, and mild-to-moderate bite issues who want a discreet option.",
    process: [
      {
        step: "3D digital scan",
        description:
          "A precise intraoral scan captures your teeth and bite without messy impressions.",
      },
      {
        step: "ClinCheck plan",
        description:
          "Our orthodontic team simulates your entire movement sequence, tray by tray.",
      },
      {
        step: "Aligning visits",
        description:
          "New aligner sets are delivered at short check-ins, usually every six to eight weeks.",
      },
      {
        step: "Retention",
        description:
          "A comfortable retainer locks in the results and protects your investment for years to come.",
      },
    ],
    timeline: "6–18 months depending on complexity",
    relatedTreatmentSlugs: ["cosmetic-bonding", "porcelain-veneers"],
    faqSlugIds: ["does-invisalign-hurt", "how-often-must-i-wear-aligners"],
    heroImageUrl: "/images/treatments/invisalign-clear-aligners.webp",
  },
  {
    slug: "dental-implants",
    category: "Implants",
    name: "Dental Implants",
    shortDescription:
      "Permanent, natural-feeling tooth replacement with titanium implants and precision-crafted crowns.",
    overview:
      "A dental implant replaces both the root and the crown of a missing tooth. Guided placement and high-grade materials mean an outcome that looks, feels, and functions like the original.",
    whoItsFor:
      "For anyone with one or more missing teeth who wants a durable, permanent alternative to bridges or dentures.",
    process: [
      {
        step: "3D assessment",
        description:
          "Cone-beam imaging maps your bone density and nerve positions for surgical precision.",
      },
      {
        step: "Implant placement",
        description:
          "The titanium implant is placed in a gentle, often minimally invasive procedure under local anaesthesia.",
      },
      {
        step: "Healing & integration",
        description:
          "Over a few months the implant bonds with the bone, becoming a solid foundation.",
      },
      {
        step: "Final crown",
        description:
          "A custom porcelain crown is abutted to the implant and shaded to match your surrounding teeth.",
      },
    ],
    timeline: "2–4 months overall",
    relatedTreatmentSlugs: ["root-canal-therapy", "cosmetic-bonding"],
    faqSlugIds: ["do-implants-hurt", "how-long-do-implants-last"],
    heroImageUrl: "/images/treatments/dental-implants.webp",
  },
  {
    slug: "cosmetic-bonding",
    category: "Cosmetic",
    name: "Cosmetic Bonding",
    shortDescription:
      "A same-day, sculptural repair for chips, gaps, and small imperfections using tooth-coloured composite.",
    overview:
      "Composite bonding artfully restores and refines the shape of a tooth in a single visit. It is the most conservative way to fix minor flaws, preserving your natural enamel to the fullest.",
    whoItsFor:
      "Perfect for small chips, minor gaps, slightly uneven edges, and patients who prefer a non-invasive option.",
    process: [
      {
        step: "Shade selection",
        description:
          "We match composite shades precisely to your natural tooth structure.",
      },
      {
        step: "Tooth preparation",
        description:
          "A gentle etch and primer create a strong bond between composite and enamel.",
      },
      {
        step: "Sculpting",
        description:
          "Layers of composite are sculpted by hand to recreate natural contours and translucency.",
      },
      {
        step: "Polish & seal",
        description:
          "The surface is finished and polished to sit seamlessly beside your other teeth.",
      },
    ],
    timeline: "Single 45–60 minute visit",
    relatedTreatmentSlugs: ["porcelain-veneers", "teeth-whitening"],
    faqSlugIds: ["how-long-does-bonding-last", "does-bonding-stain"],
    heroImageUrl: "/images/treatments/cosmetic-bonding.webp",
  },
  {
    slug: "root-canal-therapy",
    category: "General",
    name: "Root Canal Therapy",
    shortDescription:
      "Evidence-based endodontic treatment that relieves pain and saves a tooth that might otherwise be lost.",
    overview:
      "Modern root canal therapy uses rotary nickel-titanium instruments, digital apex locators, and effective anaesthesia to clean and seal the inner chambers of a tooth — comfortably and usually in a single visit.",
    whoItsFor:
      "For teeth with deep decay, infection, or irreversible pulp inflammation that are causing pain or sensitivity.",
    process: [
      {
        step: "Diagnosis & imaging",
        description:
          "A careful examination and X-ray confirm the extent of decay or infection.",
      },
      {
        step: "Cleaning the canals",
        description:
          "The pulp chamber is accessed and the canals are thoroughly cleaned and shaped.",
      },
      {
        step: "Sealing",
        description:
          "The canals are filled with a biocompatible sealant to prevent re-infection.",
      },
      {
        step: "Reconstruction",
        description:
          "The tooth is restored with a filling and, where needed, a crown for long-term strength.",
      },
    ],
    timeline: "1–2 visits",
    relatedTreatmentSlugs: ["dental-implants", "comprehensive-exam-and-hygiene"],
    faqSlugIds: ["is-root-canal-painful", "why-do-i-need-a-crown-after"],
    heroImageUrl: "/images/treatments/root-canal-therapy.webp",
  },
  {
    slug: "pediatric-dentistry",
    category: "Pediatric",
    name: "Pediatric Dentistry",
    shortDescription:
      "Gentle, reassuring care that makes children feel at home while building healthy habits for life.",
    overview:
      "From the first tooth to the teenage years, we make dentistry positive and calm. Playful communication, age-appropriate explanations, and preventive treatments keep little smiles healthy and worry-free.",
    whoItsFor:
      "For infants, children, and teens — from their first dental visit through to adulthood.",
    process: [
      {
        step: "First visit & introduction",
        description:
          "A friendly ride in the chair, easy introductions, and brushing together on a model.",
      },
      {
        step: "Gentle examination",
        description:
          "We check growth, eruption, and hygiene, and take X-rays only when truly needed.",
      },
      {
        step: "Preventive treatment",
        description:
          "Fluoride varnish, fissure sealants, and personalised brushing instruction protect vulnerable teeth.",
      },
      {
        step: "Guidance for parents",
        description:
          "We coach diet, brushing technique, and habits such as thumb-sucking and grinding.",
      },
    ],
    timeline: "30–45 minutes",
    relatedTreatmentSlugs: ["comprehensive-exam-and-hygiene", "preventive-care"],
    faqSlugIds: ["when-should-my-child-first-visit", "do-sealants-hurt"],
    heroImageUrl: "/images/treatments/pediatric-dentistry.webp",
  },
];

/** Lightweight label/value pairs, convenient for dropdowns and filtering. */
export const treatmentOptions = treatments.map((treatment) => ({
  value: treatment.slug,
  label: treatment.name,
}));