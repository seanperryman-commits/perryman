"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lora, Nunito } from "next/font/google";
import { mockupData } from "./mockupData";

// Typography: Lora (warm, friendly serif) + Nunito (rounded, approachable sans)
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mockup-heading",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mockup-body",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function MockupThree() {
  return (
    <div className={`${lora.variable} ${nunito.variable} min-h-screen bg-[#FAF7F2] font-[family-name:var(--font-mockup-body)]`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/mockups/3"
              className="font-[family-name:var(--font-mockup-heading)] text-xl text-[#2D2A26]"
            >
              Sean Perryman
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {["About", "Services", "Speaking", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-[#2D2A26]/70 transition-colors hover:text-[#C75B39]"
                >
                  {item}
                </Link>
              ))}
              <button className="rounded-full bg-[#C75B39] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#C75B39]/90 hover:shadow-lg hover:shadow-[#C75B39]/20">
                Book a Call
              </button>
            </div>
            <button className="rounded-full bg-[#C75B39] px-4 py-2 text-sm text-white md:hidden">
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="flex min-h-[90vh] flex-col items-center justify-center py-20 text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              variants={scaleIn}
              className="relative mb-10 h-48 w-48 overflow-hidden rounded-full ring-4 ring-[#C75B39]/20 ring-offset-4 ring-offset-[#FAF7F2] md:h-56 md:w-56"
            >
              <Image
                src={mockupData.hero.image}
                alt={mockupData.hero.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.p
              variants={fadeIn}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-[#C75B39]"
            >
              {mockupData.hero.title}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="max-w-3xl font-[family-name:var(--font-mockup-heading)] text-4xl leading-tight text-[#2D2A26] md:text-5xl lg:text-6xl"
            >
              {mockupData.hero.tagline}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-6 max-w-xl text-lg text-[#2D2A26]/70"
            >
              Guiding organizations through the complexities of AI with wisdom,
              clarity, and a human-centered approach.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <button className="rounded-full bg-[#2D2A26] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#2D2A26]/90 hover:shadow-lg">
                {mockupData.hero.primaryCTA}
              </button>
              <button className="rounded-full border-2 border-[#2D2A26]/20 px-8 py-4 text-sm font-medium text-[#2D2A26] transition-all hover:border-[#C75B39] hover:text-[#C75B39]">
                {mockupData.hero.secondaryCTA}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-[#2D2A26] py-10">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-white/90">
              <span className="font-[family-name:var(--font-mockup-heading)] text-lg">
                {mockupData.credibility.title}
              </span>
              <span className="mx-3 text-white/30">|</span>
              <span className="text-white/70">
                {mockupData.credibility.subtitle}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-sm font-medium uppercase tracking-widest text-[#C75B39]"
            >
              How I Help
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-mockup-heading)] text-3xl text-[#2D2A26] md:text-4xl"
            >
              Strategic guidance for responsible AI leadership
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {mockupData.focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={scaleIn}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-[#C75B39]/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C75B39]/10 text-[#C75B39]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-mockup-heading)] text-xl text-[#2D2A26] group-hover:text-[#C75B39]">
                  {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#2D2A26]/60">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="grid items-center gap-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={scaleIn} className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={mockupData.about.image}
                  alt="About"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="order-1 text-center lg:order-2 lg:text-left"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-[#C75B39]">
                About Me
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-mockup-heading)] text-3xl text-[#2D2A26] md:text-4xl">
                A trusted guide in AI governance
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#2D2A26]/70">
                {mockupData.about.bio}
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#C75B39] transition-colors hover:text-[#C75B39]/80"
              >
                Read my full story
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <motion.div
            className="rounded-3xl bg-[#2D2A26] p-10 text-center md:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#C75B39]">
              <svg
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="font-[family-name:var(--font-mockup-heading)] text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
              &ldquo;{mockupData.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-10">
              <p className="font-medium text-white">
                {mockupData.testimonial.author}
              </p>
              <p className="mt-1 text-white/60">
                {mockupData.testimonial.role}, {mockupData.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-10 opacity-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {mockupData.credibility.logos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-bold uppercase tracking-widest text-[#2D2A26]"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-mockup-heading)] text-3xl text-[#2D2A26] md:text-4xl"
            >
              {mockupData.cta.headline}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-6 max-w-2xl text-lg text-[#2D2A26]/70"
            >
              {mockupData.cta.subtext}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <button className="rounded-full bg-[#C75B39] px-10 py-4 text-sm font-medium text-white transition-all hover:bg-[#C75B39]/90 hover:shadow-lg hover:shadow-[#C75B39]/20">
                {mockupData.cta.buttonText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2D2A26]/10 py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-[family-name:var(--font-mockup-heading)] text-lg text-[#2D2A26]">Sean Perryman</p>
            <div className="flex gap-8">
              {["LinkedIn", "Twitter", "Email"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-[#2D2A26]/60 transition-colors hover:text-[#C75B39]"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-sm text-[#2D2A26]/40">
              © 2026 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
