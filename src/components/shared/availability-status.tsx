import { cn } from "@/lib/utils";

type AvailabilityStatusProps = {
  label: string;
  className?: string;
};

export function AvailabilityStatus({
  label,
  className,
}: AvailabilityStatusProps) {
  return (
    <div
      className={cn(
        "inline-flex min-h-10 items-center gap-2.5 rounded-pill border border-success/20 bg-success/7 px-3.5 py-2 text-xs font-medium text-foreground shadow-[inset_0_1px_0_oklch(1_0_0_/_8%)]",
        className,
      )}
      role="status"
    >
      <span
        className="relative flex size-2 items-center justify-center"
        aria-hidden="true"
      >
        <span className="absolute size-2.5 rounded-full bg-success/20" />
        <span className="relative size-1.5 rounded-full bg-success shadow-[0_0_12px_oklch(0.78_0.14_156_/_60%)]" />
      </span>
      {label}
    </div>
  );
}

