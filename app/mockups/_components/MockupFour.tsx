"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { mockupData } from "./mockupData";

// Typography: Space Grotesk throughout (bold geometric sans for tech leadership)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mockup-sans",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { duration: 0.5 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function MockupFour() {
  return (
    <div className={`${spaceGrotesk.variable} min-h-screen bg-white font-[family-name:var(--font-mockup-sans)]`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/mockups/4"
              className="text-xl font-bold text-white"
            >
              SP
            </Link>
            <div className="hidden items-center gap-8 lg:flex">
              {["About", "Services", "Speaking", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
              <button className="rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#3B82F6]/90 hover:shadow-lg hover:shadow-[#3B82F6]/40">
                Book a Call
              </button>
            </div>
            <button className="rounded-full bg-[#3B82F6] px-4 py-2 text-sm font-bold text-white lg:hidden">
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen bg-[#111111] pt-20">
        <div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col justify-center px-6 py-16 lg:px-12 xl:px-20">
            <motion.div
              className="max-w-xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                variants={fadeIn}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#3B82F6]" />
                <span className="text-sm font-medium text-white/90">
                  {mockupData.hero.title}
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
                style={{ color: "#FFFFFF" }}
              >
                {mockupData.hero.tagline}
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mt-6 text-lg text-white/70"
              >
                Strategic guidance at the intersection of artificial intelligence, policy, and responsible innovation.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button className="group relative overflow-hidden rounded-full bg-[#3B82F6] px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-2xl hover:shadow-[#3B82F6]/40">
                  <span className="relative z-10">
                    {mockupData.hero.primaryCTA}
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
                </button>
                <button className="rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition-all hover:border-white hover:bg-white hover:text-[#111111]">
                  {mockupData.hero.secondaryCTA}
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeIn}
                className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
              >
                {[
                  { value: "Enterprise", label: "Clients" },
                  { value: "Deep", label: "Experience" },
                  { value: "Global", label: "Reach" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-[#3B82F6] md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative hidden lg:block overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Inset image with border treatment */}
            <div className="absolute inset-4 xl:inset-8">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={mockupData.hero.image}
                  alt={mockupData.hero.name}
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-[#111111] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm text-white/40">Featured in</p>
            {mockupData.credibility.logos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-bold text-white/30 transition-colors hover:text-white/60"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={slideInLeft}>
              <p className="text-sm font-bold uppercase tracking-widest text-[#3B82F6]">
                Expertise
              </p>
              <h2 className="mt-2 text-4xl font-bold text-[#111111] md:text-5xl">
                What I Do
              </h2>
            </motion.div>
            <motion.p
              variants={slideInRight}
              className="max-w-md text-[#111111]/60"
            >
              Strategic AI advisory that bridges the gap between innovation and
              responsibility.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {mockupData.focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl bg-[#111111] p-8 md:p-10"
              >
                <div className="absolute right-0 top-0 text-[120px] font-bold leading-none text-white/15">
                  0{index + 1}
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#3B82F6]" style={{ color: "#FFFFFF" }}>
                    {area.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/60">
                    {area.description}
                  </p>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B82F6] transition-all group-hover:gap-4"
                  >
                    Learn more
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#f8f9fa] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid items-center gap-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={slideInLeft}>
              <p className="text-sm font-bold uppercase tracking-widest text-[#3B82F6]">
                About
              </p>
              <h2 className="mt-2 text-4xl font-bold text-[#111111] md:text-5xl">
                The intersection of tech & policy
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#111111]/70">
                {mockupData.about.bio}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-[#111111] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#111111]/90"
                >
                  Full Bio
                </Link>
                <Link
                  href="#"
                  className="text-sm font-bold text-[#3B82F6] underline underline-offset-4"
                >
                  View CV
                </Link>
              </div>
            </motion.div>
            <motion.div variants={slideInRight}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-[#3B82F6]/20 blur-2xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={mockupData.about.image}
                    alt="About"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#3B82F6] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-8 text-6xl text-white/20">&ldquo;</div>
            <blockquote className="text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
              {mockupData.testimonial.quote}
            </blockquote>
            <div className="mt-10 flex flex-col items-center">
              <p className="text-lg font-bold text-white">
                {mockupData.testimonial.author}
              </p>
              <p className="mt-1 text-white/70">
                {mockupData.testimonial.role}, {mockupData.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              style={{ color: "#FFFFFF" }}
            >
              {mockupData.cta.headline}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
            >
              {mockupData.cta.subtext}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <button className="group relative overflow-hidden rounded-full bg-[#3B82F6] px-12 py-5 text-sm font-bold text-white transition-all hover:shadow-2xl hover:shadow-[#3B82F6]/40">
                <span className="relative z-10">
                  {mockupData.cta.buttonText}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 md:flex-row">
            <p className="text-xl font-bold text-white">Sean Perryman</p>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "Email"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-white/60 transition-colors hover:text-[#3B82F6]"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-sm text-white/40">© 2026 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
