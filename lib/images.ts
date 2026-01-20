/**
 * Image optimization utilities
 *
 * For local images, generate blur placeholders with:
 *   npx plaiceholder ./public/images/photo.jpg
 *
 * Or use shimmer placeholder (included below) for instant loading UX.
 */

/**
 * Generates a shimmer SVG placeholder as a data URL.
 * Provides a subtle loading animation before image loads.
 *
 * @param w - Width of the placeholder
 * @param h - Height of the placeholder
 * @returns Base64-encoded data URL for use as blurDataURL
 *
 * @example
 * <Image
 *   src="/photo.jpg"
 *   placeholder="blur"
 *   blurDataURL={shimmerPlaceholder(400, 500)}
 * />
 */
export function shimmerPlaceholder(w: number, h: number): string {
  const shimmer = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#e5e7eb" offset="20%" />
          <stop stop-color="#f3f4f6" offset="50%" />
          <stop stop-color="#e5e7eb" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#e5e7eb" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate
        xlink:href="#r"
        attributeName="x"
        from="-${w}"
        to="${w}"
        dur="1s"
        repeatCount="indefinite"
      />
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(shimmer)}`;
}

/**
 * Generates a solid color placeholder as a data URL.
 * Minimal overhead, good for fast initial render.
 *
 * @param color - Hex color without # (default: subtle gray)
 * @returns Base64-encoded data URL
 *
 * @example
 * <Image
 *   src="/photo.jpg"
 *   placeholder="blur"
 *   blurDataURL={colorPlaceholder("0f172a")}
 * />
 */
export function colorPlaceholder(color = "e5e7eb"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect fill="#${color}" width="1" height="1"/></svg>`;
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(svg)}`;
}

/**
 * Standard aspect ratios as Tailwind classes
 */
export const ASPECT_RATIOS = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  tall: "aspect-[3/4]",
} as const;

/**
 * Common image dimensions for reference when preparing assets.
 * Use these as targets when exporting from design tools.
 *
 * Next.js will generate responsive variants automatically,
 * but source images should be at least 2x the max display size.
 */
export const RECOMMENDED_DIMENSIONS = {
  /** Hero portrait: displays up to ~600px wide */
  heroPortrait: { width: 1200, height: 1500 },
  /** About page portrait: displays up to ~600px wide */
  aboutPortrait: { width: 1200, height: 1500 },
  /** Card thumbnail: displays up to ~400px wide */
  cardThumbnail: { width: 800, height: 600 },
  /** Full-width background: displays up to viewport width */
  fullWidthBg: { width: 1920, height: 1080 },
  /** Small avatar/headshot: displays up to ~200px wide */
  avatar: { width: 400, height: 400 },
} as const;
