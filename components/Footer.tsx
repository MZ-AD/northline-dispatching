import Link from "next/link";
import { SiteContainer } from "@/components/SiteContainer";
import { Logo } from "@/components/Header";

const quickLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#benefits" },
];

export function Footer() {
  return (
    <footer className="border-t-[8px] border-[#FF781F] bg-[#121212] text-white">
      <SiteContainer className="pt-12 pb-6 sm:pt-14 sm:pb-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#A0A0A0] sm:text-[15px]">
              Premium dispatching services designed exclusively for independent
              owner-operators and small fleets. We handle the office, you handle
              the road.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:items-center">
            <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-white [word-spacing:0.2em] sm:text-lg">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0A0A0] transition-colors hover:text-white sm:text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-white [word-spacing:0.2em] sm:text-lg">
              Contact
            </h3>
            <Link
              href="mailto:info@baywooddispatch.com"
              className="mt-5 inline-block text-sm text-[#A0A0A0] transition-colors hover:text-white sm:text-[15px]"
            >
              info@baywooddispatch.com
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-wide text-[#A0A0A0]">
            &copy; {new Date().getFullYear()} Sam Anderson Dispatch.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs uppercase tracking-wide text-[#A0A0A0] transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs uppercase tracking-wide text-[#A0A0A0] transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}
