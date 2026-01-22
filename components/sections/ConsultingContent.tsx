"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Compass,
  Scale,
  GraduationCap,
  Users,
  Presentation,
  CheckCircle,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleUp, slideInLeft, slideInRight } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// Client types
const clientTypes = [
  {
    type: "Fortune 500",
    description: "Navigating AI regulation and building enterprise governance",
  },
  {
    type: "Startups",
    description: "Building responsible systems from the ground up",
  },
  {
    type: "Academic Institutions",
    description: "Developing curriculum and research frameworks",
  },
];

// 7 Core Offerings from client copy
const offerings = [
  {
    icon: Shield,
    title: "Building AI Governance",
    description:
      "Move from compliance checkboxes to genuine accountability. Governance frameworks that combine regulatory foresight, operational design, and stakeholder engagement.",
  },
  {
    icon: Target,
    title: "Strategy & Risk Assessment",
    description:
      "Understanding where AI creates value and where it creates liability—and how to tell the difference. Frameworks that help your organization move forward confidently.",
  },
  {
    icon: Compass,
    title: "Policy Translation",
    description:
      "Making sense of the global patchwork of AI regulations—from the EU AI Act to state-level requirements. Position ahead of compliance deadlines rather than scrambling.",
  },
  {
    icon: Scale,
    title: "Ethics Frameworks That Scale",
    description:
      "Building approaches to algorithmic fairness and responsible AI that work in production environments, not just PowerPoint decks.",
  },
  {
    icon: GraduationCap,
    title: "Executive Education & Workshops",
    description:
      "Equipping leadership teams, product managers, and technical staff with shared language and strategic frameworks tailored to your challenges.",
  },
  {
    icon: Users,
    title: "Civil Rights & Impact Assessments",
    description:
      "Identifying potential disparate impacts and algorithmic harms before they become headlines. Rigorous analysis paired with practical remediation strategies.",
  },
  {
    icon: Presentation,
    title: "Expert Briefings",
    description:
      "Educational talks tailored to your audience—whether board members, technical teams, or industry conferences. Complex topics made digestible and actionable.",
  },
];

// Featured venues
const featuredVenues = [
  "Uber",
  "U.S. Congress",
  "Vanderbilt Law",
  "CDT Advisory Board",
];

// Case study outcomes
const outcomes = [
  "First EU Algorithmic Transparency Report",
  "Company-wide Civil Rights Assessment",
  "Operational fairness frameworks",
  "Regulatory-ready governance",
];

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
              Strategic Advisory
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h1)] font-bold leading-tight tracking-tight text-white"
            >
              Translating AI Policy
              <br />
              <span className="text-accent">Into Business Strategy</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-lg leading-relaxed text-text-on-dark-muted"
            >
              Strategic clarity for organizations navigating the messy reality of
              AI implementation—where ethics, regulation, competitive advantage,
              and risk all collide.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">Start a Conversation</Button>
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
              <div className="flex flex-wrap gap-6">
                {clientTypes.map((client) => (
                  <div key={client.type} className="max-w-[180px]">
                    <span className="font-heading font-semibold text-white">
                      {client.type}
                    </span>
                    <p className="mt-1 text-xs text-text-on-dark-muted">
                      {client.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex flex-1 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
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

              <div className="absolute -bottom-4 -left-4 rounded-lg bg-white px-4 py-3 shadow-xl">
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
              What You Get
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              Sean works with organizations navigating the messy reality of AI
              implementation—where ethics, regulation, competitive advantage, and
              risk all collide. His approach combines regulatory insight, strategic
              thinking, and practical experience.
            </p>

            <div className="mt-8 space-y-6">
              <motion.div variants={fadeInUp} className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
                <h3 className="font-heading font-semibold text-text-primary">
                  Ethical Clarity in Ambiguous Situations
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Sean specializes in the gray areas—the ethical questions that
                  don&apos;t have obvious answers. He helps organizations think through
                  tradeoffs and make defensible decisions when there&apos;s no perfect option.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
                <h3 className="font-heading font-semibold text-text-primary">
                  Regulatory Foresight, Not Just Compliance
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Understanding what&apos;s coming next in AI policy—and positioning
                  your organization to adapt proactively. Sean tracks regulatory
                  developments globally and translates them into strategic implications.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
                <h3 className="font-heading font-semibold text-text-primary">
                  Implementation Experience, Not Just Theory
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Sean doesn&apos;t just advise—he&apos;s built these systems. From creating
                  transparency frameworks at scale to designing academic programs,
                  he brings a practitioner&apos;s perspective.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="flex items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/engagements/panel-georgetown.jpeg"
                alt="Sean Perryman at Georgetown Law"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading text-sm font-semibold text-white">
                  Georgetown Law AI Policy Forum
                </p>
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
            Core Offerings
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            Sean helps organizations move from compliance checkboxes to genuine
            accountability—combining regulatory foresight, operational design,
            and stakeholder engagement.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.slice(0, 6).map((offering) => (
            <motion.div
              key={offering.title}
              variants={scaleUp}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <offering.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {offering.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 7th offering as a full-width card */}
        {(() => {
          const SeventhIcon = offerings[6].icon;
          return (
            <motion.div
              variants={scaleUp}
              className="mt-6 rounded-xl bg-white p-6 shadow-sm md:flex md:items-center md:gap-6"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:mb-0">
                <SeventhIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {offerings[6].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {offerings[6].description}
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
              Featured Work
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-heading text-[length:var(--text-h2)] font-semibold text-white"
            >
              Uber AI Transparency Report
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[length:var(--text-body)] text-text-on-dark-muted"
            >
              As Global Head of AI & Fairness Policy at Uber, Sean created the
              company&apos;s first EU Algorithmic Transparency Report—a comprehensive
              public accounting of how algorithms shape platform decisions. As a
              core team member on Uber&apos;s first Civil Rights Assessment, he helped
              translate abstract principles of fairness into concrete practices.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-white">{outcome}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm italic text-text-on-dark-muted"
            >
              — Uber Technologies
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
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary"
        >
          Whether you need strategic guidance on AI governance, executive education
          for your team, or help making complex policy accessible, Sean brings a
          practitioner&apos;s perspective to every engagement.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Start a Conversation</Button>
          </Link>
          <Link href="/services/public-speaking">
            <Button variant="secondary" size="lg">
              View Speaking
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
      {/* <CredibilityStrip /> */}
      <ProcessSection />
      <OfferingsSection />
      {/* <CaseStudySection /> */}
      <ConsultingCTA />
    </>
  );
}
