import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";

export interface BookingCTAProps {
  /**
   * Background variant.
   * - "dark" renders the charcoal backdrop with ivory text.
   * - "sage" renders the sage backdrop with white text.
   */
  variant?: "dark" | "sage";
  /** Optional additional classes for the outermost <section>. */
  className?: string;
  /** Optional id for anchor linking. */
  id?: string;
}

export function BookingCTA({
  variant = "dark",
  className,
  id = "book",
}: BookingCTAProps) {
  const telHref = `tel:${clinic.contact.phone.replace(/[^+\d]/g, "")}`;
  const isSage = variant === "sage";

  return (
    <section
      id={id}
      className={cn(
        "px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
        isSage ? "bg-sage text-white" : "bg-charcoal text-ivory",
        className
      )}
      aria-label="Book an appointment"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        {/* Headline */}
        <h2 className="font-display text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-5xl">
          Your healthiest smile starts with a conversation.
        </h2>

        {/* Subtext */}
        <p
          className={cn(
            "max-w-prose text-base leading-relaxed md:text-lg",
            isSage ? "text-white/80" : "text-ivory/70"
          )}
        >
          Book a consultation, or call us &mdash; we&apos;re happy to answer
          questions first.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className={cn(
              isSage
                ? "bg-white text-sage hover:bg-ivory hover:text-sage-dark"
                : "bg-ivory text-charcoal hover:bg-white hover:text-charcoal"
            )}
          >
            <a href="/book">Book an Appointment</a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className={cn(
              "border-ivory/30 text-ivory hover:bg-ivory/10 hover:text-ivory",
              isSage && "border-white/40 text-white hover:bg-white/10 hover:text-white"
            )}
          >
            <a href={telHref}>
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call the clinic
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;