"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/styles/animations";

interface ImageBreakQuoteProps {
  src: string;
  alt: string;
  quote: string;
  attribution?: string;
}

/**
 * Variant C: Blur + Text Focus
 * Intentional background blur with overlaid quote/text
 * Blur becomes a feature, text gives purpose to the section
 */
export function ImageBreakQuote({
  src,
  alt,
  quote,
  attribution,
}: ImageBreakQuoteProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="relative w-full"
    >
      <div className="relative h-72 w-full overflow-hidden md:h-80">
        {/* Slightly blurred and zoomed image - blur hides artifacts */}
        <Image
          src={src}
          alt={alt}
          fill
          className="scale-105 object-cover blur-[2px]"
          quality={85}
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Centered quote overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.blockquote
            variants={fadeInUp}
            className="max-w-3xl text-center"
          >
            <p className="font-heading text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
              &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
              <footer className="mt-4 text-sm text-white/80 md:text-base">
                — {attribution}
              </footer>
            )}
          </motion.blockquote>
        </div>
      </div>
    </motion.div>
  );
}
