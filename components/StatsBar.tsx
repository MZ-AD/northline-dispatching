import { SiteContainer } from "@/components/SiteContainer";
import { cn } from "@/lib/utils";

const stats = [
  { value: "$2.50+", label: "Average Rate\nPer Mile" },
  { value: "98%", label: "Driver\nRetention" },
  { value: "24/7", label: "Live\nSupport" },
];

function FeesCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "w-full -skew-x-[10deg] rounded-2xl bg-brand-white shadow-[0_14px_34px_rgba(11,19,43,0.12)]",
        compact ? "max-w-none px-4 py-4" : "max-w-[300px] px-8 py-6"
      )}
    >
      <div className="skew-x-[10deg]">
        <p
          className={cn(
            "text-center font-bold uppercase tracking-[0.12em] text-brand-navy/70",
            compact ? "text-[10px]" : "text-xs sm:text-sm"
          )}
        >
          You Pay Only
        </p>
        <div className="mt-1.5 flex items-baseline justify-center gap-1 sm:mt-2">
          <span
            className={cn(
              "relative font-extrabold leading-none text-brand-aqua",
              compact ? "text-[2rem]" : "text-[52px]"
            )}
          >
            $295
            <svg
              viewBox="0 0 80 10"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-2 w-full"
              aria-hidden="true"
            >
              <path
                d="M2 7 C 24 2, 56 2, 78 7"
                fill="none"
                stroke="#00AEEF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "font-extrabold uppercase text-brand-slate",
              compact ? "text-sm" : "text-xl"
            )}
          >
            /Week
          </span>
        </div>
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="mt-10 py-3 sm:mt-12 sm:py-4">
      <SiteContainer>
        <div className="relative mx-auto w-full max-w-7xl rounded-xl shadow-[0_0_26px_rgba(11,19,43,0.1)]">
          <div className="relative overflow-hidden rounded-xl bg-brand-white">
            <div className="relative z-10 max-lg:grid max-lg:grid-cols-2 max-lg:divide-x-2 max-lg:divide-y-2 max-lg:divide-brand-aqua lg:flex lg:flex-row lg:items-stretch">
              <div className="max-lg:contents lg:flex lg:flex-[0_0_65%] lg:divide-x-2 lg:divide-brand-aqua">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-w-0 flex-col items-center justify-center px-4 py-7 text-center max-lg:px-5 max-lg:py-8 sm:max-lg:px-6 lg:px-14 lg:py-[58px] xl:px-16"
                  >
                    <p className="whitespace-pre-line text-xs font-extrabold uppercase leading-[1.35] tracking-[0.1em] text-brand-navy max-lg:text-[11px] sm:max-lg:text-sm lg:text-base">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-[2rem] font-extrabold leading-none text-brand-slate max-lg:mt-2 sm:max-lg:text-4xl lg:mt-5 lg:text-[58px]">
                      {stat.value}
                    </p>
                    <span
                      className="mt-3 block h-0.5 w-[30px] bg-brand-aqua max-lg:mt-2 lg:mt-4"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center px-4 py-7 max-lg:px-5 max-lg:py-8 sm:max-lg:px-6 lg:flex-1 lg:py-[34px] lg:px-8">
                <div className="flex w-full max-w-[300px] flex-col items-center gap-3 max-lg:max-w-none lg:gap-9">
                  <h3 className="text-center text-lg font-extrabold uppercase leading-tight tracking-tight text-brand-slate max-lg:text-base sm:max-lg:text-xl lg:text-3xl lg:text-[34px]">
                    Our Service Fee
                  </h3>
                  <div className="w-full lg:hidden">
                    <FeesCard compact />
                  </div>
                  <div className="hidden w-full lg:block">
                    <FeesCard />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 z-20 h-1.5 w-full bg-brand-aqua lg:hidden"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 z-20 hidden h-2 w-[65%] bg-brand-aqua lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-[65%] top-0 z-30 hidden origin-bottom bg-brand-aqua lg:block"
              style={{
                width: "6px",
                clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                transform: "skewX(-16deg)",
              }}
              aria-hidden="true"
            />
          </div>
          <div
            className="pointer-events-none absolute hidden bg-brand-aqua lg:block"
            style={{
              left: "calc(65.7% - 33%)",
              width: "33%",
              height: "18px",
              bottom: "-10px",
              clipPath: "polygon(0 0, 6% 100%, 98% 100%, 100% 0)",
            }}
            aria-hidden="true"
          />
        </div>
      </SiteContainer>
    </section>
  );
}
