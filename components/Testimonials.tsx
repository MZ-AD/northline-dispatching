import { Star } from "lucide-react";
import { SiteContainer } from "@/components/SiteContainer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
          className="h-4 w-4 fill-[#F17A28] text-[#F17A28]"
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
          <Badge variant="navy" className="mb-4">
            Proven Results
          </Badge>
          <h2 className="text-3xl font-black uppercase leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Drivers Are Making{" "}
            <span className="text-[#F17A28]">More Money</span>
          </h2>
          <p className="mt-6 text-lg text-[#4B5563]">
            Don&apos;t just take our word for it. Here&apos;s what other
            independent drivers and fleet owners have to say about partnering
            with us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-gray-200 bg-white"
            >
              <CardContent className="flex h-full flex-col p-6">
                <StarRating />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#4B5563]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-bold text-[#F17A28]">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-wide text-[#4B5563]">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
