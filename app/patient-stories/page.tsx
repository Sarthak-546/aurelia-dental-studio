import { Star } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import TestimonialSlider from "@/components/sections/testimonial-slider";
import { SocialProof } from "@/components/sections/social-proof";
import BookingCTA from "@/components/sections/booking-cta";
import { testimonials } from "@/data/testimonials";
import { treatments } from "@/data/treatments";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SEO                                                                */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = generatePageMetadata({
  title: "Patient Stories",
  description:
    "Real experiences from real patients at Aurelia Dental Studio. Read how our team transformed smiles and built lasting trust.",
  path: "/patient-stories",
});

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Map a treatment slug to its display name, with a readable fallback. */
function treatmentDisplayName(slug: string): string {
  const found = treatments.find((t) => t.slug === slug);
  if (found) return found.name;
  // Fallback: convert slug to title case
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-sage text-sage"
              : "fill-stone text-stone"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PatientStoriesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        variant="page-header"
        eyebrow="Patient Stories"
        title="Hear it from the people who sat in the chair."
        description="Every story is a real patient sharing their experience honestly — the nervousness, the process, and the result."
      />

      {/* ── Featured slider ──────────────────────────────────────── */}
      <TestimonialSlider />

      {/* ── Testimonial grid ─────────────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex flex-col gap-4 rounded-lg border border-stone bg-ivory p-6 sm:p-8"
              >
                <Stars count={testimonial.rating} />

                <blockquote className="flex-1 text-sm leading-relaxed text-charcoal/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-stone pt-4">
                  <p className="font-display text-base font-medium text-charcoal">
                    {testimonial.patientName}
                  </p>
                  <p className="mt-0.5 text-xs text-sage">
                    {treatmentDisplayName(testimonial.treatmentSlug)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ─────────────────────────────────────────── */}
      <SocialProof />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <BookingCTA />
    </>
  );
}
