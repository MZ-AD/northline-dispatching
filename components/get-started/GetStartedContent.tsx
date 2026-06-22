import { SiteContainer } from "@/components/SiteContainer";
import { GetStartedForm } from "@/components/get-started/GetStartedForm";
import { GetStartedInfo } from "@/components/get-started/GetStartedInfo";

export function GetStartedContent() {
  return (
    <SiteContainer className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
        <h1 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-brand-slate sm:text-4xl lg:text-5xl">
          Who We <span className="text-brand-aqua">Work With</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-brand-navy sm:text-base md:text-lg">
          We work exclusively with owner-operators operating under their own MC
          authority.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
        <GetStartedInfo />
        <GetStartedForm className="lg:sticky lg:top-28" />
      </div>
    </SiteContainer>
  );
}
