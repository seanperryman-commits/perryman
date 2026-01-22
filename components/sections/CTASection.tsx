"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section background="dark" padding="xl" className="relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-grid"
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
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Subtle radial gradient for depth */}
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
          accessible, Sean brings a practitioner&apos;s perspective to every engagement.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8">
          <Link href="/contact">
            <Button size="lg">Book a Consultation</Button>
          </Link>
          {/* TODO: Verify correct email with client (was sean@, now hello@ to match constants.ts) */}
          <p className="mt-4 text-sm text-white/50">
            or{" "}
            <a
              href="mailto:hello@seanperryman.com"
              className="text-white/70 underline underline-offset-2 transition-colors hover:text-white"
            >
              email me directly
            </a>
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
