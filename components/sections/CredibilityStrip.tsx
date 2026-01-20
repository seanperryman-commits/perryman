"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animations";

const featuredAt = [
  "SXSW",
  "AI Action Summit, Paris",
  "Vanderbilt AI Symposium",
  "Alianza In AI Conference",
  "Georgetown Law",
  "IAPP Privacy Summit",
];

export function CredibilityStrip() {
  return (
    <section className="border-y border-border/50 bg-background py-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto max-w-7xl px-6 md:px-8"
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="shrink-0 text-sm font-medium uppercase tracking-widest text-text-muted">
            Featured At
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end">
            {featuredAt.map((venue) => (
              <span
                key={venue}
                className="font-heading text-base font-semibold text-text-secondary/70 transition-colors hover:text-text-primary"
              >
                {venue}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
