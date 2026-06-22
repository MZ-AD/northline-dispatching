import Link from "next/link";
import { SiteContainer } from "@/components/SiteContainer";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "@/lib/routes";

const steps = [
  {
    number: "01",
    title: "Apply & Check",
    description:
      "Fill out our quick form to see if your trucking operation qualifies for our dedicated dispatch services.",
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "We'll hop on a quick call to understand your preferred lanes, home time needs, and revenue goals.",
  },
  {
    number: "03",
    title: "Earn More",
    description:
      "Once onboarded, we immediately start sourcing premium freight and handling your paperwork.",
  },
];

const stepTitleClassName =
  "font-display text-xl font-bold uppercase leading-none tracking-tight text-brand-slate sm:text-2xl md:text-[1.875rem] lg:text-3xl";

function StepNumber({ number }: { number: string }) {
  return (
    <div className="group relative z-10 flex h-[88px] w-[84px] -skew-x-12 items-center justify-center border-4 border-slate-200 bg-brand-white transition-colors duration-300 hover:border-brand-aqua sm:h-[96px] sm:w-[96px]">
      <span className="skew-x-12 font-sans text-[1.85rem] font-bold leading-none tracking-[-0.03em] text-brand-aqua transition-colors duration-300 group-hover:text-brand-slate sm:text-[2.1rem]">
        {number}
      </span>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="bg-brand-white py-20 sm:py-28">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block -skew-x-12 bg-brand-navy px-4 py-1 sm:px-5">
            <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
              Onboarding
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-brand-slate sm:text-4xl lg:text-5xl">
            Simple <span className="text-brand-aqua">3-Step</span> Process
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-brand-navy sm:max-w-3xl sm:text-base md:text-lg">
            Getting started is fast and easy. We can have you onboarded and
            running your first high-paying load within 24 hours.
          </p>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="relative mx-auto w-full max-w-4xl lg:max-w-5xl">
            <div
              className="pointer-events-none absolute inset-x-0 hidden h-[4px] bg-slate-200 md:top-[calc(5.5rem+2.5rem+1rem)] md:block lg:top-[calc(6rem+2.5rem+1.125rem)]"
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-10 md:grid-cols-3 md:gap-2 lg:gap-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  <StepNumber number={step.number} />

                  <div className="mt-8 flex w-full items-center justify-center sm:mt-10">
                    <h3
                      className={`relative z-10 bg-brand-white px-4 py-0.5 ${stepTitleClassName}`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-6 max-w-[16rem] text-base leading-relaxed text-brand-navy sm:max-w-[18rem] sm:text-[17px] md:text-lg">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center sm:mt-16">
          <Button
            asChild
            className="font-display h-14 rounded-none px-7 text-sm font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand-aqua-dark hover:shadow-none active:translate-x-[3px] active:translate-y-[3px] sm:h-[76px] sm:px-9 sm:text-base sm:shadow-[4px_4px_0_0_rgba(0,0,0,0.35)] sm:hover:translate-x-[4px] sm:hover:translate-y-[4px] sm:active:translate-x-[4px] sm:active:translate-y-[4px] md:text-lg"
          >
            <Link href={GET_STARTED_PATH}>Book a Free Call</Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}
