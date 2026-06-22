"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "@/lib/routes";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Problems", href: "#problem", pageHref: "/#problem" },
  { label: "Solution", href: "#services", pageHref: "/#services" },
  { label: "Benefits", href: "#benefits", pageHref: "/#benefits" },
  { label: "How It Works", href: "#process", pageHref: "/#process" },
];

export function Header({ variant = "home" }: { variant?: "home" | "page" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isPage = variant === "page";
  const showSolidHeader = isPage || scrolled;

  useEffect(() => {
    if (isPage) return;

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isPage]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        showSolidHeader
          ? "bg-brand-navy pt-0"
          : mobileOpen
            ? "bg-brand-navy pt-2 sm:pt-3"
            : "bg-transparent pt-2 sm:pt-3 md:pt-4"
      )}
    >
      <div
        className={cn(
          "relative flex w-full items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          showSolidHeader ? "h-20 sm:h-[84px] md:h-24" : "h-[72px] sm:h-24 md:h-[104px]"
        )}
      >
        <SiteContainer className="relative flex h-full min-w-0 items-center">
          <Logo compact={showSolidHeader} />

          <nav
            className={cn(
              "absolute left-[calc(50%+14px)] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 font-nav transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex md:left-[calc(50%+18px)] lg:gap-9",
              showSolidHeader ? "top-[calc(50%-4px)]" : "top-[calc(50%-4px)] md:top-[calc(50%-6px)]"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={isPage ? link.pageHref : link.href}
                className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.125em] text-white transition-colors hover:text-brand-aqua lg:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className={cn(
              "ml-auto flex shrink-0 items-center gap-2 translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-x-2",
              showSolidHeader
                ? "translate-y-0"
                : "-translate-y-0.5 md:-translate-y-1"
            )}
          >
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-none bg-brand-aqua text-white md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Button
              asChild
              className="hidden h-12 min-w-[112px] rounded-none px-5 text-xs font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand-aqua-dark hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] md:inline-flex md:h-[72px] md:min-w-[142px] md:px-8 md:text-sm md:shadow-[4px_4px_0_0_rgba(0,0,0,0.35)] md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:active:translate-x-[4px] md:active:translate-y-[4px] lg:h-[79px] lg:min-w-[158px] lg:px-9"
            >
              <Link href={GET_STARTED_PATH}>Get Started</Link>
            </Button>
          </div>
        </SiteContainer>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-brand-navy font-nav md:hidden">
          <SiteContainer className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={isPage ? link.pageHref : link.href}
                className="py-3 text-sm font-bold uppercase tracking-[0.125em] text-white transition-colors hover:text-brand-aqua"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 h-12 w-full rounded-none text-xs font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)]"
            >
              <Link href={GET_STARTED_PATH} onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </Button>
          </SiteContainer>
        </nav>
      )}

      <div
        className={cn(
          "h-[3px] w-full origin-center bg-brand-aqua transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          showSolidHeader ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        )}
        aria-hidden="true"
      />
    </header>
  );
}
