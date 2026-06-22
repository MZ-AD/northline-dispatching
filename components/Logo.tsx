import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="42" height="42" rx="10" fill="#00AEEF" />
      <rect x="18" y="7" width="6" height="10" rx="2" fill="white" opacity="0.9" />
      <rect x="18" y="25" width="6" height="10" rx="2" fill="white" opacity="0.9" />
      <rect x="7" y="18" width="10" height="6" rx="2" fill="white" opacity="0.9" />
      <rect x="25" y="18" width="10" height="6" rx="2" fill="white" opacity="0.9" />
      <rect x="18" y="18" width="6" height="6" rx="1.5" fill="#0095D6" />
      <path d="M21 8 L18 12 H24 L21 8Z" fill="white" />
      <path d="M21 34 L18 30 H24 L21 34Z" fill="white" />
      <path d="M8 21 L12 18 V24 L8 21Z" fill="white" />
      <path d="M34 21 L30 18 V24 L34 21Z" fill="white" />
    </svg>
  );
}

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link href="/" className={cn("flex min-w-0 items-center gap-2", className)}>
      <LogoMark
        className={cn(
          "transition-all duration-500",
          compact ? "h-9 w-9 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-[42px] sm:w-[42px]"
        )}
      />
      <div className="flex min-w-0 flex-col gap-0 leading-none">
        <span
          className={cn(
            "truncate font-bold tracking-wide text-white transition-all duration-500",
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          )}
        >
          BAYWOOD
        </span>
        <span
          className={cn(
            "-mt-1 font-bold uppercase tracking-[0.25em] text-brand-aqua sm:-mt-1.5 sm:tracking-[0.3em]",
            compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"
          )}
        >
          Dispatch
        </span>
      </div>
    </Link>
  );
}
