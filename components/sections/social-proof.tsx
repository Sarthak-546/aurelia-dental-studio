import { Star, Award, ThumbsUp, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const BADGES = [
  {
    icon: Star,
    label: "Google Rating",
    value: "4.9\u2605",
    description: "Over 500 reviews",
  },
  {
    icon: Award,
    label: "Practo",
    value: "Top Rated",
    description: "Mumbai clinic",
  },
  {
    icon: ThumbsUp,
    label: "JustDentist",
    value: "Verified",
    description: "Patient recommended",
  },
  {
    icon: Shield,
    label: "Best Dentist Mumbai",
    value: "2025",
    description: "City award winner",
  },
] as const;

export function SocialProof() {
  return (
    <section
      aria-label="Ratings and recognition"
      className="border-y border-stone bg-ivory"
    >
      <ul
        role="list"
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 divide-y divide-stone",
          "sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-stone",
          "lg:grid-cols-4"
        )}
      >
        {BADGES.map(({ icon: Icon, label, value, description }) => (
          <li
            key={label}
            className="flex items-center gap-4 px-6 py-6 sm:px-8 lg:px-10"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone text-sage"
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="flex min-w-0 flex-col">
              <p className="text-xs font-medium uppercase tracking-wider text-charcoal/50">
                {label}
              </p>
              <p className="truncate text-sm font-semibold text-charcoal/80">
                {value}
              </p>
              <p className="truncate text-xs text-charcoal/50">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SocialProof;
