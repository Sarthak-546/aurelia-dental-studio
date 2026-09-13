import Link from "next/link";
import { Sparkles, Palette, Crown } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import { FeaturedTreatment } from "@/components/sections/featured-treatment";
import TechnologyShowcase from "@/components/sections/technology-showcase";
import TestimonialSlider from "@/components/sections/testimonial-slider";
import PatientJourney from "@/components/sections/patient-journey";
import BookingCTA from "@/components/sections/booking-cta";
import SectionHeading from "@/components/ui/section-heading";
import { treatments } from "@/data/treatments";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SEO                                                                */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = generatePageMetadata({
  title: "Smile Makeover in Beverly Hills",
  description:
    "A smile makeover at Aurelia Dental Studio combines veneers, whitening, and cosmetic treatments into a personalised plan — designed with Digital Smile Design and delivered with artistic precision.",
  path: "/smile-makeover",
});

/* ------------------------------------------------------------------ */
/*  Featured treatment lookups                                         */
/* ------------------------------------------------------------------ */

const veneers = treatments.find((t) => t.slug === "porcelain-veneers")!;
const whitening = treatments.find((t) => t.slug === "teeth-whitening")!;

/* ------------------------------------------------------------------ */
/*  Custom feature cards for the cosmetic trio                         */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: Sparkles,
    title: "Porcelain Veneers",
    description:
      "Ultra-thin, hand-layered ceramic shells that correct shape, shade, and minor misalignment in as few as two visits. Each veneer is custom-designed to mimic natural enamel translucency.",
    href: "/treatments/porcelain-veneers",
  },
  {
    icon: Palette,
    title: "Professional Whitening",
    description:
      "Clinical-strength photo-activated gels lift years of intrinsic and extrinsic stain in a single, controlled session — with custom take-home trays for lasting results.",
    href: "/treatments/teeth-whitening",
  },
  {
    icon: Crown,
    title: "Crowns & Bonding",
    description:
      "When a tooth needs more than a veneer can offer, zirconia crowns restore strength and beauty. For smaller refinements, same-day composite bonding sculpturally repairs chips and gaps.",
    href: "/treatments/cosmetic-bonding",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SmileMakeoverPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        variant="landing"
        eyebrow="Smile Makeover"
        title="A smile makeover isn't one procedure — it's a plan."
        description="We combine artistry with precision to design a smile that suits your face, your personality, and the way you want to feel when you look in the mirror. Every makeover begins with a conversation and ends with a result that looks like it was always yours."
      />

      {/* ── Editorial intro ──────────────────────────────────────── */}
      <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug text-charcoal md:text-3xl">
            We start with how you want to feel, then work backward to the
            combination of treatments that gets you there.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70">
            Some patients need two visits. Others need a carefully sequenced plan
            that spans veneers, whitening, and cosmetic contouring over several
            weeks. The difference is listening first, then engineering a result
            that is unmistakably you.
          </p>
        </div>
      </section>

      {/* ── Featured treatment trio ──────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Plan"
            title="Three treatments, one vision"
            description="Every smile makeover draws from a curated set of cosmetic procedures. Here are the most common building blocks."
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description, href }) => (
              <div
                key={title}
                className="flex flex-col gap-5 rounded-lg border border-stone bg-ivory p-8 transition-shadow duration-300 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-xl font-medium text-charcoal">
                  {title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-charcoal/70">
                  {description}
                </p>
                <Link
                  href={href}
                  className="text-sm font-semibold uppercase tracking-[0.12em] text-sage transition-colors hover:text-sage-dark"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main spotlight: Porcelain Veneers ────────────────────── */}
      <FeaturedTreatment treatment={veneers} />

      {/* ── Digital Smile Design ─────────────────────────────────── */}
      <TechnologyShowcase />

      {/* ── Secondary spotlight: Whitening ───────────────────────── */}
      <FeaturedTreatment treatment={whitening} reversed />

      {/* ── Patient stories ──────────────────────────────────────── */}
      <TestimonialSlider />

      {/* ── Patient journey ──────────────────────────────────────── */}
      <PatientJourney />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <BookingCTA />
    </>
  );
}
