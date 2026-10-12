import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xs font-mono text-xs uppercase tracking-[0.08em] transition-[background-color,border-color,color,transform,box-shadow] duration-150 ease-out outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "button-primary text-background hover:bg-primary hover:border-primary hover:translate-x-[1px] hover:translate-y-[1px]",
        glass:
          "button-glass text-foreground hover:border-primary hover:text-primary hover:translate-x-[1px] hover:translate-y-[1px]",
        text: "button-text rounded-xs px-0 text-foreground hover:text-primary",
      },
      size: {
        sm: "h-9 px-3.5 text-[0.6875rem]",
        default: "h-11 px-5 text-xs",
        lg: "h-12 px-6 text-xs",
        icon: "size-11 px-0",
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
