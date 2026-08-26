import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/**
 * Image size presets for common use cases
 * Each preset defines responsive sizes and recommended dimensions
 */
const IMAGE_PRESETS = {
  /** Hero images - full viewport on mobile, half on desktop */
  hero: {
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
    quality: 90,
  },
  /** Portrait photos - 4:5 aspect ratio, prominent placement */
  portrait: {
    sizes: "(max-width: 768px) 100vw, 50vw",
    quality: 90,
  },
  /** Card thumbnails - smaller, grid layouts */
  card: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
    quality: 85,
  },
  /** Full-width section backgrounds */
  fullWidth: {
    sizes: "100vw",
    quality: 85,
  },
  /** Small thumbnails, avatars */
  thumbnail: {
    sizes: "(max-width: 640px) 50vw, 200px",
    quality: 80,
  },
} as const;

type ImagePreset = keyof typeof IMAGE_PRESETS;

interface OptimizedImageProps extends Omit<ImageProps, "sizes" | "quality"> {
  /** Predefined size preset for responsive images */
  preset?: ImagePreset;
  /** Custom sizes string (overrides preset) */
  sizes?: string;
  /** Image quality 1-100 (overrides preset, default varies by preset) */
  quality?: number;
  /** Aspect ratio class (e.g., "aspect-[4/5]", "aspect-video") */
  aspectRatio?: string;
  /** Enable fill mode with object-cover */
  fill?: boolean;
}

/**
 * Optimized image component with sensible defaults for sharp, fast-loading images.
 *
 * @example
 * // Hero portrait with 4:5 aspect ratio
 * <OptimizedImage
 *   src="/images/portrait.jpg"
 *   alt="Portrait"
 *   preset="hero"
 *   aspectRatio="aspect-[4/5]"
 *   fill
 *   priority
 * />
 *
 * @example
 * // Card thumbnail with fixed dimensions
 * <OptimizedImage
 *   src="/images/thumb.jpg"
 *   alt="Thumbnail"
 *   preset="card"
 *   width={400}
 *   height={300}
 * />
 */
export function OptimizedImage({
  preset = "card",
  sizes,
  quality,
  aspectRatio: _aspectRatio,
  fill = false,
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  const presetConfig = IMAGE_PRESETS[preset];

  // Fill mode requires a positioned container with dimensions
  if (fill) {
    return (
      <Image
        alt={alt}
        fill
        sizes={sizes ?? presetConfig.sizes}
        quality={quality ?? presetConfig.quality}
        className={cn("object-cover", className)}
        {...props}
      />
    );
  }

  return (
    <Image
      alt={alt}
      sizes={sizes ?? presetConfig.sizes}
      quality={quality ?? presetConfig.quality}
      className={className}
      {...props}
    />
  );
}

/**
 * Container component for fill-mode images with aspect ratio
 *
 * @example
 * <ImageContainer aspectRatio="aspect-[4/5]" className="rounded-lg">
 *   <OptimizedImage src="/photo.jpg" alt="Photo" preset="portrait" fill priority />
 * </ImageContainer>
 */
interface ImageContainerProps {
  children: React.ReactNode;
  /** Tailwind aspect ratio class */
  aspectRatio?: string;
  className?: string;
}

export function ImageContainer({
  children,
  aspectRatio = "aspect-video",
  className,
}: ImageContainerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatio,
        className
      )}
    >
      {children}
    </div>
  );
}

export { IMAGE_PRESETS };
export type { ImagePreset };
