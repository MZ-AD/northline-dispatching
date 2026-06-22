import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-slate-200 bg-brand-white px-4 py-2 text-sm font-normal leading-normal text-brand-navy shadow-sm transition-colors placeholder:text-brand-navy/45 focus-visible:border-brand-aqua focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-aqua/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
