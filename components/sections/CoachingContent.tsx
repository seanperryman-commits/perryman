/**
 * ⚠️ CONTENT AUDIT WARNING ⚠️
 *
 * This entire Executive Coaching service page contains fabricated content.
 * Executive Coaching is NOT confirmed as a real service offering in client copy (docs/copy.md).
 *
 * ACTION REQUIRED: Get client approval to keep this page OR remove entirely.
 *
 * Fabricated content on this page:
 * - "500+ Leaders Coached" stat (line ~115)
 * - "C-Suite & Board Level" stat (line ~123)
 * - "15+ Years Experience" stat (line ~131)
 * - All coaching benefits (benefits array)
 * - All coaching areas (coachingAreas array)
 * - Venues: Google, World Economic Forum (NO evidence in images or copy)
 * - Testimonial (placeholder duplicate from mockupData)
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Handshake,
  Clock,
  Award,
  ArrowRight,
  Quote,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// TODO: ❌ FABRICATED - These benefits need client approval or removal
// Coaching benefits
const benefits = [
  {
    icon: Brain,
    title: "Strategic Clarity",
    description:
      "Develop frameworks for evaluating AI opportunities and risks in your specific organizational context.",
  },
  {
    icon: Handshake,
    title: "Stakeholder Navigation",
    description:
      "Build confidence communicating AI strategy to boards, regulators, and executive teams.",
  },
  {
    icon: Clock,
    title: "Flexible Engagement",
    description:
      "Coaching tailored to your schedule—from intensive deep-dives to ongoing monthly advisory.",
  },
  {
    icon: Award,
    title: "Confidential Partnership",
    description:
      "A trusted space to explore challenges, test ideas, and prepare for high-stakes decisions.",
  },
];

// TODO: ❌ FABRICATED - These coaching areas need client approval or removal
// What coaching covers
const coachingAreas = [
  "AI strategy development and validation",
  "Board presentation preparation",
  "Regulatory navigation and compliance",
  "Team building and talent decisions",
  "Vendor evaluation and partnerships",
  "Crisis response and communications",
];

// TODO: ❌ "Google" and "World Economic Forum" have NO evidence - REMOVE
// Featured venues (shared) - only first 4 are image-verified
const featuredVenues = [
  "SXSW", // ✅ Verified: panel-sxsw.jpeg
  "Georgetown Law", // ✅ Verified: panel-georgetown-ai.jpeg
  "IAPP Privacy Summit", // ✅ Verified: panel-iapp-privacy.jpeg
  "POLITICO", // ✅ Verified: panel-politico.jpeg
  // "Google", // ❌ REMOVED - No evidence
  // "World Economic Forum", // ❌ REMOVED - No evidence
];

function CoachingHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-end to-background-dark text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex min-h-[70vh] flex-col items-center gap-12 py-24 lg:flex-row lg:items-center lg:py-0">
          <motion.div
            className="flex flex-1 flex-col justify-center lg:py-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-base font-medium text-accent"
            >
              Executive Coaching
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h1)] font-bold leading-tight tracking-tight text-white"
            >
              A Trusted Advisor
              <br />
              <span className="text-accent">In Your Corner</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-lg leading-relaxed text-text-on-dark-muted"
            >
              Confidential, one-on-one guidance for leaders navigating the complex
              intersection of AI, policy, and organizational strategy.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">Start a Conversation</Button>
              </Link>
            </motion.div>

            {/* TODO: ❌ ALL STATS BELOW ARE FABRICATED - Remove or get client verification */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <span className="block font-heading text-3xl font-bold text-white">
                  500+ {/* ❌ FABRICATED */}
                </span>
                <span className="text-sm text-text-on-dark-muted">
                  Leaders Coached
                </span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-white">
                  C-Suite {/* ❌ FABRICATED */}
                </span>
                <span className="text-sm text-text-on-dark-muted">
                  & Board Level
                </span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-white">
                  15+ {/* ❌ FABRICATED */}
                </span>
                <span className="text-sm text-text-on-dark-muted">
                  Years Experience
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-md">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/headshots/sean-formal.jpg"
                  alt="Sean Perryman"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  return (
    <section className="border-y border-white/10 bg-background-dark py-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl px-6 text-center md:px-8"
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-text-on-dark-muted">
          Trusted By Leaders At
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {featuredVenues.map((venue) => (
            <span
              key={venue}
              className="font-heading text-lg font-semibold text-white/80 transition-colors hover:text-white"
            >
              {venue}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ApproachSection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={slideInLeft} className="flex items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/engagements/panel-sxsw-closeup.jpeg"
                alt="Sean Perryman in conversation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="flex flex-col justify-center">
            <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
              Leadership Is Lonely at the Top
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              The AI landscape moves fast, and the decisions you face don&apos;t
              come with easy answers. You need a thought partner who understands
              both the technology and the organizational dynamics—someone who can
              help you think clearly when the stakes are high.
            </p>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              Executive coaching with Sean provides that confidential sounding
              board. Together, we&apos;ll build your AI fluency, pressure-test
              your strategies, and prepare you for the conversations that matter.
            </p>

            <div className="mt-8 rounded-xl bg-background-alt p-6">
              <h3 className="font-heading font-semibold text-text-primary">
                Coaching engagements typically cover:
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {coachingAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-text-secondary">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section background="light" padding="lg" className="bg-background-alt">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            What You&apos;ll Gain
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            More than advice—a partnership that builds your capacity to lead
            confidently through AI transformation.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={scaleUp}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// TODO: ❌ PLACEHOLDER TESTIMONIAL - Need real client testimonial from Sean
function TestimonialSection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl"
      >
        <div className="overflow-hidden rounded-2xl bg-background-dark p-8 lg:p-12">
          <Quote className="h-12 w-12 text-accent/30" />

          {/* ❌ PLACEHOLDER - This is duplicate of mockupData testimonial */}
          <motion.blockquote
            variants={fadeInUp}
            className="mt-6 font-heading text-xl leading-relaxed text-white lg:text-2xl"
          >
            &ldquo;Sean&apos;s guidance was instrumental in shaping our AI
            governance strategy. His ability to translate complex policy
            considerations into actionable frameworks helped us move confidently
            into AI adoption while maintaining stakeholder trust.&rdquo;
          </motion.blockquote>

          <motion.div variants={fadeInUp} className="mt-8">
            {/* ❌ PLACEHOLDER - Need real name/company */}
            <p className="font-heading font-semibold text-white">
              Technology Executive
            </p>
            <p className="text-sm text-text-on-dark-muted">
              Fortune 500 Company
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

function CoachingCTA() {
  return (
    <Section background="light" padding="xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
        >
          Ready to Lead with Confidence?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary"
        >
          Let&apos;s start with a conversation about your challenges and goals.
          No commitment—just an honest discussion about whether coaching is the
          right fit.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Start a Conversation</Button>
          </Link>
          <Link href="/services/business-consulting">
            <Button variant="secondary" size="lg">
              View Consulting
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}

export function CoachingContent() {
  return (
    <>
      <CoachingHero />
      <CredibilityStrip />
      <ApproachSection />
      <BenefitsSection />
      <TestimonialSection />
      <CoachingCTA />
    </>
  );
}
