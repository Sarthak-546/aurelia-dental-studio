import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import DoctorGrid from "@/components/sections/doctor-grid";
import BookingCTA from "@/components/sections/booking-cta";
import { TrustBar } from "@/components/sections/trust-bar";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Doctors",
  description:
    "Meet the experienced dental specialists at Aurelia Dental Studio. From cosmetic and restorative dentistry to orthodontics, oral surgery, and pediatric care — our team combines clinical excellence with a personal, unhurried approach.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <Hero
        variant="page-header"
        eyebrow="Our Team"
        title="Meet our doctors"
        description="Every member of the Aurelia Dental Studio team is committed to delivering care that is precise, compassionate, and tailored to you."
      />

      <DoctorGrid />

      <TrustBar />

      <BookingCTA />
    </>
  );
}
