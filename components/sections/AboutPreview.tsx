"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { mockupData } from "@/app/mockups/_components/mockupData";

// Credentials - "10+" matches "over a decade" from copy; Uber and Congress are confirmed
const credentials = [
  { value: "10+", label: "Years in AI Policy" }, // ✅ Matches "over a decade" in copy
  { value: "Uber", label: "Global Head of AI Policy" }, // ✅ Confirmed
  { value: "Oversight Committee", label: "Former Counsel" }, // ✅ Confirmed
];

export function AboutPreview() {
  const { about, hero } = mockupData;

  return (
    <Section background="light" padding="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Photo - Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
            <Image
              src={about.image}
              alt={`${hero.name} portrait`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Text - Right Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:py-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
          >
            About Sean
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
          >
            {about.bio}
          </motion.p>

          {/* Credentials Strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap gap-6 border-y border-border py-4"
          >
            {credentials.map((cred) => (
              <div key={cred.label} className="flex items-baseline gap-2">
                <span className="font-heading text-2xl font-semibold text-accent">
                  {cred.value}
                </span>
                <span className="text-sm text-text-muted">{cred.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Highlighted Summary */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 rounded-xl bg-background-dark/5 p-6"
          >
            <p className="font-heading text-[length:var(--text-body)] leading-relaxed text-text-primary">
              He translates legislative intent for engineers, explains
              technical constraints to policymakers, and helps executives understand
              when ethical concerns are actually business risks in disguise.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Learn more about my background
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
