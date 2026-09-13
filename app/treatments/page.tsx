import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import { TreatmentGrid } from "@/components/sections/treatment-grid";
import BookingCTA from "@/components/sections/booking-cta";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Treatments",
  description:
    "Explore the full range of dental treatments at Aurelia Dental Studio — from preventive care and cosmetic enhancements to orthodontics, implants, and pediatric dentistry. Modern techniques delivered with precision and care.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <Hero
        variant="page-header"
        eyebrow="Treatments"
        title="Comprehensive dental care"
        description="From routine check-ups to full smile transformations, every treatment at the studio is delivered with uncompromising precision and a gentle, personal touch."
      />

      {/* Cards sit directly under the Hero — no duplicate heading */}
      <TreatmentGrid
        className="bg-ivory pt-12 pb-24 md:pt-16 md:pb-32"
        heading={null}
      />

      <BookingCTA />
    </>
  );
}
