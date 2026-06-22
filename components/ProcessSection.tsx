import { SiteContainer } from "@/components/SiteContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="navy" className="mb-4">
            Onboarding
          </Badge>
          <h2 className="text-3xl font-black uppercase leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Simple{" "}
            <span className="text-[#F17A28]">3-Step Process</span>
          </h2>
          <p className="mt-6 text-lg text-[#4B5563]">
            Getting started is fast and easy. We can have you onboarded and
            running your first high-paying load within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="relative border-gray-200">
              <CardContent className="p-8">
                <span className="text-5xl font-black text-gray-100">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="xl">Book a Free Call</Button>
        </div>
      </SiteContainer>
    </section>
  );
}
