"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
            Newsletter
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-heading text-[length:var(--text-h1)] font-semibold text-text-on-dark"
          >
            The Human Cost
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            AI&apos;s Impact on What Makes Us Human
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
              Through <strong className="text-text-primary">The Human Cost</strong>, Sean
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
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-heading text-[length:var(--text-h3)] font-semibold text-text-primary">
              Subscribe
            </h2>
            <p className="mt-2 text-[length:var(--text-body)] text-text-secondary">
              Receive essays, insights, and provocations at the intersection of
              technology and humanity.
            </p>
            <Button className="mt-6 gap-2">
              Subscribe Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-sm text-text-muted">
              Newsletter platform coming soon
            </p>
          </motion.div>

          {/* Themes Section */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h3 className="text-center font-heading text-[length:var(--text-h3)] font-semibold text-text-primary">
              What to Expect
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-6">
                <h4 className="font-semibold text-text-primary">Policy Analysis</h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Breaking down complex AI regulations and what they mean for
                  everyday life.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h4 className="font-semibold text-text-primary">Personal Essays</h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Reflections on technology&apos;s impact on human connection and agency.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h4 className="font-semibold text-text-primary">Critical Questions</h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Challenging assumptions about progress and the cost of convenience.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h4 className="font-semibold text-text-primary">Practical Insights</h4>
                <p className="mt-2 text-sm text-text-secondary">
                  Frameworks for navigating an increasingly algorithmic world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* About Sean link */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-[length:var(--text-body)] text-text-secondary">
              Want to learn more about Sean&apos;s background and work?
            </p>
            <Link
              href="/about"
              className="mt-2 inline-flex items-center gap-1 text-accent hover:underline"
            >
              Read his full bio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
