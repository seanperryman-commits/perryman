"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, staggerContainer } from "@/styles/animations";
import { Section } from "@/components/ui/Section";
import { ABOUT_CONTENT, HERO_CONTENT } from "@/lib/content";

export function AboutPreview() {
  const about = ABOUT_CONTENT;
  const hero = HERO_CONTENT;

  return (
    <Section background="light" padding="lg">
      <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
        {/* Photo - Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
          className="order-2 lg:order-1"
        >
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={'/images/headshots/sean-formal.jpg'}
                alt={`${hero.name} portrait`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Text - Right Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="order-1 lg:order-2 lg:py-4"
        >
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary"
          >
            {about.bio}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Learn more about my background
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
