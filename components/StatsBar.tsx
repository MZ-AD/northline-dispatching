import { SiteContainer } from "@/components/SiteContainer";

const stats = [
  { value: "$2.50+", label: "Average Rate\nPer Mile" },
  { value: "98%", label: "Driver\nRetention" },
  { value: "24/7", label: "Live\nSupport" },
];

function FeesCard() {
  return (
    <div className="w-full max-w-[300px] rounded-2xl bg-white px-8 py-6 shadow-[0_14px_34px_rgba(10,35,66,0.16)]">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#7A8694]">
        Our Fee Is Only
      </p>
      <div className="mt-2 flex items-baseline justify-center gap-1">
        <span className="relative text-[52px] font-extrabold leading-none text-[#FF7700]">
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
              stroke="#FF7700"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-xl font-extrabold uppercase text-[#0A2342]">
          /Week
        </span>
      </div>
    </div>
  );
}

function BottomAccent() {
  return (
    <>
      <div
        className="absolute bottom-0 left-0 z-20 h-1.5 w-full bg-[#FF7700] sm:hidden"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 1000 6"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 z-20 hidden h-1.5 w-full sm:block"
        aria-hidden="true"
      >
        <path d="M0,0 H1000 V6 H0 Z" fill="#FF7700" />
      </svg>
    </>
  );
}

export function StatsBar() {
  return (
    <section className="mt-10 py-3 sm:mt-12 sm:py-4">
      <SiteContainer>
      <div className="rounded-xl shadow-[0_0_26px_rgba(10,35,66,0.12)]">
      <div className="relative overflow-hidden rounded-xl bg-[#F6F7F9]">
        {/* CONTENT LAYER */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-stretch">
          {/* STATS — 3 equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex-[0_0_58%]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center justify-center px-4 py-10 text-center lg:py-[58px]"
              >
                {index > 0 && (
                  <span
                    className="absolute left-0 top-1/2 hidden h-[120px] w-px -translate-y-1/2 bg-[#E4E7EC] sm:block"
                    aria-hidden="true"
                  />
                )}
                <p className="whitespace-pre-line text-[13px] font-bold uppercase leading-[1.35] tracking-[0.1em] text-[#586374]">
                  {stat.label}
                </p>
                <p className="mt-5 text-5xl font-extrabold leading-none text-[#0A2342] lg:text-[58px]">
                  {stat.value}
                </p>
                <span
                  className="mt-2.5 block h-0.5 w-[30px] bg-[#FF7700]"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* OUR FEES — heading pinned top, card pinned bottom */}
          <div className="flex flex-col items-center justify-between px-6 py-10 lg:flex-1 lg:py-[34px] lg:pl-6 lg:pr-10">
            <h3 className="text-4xl font-extrabold uppercase tracking-tight text-[#0A2342] lg:text-[46px]">
              Our Fees
            </h3>
            <div className="mt-8 lg:mt-0">
              <FeesCard />
            </div>
          </div>
        </div>

        {/* DIAGONAL DIVIDER (desktop) — meets bottom bar with no gap */}
        <div
          className="absolute bottom-0 left-[59%] z-30 hidden w-[7px] origin-bottom bg-[#FF7700] lg:block"
          style={{ top: 0, transform: "skewX(-20deg)" }}
          aria-hidden="true"
        />

        <BottomAccent />
      </div>
      </div>
      </SiteContainer>
    </section>
  );
}
