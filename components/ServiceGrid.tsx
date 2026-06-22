import {
  ClipboardList,
  FileCheck,
  MapPin,
  Search,
  TrendingUp,
} from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1C2E]/10">
                  <service.icon className="h-5 w-5 text-[#0B1C2E]" />
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide text-[#111827]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}

          <Card className="border-[#0B1C2E] bg-[#0B1C2E] text-white">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Ready to upgrade?
              </h3>
              <p className="mt-3 text-white/80">
                Stop leaving money on the table.
              </p>
              <Button variant="white" size="lg" className="mt-6 w-fit">
                Book a Free Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </SiteContainer>
    </section>
  );
}
