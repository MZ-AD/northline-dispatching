import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ProblemSection } from "@/components/ProblemSection";
import { ServiceGrid } from "@/components/ServiceGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-w-0 overflow-x-clip">
        <Hero />
        <StatsBar />
        <ProblemSection />
        <ServiceGrid />
        <WhyChooseUs />
        <ProcessSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
