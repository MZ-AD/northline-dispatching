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
    <span className="flex h-11 w-11 shrink-0 -skew-x-[20deg] items-center justify-center bg-[#0B3C5D] transition-colors duration-300 group-hover:bg-[#FF6B00] sm:h-12 sm:w-12">
      <Icon
        className="h-5 w-5 skew-x-[20deg] text-white sm:h-[22px] sm:w-[22px]"
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
    <article className="group relative border-r border-b border-[#E5E7EB] bg-white p-8 transition-colors duration-300 ease-out hover:bg-gray-50 sm:p-10 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:origin-top before:scale-y-0 before:bg-[#FF6B00] before:transition-transform before:duration-300 before:ease-out before:content-[''] group-hover:before:scale-y-100">
      <ServiceIcon icon={icon} />
      <h3 className="font-display mt-6 text-lg font-bold uppercase leading-tight tracking-tight text-[#111827] sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-[15px]">
        {description}
      </p>
    </article>
  );
}

export function ServiceGrid() {
  return (
    <section id="services" className="bg-[#F9FAFB] py-20 sm:py-28">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block -skew-x-12 bg-[#0B3C5D] px-5 py-2">
            <span className="font-display inline-block skew-x-12 text-xs font-bold uppercase tracking-tighter text-white sm:text-sm">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter sm:text-4xl lg:text-5xl">
            <span className="text-[#111827]">Our Complete </span>
            <span className="text-[#FF6B00]">Dispatch </span>
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

          <article className="flex flex-col justify-center border-r border-b border-[#E5E7EB] bg-[#0B3C5D] p-8 text-white sm:p-10">
            <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl">
              Ready to upgrade?
            </h3>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Stop leaving money on the table.
            </p>
            <Button
              variant="white"
              className="mt-8 h-14 w-full rounded-none text-sm font-bold uppercase tracking-[0.15em] sm:mt-10"
            >
              Book a Free Call
            </Button>
          </article>
        </div>
      </SiteContainer>
    </section>
  );
}
