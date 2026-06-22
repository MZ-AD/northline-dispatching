import { Star } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";

const testimonials = [
  {
    quote:
      "I was about to sell my truck before I found these guys. Now I'm netting $2k more a week and I actually get to see my family on the weekends. Best decision I ever made.",
    name: "Marcus T.",
    title: "Owner-Operator (Dry Van)",
  },
  {
    quote:
      "Having a dedicated dispatcher who actually fights for my rates changed everything. They handle all the annoying paperwork so I can just focus on expanding my fleet.",
    name: "David R.",
    title: "Fleet Owner (3 Trucks)",
  },
  {
    quote:
      "No forced dispatch is real here. If I don't like a load, we don't take it. But honestly, the freight they find is so good I rarely ever turn it down. Highly recommended.",
    name: "Michael T.",
    title: "Independent Driver (Flatbed)",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-[#FF6B00] text-[#FF6B00]"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#F9FAFB] py-20 sm:py-28">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block -skew-x-12 bg-[#0B3C5D] px-5 py-2">
            <span className="font-display inline-block skew-x-12 text-xs font-bold uppercase tracking-tighter text-white sm:text-sm">
              Proven Results
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tighter text-[#111827] sm:text-4xl lg:text-5xl">
            Drivers Are Making{" "}
            <span className="text-[#FF6B00]">More Money</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:max-w-3xl sm:text-base md:text-lg">
            Don&apos;t just take our word for it. Here&apos;s what other
            independent drivers and fleet owners have to say about partnering
            with us.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col border-t-4 border-[#FF6B00] bg-white p-8 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] sm:p-10"
            >
              <StarRating />

              <blockquote className="mt-6 flex-1 text-base italic leading-relaxed text-[#374151] sm:mt-7 sm:text-[17px] md:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-8 border-t border-[#E5E7EB] pt-5">
                <p className="text-base font-bold uppercase tracking-wide text-[#0B3C5D] sm:text-lg">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm font-normal uppercase tracking-wide text-[#FF6B00] sm:text-base">
                  {testimonial.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
