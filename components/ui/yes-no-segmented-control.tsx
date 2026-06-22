"use client";

import * as React from "react";

import { qualificationOptions } from "@/lib/get-started-form";
import { cn } from "@/lib/utils";

export type YesNoValue = "yes" | "no" | "";

export interface YesNoSegmentedControlProps {
  id: string;
  name: string;
  value: YesNoValue;
  onChange: (value: "yes" | "no") => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const YesNoSegmentedControl = React.forwardRef<
  HTMLDivElement,
  YesNoSegmentedControlProps
>(
  (
    { id, name, value, onChange, required = false, disabled = false, className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-labelledby={`${id}-label`}
        className={cn(
          "grid h-12 w-full grid-cols-[1fr_1px_1fr] overflow-hidden rounded-lg border border-slate-200 bg-brand-white shadow-sm",
          "transition-[box-shadow,border-color] duration-200",
          "focus-within:border-brand-aqua focus-within:ring-2 focus-within:ring-brand-aqua/20",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        {qualificationOptions.map((option, index) => {
          const isSelected = value === option.value;
          const inputId = `${id}-${option.value}`;

          return (
            <React.Fragment key={option.value}>
              {index > 0 && (
                <div
                  className="h-full w-px self-stretch bg-slate-200"
                  aria-hidden="true"
                />
              )}
              <label
                htmlFor={inputId}
                className={cn(
                  "flex min-w-0 cursor-pointer select-none items-center justify-center",
                  "text-sm font-semibold leading-none tracking-normal",
                  "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  disabled && "pointer-events-none",
                  isSelected
                    ? "bg-brand-aqua text-white"
                    : "bg-brand-white text-brand-navy hover:bg-brand-mist"
                )}
              >
                <input
                  id={inputId}
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isSelected}
                  required={required && index === 0}
                  disabled={disabled}
                  className="sr-only"
                  onChange={() => onChange(option.value)}
                />
                {option.label}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);
YesNoSegmentedControl.displayName = "YesNoSegmentedControl";

export { YesNoSegmentedControl };
