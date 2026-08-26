"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuMic, LuUsers, LuGlobe, LuLightbulb, LuArrowRight } from "react-icons/lu";
import { fadeInUp, staggerContainer, scaleUp } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  SPEAKING_ENGAGEMENTS,
  SPEAKING_TOPICS,
  SPEAKING_HERO,
  SPEAKING_SECTIONS,
} from "@/lib/content";

const iconMap = {
  Lightbulb: LuLightbulb,
  Globe: LuGlobe,
  Users: LuUsers,
  Mic: LuMic,
} as const;

export function SpeakingHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-end to-background-dark text-white">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex min-h-[70vh] flex-col items-center gap-12 py-24 lg:flex-row lg:items-center lg:py-0">
          {/* Text Content - Left Side */}
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
              {SPEAKING_HERO.subtitle}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h1)] font-bold leading-tight tracking-tight text-white"
            >
              {SPEAKING_HERO.headingLine1}
              <br />
              <span className="text-accent">{SPEAKING_HERO.headingAccent}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-lg leading-relaxed text-text-on-dark-muted"
            >
              {SPEAKING_HERO.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">{SPEAKING_HERO.ctaText}</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Image - Right Side */}
          <motion.div
            className="relative flex w-full flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-lg">
              {/* Main keynote image */}
              <div className="relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/engagements/keynote-featured.jpg"
                  alt="Sean Perryman delivering keynote"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
                {/* Overlay gradient for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating event badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-2 shadow-xl md:-bottom-4 md:left-0 md:translate-x-0 md:-ml-4 md:px-4 md:py-3">
                <p className="text-xs font-medium text-text-muted">Recent Keynote</p>
                <p className="font-heading font-semibold text-text-primary">
                  {SPEAKING_ENGAGEMENTS[0].event}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function EngagementGallery() {
  // Skip the first (featured) image since it's in the hero
  const galleryImages = SPEAKING_ENGAGEMENTS.slice(1);

  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            {SPEAKING_SECTIONS.gallery.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            {SPEAKING_SECTIONS.gallery.description}
          </p>
        </motion.div>

        {/* Photo Grid - Masonry-style with varying sizes */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((engagement, index) => (
            <motion.div
              key={engagement.src}
              variants={scaleUp}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"
                } overflow-hidden`}
              >
                <Image
                  src={engagement.src}
                  alt={engagement.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 600px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  }
                />
                {/* Hover overlay with event info */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {engagement.type}
                  </span>
                  <span className="font-heading text-lg font-semibold text-white">
                    {engagement.event}
                  </span>
                  <span className="text-sm text-white/70">{engagement.location}</span>
                </div>
              </div>

              {/* Always visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:hidden">
                <span className="font-heading text-sm font-semibold text-white">
                  {engagement.event}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export function SpeakingTopics() {
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
            {SPEAKING_SECTIONS.topics.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            {SPEAKING_SECTIONS.topics.description}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKING_TOPICS.map((topic) => {
            const Icon = iconMap[topic.iconName];
            return (
              <motion.div
                key={topic.title}
                variants={scaleUp}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {topic.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

export function SpeakingMain() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content - Left Side */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-center">
            {SPEAKING_SECTIONS.main.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`${index > 0 ? "mt-6" : ""} text-[length:var(--text-body)] leading-relaxed text-text-secondary`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Photo - Right Side */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[280px] md:max-w-sm lg:max-w-none">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/engagements/panel-iapp-privacy.jpeg"
                  alt="Sean Perryman at IAPP Privacy Summit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 384px, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-heading text-sm font-semibold text-white">
                    IAPP Privacy Summit
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

export function SpeakingCTA() {
  return (
    <Section background="light" padding="xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-4xl"
      >
        <div className="overflow-hidden rounded-2xl bg-background-dark shadow-2xl">
          <div className="grid lg:grid-cols-5">
            {/* Image side - takes 2 of 5 columns */}
            <div className="relative h-32 overflow-hidden sm:h-40 lg:col-span-2 lg:h-auto">
              <Image
                src="/images/engagements/panel-trustworthy-ai.jpeg"
                alt="Sean Perryman on Building Trustworthy AI panel"
                fill
                className="object-cover object-[30%_center]"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>

            {/* Content side - takes 3 of 5 columns */}
            <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-[length:var(--text-h2)] font-semibold text-white"
              >
                {SPEAKING_SECTIONS.cta.heading}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mt-4 text-[length:var(--text-body)] text-text-on-dark-muted"
              >
                {SPEAKING_SECTIONS.cta.description}
              </motion.p>

              <motion.ul
                variants={fadeInUp}
                className="mt-6 space-y-3 text-sm text-text-on-dark-muted"
              >
                {SPEAKING_SECTIONS.cta.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <LuArrowRight className="h-4 w-4 text-accent" />
                    {bullet}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp} className="mt-8">
                <Link href="/contact">
                  <Button size="lg">{SPEAKING_SECTIONS.cta.buttonText}</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export function SpeakingContent() {
  return (
    <>
      <SpeakingHero />
      <SpeakingMain />
      <SpeakingCTA />
    </>
  );
}
