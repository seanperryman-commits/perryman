"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animations";

interface ImageBreakCinematicProps {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Variant A: Cinematic Strip
 * Narrow 21:9 aspect ratio with stronger gradient overlay
 * Uses fewer pixels (less stretching) and masks artifacts with overlay
 */
export function ImageBreakCinematic({
  src,
  alt,
  caption,
}: ImageBreakCinematicProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="relative w-full"
    >
      {/* Cinematic 21:9 aspect ratio - shorter height */}
      <div className="relative h-48 w-full overflow-hidden md:h-56 lg:h-64">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        {/* Stronger gradient overlay to mask artifacts */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        {/* Optional vignette effect for cinematic feel */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
      </div>
      {caption && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-text-primary shadow-lg backdrop-blur-sm">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
