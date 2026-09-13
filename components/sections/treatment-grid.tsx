import { treatments } from "@/data/treatments";
import { SectionHeading } from "@/components/ui/section";
import { TreatmentCard } from "@/components/sections/treatment-card";

export interface TreatmentGridProps {
  className?: string;
  /**
   * Optional heading for the grid. On the `treatments` page the Hero already
   * carries the "Comprehensive dental care" title, so pass `null` there to
   * suppress the duplicate `SectionHeading` and its vertical whitespace.
   */
  heading?: {
    eyebrow?: string;
    title?: string;
    description?: string;
  } | null;
}

/**
 * Grid section for treatments data.
 * Shows a SectionHeading and a 3-column responsive grid. Stacks to
 * 2 columns at tablet and 1 column on mobile.
 */
export function TreatmentGrid({
  className,
  heading,
}: TreatmentGridProps) {
  // Allow the caller to opt out of the heading entirely by passing `null`
  // (e.g. on `/treatments` where the Hero already carries the title).
  const showHeading = heading !== null;
  const effectiveHeading =
    heading ??
    ({
      eyebrow: "Our Treatments",
      title: "Comprehensive dental care",
      description:
        "From routine check-ups to full smile transformations, every treatment at the studio is delivered with uncompromising precision and a gentle, personal touch.",
    } as NonNullable<TreatmentGridProps["heading"]>);

  return (
    <section className={className ?? "bg-ivory py-12 md:py-20"} aria-label="Our treatments">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow={effectiveHeading.eyebrow}
            title={effectiveHeading.title ?? ""}
            description={effectiveHeading.description}
            className="mb-14"
          />
        ) : null}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentGrid;