import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { CTASection } from "@/components/sections/CTASection";
import { ImageBreak } from "@/components/ui/ImageBreak";
// TESTIMONIAL SECTION (available but not imported)
// import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ImageBreak
        src="/images/engagements/panel-ai-standards.jpeg"
        alt="Sean Perryman speaking at AI Standards and Evaluations panel"
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
      {/*
        TESTIMONIAL SECTION (currently hidden)
        ======================================
        This section displays a client testimonial quote. The component exists and works,
        but the content is currently PLACEHOLDER data in lib/content.ts (TESTIMONIAL object).

        To enable:
        1. Uncomment the import at the top of this file
        2. Replace placeholder content in lib/content.ts (look for TESTIMONIAL):
           - quote: Real testimonial text
           - author: Real name
           - role: Their title
           - company: Their organization
        3. Add <TestimonialSection /> below (between NewsletterCTA and CTASection works well)

        Note: Current placeholder shows "J. Smith, Technology Executive, Enterprise Client"
      */}
      {/* <TestimonialSection /> */}
      <CTASection />
    </>
  );
}
