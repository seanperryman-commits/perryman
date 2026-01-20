"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

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
            Get in Touch
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            Ready to discuss how AI policy and governance consulting can help
            your organization? Reach out below.
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
              Whether you&apos;re exploring a speaking engagement, seeking strategic
              consulting, or have questions about AI governance, I&apos;d love to hear
              from you. Fill out the form below and let&apos;s start a conversation.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>

          {/* Calendly Link */}
          {/* TODO: ⚠️ MISSING CALENDLY URL - Get from client and add href */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 rounded-xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <p className="text-[length:var(--text-body)] text-text-secondary">
              Prefer to schedule directly?
            </p>
            {/* TODO: Replace Button with Link once Calendly URL is provided */}
            <Button variant="secondary" className="mt-4 gap-2">
              <Calendar className="h-4 w-4" />
              Book a Call on Calendly
            </Button>
          </motion.div>

          {/* FAQ */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 space-y-6 text-left"
          >
            <h3 className="font-heading text-[length:var(--text-h3)] font-semibold text-text-primary text-center">
              What to Expect
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-text-primary">What happens after I submit?</p>
                <p className="mt-1 text-sm text-text-secondary">
                  I&apos;ll review your message and respond within 24 hours with next steps
                  or any clarifying questions.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">What types of engagements do you offer?</p>
                <p className="mt-1 text-sm text-text-secondary">
                  I offer keynote speaking, workshops, consulting retainers, and
                  executive coaching. We&apos;ll find the right fit for your needs.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
