import Image from "next/image";
import { Check } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";

const benefits = [
  "Higher paying loads on average",
  "A dedicated dispatcher who knows your preferences",
  "Absolutely no forced dispatch - you are the boss",
  "All paperwork and administrative tasks handled",
  "Total focus on driving and safety",
  "24/7 support while you're on the road",
  "Consistent lanes and reliable freight",
  "Reduced deadhead miles",
];

export function WhyChooseUs() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full border border-white/[0.06] sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full border border-white/[0.05] sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
          <div>
            <div className="mb-6 inline-block -skew-x-12 bg-brand-aqua px-4 py-1 sm:px-5">
              <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
                The Advantage
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-white sm:text-4xl lg:text-5xl">
              Why Drivers{" "}
              <span className="text-brand-aqua">Choose Us</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:max-w-3xl sm:text-lg md:text-xl">
              We aren&apos;t just finding loads; we&apos;re building a
              profitable business together.
              <br />
              Our success is directly tied to your success.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 border border-white/15 bg-white/[0.06] px-3 py-3 transition-colors duration-300 hover:border-brand-aqua sm:gap-3.5 sm:px-4 sm:py-3.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-brand-aqua sm:h-6 sm:w-6">
                    <Check
                      className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-[15px]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:-mt-6 lg:max-w-none xl:-mt-8">
            <div
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-brand-aqua sm:translate-x-2 sm:translate-y-2"
              aria-hidden="true"
            />
            <div className="relative border-4 border-brand-aqua bg-brand-white">
              <div className="relative aspect-[8/9] w-full">
                <Image
                  src="/happy.png"
                  alt="Smiling truck driver"
                  fill
                  className="object-cover object-center sepia-[0.35] saturate-[0.85]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 from-5% via-brand-navy/45 via-40% to-transparent to-75%"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute bottom-7 left-1/2 z-10 w-[90%] -translate-x-1/2 border-l-4 border-brand-aqua bg-brand-navy px-6 py-5 sm:bottom-9 sm:px-8 sm:py-6">
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl">
                  Meet Your Partner
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/85 sm:text-base">
                  Our dispatchers work strictly for you, acting as your personal
                  agent in the freight market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
