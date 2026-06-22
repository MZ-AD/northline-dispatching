import { SiteContainer } from "@/components/SiteContainer";

const stats = [
  { value: "$2.50+", label: "Average Rate\nPer Mile" },
  { value: "98%", label: "Driver\nRetention" },
  { value: "24/7", label: "Live\nSupport" },
];

function FeesCard() {
  return (
    <div className="w-full max-w-[300px] -skew-x-[10deg] rounded-2xl bg-brand-white px-8 py-6 shadow-[0_14px_34px_rgba(11,19,43,0.12)]">
      <div className="skew-x-[10deg]">
        <p className="text-center text-xs font-bold uppercase tracking-[0.12em] text-brand-navy/70 sm:text-sm">
          You Pay Only
        </p>
        <div className="mt-2 flex items-baseline justify-center gap-1">
          <span className="relative text-[52px] font-extrabold leading-none text-brand-aqua">
            $295
            <svg
              viewBox="0 0 80 10"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-2.5 w-full"
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
          <span className="text-xl font-extrabold uppercase text-brand-slate">
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
        <div className="relative mx-auto w-full max-w-6xl rounded-xl shadow-[0_0_26px_rgba(11,19,43,0.1)]">
          <div className="relative overflow-hidden rounded-xl bg-brand-white">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex-[0_0_58%]">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative flex flex-col items-center justify-center px-4 py-10 text-center lg:py-[58px]"
                  >
                    {index > 0 && (
                      <span
                        className="absolute left-0 top-1/2 hidden h-[120px] w-px -translate-y-1/2 bg-slate-200 sm:block"
                        aria-hidden="true"
                      />
                    )}
                    <p className="whitespace-pre-line text-[13px] font-bold uppercase leading-[1.35] tracking-[0.1em] text-brand-navy">
                      {stat.label}
                    </p>
                    <p className="mt-5 text-5xl font-extrabold leading-none text-brand-slate lg:text-[58px]">
                      {stat.value}
                    </p>
                    <span
                      className="mt-4 block h-0.5 w-[30px] bg-brand-aqua"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center px-6 py-10 lg:flex-1 lg:py-[34px] lg:px-8">
                <div className="flex w-full max-w-[300px] flex-col items-center gap-7 lg:gap-9">
                  <h3 className="text-center text-2xl font-extrabold uppercase tracking-tight text-brand-slate sm:text-3xl lg:text-[34px]">
                    Our Service Fee
                  </h3>
                  <FeesCard />
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 z-20 h-1.5 w-full bg-brand-aqua lg:hidden"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 z-20 hidden h-2 w-[59%] bg-brand-aqua lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-[59%] top-0 z-30 hidden origin-bottom bg-brand-aqua lg:block"
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
              left: "calc(59.8% - 33%)",
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
