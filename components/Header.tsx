"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteContainer } from "@/components/SiteContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Problems", href: "#problem" },
  { label: "Solution", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#process" },
];

export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("flex min-w-0 items-center", className)}>
      <div className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate font-bold tracking-wide text-white transition-all duration-500",
            compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
          )}
        >
          SAM ANDERSON
        </span>
        <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#F17A28] sm:mt-1 sm:text-[10px] sm:tracking-[0.3em]">
          Dispatch
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "bg-[#0B3C5D] pt-0"
          : "bg-transparent pt-2 sm:pt-3 md:pt-4"
      )}
    >
      <div
        className={cn(
          "relative flex w-full items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "h-20 sm:h-[84px] md:h-24" : "h-[72px] sm:h-24 md:h-[104px]"
        )}
      >
        <SiteContainer className="relative flex h-full items-center">
          <Logo compact={scrolled} />

          <nav
            className={cn(
              "absolute left-[calc(50%+20px)] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 font-nav transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex md:left-[calc(50%+24px)] lg:gap-9",
              scrolled ? "top-1/2" : "top-[calc(50%+0px)] md:top-[calc(50%-2px)]"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#F17A28] lg:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            className={cn(
              "ml-auto h-12 min-w-[120px] shrink-0 translate-x-2 rounded-none px-5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[11px] hover:-translate-y-[3px] hover:bg-white hover:text-black hover:shadow-none active:translate-x-[11px] active:-translate-y-[3px] active:bg-white active:text-black active:shadow-none md:h-[72px] md:min-w-[150px] md:translate-x-3 md:px-8 md:text-sm md:shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] md:hover:translate-x-[15px] md:hover:-translate-y-1 md:active:translate-x-[15px] md:active:-translate-y-1 lg:h-[79px] lg:min-w-[165px] lg:px-9",
              !scrolled && "-translate-y-1.5 md:-translate-y-2"
            )}
          >
            Get Started
          </Button>
        </SiteContainer>
      </div>

      <div
        className={cn(
          "h-[3px] w-full origin-center bg-[#F17A28] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        )}
        aria-hidden="true"
      />
    </header>
  );
}
