"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animations";

interface ImageBreakDuotoneProps {
  src: string;
  alt: string;
  caption?: string;
  color?: "navy" | "accent";
}

/**
 * Variant B: Duotone Overlay
 * Grayscale image with brand color tint - unifies images and hides color banding
 */
export function ImageBreakDuotone({
  src,
  alt,
  caption,
  color = "navy",
}: ImageBreakDuotoneProps) {
  const colorOverlay =
    color === "navy" ? "bg-background-dark/70" : "bg-accent/60";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="relative w-full"
    >
      <div className="relative h-64 w-full overflow-hidden md:h-80 lg:h-96">
        {/* Grayscale image - removes color compression artifacts */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale"
          quality={90}
          sizes="100vw"
        />
        {/* Color overlay with multiply blend mode */}
        <div
          className={`absolute inset-0 ${colorOverlay} mix-blend-multiply`}
        />
        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>
      {caption && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-text-primary shadow-lg backdrop-blur-sm">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
