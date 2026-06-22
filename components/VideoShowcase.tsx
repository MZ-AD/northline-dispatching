import Image from "next/image";
import { Play } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Badge } from "@/components/ui/badge";

export function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0B1C2E] py-20 sm:py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(30deg, #F17A28 12%, transparent 12.5%, transparent 87%, #F17A28 87.5%, #F17A28), linear-gradient(150deg, #F17A28 12%, transparent 12.5%, transparent 87%, #F17A28 87.5%, #F17A28), linear-gradient(30deg, #F17A28 12%, transparent 12.5%, transparent 87%, #F17A28 87.5%, #F17A28), linear-gradient(150deg, #F17A28 12%, transparent 12.5%, transparent 87%, #F17A28 87.5%, #F17A28)",
          backgroundSize: "80px 140px",
        }}
      />

      <SiteContainer className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">See Inside</Badge>
          <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Watch How We{" "}
            <span className="text-[#F17A28]">Scale Your Business</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
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
