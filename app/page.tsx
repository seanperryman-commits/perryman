import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { CTASection } from "@/components/sections/CTASection";
import { ImageBreak } from "@/components/ui/ImageBreak";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <ValueProposition />
      <ImageBreak
        src="/images/engagements/panel-sxsw.jpeg"
        alt="Sean Perryman at SXSW AI Standards panel"
        objectPosition="center 40%"
      />
      <ServicesSection />
      <AboutPreview />
      <ImageBreak
        src="/images/engagements/panel-trustworthy-ai.jpeg"
        alt="Sean Perryman on Building Trustworthy AI panel at Paris AI Action Summit"
        objectPosition="center"
      />
      <NewsletterCTA />
      <CTASection />
    </>
  );
}
