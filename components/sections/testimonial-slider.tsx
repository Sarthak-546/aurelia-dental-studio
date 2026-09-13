"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";
import { treatments } from "@/data/treatments";

function treatmentName(slug: string): string | null {
  return treatments.find((t) => t.slug === slug)?.name ?? null;
}

const AUTO_MS = 6000;

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = testimonials[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + testimonials.length) % testimonials.length);
    },
    []
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const prefersReduced = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1 || paused || prefersReduced.current) return;
    timerRef.current = setTimeout(next, AUTO_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [paused, next, index]);

  const label = treatmentName(active.treatmentSlug);

  return (
    <section
      className="bg-charcoal px-4 py-16 text-ivory sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Patient stories"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by our patients"
          className="[&_h2]:!text-ivory"
        />

        <div className="relative mt-10 overflow-hidden rounded-md bg-white/5 px-6 py-10 sm:mt-12 sm:px-10 sm:py-12 lg:px-14">
          {/* Stars — separate row above the quote */}
          <div
            className="mb-6 flex items-center justify-center gap-1.5 pointer-events-none"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  i < active.rating
                    ? "h-5 w-5 fill-warm-accent text-warm-accent"
                    : "h-5 w-5 text-white/25"
                }
                strokeWidth={1.5}
              />
            ))}
            <span className="sr-only">{active.rating} out of 5 stars</span>
          </div>

          {/* Quote — normal flow, animated with opacity + Y shift */}
          <div className="text-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={active.id}
                initial={prefersReduced.current ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced.current ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                aria-roledescription="slide"
                aria-label={`Testimonial from ${active.patientName}`}
                className="flex flex-col items-center"
              >
                <blockquote className="font-display text-xl italic leading-snug text-ivory sm:text-2xl md:text-3xl md:leading-tight">
                  {"“"}
                  {active.quote}
                  {"”"}
                </blockquote>
                <figcaption className="mt-6 flex flex-col items-center gap-1 text-center">
                  <span className="text-sm font-medium tracking-wide text-ivory">
                    {active.patientName}
                  </span>
                  {label && (
                    <span className="text-xs uppercase tracking-[0.15em] text-white/60">
                      {label}
                    </span>
                  )}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ivory/80 transition-colors hover:border-white/30 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => goTo(i)}
                  className={
                    i === index
                      ? "h-2 w-6 rounded-full bg-warm-accent"
                      : "h-2 w-2 rounded-full bg-white/25 hover:bg-white/40"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ivory/80 transition-colors hover:border-white/30 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}