import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  /** Display label for the breadcrumb segment. */
  label: string;
  /** Optional href. Omit for the current (last) page. */
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Accessible breadcrumb navigation.
 *
 * The last item is treated as the current page: it renders as plain text,
 * is announced via `aria-current`, and is not a link.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm text-charcoal/60", className)}
    >
      <ol className="flex flex-wrap items-baseline gap-1.5">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-baseline gap-1.5"
            >
              {index > 0 ? (
                <ChevronRight
                  aria-hidden="true"
                  className="size-3.5 shrink-0 self-center text-charcoal/30"
                />
              ) : null}
              {item.href && !isCurrent ? (
                <Link
                  href={item.href}
                  className="text-charcoal/60 transition-colors hover:text-sage"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "truncate",
                    isCurrent && "font-medium text-charcoal"
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;