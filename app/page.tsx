import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
// import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <ServicesSection />
      <AboutPreview />
      {/* <TestimonialSection /> */}
      <NewsletterCTA />
      <CTASection />
    </>
  );
}
