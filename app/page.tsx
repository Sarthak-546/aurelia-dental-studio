import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PhilosophyBlock } from "@/components/sections/philosophy-block";
import { FeaturedTreatment } from "@/components/sections/featured-treatment";
import { TreatmentGrid } from "@/components/sections/treatment-grid";
import DoctorGrid from "@/components/sections/doctor-grid";
import TechnologyShowcase from "@/components/sections/technology-showcase";
import PatientJourney from "@/components/sections/patient-journey";
import TestimonialSlider from "@/components/sections/testimonial-slider";
import SocialProof from "@/components/sections/social-proof";
import BookingCTA from "@/components/sections/booking-cta";
import { generatePageMetadata } from "@/lib/seo";
import { treatments } from "@/data/treatments";
import { ScrollReveal } from "@/components/sections/scroll-reveal";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata = generatePageMetadata({
  title: "Exceptional Dentistry, Designed Around You",
  description:
    "Modern techniques, an unhurried approach, and a team that explains every step — so your visit feels like care, not a procedure. Discover comprehensive dental care at Aurelia Dental Studio.",
  path: "/",
});

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const featuredTreatment = treatments[0];

  return (
    <>
      {/* Full-bleed hero — sits outside any container */}
      <Hero variant="home" imageSrc="/hero.webp" />

      {/* Trust-building stats strip */}
      <ScrollReveal>
        <TrustBar />
      </ScrollReveal>

      {/* Editorial philosophy statement */}
      <ScrollReveal>
        <PhilosophyBlock />
      </ScrollReveal>

      {/* Spotlight on a single treatment */}
      {featuredTreatment ? (
        <ScrollReveal>
          <FeaturedTreatment treatment={featuredTreatment} />
        </ScrollReveal>
      ) : null}

      {/* Full treatments grid */}
      <ScrollReveal>
        <TreatmentGrid
          heading={{ eyebrow: "Our Treatments", title: "Comprehensive dental care" }}
        />
      </ScrollReveal>

      {/* Doctors & specialists */}
      <ScrollReveal delay={0.1}>
        <DoctorGrid />
      </ScrollReveal>

      {/* Technology showcase */}
      <ScrollReveal>
        <TechnologyShowcase />
      </ScrollReveal>

      {/* Patient journey walkthrough */}
      <ScrollReveal>
        <PatientJourney />
      </ScrollReveal>

      {/* Testimonials carousel */}
      <ScrollReveal>
        <TestimonialSlider />
      </ScrollReveal>

      {/* External ratings & recognitions */}
      <ScrollReveal delay={0.08}>
        <SocialProof />
      </ScrollReveal>

      {/* Final booking call to action */}
      <ScrollReveal>
        <BookingCTA />
      </ScrollReveal>
    </>
  );
}
