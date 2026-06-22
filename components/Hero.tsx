import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "@/lib/routes";

const features = [
  { icon: ShieldCheck, label: "Dedicated Agent" },
  { icon: TrendingUp, label: "Top Tier Rates" },
  { icon: Phone, label: "24/7 Support" },
  { icon: CheckCircle2, label: "No Forced Dispatch" },
];

function FeatureIcon({ icon: Icon }: { icon: typeof ShieldCheck }) {
  return (
    <span className="flex h-10 w-10 shrink-0 -skew-x-12 items-center justify-center border border-brand-aqua bg-brand-navy transition-all duration-300 group-hover:border-brand-aqua group-hover:bg-brand-aqua">
      <Icon
        className="h-4 w-4 skew-x-12 text-brand-aqua transition-all duration-300 group-hover:text-white"
        strokeWidth={2.5}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-[80px] sm:pt-[108px] md:pt-[120px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/44.jpg"
          alt="Trucks on highway"
          fill
          priority
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 z-10 bg-brand-navy/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
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
          <div className="mb-6 inline-block -skew-x-12 bg-brand-aqua px-5 py-2">
            <span className="inline-block skew-x-12 text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
              Premium Logistics
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block whitespace-nowrap text-white">
              We Keep Your Truck
            </span>
            <span className="block text-brand-aqua">Moving &amp; Earning.</span>
          </h1>
        </div>

        <div className="mt-3 max-w-3xl text-left sm:mt-4">
          <p className="max-w-2xl border-l-2 border-brand-aqua/60 pl-3 text-sm leading-relaxed text-white/70 sm:max-w-3xl sm:pl-5 sm:text-xl md:text-2xl lg:max-w-4xl">
            Stop fighting with brokers. Our dispatchers negotiate the highest
            rates so you can focus on the road.
          </p>

          <div className="mt-8 sm:mt-10">
            <Button
              asChild
              className="group h-16 w-full max-w-[345px] rounded-none px-10 text-base font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand-aqua-dark hover:shadow-none sm:h-[88px] sm:px-12 sm:text-lg md:h-[94px] md:min-w-[345px] md:text-xl"
            >
              <Link href={GET_STARTED_PATH}>
                Book a Free Call
                <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:h-6 sm:w-6" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 border-t border-white/10 sm:mt-12" />

          <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-5 sm:max-w-xl sm:grid-cols-2 sm:mt-12 sm:gap-x-7">
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
