"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Users, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleUp } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// Engagement photos with event context
const engagements = [
  {
    src: "/images/engagements/keynote-bogota.jpeg",
    alt: "Sean Perryman keynote in Bogota, Colombia",
    event: "AI Leadership Summit",
    location: "Bogota, Colombia",
    type: "Keynote",
    featured: true,
  },
  {
    src: "/images/engagements/panel-sxsw.jpeg",
    alt: "Sean Perryman at SXSW AI Standards panel",
    event: "SXSW",
    location: "Austin, TX",
    type: "Panel",
  },
  {
    src: "/images/engagements/panel-politico.jpeg",
    alt: "Sean Perryman at POLITICO AI Summit",
    event: "POLITICO AI Summit",
    location: "Washington, DC",
    type: "Panel",
  },
  {
    src: "/images/engagements/panel-iapp-privacy.jpeg",
    alt: "Sean Perryman at IAPP Privacy Summit",
    event: "IAPP Privacy Summit",
    location: "Washington, DC",
    type: "Panel",
  },
  {
    src: "/images/engagements/panel-georgetown-ai.jpeg",
    alt: "Sean Perryman at Georgetown AI Forum",
    event: "Georgetown AI Forum",
    location: "Washington, DC",
    type: "Panel",
  },
  {
    src: "/images/engagements/panel-chci-tech.jpeg",
    alt: "Sean Perryman at CHCI Tech Summit",
    event: "CHCI Tech Summit",
    location: "Washington, DC",
    type: "Panel",
  },
];

// Speaking topics
// TODO: Topic titles are reasonable; descriptions are generic filler - consider getting real descriptions from client
const topics = [
  {
    icon: Lightbulb,
    title: "AI Governance & Ethics",
    description:
      "Frameworks for responsible AI deployment that balance innovation with accountability.",
  },
  {
    icon: Globe,
    title: "Global AI Policy",
    description:
      "Navigating the evolving international regulatory landscape and its implications for business.",
  },
  {
    icon: Users,
    title: "Leadership in the AI Era",
    description:
      "Preparing executive teams to make confident decisions about AI strategy and adoption.",
  },
  {
    icon: Mic,
    title: "The Future of Work",
    description:
      "How AI will reshape industries and what leaders need to know to stay ahead.",
  },
];

// Featured events/venues for credibility
const featuredVenues = [
  "Vanderbilt AI Governance Symposium",
  "Alianza In AI Conference",
  "SXSW",
  "AI Action Summit, Paris",
];

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
              Speaking & Engagements
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h1)] font-bold leading-tight tracking-tight text-white"
            >
              Cutting Through
              <br />
              <span className="text-accent">AI Hype</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-lg leading-relaxed text-text-on-dark-muted"
            >
              Sean translates dense policy into strategic insight—helping leaders
              understand not just what&apos;s coming, but what to do about it.
              His talks connect technical developments to business strategy,
              regulatory trends to competitive positioning.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">Book Sean for Your Event</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Image - Right Side */}
          <motion.div
            className="relative flex flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-lg">
              {/* Main keynote image */}
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
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
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-white px-4 py-3 shadow-xl">
                <p className="text-xs font-medium text-text-muted">Recent Keynote</p>
                <p className="font-heading font-semibold text-text-primary">
                  AI Leadership Summit
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
  const galleryImages = engagements.slice(1);

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
            Recent Engagements
          </h2>
          <p className="mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            From policy forums to corporate summits, Sean brings clarity to complex
            AI topics across diverse audiences.
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
            Speaking Topics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            Every presentation is tailored to your audience, but these themes form
            the foundation of Sean&apos;s expertise.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <motion.div
              key={topic.title}
              variants={scaleUp}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <topic.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export function CredibilityStrip() {
  return (
    <Section background="dark" padding="md">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center"
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-text-on-dark-muted">
          Featured At
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
            <p className="text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              Sean Perryman cuts through AI hype and regulatory confusion to deliver
              strategic insight leaders can actually use. As a sought-after speaker
              at conferences, executive briefings, and academic forums worldwide, he
              translates dense policy into strategic insight—helping leaders understand
              not just what&apos;s coming, but what to do about it.
            </p>

            <p className="mt-6 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              His talks connect technical developments to business strategy, regulatory
              trends to competitive positioning, and ethical questions to practical decisions.
            </p>

            <p className="mt-6 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              From keynoting major tech conferences to leading executive workshops, Sean
              delivers content that audiences describe as &ldquo;immediately actionable.&rdquo;
            </p>
          </motion.div>

          {/* Photo - Right Side */}
          <motion.div variants={fadeInUp} className="flex items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/engagements/panel-chci-tech.jpeg"
                alt="Sean Perryman at CHCI Tech Summit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading text-sm font-semibold text-white">
                  CHCI Tech Summit
                </p>
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
            <div className="relative hidden overflow-hidden lg:col-span-2 lg:block">
              <Image
                src="/images/engagements/panel-igg23.jpeg"
                alt="Sean Perryman at international governance forum"
                fill
                className="scale-110 object-cover object-[60%_center]"
                sizes="(max-width: 1024px) 0vw, 320px"
              />
            </div>

            {/* Content side - takes 3 of 5 columns */}
            <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-[length:var(--text-h2)] font-semibold text-white"
              >
                Book Sean for Your Event
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mt-4 text-[length:var(--text-body)] text-text-on-dark-muted"
              >
                Expert briefings and educational talks tailored to your
                audience—whether board members, technical teams, or industry
                conferences. Complex topics made digestible and actionable.
              </motion.p>

              <motion.ul
                variants={fadeInUp}
                className="mt-6 space-y-3 text-sm text-text-on-dark-muted"
              >
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-accent" />
                  Keynotes that audiences call &ldquo;immediately actionable&rdquo;
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-accent" />
                  Executive workshops and team education
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-accent" />
                  Panel moderation and participation
                </li>
              </motion.ul>

              <motion.div variants={fadeInUp} className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Inquire About Availability</Button>
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
