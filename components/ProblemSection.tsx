import {
  AlertCircle,
  Clock,
  FileText,
  Frown,
} from "lucide-react";
import { FitTwoLineText } from "@/components/FitTwoLineText";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SiteContainer } from "@/components/SiteContainer";

const painPoints = [
  {
    icon: Clock,
    title: "Wasting Hours on Load Boards",
    description:
      "Endlessly scrolling through DAT and Truckstop instead of resting or driving.",
  },
  {
    icon: AlertCircle,
    title: "Brokers Offering Low Rates",
    description:
      "Fighting with brokers who try to undercut your value and take advantage.",
  },
  {
    icon: FileText,
    title: "Drowning in Paperwork",
    description:
      "Dealing with rate cons, invoicing, and factoring when you just want to drive.",
  },
  {
    icon: Frown,
    title: "No Time to Focus",
    description:
      "Trying to manage a business from the cab of a truck is stressful and inefficient.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-brand-white py-20 sm:py-28">
      <SiteContainer className="max-md:!pl-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-11 xl:gap-14">
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block -skew-x-12 bg-brand-navy px-4 py-1 sm:px-5">
              <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
                The Problem
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter sm:text-4xl lg:text-5xl">
              <span className="block text-brand-slate md:whitespace-nowrap">
                Sound Familiar? The Struggle of an
              </span>
              <span className="block text-brand-aqua md:whitespace-nowrap">
                Independent Operator
              </span>
            </h2>
          </div>

          <div>
            <p className="border-l-2 border-brand-aqua pl-3 text-base text-brand-navy sm:pl-4 sm:text-lg">
              You got into the trucking business for freedom and profit, but
              instead you&apos;re finding yourself acting as a full-time
              secretary, negotiator, and dispatcher.
            </p>

            <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex min-h-[128px] items-start gap-4 border border-slate-200 border-l-[5px] border-l-brand-aqua bg-brand-white px-4 py-6 shadow-[0_2px_12px_rgba(11,19,43,0.06)] transition-shadow duration-300 ease-out hover:shadow-[0_8px_24px_rgba(11,19,43,0.12)] sm:items-center sm:gap-6 sm:px-6 sm:py-7 lg:min-h-[132px]"
                >
                  <div className="mt-[-2px] flex h-12 w-12 shrink-0 -skew-x-12 items-center justify-center bg-brand-aqua/10 sm:mt-0 sm:h-14 sm:w-14">
                    <point.icon
                      className="h-5 w-5 skew-x-12 text-brand-aqua sm:h-6 sm:w-6"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-brand-slate sm:text-xl lg:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-sm font-light leading-relaxed text-brand-navy sm:mt-3 sm:text-[15px] lg:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[520px] flex-col overflow-hidden border-8 border-brand-white shadow-[0_8px_32px_rgba(11,19,43,0.12)] sm:min-h-[580px] lg:min-h-0 lg:h-auto">
            <div className="relative min-h-[320px] w-full flex-1 sm:min-h-[380px] lg:max-h-[45%]">
              <ResponsiveImage
                base="1009"
                alt="stressed truck driver in cab"
                sizes="(max-width: 1024px) 100vw, 50vw"
                widths={[640]}
                className="object-center grayscale"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 from-5% via-brand-navy/35 via-45% to-transparent to-80%"
                aria-hidden="true"
              />
            </div>
            <div className="h-1 shrink-0 bg-brand-aqua" aria-hidden="true" />
            <div className="bg-brand-navy px-4 py-8 sm:px-8 sm:py-9 lg:px-6 xl:px-8">
              <FitTwoLineText maxFontSize={18} minFontSize={10} smMaxFontSize={20}>
                &ldquo;I used to spend hours on load boards every day. Now my
                dispatcher Nick handles that and I focus on driving.&rdquo;
              </FitTwoLineText>
              <p className="mt-2.5 text-right text-lg font-bold italic leading-tight text-brand-aqua sm:mt-3 sm:text-xl">
                - Kurt M
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
