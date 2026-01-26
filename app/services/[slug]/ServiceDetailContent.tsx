"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Presentation,
  Users,
  Target,
  Lightbulb,
  Shield,
  BarChart3,
  Compass,
  Rocket,
  Handshake,
  Brain,
  Clock,
  Award,
  Mic,
  Briefcase,
  UserCheck,
} from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SERVICES, type ServiceDetail, type ServiceFeature } from "@/lib/constants";

const iconMap = {
  presentation: Presentation,
  users: Users,
  target: Target,
  lightbulb: Lightbulb,
  shield: Shield,
  chart: BarChart3,
  compass: Compass,
  rocket: Rocket,
  handshake: Handshake,
  brain: Brain,
  clock: Clock,
  award: Award,
  mic: Mic,
  briefcase: Briefcase,
  "user-check": UserCheck,
} as const;

function getIcon(iconName: ServiceFeature["icon"]) {
  return iconMap[iconName] || Lightbulb;
}

interface ServiceDetailContentProps {
  slug: string;
  serviceLabel: string;
  details: ServiceDetail;
}

export function ServiceDetailContent({
  slug,
  serviceLabel,
  details,
}: ServiceDetailContentProps) {
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Dark Hero Header */}
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
            {serviceLabel}
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent"
          />
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted"
          >
            {details.heroSubtitle}
          </motion.p>
        </motion.div>
      </Section>

      {/* Service Overview - Two Column */}
      <Section background="light" padding="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image - Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            variants={slideInLeft}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={details.overview.image}
                alt={`${serviceLabel} - ${details.overview.title}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
            variants={staggerContainer}
            className="lg:py-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary"
            >
              {details.overview.title}
            </motion.h2>

            {details.overview.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="light" padding="lg" className="bg-background-alt">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            What to Expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            Key components of how Sean delivers {serviceLabel.toLowerCase()}{" "}
            services.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {details.features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="rounded-xl bg-card p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 font-heading text-[length:var(--text-h3)] font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-[length:var(--text-body)] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Case Study */}
      <Section background="light" padding="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl bg-background-dark p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Case Study
            </p>
            <h3 className="mt-4 font-heading text-[length:var(--text-h3)] font-semibold text-text-on-dark">
              {details.caseStudy.title}
            </h3>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-text-on-dark-muted">
              {details.caseStudy.description}
            </p>
            <p className="mt-6 text-sm text-text-on-dark-muted">
              <span className="text-accent">—</span> {details.caseStudy.client}
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Related Services */}
      <Section background="light" padding="lg" className="bg-background-alt">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="font-heading text-[length:var(--text-h2)] font-semibold text-text-primary">
            Other Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[length:var(--text-body)] text-text-secondary">
            Explore additional ways Sean can support your organization.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          {otherServices.map((otherService) => (
            <motion.div key={otherService.slug} variants={fadeInUp}>
              <Link href={`/services/${otherService.slug}`}>
                <Button variant="secondary" size="lg">
                  {otherService.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Light CTA with Dark Box */}
      <Section background="light" padding="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="rounded-2xl bg-background-dark p-8 md:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-[length:var(--text-h2)] font-semibold text-white"
            >
              {details.cta.headline}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[length:var(--text-body)] text-white/70"
            >
              {details.cta.subtext}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link href="/contact">
                <Button size="lg">{details.cta.buttonText}</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
