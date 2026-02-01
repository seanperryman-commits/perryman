"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuShield,
  LuTarget,
  LuCompass,
  LuScale,
  LuGraduationCap,
  LuUsers,
  LuPresentation,
  LuCircleCheck,
} from "react-icons/lu";
import { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  CONSULTING_CLIENT_TYPES,
  CONSULTING_OFFERINGS,
  CONSULTING_OUTCOMES,
  CONSULTING_HERO,
  CONSULTING_SECTIONS,
} from "@/lib/content";

const iconMap = {
  Shield: LuShield,
  Target: LuTarget,
  Compass: LuCompass,
  Scale: LuScale,
  GraduationCap: LuGraduationCap,
  Users: LuUsers,
  Presentation: LuPresentation,
} as const;

function ConsultingHero() {
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
              {CONSULTING_HERO.subtitle}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h1)] font-bold leading-tight tracking-tight text-white"
            >
              {CONSULTING_HERO.headingLine1}
              <br />
              <span className="text-accent">{CONSULTING_HERO.headingAccent}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-lg leading-relaxed text-text-on-dark-muted"
            >
              {CONSULTING_HERO.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">{CONSULTING_HERO.ctaText}</Button>
              </Link>
            </motion.div>

            {/* Client types instead of stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 border-t border-white/10 pt-8"
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-text-on-dark-muted">
                Who I Work With
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CONSULTING_CLIENT_TYPES.map((client) => (
                  <div key={client.type} className="max-w-[200px]">
                    <span className="font-heading font-semibold text-white">
                      {client.type}
                    </span>
                    <p className="mt-1 text-sm text-text-on-dark-muted">
                      {client.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex w-full flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-lg">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/engagements/panel-trustworthy-ai.jpeg"
                  alt="Sean Perryman at AI Action Summit, Paris"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 hidden rounded-lg bg-white px-4 py-3 shadow-xl md:block">
                <p className="text-xs font-medium text-text-muted">
                  AI Action Summit
                </p>
                <p className="font-heading font-semibold text-text-primary">
                  Paris, France
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={slideInLeft}>
            <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
              {CONSULTING_SECTIONS.process.heading}
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              {CONSULTING_SECTIONS.process.description}
            </p>

            <div className="mt-8 space-y-6">
              {CONSULTING_SECTIONS.process.callouts.map((callout) => (
                <motion.div key={callout.title} variants={fadeInUp} className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
                  <h3 className="font-heading font-semibold text-text-primary">
                    {callout.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {callout.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[280px] md:max-w-sm lg:max-w-none">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/engagements/panel-georgetown-ai.jpeg"
                  alt="Sean Perryman at Georgetown AI Policy Forum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 384px, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-heading text-sm font-semibold text-white">
                    Georgetown Law AI Policy Forum
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

function OfferingsSection() {
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
            {CONSULTING_SECTIONS.offerings.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            {CONSULTING_SECTIONS.offerings.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONSULTING_OFFERINGS.slice(0, 6).map((offering) => {
            const Icon = iconMap[offering.iconName];
            return (
              <motion.div
                key={offering.title}
                variants={scaleUp}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {offering.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 7th offering as a full-width card */}
        {(() => {
          const seventh = CONSULTING_OFFERINGS[6];
          const SeventhIcon = iconMap[seventh.iconName];
          return (
            <motion.div
              variants={scaleUp}
              className="group mt-6 rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:flex md:items-center md:gap-6"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white md:mb-0">
                <SeventhIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {seventh.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {seventh.description}
                </p>
              </div>
            </motion.div>
          );
        })()}
      </motion.div>
    </Section>
  );
}

function CaseStudySection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl"
      >
        <div className="overflow-hidden rounded-2xl bg-background-dark">
          <div className="p-8 lg:p-12">
            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium uppercase tracking-widest text-accent"
            >
              {CONSULTING_SECTIONS.caseStudy.label}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-heading text-[length:var(--text-h2)] font-semibold text-white"
            >
              {CONSULTING_SECTIONS.caseStudy.heading}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[length:var(--text-body)] text-text-on-dark-muted"
            >
              {CONSULTING_SECTIONS.caseStudy.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {CONSULTING_OUTCOMES.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <LuCircleCheck className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-white">{outcome}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm italic text-text-on-dark-muted"
            >
              {CONSULTING_SECTIONS.caseStudy.attribution}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function ConsultingCTA() {
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
          {CONSULTING_SECTIONS.cta.heading}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary"
        >
          {CONSULTING_SECTIONS.cta.description}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">{CONSULTING_SECTIONS.cta.primaryButtonText}</Button>
          </Link>
          <Link href="/services/public-speaking">
            <Button variant="secondary" size="lg">
              {CONSULTING_SECTIONS.cta.secondaryButtonText}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}

export function ConsultingContent() {
  return (
    <>
      <ConsultingHero />
      <ProcessSection />
      <OfferingsSection />
      {/*
        CASE STUDY SECTION (currently hidden)
        =====================================
        This section showcases real work (Uber AI Transparency Report) and is ready to use.
        The content is already defined in lib/content.ts under CONSULTING_SECTIONS.caseStudy.

        To re-enable:
        1. Uncomment the line below: <CaseStudySection />
        2. That's it! The content and styling are already complete.

        The section displays:
        - Featured work label
        - Uber AI Transparency Report case study
        - Key outcomes list
        - Attribution
      */}
      {/* <CaseStudySection /> */}
      <ConsultingCTA />
    </>
  );
}
