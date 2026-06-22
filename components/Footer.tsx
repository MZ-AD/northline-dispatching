import Link from "next/link";
import { SiteContainer } from "@/components/SiteContainer";
import { Logo } from "@/components/Logo";

const quickLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#benefits" },
];

export function Footer() {
  return (
    <footer className="border-t-[8px] border-brand-aqua bg-brand-navy text-white">
      <SiteContainer className="pt-12 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.75fr_0.9fr] md:items-start md:gap-x-16 lg:gap-x-24 xl:gap-x-32">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70 sm:text-[15px]">
              Premium dispatching services designed exclusively for independent
              owner-operators and small fleets. We handle the office, you handle
              the road.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-6 md:contents">
            <div className="flex min-w-0 flex-col items-start pl-3 text-left md:pl-0">
              <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-white [word-spacing:0.2em] sm:text-lg">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-brand-aqua sm:text-[15px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-0 flex-col items-start pr-3 text-left md:pr-8 lg:pr-12 xl:pr-16">
              <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-white [word-spacing:0.2em] sm:text-lg">
                Contact
              </h3>
              <Link
                href="mailto:info@baywooddispatch.com"
                className="mt-5 inline-block max-w-full break-all text-sm text-white/70 transition-colors hover:text-brand-aqua sm:text-[15px]"
              >
                info@baywooddispatch.com
              </Link>
            </div>
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}
