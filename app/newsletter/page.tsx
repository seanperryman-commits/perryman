"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuMail, LuArrowRight } from "react-icons/lu";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NEWSLETTER_PAGE } from "@/lib/content";

export default function NewsletterPage() {
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
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-accent"
          >
            {NEWSLETTER_PAGE.label}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-heading text-[length:var(--text-h1)] font-semibold text-text-on-dark"
          >
            {NEWSLETTER_PAGE.heading}
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            {NEWSLETTER_PAGE.subtitle}
          </motion.p>
        </motion.div>
      </Section>

      {/* Main Content Section */}
      <Section background="light" padding="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl"
        >
          {/* Description */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              Through <strong className="text-text-primary">{NEWSLETTER_PAGE.heading}</strong>, Sean
              explores what most AI policy discussions ignore: the deeper implications of
              living in an AI-mediated world. What happens to trust, relationships, and
              human agency when algorithms increasingly shape our choices?
            </p>

            <p className="mt-6 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              Combining personal narrative with policy analysis, this platform asks
              uncomfortable questions about technology&apos;s role in society—and what we
              might be losing in our rush toward automation.
            </p>
          </motion.div>

          {/* Subscribe CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 rounded-xl border border-border bg-card p-8 text-center shadow-sm"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <LuMail className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-heading text-[length:var(--text-h3)] font-semibold text-text-primary">
              {NEWSLETTER_PAGE.subscribe.heading}
            </h2>
            <p className="mt-2 text-[length:var(--text-body)] text-text-secondary">
              {NEWSLETTER_PAGE.subscribe.subtitle}
            </p>
            <a
              href="https://thehumancostai.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block"
            >
              <Button className="gap-2">
                Subscribe on Substack
                <LuArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          {/* About Sean link */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-[length:var(--text-body)] text-text-secondary">
              {NEWSLETTER_PAGE.aboutLink.text}
            </p>
            <Link
              href="/about"
              className="mt-2 inline-flex items-center gap-1 text-accent hover:underline"
            >
              {NEWSLETTER_PAGE.aboutLink.linkText}
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
