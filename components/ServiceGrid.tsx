import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  FileCheck,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Load Sourcing",
    description:
      "We constantly monitor boards and use our direct broker relationships to find premium freight.",
  },
  {
    icon: TrendingUp,
    title: "Rate Negotiation",
    description:
      "Our experienced dispatchers negotiate hard to get you the highest possible rate per mile.",
  },
  {
    icon: FileCheck,
    title: "Broker Credit Checks",
    description:
      "We vet every broker to ensure you actually get paid for the work you do.",
  },
  {
    icon: ClipboardList,
    title: "Paperwork Management",
    description:
      "From setup packets to rate cons and invoicing, we handle the administrative burden.",
  },
  {
    icon: MapPin,
    title: "Route Planning",
    description:
      "We plan efficient routes to minimize deadhead and keep your truck in high-paying zones.",
  },
];

function ServiceIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="-ml-2 flex h-14 w-14 shrink-0 -skew-x-12 items-center justify-center bg-[#0B3C5D] transition-colors duration-300 group-hover:bg-orange sm:-ml-3 sm:h-16 sm:w-16">
      <Icon
        className="h-6 w-6 skew-x-12 text-white sm:h-7 sm:w-7"
        strokeWidth={2}
      />
    </span>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="group relative flex min-h-[240px] flex-col overflow-hidden border-r border-b border-[#E5E7EB] bg-white p-10 transition-colors duration-300 ease-out hover:bg-[#F8F8F8] sm:min-h-[260px] sm:p-12">
      <span
        className="absolute left-0 top-0 z-10 h-[4px] w-0 bg-orange transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
        aria-hidden="true"
      />
      <ServiceIcon icon={icon} />
      <div className="-ml-2 sm:-ml-3">
        <h3 className="font-display mt-10 text-xl font-bold uppercase leading-tight tracking-tight text-[#111827] sm:mt-11 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
          {description}
        </p>
      </div>
    </article>
  );
}

export function ServiceGrid() {
  return (
    <section id="services" className="bg-[#F9FAFB] py-20 sm:py-28">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block -skew-x-12 bg-[#0B3C5D] px-4 py-1 sm:px-5">
            <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter sm:text-4xl lg:text-5xl">
            <span className="text-[#111827]">Our Complete </span>
            <span className="text-orange">Dispatch </span>
            <span className="text-[#111827]">Solution</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4B5563] sm:text-lg">
            We operate as your dedicated back-office team. You drive, we handle
            the rest.
            <br />
            It&apos;s a partnership designed to maximize your revenue and
            minimize your stress.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-l border-t border-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}

          <article className="group relative flex min-h-[240px] flex-col justify-center overflow-hidden border-r border-b border-[#E5E7EB] bg-[#0B3C5D] p-10 text-white sm:min-h-[260px] sm:p-12 before:absolute before:inset-0 before:origin-bottom before:scale-y-0 before:bg-orange before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.22,1,0.36,1)] before:content-[''] hover:before:scale-y-100">
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl">
                Ready to upgrade?
              </h3>
              <p className="mt-4 text-base text-white/80 sm:text-lg">
                Stop leaving money on the table.
              </p>
              <Button
                variant="white"
                className="font-display mt-8 h-16 w-full rounded-none text-base font-bold uppercase leading-tight tracking-[0.15em] sm:mt-10 sm:h-[72px] sm:text-lg"
              >
                Book a Free Call
              </Button>
            </div>
          </article>
        </div>
      </SiteContainer>
    </section>
  );
}
