import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-12 w-full rounded-sm border border-stone-dark bg-white px-4 py-3 text-base text-charcoal transition-colors duration-300 ease-standard placeholder:text-charcoal/40 hover:border-charcoal/20 focus:border-sage focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-stone-dark",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };