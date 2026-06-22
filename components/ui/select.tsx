import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-12 w-full appearance-none rounded-md border border-slate-200 bg-brand-white px-4 py-2 pr-11 text-sm text-brand-navy shadow-sm transition-colors focus-visible:border-brand-aqua focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-aqua/20 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-aqua"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
