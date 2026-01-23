"use client";

import { ImageBreak } from "@/components/ui/ImageBreak";
import { ImageBreakCinematic } from "../_components/ImageBreakCinematic";
import { ImageBreakDuotone } from "../_components/ImageBreakDuotone";
import { ImageBreakQuote } from "../_components/ImageBreakQuote";

const TEST_IMAGE = "/images/engagements/panel-sxsw.jpeg";
const TEST_ALT = "Sean Perryman speaking at SXSW panel";

export default function ImageBreaksMockupPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background-dark py-12 text-center text-on-dark">
        <h1 className="font-heading text-h1">Image Break Variants</h1>
        <p className="mt-2 text-white/70">
          Comparing approaches to mask lower-quality engagement photos
        </p>
      </div>

      {/* Current (Baseline) */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 pb-8 text-center">
          <h2 className="font-heading text-h2 text-text-primary">
            Current (Baseline)
          </h2>
          <p className="mt-2 text-text-secondary">
            Full-height image with subtle gradient overlay
          </p>
          <p className="mt-1 text-sm text-text-tertiary">
            h-64 → h-80 → h-96 • Light overlay (10-20% opacity)
          </p>
        </div>
        <ImageBreak src={TEST_IMAGE} alt={TEST_ALT} />
      </section>

      <hr className="border-border" />

      {/* Variant A: Cinematic Strip */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 pb-8 text-center">
          <h2 className="font-heading text-h2 text-text-primary">
            A: Cinematic Strip
          </h2>
          <p className="mt-2 text-text-secondary">
            Narrow 21:9 aspect ratio with stronger gradient overlay
          </p>
          <p className="mt-1 text-sm text-text-tertiary">
            h-48 → h-56 → h-64 • Stronger overlay (30-40% opacity) • Vignette
          </p>
        </div>
        <ImageBreakCinematic src={TEST_IMAGE} alt={TEST_ALT} />
      </section>

      <hr className="border-border" />

      {/* Variant B: Duotone Overlay */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 pb-8 text-center">
          <h2 className="font-heading text-h2 text-text-primary">
            B: Duotone Overlay
          </h2>
          <p className="mt-2 text-text-secondary">
            Grayscale image with brand color tint via mix-blend-multiply
          </p>
          <p className="mt-1 text-sm text-text-tertiary">
            Removes color compression artifacts • Creates cohesive brand
            aesthetic
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="pb-4 text-center text-sm font-medium text-text-secondary">
              Navy variant
            </p>
            <ImageBreakDuotone src={TEST_IMAGE} alt={TEST_ALT} color="navy" />
          </div>
          <div>
            <p className="pb-4 text-center text-sm font-medium text-text-secondary">
              Accent variant
            </p>
            <ImageBreakDuotone src={TEST_IMAGE} alt={TEST_ALT} color="accent" />
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Variant C: Blur + Quote */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 pb-8 text-center">
          <h2 className="font-heading text-h2 text-text-primary">
            C: Blur + Quote
          </h2>
          <p className="mt-2 text-text-secondary">
            Intentional background blur with overlaid pull quote
          </p>
          <p className="mt-1 text-sm text-text-tertiary">
            2px blur + scale 105% • Dark overlay for text legibility • Blur
            becomes a feature
          </p>
        </div>
        <ImageBreakQuote
          src={TEST_IMAGE}
          alt={TEST_ALT}
          quote="Shaping the future of AI governance requires bridging the gap between innovation and responsibility."
          attribution="Sean Perryman"
        />
      </section>

      {/* Summary */}
      <section className="bg-background-dark py-16 text-on-dark">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-h2">Recommendations</h2>
          <div className="mt-8 grid gap-6 text-left md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="font-heading text-lg font-bold">
                A: Cinematic Strip
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Best for: Subtle visual breaks between sections. Uses ~40% fewer
                pixels, editorial feel.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="font-heading text-lg font-bold">
                B: Duotone Overlay
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Best for: Brand consistency. Completely removes color artifacts,
                creates unified aesthetic.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6">
              <h3 className="font-heading text-lg font-bold">C: Blur + Quote</h3>
              <p className="mt-2 text-sm text-white/80">
                Best for: Adding meaningful content. Blur hides quality issues,
                quote adds value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
