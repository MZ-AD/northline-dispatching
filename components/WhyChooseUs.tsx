import Image from "next/image";
import { Check } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Badge } from "@/components/ui/badge";

const benefits = [
  "Higher paying loads on average",
  "A dedicated dispatcher who knows your preferences",
  "Absolutely no forced dispatch — you are the boss",
  "All paperwork and administrative tasks handled",
  "Total focus on driving and safety",
  "24/7 support while you're on the road",
  "Consistent lanes and reliable freight",
  "Reduced deadhead miles",
];

export function WhyChooseUs() {
  return (
    <section id="benefits" className="bg-[#0B1C2E] py-20 sm:py-28">
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="mb-4">The Advantage</Badge>
            <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Why Drivers{" "}
              <span className="text-[#F17A28]">Choose Us</span>
            </h2>
            <p className="mt-6 text-lg text-white/70">
              We aren&apos;t just finding loads; we&apos;re building a
              profitable business together. Our success is directly tied to your
              success.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F17A28]/20">
                    <Check className="h-3 w-3 text-[#F17A28]" />
                  </span>
                  <span className="text-sm text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border-2 border-[#F17A28]">
              <Image
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80"
                alt="Smiling truck driver"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-white/20 bg-[#0B1C2E]/95 p-5 backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
              <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                Meet Your Partner
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Our dispatchers work strictly for you, acting as your personal
                agent in the freight market.
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
