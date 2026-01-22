"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function NewsletterCTA() {
  return (
    <Section background="light" padding="lg" className="bg-background-alt">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          The Human Cost
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="mt-4 font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
        >
          AI's Impact on What Makes Us Human
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-[length:var(--text-body)] text-text-secondary"
        >
          Through his newsletter, Sean explores the deeper implications of living in
          an AI-mediated world—examining what happens to trust, relationships, and
          human agency when algorithms increasingly shape our choices.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8">
          <Link href="/newsletter">
            <Button variant="secondary" className="gap-2">
              Subscribe to the Newsletter
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
