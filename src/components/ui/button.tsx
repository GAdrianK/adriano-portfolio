import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium tracking-[-0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "button-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_18px_54px_oklch(0.58_0.18_258_/_34%)] active:translate-y-0",
        glass:
          "button-glass text-foreground hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 active:translate-y-0",
        text: "button-text rounded-sm px-0 text-foreground hover:text-secondary",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        default: "h-12 px-5 text-sm",
        lg: "h-14 px-7 text-base",
        icon: "size-12 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };

