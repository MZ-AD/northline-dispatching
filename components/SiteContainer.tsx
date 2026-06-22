import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function SiteContainer({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-[1540px] pl-2 pr-4 sm:pl-4 sm:pr-6 lg:pl-6 lg:pr-8 xl:pl-8 xl:pr-10",
        className
      )}
      {...props}
    />
  );
}
