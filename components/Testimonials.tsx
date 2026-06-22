import { Star } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";

const testimonials = [
  {
    quote:
      "Baywood takes a lot of stress off my plate. They handle the load planning, paperwork, and communication so I can stay focused on the road. The whole team has been great from day one.",
    name: "James R.",
    initials: "JR",
    role: "Owner-Operator • Dry Van",
  },
  {
    quote:
      "What I like most about Baywood is how reliable they are. I never have to chase anyone down for updates, and they always keep things moving smoothly. It's been a great experience working with them.",
    name: "Shawn M.",
    initials: "SM",
    role: "Owner-Operator • Reefer",
  },
  {
    quote:
      "Baywood feels more like a partner than just a dispatch company. They're easy to work with, always professional, and genuinely want to see carriers succeed. I highly recommend them.",
    name: "Chris W.",
    initials: "CW",
    role: "Owner-Operator • Flatbed",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-brand-aqua text-brand-aqua sm:h-5 sm:w-5"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-brand-mist py-20 sm:py-28">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block -skew-x-12 bg-brand-navy px-4 py-1 sm:px-5">
            <span className="font-display inline-block skew-x-12 text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-white sm:text-xs md:text-sm">
              Proven Results
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-brand-slate sm:text-4xl lg:text-5xl">
            Drivers Are Making{" "}
            <span className="text-brand-aqua">More Money</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-brand-navy sm:max-w-3xl sm:text-base md:text-lg">
            Don&apos;t just take our word for it. Here&apos;s what other
            independent drivers and fleet owners have to say about partnering
            with us.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl bg-brand-aqua/[0.08] p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,19,43,0.1)] sm:p-9"
            >
              <StarRating />

              <blockquote className="mt-5 flex-1 text-sm italic leading-relaxed text-brand-navy sm:mt-6 sm:text-[15px] md:text-base">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-base font-bold text-brand-slate sm:text-[17px]">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-sm text-brand-navy/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
