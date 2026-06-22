import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Button } from "@/components/ui/button";

const features = [
  { icon: ShieldCheck, label: "Dedicated Agent" },
  { icon: TrendingUp, label: "Top Tier Rates" },
  { icon: Phone, label: "24/7 Support" },
  { icon: CheckCircle2, label: "No Forced Dispatch" },
];

function FeatureIcon({ icon: Icon }: { icon: typeof ShieldCheck }) {
  return (
    <span className="flex h-10 w-10 shrink-0 -skew-x-12 items-center justify-center border border-[#F17A28] bg-[#152536] transition-all duration-300 group-hover:border-[#F17A28] group-hover:bg-[#F17A28]">
      <Icon
        className="h-4 w-4 skew-x-12 text-[#F17A28] transition-all duration-300 group-hover:text-white"
        strokeWidth={2.5}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3C5D] pt-[80px] sm:pt-[108px] md:pt-[120px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/44.jpg"
          alt="Trucks on highway"
          fill
          priority
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 z-10 bg-[#0B3C5D]/65" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B3C5D] via-[#0B3C5D]/80 to-transparent" />
        <div
          className="absolute inset-0 z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23fff'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <SiteContainer className="relative z-20 py-20 lg:py-28">
        <div className="max-w-6xl text-left lg:max-w-7xl">
          <div className="mb-6 inline-block -skew-x-12 bg-[#F17A28] px-5 py-2">
            <span className="inline-block skew-x-12 text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
              Premium Logistics
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block whitespace-nowrap text-white">
              We Keep Your Truck
            </span>
            <span className="block text-[#FF6B00]">Moving &amp; Earning.</span>
          </h1>
        </div>

        <div className="mt-8 max-w-3xl text-left">
          <div className="relative flex max-w-2xl items-start sm:max-w-3xl lg:max-w-4xl">
            <span
              className="absolute bottom-5 -left-5 h-1.5 w-1.5 shrink-0 bg-[#F17A28] sm:bottom-6 sm:-left-7 md:bottom-7 md:-left-8"
              aria-hidden="true"
            />
            <p className="border-l-2 border-[#F17A28]/60 pl-3 text-sm leading-relaxed text-white/70 sm:pl-5 sm:text-xl md:text-2xl">
              Stop fighting with brokers. Our dispatchers negotiate the highest
              rates so you can focus on the road.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <Button
              className="h-16 w-full max-w-[345px] rounded-none border border-white bg-[#FF781F] px-10 text-base font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_rgba(0,0,0,0.4)] hover:bg-[#FF781F]/90 sm:h-[88px] sm:px-12 sm:text-lg md:h-[94px] md:min-w-[345px] md:text-xl"
            >
              Book a Free Call 
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          <div className="mt-8 border-t border-white/10" />

          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature.label} className="group flex items-center gap-3">
                <FeatureIcon icon={feature.icon} />
                <span className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </section>
  );
}
