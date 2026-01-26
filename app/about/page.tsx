"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Users } from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/styles/animations";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ABOUT_CONTENT, HERO_CONTENT, CAREER_HIGHLIGHTS } from "@/lib/content";

const iconMap = {
  Briefcase,
  Users,
  GraduationCap,
  Award,
} as const;

export default function AboutPage() {
  const about = ABOUT_CONTENT;
  const hero = HERO_CONTENT;

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
            About Sean
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            Bridging the gap between technological innovation and responsible
            governance to help organizations harness AI&apos;s potential.
          </motion.p>
        </motion.div>
      </Section>

      {/* Bio Section - Photo Left, Text Right */}
      <Section background="light" padding="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo - Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            variants={slideInLeft}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={about.image}
                alt={`${hero.name} portrait`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            variants={staggerContainer}
            className="lg:py-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
            >
              Background
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              {about.bio}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              His career spans Capitol Hill, Silicon Valley, and law school
              classrooms. As Counsel to the late Congressman Elijah Cummings,
              Sean advised on the early regulatory debates that shaped how
              Congress thinks about facial recognition, algorithmic accountability,
              and technology governance.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              What distinguishes Sean&apos;s work is his ability to move fluidly
              between worlds that rarely speak the same language. He&apos;s equally
              comfortable briefing C-suite executives, testifying before lawmakers,
              or teaching first-year law students.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              Beyond consulting and teaching, Sean writes and speaks about AI&apos;s
              broader implications through{" "}
              <Link
                href="/newsletter"
                className="font-semibold text-accent hover:underline"
              >
                The Human Cost
              </Link>
              , a platform examining what happens when algorithms increasingly
              mediate human relationships, decision-making, and social connection.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* Career Highlights - Warm Gray Background */}
      <Section background="light" padding="lg" className="bg-background-alt">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <SectionHeader
            title="Career Highlights"
            subtitle="Key experiences that shape my approach to AI policy and governance."
            align="center"
          />
        </motion.div>

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
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {CAREER_HIGHLIGHTS.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-card p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-heading text-[length:var(--text-h3)] font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-[length:var(--text-body)] leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          );
          })}
        </motion.div>
      </Section>

      {/* Philosophy Section */}
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
              My Approach
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
              His clients describe him as &ldquo;refreshingly pragmatic&rdquo;
              about ethics—someone who understands that perfect solutions rarely
              exist, but better decisions always do.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
            >
              Sean specializes in the gray areas—the ethical questions that
              don&apos;t have obvious answers. He helps organizations think through
              tradeoffs, anticipate stakeholder concerns, and make defensible
              decisions when there&apos;s no perfect option.
            </motion.p>
          </motion.div>

          {/* Quote - Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="relative"
          >
            <div className="rounded-2xl bg-background-dark p-8">
              <span className="text-4xl text-accent leading-none">&ldquo;</span>
              <blockquote className="font-heading text-[length:var(--text-h3)] italic leading-relaxed text-text-on-dark -mt-2">
                Perfect solutions rarely exist, but better decisions always do.&rdquo;
              </blockquote>
              <cite className="mt-4 block text-[length:var(--text-body)] font-semibold not-italic">
                <span className="text-accent">—</span>{" "}
                <span className="text-accent">Sean Perryman</span>
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
                id="about-cta-grid"
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
            <rect width="100%" height="100%" fill="url(#about-cta-grid)" />
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
            Ready to navigate AI policy with confidence? Let&apos;s discuss how I can
            help your organization lead responsibly.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
