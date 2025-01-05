import { Navbar } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { Pricing } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServiceSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <div className="h-[3000px] space-y-10">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ProcessSection />
      <WorkSection />
      <Pricing />
    </div>
  );
}
