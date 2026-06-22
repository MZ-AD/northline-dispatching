import Link from "next/link";
import { preload } from "react-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "@/lib/routes";
import { cn } from "@/lib/utils";

const features = [
  { icon: ShieldCheck, label: "Dedicated Agent" },
  { icon: TrendingUp, label: "Top Tier Rates" },
  { icon: Phone, label: "24/7 Support" },
  { icon: CheckCircle2, label: "No Forced Dispatch" },
];

function FeatureIcon({ icon: Icon }: { icon: typeof ShieldCheck }) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center transition-all duration-300",
        "max-md:-skew-x-12 max-md:bg-brand-aqua max-md:shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]",
        "md:-skew-x-12 md:border md:border-brand-aqua md:bg-brand-navy md:group-hover:border-brand-aqua md:group-hover:bg-brand-aqua"
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 stroke-[2.5] transition-all duration-300",
          "max-md:skew-x-12 max-md:text-white",
          "md:skew-x-12 md:text-brand-aqua md:group-hover:text-white"
        )}
      />
    </span>
  );
}

export function Hero() {
  preload("/44-1280.webp", {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: "/44-768.webp 768w, /44-1280.webp 1280w, /44-1920.webp 1920w",
    imageSizes: "100vw",
  });

  return (
    <section className="relative overflow-hidden bg-brand-navy pt-[72px] sm:pt-[108px] md:pt-[120px]">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          base="44"
          alt="Trucks on highway"
          sizes="100vw"
          widths={[768, 1280, 1920]}
          priority
          className="object-[center_75%] md:object-[center_28%]"
        />
        <div className="absolute inset-0 z-10 bg-brand-navy/75 md:bg-brand-navy/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-navy/95 via-brand-navy/80 to-brand-navy/45 md:bg-gradient-to-r md:from-brand-navy md:via-brand-navy/85 md:to-transparent" />
        <div
          className="absolute inset-0 z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23fff'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <SiteContainer className="relative z-20 py-10 sm:py-20 lg:py-28">
        <div className="max-w-6xl min-w-0 text-left max-md:pl-4 md:pl-0 lg:max-w-7xl">
          <div className="hidden -skew-x-12 bg-brand-aqua px-5 py-2 lg:mb-6 lg:inline-block">
            <span className="inline-block skew-x-12 text-[10px] font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
              Premium Logistics
            </span>
          </div>

          {/* Mobile & tablet: 2-line headline like reference */}
          <h1 className="font-display max-w-full font-bold uppercase tracking-tighter lg:hidden">
            <span className="block text-[clamp(1.45rem,6.5vw,3rem)] leading-[0.92] text-white">
              We Keep Your Truck
            </span>
            <span className="mt-1 block text-[clamp(1.45rem,6.5vw,3rem)] leading-[0.92] text-brand-aqua">
              Moving &amp; Earning.
            </span>
          </h1>

          {/* Desktop: 4-line headline */}
          <h1 className="font-display hidden text-6xl font-bold uppercase leading-[0.88] tracking-tighter lg:block lg:text-7xl lg:leading-none xl:text-8xl">
            <span className="block text-white">We Keep Your</span>
            <span className="block text-white">Truck</span>
            <span className="block text-brand-aqua">Moving &amp;</span>
            <span className="block text-brand-aqua">Earning.</span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl min-w-0 text-left max-md:pl-4 sm:mt-4 md:mt-3 md:pl-0">
          <p className="max-w-2xl border-l-2 border-brand-aqua pl-3 text-[15px] leading-relaxed text-white/75 sm:max-w-3xl sm:pl-5 sm:text-xl md:text-2xl lg:max-w-4xl">
            Stop fighting with brokers. Our dispatchers negotiate the highest
            rates so you can focus on the road.
          </p>

          <div className="mt-6 max-md:flex max-md:justify-center sm:mt-10">
            <Button
              asChild
              className="group h-[60px] w-full max-w-none rounded-none px-6 text-sm font-bold uppercase tracking-[0.15em] shadow-[4px_4px_0_0_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand-aqua-dark hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] max-md:w-auto max-md:min-w-[280px] sm:h-[88px] sm:max-w-[345px] sm:px-12 sm:text-lg md:h-[94px] md:min-w-[345px] md:text-xl"
            >
              <Link href={GET_STARTED_PATH}>
                Book a Free Call
                <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:h-6 sm:w-6" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 border-t border-white/10 sm:mt-12" />

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-12 sm:max-w-xl sm:gap-x-7 sm:gap-y-6">
            {features.map((feature) => (
              <li key={feature.label} className="group flex items-center gap-2.5 sm:gap-3">
                <FeatureIcon icon={feature.icon} />
                <span className="text-[11px] font-bold uppercase leading-tight tracking-wide text-white min-[400px]:text-xs sm:text-base">
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
