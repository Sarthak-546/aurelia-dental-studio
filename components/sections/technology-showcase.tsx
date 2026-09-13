"use client";

import { Scan, Monitor, Cpu } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const TECH_FEATURES = [
  {
    icon: Scan,
    title: "3D Scanning",
    description:
      "Intraoral scanners capture precise impressions in minutes — no messy trays or gagging.",
  },
  {
    icon: Monitor,
    title: "Digital X-Rays",
    description:
      "Up to 90% less radiation than traditional film, with instant, high-resolution results.",
  },
  {
    icon: Cpu,
    title: "Digital Smile Design",
    description:
      "Preview your potential smile before we begin, and approve the plan on screen.",
  },
] as const;

export default function TechnologyShowcase() {
  return (
    <section className="bg-charcoal px-4 py-16 text-ivory sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Advanced Technology"
          title="Digital dentistry, without the guesswork"
          className="[&_h2]:!text-ivory"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-ivory/70 sm:text-base">
          Digital X-rays and 3D scanning mean less guesswork and less time in
          the chair — your dentist can show you exactly what they see, on
          screen, before any treatment decision is made.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-3">
          {TECH_FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <span className="inline-flex rounded-full bg-sage/20 p-4">
                <Icon className="h-6 w-6 text-sage" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-ivory">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}