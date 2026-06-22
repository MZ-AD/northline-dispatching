import Image from "next/image";
import { Play } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";

export function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0b1219] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 0% 0%, rgba(160, 75, 35, 0.28) 0%, rgba(11, 18, 25, 0) 58%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='0.75' fill='%23ffffff'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <SiteContainer className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block -skew-x-12 bg-[#FF6B00] px-4 py-1 sm:px-5">
            <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
              See Inside
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Watch How We{" "}
            <span className="text-[#FF6B00]">Scale</span> Your Business
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:max-w-3xl sm:text-base md:text-lg">
            Take 90 seconds to see exactly how our dedicated dispatchers operate
            to keep your trucks moving and your revenue growing.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
            alt="Video thumbnail — truck driver in cab"
            fill
            className="object-cover"
          />
          <button
            type="button"
            aria-label="Play showcase video"
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/50"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F17A28] shadow-xl">
              <Play className="ml-1 h-9 w-9 fill-white text-white" />
            </span>
          </button>
        </div>
      </SiteContainer>
    </section>
  );
}
