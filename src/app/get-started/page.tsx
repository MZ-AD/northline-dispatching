import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GetStartedContent } from "@/components/get-started/GetStartedContent";

export const metadata: Metadata = {
  title: "Get Started | Baywood Dispatch",
  description:
    "Apply to work with Baywood Dispatch. We partner exclusively with owner-operators under their own MC authority.",
};

export default function GetStartedPage() {
  return (
    <>
      <Header variant="page" />
      <main className="min-w-0 overflow-x-clip bg-brand-mist pt-[80px] sm:pt-[84px] md:pt-24">
        <GetStartedContent />
      </main>
      <Footer />
    </>
  );
}
