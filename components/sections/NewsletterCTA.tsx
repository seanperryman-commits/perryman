"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NEWSLETTER_CTA } from "@/lib/content";
import { EXTERNAL_LINKS } from "@/lib/constants";

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
          {NEWSLETTER_CTA.label}
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="mt-4 font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
        >
          {NEWSLETTER_CTA.heading}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-[length:var(--text-body)] text-text-secondary"
        >
          {NEWSLETTER_CTA.description}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8">
          <a
            href={EXTERNAL_LINKS.newsletter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="gap-2">
              {NEWSLETTER_CTA.buttonText}
              <LuArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
