"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Briefcase, UserCheck, ArrowRight, LucideIcon } from "lucide-react";
import { fadeInUp, staggerContainer, slideInRight } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

// Map icon strings to Lucide components
const iconMap: Record<string, LucideIcon> = {
  mic: Mic,
  briefcase: Briefcase,
  "user-check": UserCheck,
};

// Service descriptions for the cards
const serviceDescriptions: Record<string, string> = {
  "public-speaking":
    "Cutting through AI hype to deliver strategic insight—from keynotes at major conferences to executive briefings that audiences describe as immediately actionable.",
  "consulting":
    "Translating complex AI policy into business strategy. Governance frameworks, risk assessment, regulatory intelligence, and ethics that scale.",
  "coaching":
    "One-on-one executive coaching for leaders navigating AI strategy, governance decisions, and organizational transformation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header - Dark Navy */}
      <Section background="dark" padding="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-[length:var(--text-h1)] font-semibold text-text-on-dark"
          >
            Services
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            Strategic guidance for organizations navigating the intersection of
            AI innovation and responsible governance.
          </motion.p>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section background="light" padding="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.slug} variants={fadeInUp} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-xl bg-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-3 font-heading text-[length:var(--text-h3)] font-semibold text-text-primary">
                    {service.label}
                  </h3>
                  <p className="mb-6 flex-1 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
                    {serviceDescriptions[service.slug]}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent transition-transform group-hover:translate-x-1">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Approach Section */}
      <Section background="light" padding="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text - Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
            >
              A Practitioner&apos;s Perspective
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              Sean doesn&apos;t offer easy answers to hard questions. Instead, he
              provides frameworks for thinking through complexity, anticipating
              where regulation is headed, and making decisions that balance
              innovation with accountability.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              Whether you need a keynote that cuts through AI hype or strategic
              consulting on governance frameworks, Sean brings unusual
              breadth—policy expertise, strategic foresight, and hands-on
              implementation experience.
            </motion.p>
          </motion.div>

          {/* Blockquote - Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="relative"
          >
            <div className="rounded-2xl bg-background-dark/5 p-8">
              <blockquote className="font-heading text-[length:var(--text-h3)] italic leading-relaxed text-text-primary">
                &ldquo;Perfect solutions rarely exist, but better decisions
                always do.&rdquo;
              </blockquote>
              <cite className="mt-4 block text-[length:var(--text-body)] font-semibold text-text-secondary not-italic">
                — Sean Perryman
              </cite>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="xl" className="relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="services-cta-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-cta-grid)" />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-[length:var(--text-h1)] font-semibold text-white"
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-[length:var(--text-body)] text-white/70"
          >
            Whether you need strategic guidance on AI governance, executive
            education for your team, or a speaker who can make complex policy
            accessible, Sean brings a practitioner&apos;s perspective to every
            engagement.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <Link href="/contact">
              <Button size="lg">Start a Conversation</Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
