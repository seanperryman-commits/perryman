"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Briefcase, UserCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  mic: Mic,
  briefcase: Briefcase,
  "user-check": UserCheck,
} as const;

const serviceDescriptions: Record<string, string> = {
  "public-speaking":
    "Cutting through AI hype to deliver strategic insight, from keynotes at major conferences to executive briefings that leaders describe as immediately actionable.",
  "consulting":
    "Translating complex AI policy into business strategy. Governance frameworks, risk assessment, regulatory intelligence, and ethics that scale.",
  "coaching":
    "One-on-one executive coaching for leaders navigating AI strategy, governance decisions, and organizational transformation.",
};

const serviceCTAs: Record<string, string> = {
  "public-speaking": "Learn More",
  "consulting": "Learn More",
  "coaching": "Learn More",
};

export function ServicesSection() {
  return (
    <Section background="light" padding="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeader
            title="How I Can Help"
            subtitle="Specialized expertise to guide your AI journey"
            align="center"
          />
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const cardNumber = String(index + 1).padStart(2, "0");
            return (
              <motion.div key={service.slug} variants={fadeInUp} className="h-full">
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <article
                    className="flex h-full flex-col overflow-hidden rounded-lg bg-accent p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white shadow-md">
                        <Icon className="h-7 w-7" strokeWidth={2.5} />
                      </div>
                      <span className="font-heading text-3xl font-bold text-white/30">
                        {cardNumber}
                      </span>
                    </div>
                    <h3 className="font-heading text-[length:var(--text-h3)] font-semibold text-white">
                      {service.label}
                    </h3>
                    <p className="mt-4 flex-1 text-[length:var(--text-body)] leading-relaxed text-white/80">
                      {serviceDescriptions[service.slug]}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                      {serviceCTAs[service.slug]}
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
