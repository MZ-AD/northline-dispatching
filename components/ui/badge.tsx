import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-aqua text-white",
        navy: "border-transparent bg-brand-navy text-white",
        outline: "border-brand-slate/20 bg-transparent text-brand-slate",
        aquaOutline: "border-brand-aqua/30 bg-brand-aqua/10 text-brand-aqua",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
