"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT } from "@/lib/content";
import { shimmerPlaceholder } from "@/lib/images";

export function HeroSection() {
  const hero = HERO_CONTENT;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-end to-background-dark text-white lg:min-h-[90vh]">
      {/* Subtle radial glow behind image area */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[300px] md:h-[600px] md:w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex min-h-screen flex-col items-center gap-8 py-12 sm:gap-10 lg:min-h-[90vh] lg:flex-row lg:items-center lg:gap-12 lg:py-0">
          {/* Text Content - Left Side */}
          <motion.div
            className="order-2 flex flex-1 flex-col justify-center lg:order-1 lg:py-20"
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

          {/* Photo - Right Side (First on mobile) */}
          <motion.div
            className="relative order-1 flex w-full items-center justify-center pt-4 lg:order-2 lg:flex-1 lg:-mr-12 lg:justify-end lg:pt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-lg">
              {/* Photo with soft shadow */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
                <Image
                  src={hero.image}
                  alt={`${hero.name} - ${hero.title}`}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL={shimmerPlaceholder(512, 640)}
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 512px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
