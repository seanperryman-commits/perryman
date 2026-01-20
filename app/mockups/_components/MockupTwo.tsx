"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { mockupData } from "./mockupData";

// Typography: DM Sans throughout (clean geometric sans for corporate polish)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mockup-sans",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function MockupTwo() {
  return (
    <div className={`${dmSans.variable} min-h-screen bg-white font-[family-name:var(--font-mockup-sans)]`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/mockups/2"
              className="text-xl font-bold text-[#0F172A]"
            >
              Sean Perryman
            </Link>
            <div className="hidden items-center gap-8 lg:flex">
              {["About", "Services", "Speaking", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-[#0F172A]/70 transition-colors hover:text-[#0F172A]"
                >
                  {item}
                </Link>
              ))}
              <button className="rounded-lg bg-[#0EA5E9] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/25 transition-all hover:-translate-y-0.5 hover:bg-[#0EA5E9]/90 hover:shadow-xl hover:shadow-[#0EA5E9]/30">
                Book a Call
              </button>
            </div>
            <button className="rounded-lg bg-[#0EA5E9] px-4 py-2 text-sm font-semibold text-white lg:hidden">
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1e293b] pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[90vh] items-center gap-12 py-20 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                variants={fadeIn}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
                <span className="text-sm font-medium text-white/90">
                  {mockupData.hero.title}
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                style={{ color: "#FFFFFF" }}
              >
                {mockupData.hero.tagline}
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mt-6 max-w-xl text-lg text-white/70"
              >
                Strategic advisory for organizations navigating the complexities
                of AI policy and governance.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button className="rounded-lg bg-[#0EA5E9] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/25 transition-all hover:-translate-y-0.5 hover:bg-[#0EA5E9]/90 hover:shadow-xl">
                  {mockupData.hero.primaryCTA}
                </button>
                <button className="rounded-lg border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                  {mockupData.hero.secondaryCTA}
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent z-10" />
                <Image
                  src={mockupData.hero.image}
                  alt={mockupData.hero.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 rounded-xl bg-white p-6 shadow-2xl">
                <p className="text-sm font-medium text-[#0F172A]/60">
                  Trusted by
                </p>
                <p className="mt-1 text-2xl font-bold text-[#0F172A]">Leading</p>
                <p className="text-sm text-[#0F172A]/60">
                  Organizations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center justify-between gap-8 md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0EA5E9]">
                Background
              </p>
              <p className="mt-1 text-lg font-medium text-[#0F172A]">
                {mockupData.credibility.title}
              </p>
              <p className="text-[#0F172A]/60">
                {mockupData.credibility.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-10">
              {mockupData.credibility.logos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-bold uppercase tracking-wider text-[#0F172A]/30"
                >
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-sm font-semibold uppercase tracking-wider text-[#0EA5E9]"
            >
              Services
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl font-bold text-[#0F172A] md:text-4xl"
            >
              Areas of Expertise
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {mockupData.focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={scaleIn}
                className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#0EA5E9]">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/60">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid items-center gap-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0EA5E9]">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#0F172A] md:text-4xl">
                At the intersection of technology and policy
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#0F172A]/70">
                {mockupData.about.bio}
              </p>
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] transition-colors hover:text-[#0EA5E9]/80"
              >
                Learn more about my background
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
            <motion.div variants={scaleIn}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={mockupData.about.image}
                  alt="About"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0F172A] py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0EA5E9]">
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
              &ldquo;{mockupData.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-10">
              <p className="font-semibold text-white">
                {mockupData.testimonial.author}
              </p>
              <p className="mt-1 text-white/60">
                {mockupData.testimonial.role}, {mockupData.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-[#0F172A] md:text-4xl"
            >
              {mockupData.cta.headline}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-6 max-w-2xl text-lg text-[#0F172A]/70"
            >
              {mockupData.cta.subtext}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <button className="rounded-lg bg-[#0EA5E9] px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/25 transition-all hover:-translate-y-0.5 hover:bg-[#0EA5E9]/90 hover:shadow-xl">
                {mockupData.cta.buttonText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#0F172A]/10 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-lg font-bold text-[#0F172A]">Sean Perryman</p>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "Email"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-[#0F172A]/60 transition-colors hover:text-[#0EA5E9]"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-sm text-[#0F172A]/40">
              © 2026 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
