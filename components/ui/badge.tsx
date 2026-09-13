import type * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentProps<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-stone px-3 py-1 text-sm text-charcoal",
        className
      )}
      {...props}
    />
  );
}