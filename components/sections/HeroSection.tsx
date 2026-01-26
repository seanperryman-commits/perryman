"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Button } from "@/components/ui/Button";
// CredentialChip import commented out - chips are disabled in hero
// import { CredentialChip } from "@/components/ui/CredentialChip";
import { HERO_CONTENT } from "@/lib/content";

export function HeroSection() {
  const hero = HERO_CONTENT;

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-end to-background-dark text-white">
      {/* Subtle radial glow behind image area */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex min-h-[90vh] flex-col items-center gap-8 py-24 sm:gap-10 lg:flex-row lg:items-center lg:gap-12 lg:py-0">
          {/* Text Content - Left Side */}
          <motion.div
            className="flex flex-1 flex-col justify-center lg:py-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-lg font-medium text-white/70"
            >
              {hero.name}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[length:calc(var(--text-hero)*1.1)] font-black leading-tight tracking-tight text-white"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-[480px] text-lg leading-relaxed text-white/80"
            >
              {hero.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button size="lg">{hero.primaryCTA}</Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg" onDark>
                  {hero.secondaryCTA}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo - Right Side */}
          <motion.div
            className="relative flex flex-1 items-center justify-center lg:-mr-12 lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Floating credential chips */}
              {/*
              <div className="absolute -left-8 top-12 z-10 hidden lg:block">
                <CredentialChip>First Global Head of AI Policy at Uber</CredentialChip>
              </div>
              <div className="absolute -right-8 bottom-32 z-10 hidden lg:block">
                <CredentialChip>Oversight Committee Former Counsel</CredentialChip>
              </div>
              */}

              {/* Photo with soft shadow */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
                <Image
                  src={hero.image}
                  alt={`${hero.name} - ${hero.title}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
