"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { mockupData } from "./mockupData";

// Typography: Cormorant Garamond (elegant editorial serif) + Inter (Swiss-style sans)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mockup-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mockup-body",
});

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function MockupOne() {
  return (
    <div className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[#FAFAFA]`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between border-b border-[#1A1A1A]/10">
            <Link
              href="/mockups/1"
              className="font-[family-name:var(--font-mockup-heading)] text-lg tracking-wide text-[#1A1A1A]"
            >
              Sean Perryman
            </Link>
            <div className="hidden items-center gap-10 md:flex">
              {["About", "Services", "Speaking", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-[family-name:var(--font-mockup-body)] text-sm tracking-wide text-[#1A1A1A]/70 transition-colors hover:text-[#1A1A1A]"
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="text-sm tracking-wide text-[#1A1A1A] underline underline-offset-4 transition-opacity hover:opacity-70">
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-16">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeIn}
                className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/60"
              >
                {mockupData.hero.title}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-[family-name:var(--font-mockup-heading)] text-5xl font-normal leading-[1.1] tracking-tight text-[#1A1A1A] md:text-6xl lg:text-7xl"
              >
                {mockupData.hero.tagline}
              </motion.h1>
              <motion.div
                variants={fadeIn}
                className="mt-12 flex flex-wrap gap-6"
              >
                <button className="bg-[#1A1A1A] px-8 py-4 text-sm tracking-wide text-white transition-all hover:bg-[#1A1A1A]/90">
                  {mockupData.hero.primaryCTA}
                </button>
                <button className="text-sm tracking-wide text-[#1A1A1A] underline underline-offset-4 transition-opacity hover:opacity-70">
                  {mockupData.hero.secondaryCTA} →
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={mockupData.hero.image}
                  alt={mockupData.hero.name}
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="border-y border-[#1A1A1A]/10 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
          <motion.div
            className="flex flex-col items-center justify-between gap-8 md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="text-center md:text-left">
              <p className="font-[family-name:var(--font-mockup-heading)] text-lg text-[#1A1A1A]">
                {mockupData.credibility.title}
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/60">
                {mockupData.credibility.subtitle}
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-8 opacity-30"
            >
              {mockupData.credibility.logos.map((logo) => (
                <span
                  key={logo}
                  className="text-xs font-medium uppercase tracking-widest text-[#1A1A1A]"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/60"
            >
              Areas of Focus
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-[family-name:var(--font-mockup-heading)] text-4xl text-[#1A1A1A] md:text-5xl"
            >
              Strategic expertise
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-12 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {mockupData.focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                className="group border-t border-[#1A1A1A]/10 pt-8"
              >
                <span className="text-sm text-[#1A1A1A]/40">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-mockup-heading)] text-2xl text-[#1A1A1A] transition-colors group-hover:text-[#4A90A4]">
                  {area.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#1A1A1A]/70">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="grid items-center gap-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
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
              className="order-1 lg:order-2"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/60">
                About
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-mockup-heading)] text-4xl text-[#1A1A1A] md:text-5xl">
                Bridging technology and policy
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-[#1A1A1A]/70">
                {mockupData.about.bio}
              </p>
              <Link
                href="#"
                className="mt-8 inline-block text-sm tracking-wide text-[#1A1A1A] underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Learn more about my background →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <blockquote className="font-[family-name:var(--font-mockup-heading)] text-2xl leading-relaxed text-[#1A1A1A] md:text-3xl lg:text-4xl">
              &ldquo;{mockupData.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-10">
              <p className="font-medium text-[#1A1A1A]">
                {mockupData.testimonial.author}
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/60">
                {mockupData.testimonial.role}, {mockupData.testimonial.company}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#1A1A1A]/10 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-mockup-heading)] text-4xl text-[#1A1A1A] md:text-5xl"
            >
              {mockupData.cta.headline}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-6 max-w-2xl text-lg text-[#1A1A1A]/70"
            >
              {mockupData.cta.subtext}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <button className="bg-[#1A1A1A] px-10 py-4 text-sm tracking-wide text-white transition-all hover:bg-[#1A1A1A]/90">
                {mockupData.cta.buttonText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A]/10 py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-[family-name:var(--font-mockup-heading)] text-[#1A1A1A]">Sean Perryman</p>
            <div className="flex gap-8">
              {["LinkedIn", "Twitter", "Email"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-[#1A1A1A]/60 transition-colors hover:text-[#1A1A1A]"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-sm text-[#1A1A1A]/40">
              © 2026 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
