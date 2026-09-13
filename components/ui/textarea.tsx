import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full resize-y rounded-sm border border-stone-dark bg-white px-4 py-3 text-base text-charcoal transition-colors duration-300 ease-standard placeholder:text-charcoal/40 hover:border-charcoal/20 focus:border-sage focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-stone-dark",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };