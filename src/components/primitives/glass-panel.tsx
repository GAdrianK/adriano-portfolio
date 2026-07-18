import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const glassPanelVariants = cva("glass-panel overflow-hidden", {
  variants: {
    variant: {
      subtle: "glass-panel--subtle",
      elevated: "glass-panel--elevated",
      navigation: "glass-panel--navigation",
    },
    padding: {
      none: "p-0",
      sm: "p-4 sm:p-5",
      md: "p-5 sm:p-7",
      lg: "p-6 sm:p-8 lg:p-10",
    },
    radius: {
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      pill: "rounded-pill",
    },
  },
  defaultVariants: {
    variant: "subtle",
    padding: "md",
    radius: "lg",
  },
});

type GlassPanelProps = React.ComponentProps<"div"> &
  VariantProps<typeof glassPanelVariants>;

function GlassPanel({
  className,
  variant,
  padding,
  radius,
  ...props
}: GlassPanelProps) {
  return (
    <div
      data-slot="glass-panel"
      data-variant={variant}
      className={cn(
        glassPanelVariants({ variant, padding, radius, className }),
      )}
      {...props}
    />
  );
}

export { GlassPanel, glassPanelVariants };
export type { GlassPanelProps };

