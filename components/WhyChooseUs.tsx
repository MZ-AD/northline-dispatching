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
    <section id="benefits" className="relative overflow-hidden bg-[#0a3151] py-20 sm:py-28">
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
            <div className="mb-6 inline-block -skew-x-12 bg-[#FF6B00] px-5 py-2">
              <span className="font-display inline-block skew-x-12 text-xs font-bold uppercase tracking-tighter text-white sm:text-sm">
                The Advantage
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-white sm:text-4xl lg:text-5xl">
              Why Drivers{" "}
              <span className="text-[#FF6B00]">Choose Us</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:max-w-3xl sm:text-base md:text-lg">
              We aren&apos;t just finding loads; we&apos;re building a
              profitable business together.
              <br />
              Our success is directly tied to your success.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 border border-white/15 bg-white/[0.06] px-5 py-4 sm:gap-4 sm:px-5 sm:py-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#FF6B00] sm:h-9 sm:w-9">
                    <Check
                      className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:-mt-6 lg:max-w-none xl:-mt-8">
            <div
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FF6B00] sm:translate-x-2 sm:translate-y-2"
              aria-hidden="true"
            />
            <div className="relative border-4 border-white bg-white">
              <div className="relative aspect-[8/9] w-full">
                <Image
                  src="/happy.png"
                  alt="Smiling truck driver"
                  fill
                  className="object-cover object-center sepia-[0.35] saturate-[0.85]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a3151]/95 from-5% via-[#0a3151]/45 via-40% to-transparent to-75%"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute bottom-7 left-1/2 z-10 w-[90%] -translate-x-1/2 border-l-4 border-[#FF6B00] bg-[#0a3151] px-6 py-5 sm:bottom-9 sm:px-8 sm:py-6">
                <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight text-white sm:text-lg">
                  Meet Your Partner
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-[15px]">
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
