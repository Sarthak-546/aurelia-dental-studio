import Link from "next/link";
import Image from "next/image";
import { Shield, Heart, Smile } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import { FeaturedTreatment } from "@/components/sections/featured-treatment";
import FaqAccordion from "@/components/sections/faq-accordion";
import BookingCTA from "@/components/sections/booking-cta";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { treatments } from "@/data/treatments";
import { faqs } from "@/data/faqs";
import { doctors } from "@/data/doctors";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SEO                                                                */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = generatePageMetadata({
  title: "Pediatric Dentistry",
  description:
    "Gentle, reassuring dental care for infants, children, and teens at Aurelia Dental Studio. A calm first visit shapes how your child feels about dental care for life.",
  path: "/pediatric-dentistry",
});

/* ------------------------------------------------------------------ */
/*  Data lookups                                                       */
/* ------------------------------------------------------------------ */

const pediatricTreatment = treatments.find(
  (t) => t.slug === "pediatric-dentistry"
)!;

const pediatricFaqs = faqs.filter((faq) => faq.category === "Pediatric");

const pediatricDoctor = doctors.find(
  (d) => d.specialty.toLowerCase().includes("pediatric")
);

/* ------------------------------------------------------------------ */
/*  Comfort pillars                                                    */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    icon: Heart,
    title: "Play-based communication",
    description:
      "We explain every step in age-appropriate language, let children explore instruments, and turn the dental chair into a place of curiosity rather than fear.",
  },
  {
    icon: Shield,
    title: "Safety at every step",
    description:
      "Protective aprons, low-radiation digital X-rays taken only when necessary, and sterilised instruments give parents complete peace of mind.",
  },
  {
    icon: Smile,
    title: "Preventive focus",
    description:
      "Fluoride varnishes, pit-and-fissure sealants, and diet coaching stop cavities before they start — the most effective care is the care that is never needed.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PediatricDentistryPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        variant="landing"
        eyebrow="Pediatric Dentistry"
        title="A calm first visit shapes how your child feels about dental care for life."
        description="From the eruption of the first tooth through the teenage years, our pediatric team creates positive, pressure-free experiences that build healthy habits — and genuine confidence."
      />

      {/* ── Comfort & safety pillars ─────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="Comfort and safety come first"
            description="We design every aspect of a child's visit around how it feels — not just what needs doing."
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-4 rounded-lg border border-stone bg-ivory p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/10 text-sage">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-medium text-charcoal">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured treatment ───────────────────────────────────── */}
      <FeaturedTreatment treatment={pediatricTreatment} />

      {/* ── Doctor spotlight ─────────────────────────────────────── */}
      {pediatricDoctor && (
        <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Your Child's Dentist"
              title={pediatricDoctor.name}
              description={`${pediatricDoctor.credentials} — ${pediatricDoctor.specialty}`}
              className="mb-10"
            />

            <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:gap-16">
              {/* Portrait */}
              <div className="relative aspect-[3/4] w-full max-w-xs shrink-0 overflow-hidden rounded-lg bg-stone">
                <Image
                  src={pediatricDoctor.portraitUrl}
                  alt={`Portrait of ${pediatricDoctor.name}`}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-base leading-relaxed text-charcoal/80">
                  {pediatricDoctor.bio}
                </p>
                <div>
                  <Button asChild variant="secondary" size="sm">
                    <Link href={`/doctors/${pediatricDoctor.slug}`}>
                      Full profile
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <FaqAccordion
        items={pediatricFaqs}
        eyebrow="Pediatric FAQ"
        heading="Common questions from parents"
        defaultOpen
      />

      {/* ── CTA — phone emphasis ─────────────────────────────────── */}
      <section className="bg-charcoal px-4 py-16 text-ivory sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
            Ready to schedule your child&apos;s first visit?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ivory/70">
            Call us to book a gentle, unhurried appointment — or book online in
            under a minute. We reserve extra time for first-time patients so
            there is never any rush.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="tel:+15551234567">Call (555) 123-4567</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/book">Book online</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
