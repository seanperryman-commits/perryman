"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/styles/animations";

interface ImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
  /** CSS object-position value (e.g., "center", "top", "bottom", "center 30%") */
  objectPosition?: string;
}

export function ImageBreak({ src, alt, caption, objectPosition = "center" }: ImageBreakProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="relative w-full"
    >
      <div className="relative h-48 w-full overflow-hidden sm:h-64 md:h-80 lg:h-96">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          quality={95}
          sizes="100vw"
          priority
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>
      {caption && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-white/90 drop-shadow-lg">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
