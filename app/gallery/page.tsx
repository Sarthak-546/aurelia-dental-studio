import { Hero } from "@/components/sections/hero";
import ImageGallery from "@/components/sections/image-gallery";
import { LocationCard } from "@/components/sections/location-card";
import BookingCTA from "@/components/sections/booking-cta";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SEO                                                                */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery",
  description:
    "Take a virtual tour of Aurelia Dental Studio — our reception, treatment rooms, equipment, and the warm, design-forward space where your care happens.",
  path: "/gallery",
});

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        variant="page-header"
        eyebrow="Our Space"
        title="A clinic designed to feel nothing like one."
        description="Warm oak, natural light, and considered details at every turn — because the environment you heal in matters as much as the care you receive."
      />

      {/* ── Masonry gallery + lightbox ──────────────────────────── */}
      <ImageGallery />

      {/* ── Interior note ────────────────────────────────────────── */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-charcoal/65">
            Every surface, fixture, and finish at Aurelia Dental Studio was
            chosen with patient comfort in mind — from the eucalyptus-green
            seating in our waiting area to the oversized windows that flood our
            treatment rooms with natural light. We believe a beautiful space
            sets the tone for exceptional care.
          </p>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────────── */}
      <LocationCard />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <BookingCTA />
    </>
  );
}
