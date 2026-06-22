import Image from "next/image";
import {
  AlertCircle,
  Clock,
  FileText,
  Frown,
} from "lucide-react";
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
    <section id="problem" className="bg-white py-20 sm:py-28">
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-11 xl:gap-14">
          <div>
            <div className="mb-6 inline-block -skew-x-12 bg-[#0B3C5D] px-4 py-1 sm:px-5">
              <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
                The Problem
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter sm:text-4xl lg:text-5xl">
              <span className="block text-[#111827]">
                Sound Familiar? The Struggle of an
              </span>
              <span className="block text-[#FF6B00]">Independent Operator</span>
            </h2>
            <p className="mt-6 border-l-2 border-[#FF6B00] pl-3 text-base text-[#4B5563] sm:pl-4 sm:text-lg">
              You got into the trucking business for freedom and profit, but
              instead you&apos;re finding yourself acting as a full-time
              secretary, negotiator, and dispatcher.
            </p>

            <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex min-h-[112px] items-center gap-4 border border-[#E5E7EB] border-l-[5px] border-l-[#FF6B00] bg-white px-4 py-4 shadow-[0_2px_12px_rgba(10,35,66,0.08)] sm:gap-6 sm:px-6 lg:h-[112px]"
                >
                  <div className="flex h-12 w-12 shrink-0 -skew-x-12 items-center justify-center bg-[#FFF4ED] sm:h-14 sm:w-14">
                    <point.icon
                      className="h-5 w-5 skew-x-12 text-[#FF6B00] sm:h-6 sm:w-6"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-[#111827] sm:text-xl lg:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-[#4B5563] sm:text-[15px] lg:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[520px] flex-col overflow-hidden border-8 border-white shadow-[0_8px_32px_rgba(11,60,93,0.16)] sm:min-h-[580px] lg:mt-[12rem] lg:min-h-0 lg:h-auto">
            <div className="relative min-h-[320px] w-full flex-1 sm:min-h-[380px] lg:max-h-[45%]">
              <Image
                src="/1009.png"
                alt="stressed truck driver in cab"
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#002033]/75 from-5% via-[#0B3C5D]/35 via-45% to-transparent to-80%"
                aria-hidden="true"
              />
            </div>
            <div className="h-1 shrink-0 bg-[#FF6B00]" aria-hidden="true" />
            <div className="bg-[#0B3C5D] px-8 py-8 sm:px-10 sm:py-9">
              <p className="text-lg font-bold italic leading-snug text-white sm:text-xl">
                &ldquo;I used to spend 3 hours a day just trying to find my next
                load.
                <br />
                Not anymore.&rdquo;
              </p>
              <p className="font-display mt-2 text-base font-bold uppercase leading-tight tracking-wider text-[#E67E22] sm:text-lg">
                Client Testimonial
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
