import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
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
      <ImageBreak
        src="/images/engagements/panel-sxsw.jpeg"
        alt="Sean Perryman at SXSW AI Standards panel"
        caption="SXSW"
      />
      <ServicesSection />
      <AboutPreview />
      <ImageBreak
        src="/images/engagements/panel-georgetown-ai.jpeg"
        alt="Sean Perryman at Georgetown AI Forum"
        caption="Georgetown AI Forum"
        objectPosition="center 11%"
      />
      <NewsletterCTA />
      <CTASection />
    </>
  );
}
