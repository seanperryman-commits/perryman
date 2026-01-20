"use client";

import { motion } from "framer-motion";
import { scaleUp } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { mockupData } from "@/app/mockups/_components/mockupData";

// Elegant typographic quote mark
function DecorativeQuote() {
  return (
    <span
      className="-mb-8 block font-heading text-8xl leading-none text-accent/40"
      aria-hidden="true"
    >
      &ldquo;
    </span>
  );
}

// Extract initials from name (e.g., "J. Smith" → "JS")
function getInitials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter((part) => part.length > 0)
    .map((part) => part[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

export function TestimonialSection() {
  const { testimonial } = mockupData;
  const initials = getInitials(testimonial.author);

  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleUp}
        className="mx-auto max-w-4xl"
      >
        <div className="rounded-2xl bg-background-dark p-8 text-white md:p-12">
          <DecorativeQuote />

          <blockquote className="-mt-2 font-heading text-[length:var(--text-h3)] font-medium leading-relaxed text-white md:text-[length:var(--text-h2)]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-between">
            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Initials badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
                {initials}
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-white/70">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>

            {/* Company logo placeholder */}
            <div className="hidden items-center sm:flex">
              <div className="flex h-10 items-center rounded border border-white/10 bg-white/5 px-4">
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
