import type * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    />
  );
}

interface SectionHeadingProps {
  /** Small uppercase caption rendered above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-wider text-sage">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-charcoal/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}