"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Libre_Franklin } from "next/font/google";
import { fadeIn, fadeInUp, staggerContainer } from "@/styles/animations";

// Typography: Fraunces (distinctive variable serif) + Libre Franklin (editorial sans)
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mockup-heading",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mockup-body",
});

// Editorial Dark color palette
const colors = {
  bgLight: "#F5F3F0",
  bgDark: "#1B2D38",
  accent: "#9B8579",
  textLight: "#FAFAFA",
  textDark: "#1B2D38",
};

// Speaking gallery data
const speakingGallery = [
  {
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    caption: "Keynote presentation on AI governance frameworks.",
  },
  {
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
    caption: "Panel discussion on responsible AI with industry leaders.",
  },
  {
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
    caption: "Industry presentation on AI policy considerations.",
  },
];

// Focus areas (bullet list format)
const focusAreas = [
  "AI strategy development and implementation",
  "Governance frameworks and risk assessments",
  "Policy advisory and regulatory compliance",
  "Executive education and board briefings",
];

export function MockupFive() {
  return (
    <div className={`${fraunces.variable} ${libreFranklin.variable} min-h-screen font-[family-name:var(--font-mockup-body)]`} style={{ backgroundColor: colors.bgLight }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: colors.bgDark }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/mockups/5"
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: colors.accent }}
            >
              Sean Perryman
            </Link>
            <div className="hidden items-center gap-10 md:flex">
              {["About", "Speaking", "Services", "Media"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm tracking-wide transition-colors hover:opacity-70"
                  style={{ color: colors.textLight }}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-3 md:flex">
                {["LinkedIn", "Twitter"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-xs transition-opacity hover:opacity-70"
                    style={{ color: colors.textLight }}
                  >
                    {social === "LinkedIn" ? (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
              <Link
                href="#"
                className="rounded-full border px-5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors hover:bg-white/10"
                style={{
                  borderColor: colors.textLight,
                  color: colors.textLight,
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark with full-bleed image */}
      <section
        className="relative min-h-screen pt-16"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            className="relative min-h-[50vh] lg:min-h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80"
              alt="Sean Perryman speaking"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 lg:block hidden" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="font-[family-name:var(--font-mockup-heading)] text-4xl font-normal leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
              style={{ color: colors.textLight }}
            >
              Bridging AI Innovation and Governance
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-lg md:text-xl"
              style={{ color: colors.textLight }}
            >
              Speaker. Consultant. Advisor.
              <span style={{ color: colors.accent }}> AI Policy Expert.</span>
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <Link
                href="#"
                className="text-sm tracking-wide underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: colors.textLight }}
              >
                View Speaking Engagements →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credential Bar */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.bgLight }}>
        <motion.div
          className="mx-auto max-w-4xl px-6 text-center md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeIn}
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: colors.accent }}
          >
            Sean Perryman
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-[family-name:var(--font-mockup-heading)] text-3xl md:text-4xl lg:text-5xl"
            style={{ color: colors.textDark }}
          >
            Responsible AI Practitioner
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: `${colors.textDark}99` }}
          >
            Sean helps organizations navigate AI with transparency, 
            accountability, and practical solutions. His expertise spans 
            governance frameworks, policy development, and responsible 
            AI implementation.
          </motion.p>
        </motion.div>
      </section>

      {/* Full-width Panel Image */}
      <section className="relative">
        <motion.div
          className="relative aspect-[21/9] w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1600&q=80"
            alt="Panel discussion"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* About / Focus Areas Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: colors.bgLight }}>
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="grid gap-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left Column - Headline */}
            <motion.div variants={fadeInUp}>
              <h2
                className="font-[family-name:var(--font-mockup-heading)] text-3xl leading-tight md:text-4xl lg:text-5xl"
                style={{ color: colors.textDark }}
              >
                Making Responsible AI Work in the Real World
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: `${colors.textDark}99` }}
              >
                Sean builds practical, hands-on approaches to some of the most pressing 
                challenges in AI—governance, risk evaluation, and policy development. 
                He moves organizations from{" "}
                <em style={{ color: colors.accent }}>principles to practice</em>.
              </p>
            </motion.div>

            {/* Right Column - Areas of Work */}
            <motion.div variants={fadeInUp}>
              <p
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: colors.textDark }}
              >
                Areas of work include:
              </p>
              <ul className="mt-6 space-y-4">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-lg"
                    style={{ color: `${colors.textDark}cc` }}
                  >
                    <span style={{ color: colors.accent }}>•</span>
                    {area}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-10 inline-block rounded-full px-8 py-3 text-sm font-medium uppercase tracking-wider transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.bgDark,
                  color: colors.textLight,
                }}
              >
                About Sean
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Speaking Section */}
      <section>
        {/* Large TED-style Image */}
        <motion.div
          className="relative aspect-video w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Sean Perryman on stage"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Speaking Content */}
        <div
          className="py-16 md:py-24"
          style={{ backgroundColor: colors.bgLight }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <motion.div
              className="grid gap-12 lg:grid-cols-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-[family-name:var(--font-mockup-heading)] text-4xl md:text-5xl lg:col-span-4"
                style={{ color: colors.textDark }}
              >
                Speaking
              </motion.h2>
              <motion.div variants={fadeIn} className="lg:col-span-8">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: `${colors.textDark}99` }}
                >
                  Sean is a sought-after speaker who brings a rare combination of 
                  technical expertise and policy implementation experience. His talks 
                  offer clear, actionable insights on AI governance, risk assessment, 
                  and organizational readiness.
                </p>
                <Link
                  href="#"
                  className="mt-8 inline-block rounded-full border-2 px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-opacity-10"
                  style={{
                    borderColor: colors.bgDark,
                    color: colors.bgDark,
                  }}
                >
                  Speaking Inquiry
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Gallery */}
      <section className="py-16" style={{ backgroundColor: colors.bgLight }}>
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {speakingGallery.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p
                  className="mt-4 text-sm italic"
                  style={{ color: `${colors.textDark}99` }}
                >
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark Teal */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: colors.bgDark }}
      >
        <motion.div
          className="mx-auto max-w-4xl px-6 text-center md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-mockup-heading)] text-3xl md:text-4xl lg:text-5xl"
            style={{ color: colors.textLight }}
          >
            Responsible AI: Principles to Practice
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: `${colors.textLight}cc` }}
          >
            Sean has worked inside organizations and as an external 
            advisor to drive Responsible AI initiatives from start to finish. He builds 
            functional governance frameworks with enterprises and institutions.
          </motion.p>
          <motion.div variants={fadeIn} className="mt-10">
            <Link
              href="#"
              className="inline-block rounded-full border-2 px-10 py-4 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-white/10"
              style={{
                borderColor: colors.textLight,
                color: colors.textLight,
              }}
            >
              Work with Sean
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.bgLight }}>
        {/* Newsletter */}
        <div className="border-b" style={{ borderColor: `${colors.textDark}15` }}>
          <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-12">
            <h3
              className="font-[family-name:var(--font-mockup-heading)] text-2xl md:text-3xl"
              style={{ color: colors.textDark }}
            >
              Sign up for the latest updates.
            </h3>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-full border px-6 py-3 text-sm outline-none transition-colors focus:border-opacity-50"
                style={{
                  borderColor: `${colors.textDark}30`,
                  backgroundColor: "transparent",
                  color: colors.textDark,
                }}
              />
              <button
                className="rounded-full px-8 py-3 text-sm font-medium uppercase tracking-wider transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.bgDark,
                  color: colors.textLight,
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <p
                className="font-[family-name:var(--font-mockup-heading)] text-lg"
                style={{ color: colors.textDark }}
              >
                Sean Perryman
              </p>
              <div className="mt-3 flex items-center gap-4">
                {["LinkedIn", "Twitter"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: colors.textDark }}
                  >
                    {social === "LinkedIn" ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {["About", "Speaking", "Services", "Media"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: `${colors.textDark}99` }}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2 md:items-end">
              <Link
                href="#"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: colors.accent }}
              >
                Speaking Inquiry
              </Link>
              <Link
                href="#"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: colors.accent }}
              >
                Contact
              </Link>
            </div>
          </div>

          <div
            className="mt-12 border-t pt-8 text-center text-sm"
            style={{
              borderColor: `${colors.textDark}15`,
              color: `${colors.textDark}60`,
            }}
          >
            © 2026 Sean Perryman. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
