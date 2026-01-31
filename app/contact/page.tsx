"use client";

import { motion } from "framer-motion";
import { LuCalendar } from "react-icons/lu";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_PAGE, CONTACT_FAQ } from "@/lib/content";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
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
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-[length:var(--text-h1)] font-semibold text-text-on-dark"
          >
            {CONTACT_PAGE.header.heading}
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            {CONTACT_PAGE.header.subtitle}
          </motion.p>
        </motion.div>
      </Section>

      {/* Form Section */}
      <Section background="light" padding="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-xl"
        >
          {/* Personal intro */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 text-center"
          >
            <p className="text-[length:var(--text-body)] leading-relaxed text-text-secondary">
              {CONTACT_PAGE.intro}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>

          {/* Calendly Link */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 rounded-xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <p className="text-[length:var(--text-body)] text-text-secondary">
              {CONTACT_PAGE.calendly.text}
            </p>
            <a
              href={EXTERNAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="mt-4 gap-2">
                <LuCalendar className="h-4 w-4" />
                {CONTACT_PAGE.calendly.buttonText}
              </Button>
            </a>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 space-y-6 text-left"
          >
            <h3 className="font-heading text-[length:var(--text-h3)] font-semibold text-text-primary text-center">
              {CONTACT_PAGE.faqHeading}
            </h3>
            <div className="space-y-4">
              {CONTACT_FAQ.map((item) => (
                <div key={item.question}>
                  <p className="font-semibold text-text-primary">{item.question}</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
