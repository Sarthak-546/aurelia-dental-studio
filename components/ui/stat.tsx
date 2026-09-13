import { cn } from "@/lib/utils";

interface StatProps {
  value: string | number;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 text-center",
        className
      )}
    >
      <span className="font-display text-4xl leading-none text-charcoal">
        {value}
      </span>
      <span className="text-sm text-charcoal/60">{label}</span>
    </div>
  );
}