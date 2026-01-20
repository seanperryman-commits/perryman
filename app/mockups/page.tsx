import type { Metadata } from "next";
import Link from "next/link";
import { mockupMeta } from "./_components/mockupData";
import { TypographyPreview } from "./_components/TypographyPreview";

export const metadata: Metadata = {
  title: "Design Direction Options",
  description: "Review 5 distinct homepage design mockups for your advisory practice website.",
};

export default function MockupsIndexPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="border-b border-[#1A1A1A]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-12">
          <Link
            href="/"
            className="text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
          >
            ← Back to Home
          </Link>
          <h1 className="mt-4 font-serif text-4xl text-[#1A1A1A]">
            Design Direction Options
          </h1>
          <p className="mt-2 text-lg text-[#1A1A1A]/70">
            Five distinct visual approaches for your advisory practice website
          </p>
        </div>
      </header>

      {/* Instructions */}
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-12">
        <div className="rounded-lg bg-[#4A90A4]/10 p-6">
          <h2 className="font-medium text-[#1A1A1A]">How to Review</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/70">
            Click each option to view the full responsive design. Resize your
            browser window or use your browser&apos;s device preview mode to see how
            each design responds at mobile (375px), tablet (768px), and desktop
            (1440px) sizes. All mockups contain the same content structure with
            different visual treatments.
          </p>
        </div>
      </div>

      {/* Mockup Grid */}
      <div className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {mockupMeta.map((mockup) => (
            <Link
              key={mockup.id}
              href={`/mockups/${mockup.id}`}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Color Preview Bar */}
              <div className="flex h-16">
                <div
                  className="flex-1"
                  style={{ backgroundColor: mockup.colors.primary }}
                />
                <div
                  className="flex-1"
                  style={{ backgroundColor: mockup.colors.secondary }}
                />
                <div
                  className="flex-1"
                  style={{ backgroundColor: mockup.colors.accent }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#4A90A4]">
                      Option {mockup.id}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-[#1A1A1A] group-hover:text-[#4A90A4]">
                      {mockup.name}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#1A1A1A]/5 px-3 py-1 text-xs text-[#1A1A1A]/60">
                    {mockup.vibe}
                  </span>
                </div>
                <p className="mt-2 text-[#1A1A1A]/70">{mockup.description}</p>

                {/* Typography Preview */}
                <div className="mt-4">
                  <TypographyPreview
                    mockupId={mockup.id}
                    headingFont={mockup.typography.heading}
                    bodyFont={mockup.typography.body}
                    headingSample={mockup.typography.headingSample}
                    bodySample={mockup.typography.bodySample}
                    primaryColor={mockup.colors.primary}
                    secondaryColor={mockup.colors.secondary}
                  />
                </div>

                {/* Color Labels */}
                <div className="mt-4 flex gap-4 text-xs text-[#1A1A1A]/50">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: mockup.colors.primary }}
                    />
                    <span>Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: mockup.colors.secondary }}
                    />
                    <span>Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: mockup.colors.accent }}
                    />
                    <span>Accent</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#4A90A4]">
                  View Full Page
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Summary Table */}
      <div className="border-t border-[#1A1A1A]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
          <h2 className="font-serif text-2xl text-[#1A1A1A]">Quick Comparison</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A1A1A]/10">
                  <th className="py-3 text-left font-medium text-[#1A1A1A]/60">
                    Direction
                  </th>
                  <th className="py-3 text-left font-medium text-[#1A1A1A]/60">
                    Vibe
                  </th>
                  <th className="py-3 text-left font-medium text-[#1A1A1A]/60">
                    Typography
                  </th>
                  <th className="py-3 text-left font-medium text-[#1A1A1A]/60">
                    Animation Level
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1A1A1A]/5">
                  <td className="py-3 font-medium text-[#1A1A1A]">
                    Editorial Minimal
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">
                    Prestigious policy journal
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">
                    Cormorant Garamond + Inter
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">Minimal</td>
                </tr>
                <tr className="border-b border-[#1A1A1A]/5">
                  <td className="py-3 font-medium text-[#1A1A1A]">
                    Modern Executive
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">McKinsey partner</td>
                  <td className="py-3 text-[#1A1A1A]/70">DM Sans</td>
                  <td className="py-3 text-[#1A1A1A]/70">Moderate</td>
                </tr>
                <tr className="border-b border-[#1A1A1A]/5">
                  <td className="py-3 font-medium text-[#1A1A1A]">
                    Warm Authority
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">Trusted advisor</td>
                  <td className="py-3 text-[#1A1A1A]/70">Lora + Nunito</td>
                  <td className="py-3 text-[#1A1A1A]/70">Gentle</td>
                </tr>
                <tr className="border-b border-[#1A1A1A]/5">
                  <td className="py-3 font-medium text-[#1A1A1A]">
                    Bold & Confident
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">Thought leader</td>
                  <td className="py-3 text-[#1A1A1A]/70">Space Grotesk</td>
                  <td className="py-3 text-[#1A1A1A]/70">Pronounced</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-[#1A1A1A]">
                    Editorial Dark
                  </td>
                  <td className="py-3 text-[#1A1A1A]/70">Rumman Chowdhury</td>
                  <td className="py-3 text-[#1A1A1A]/70">Fraunces + Libre Franklin</td>
                  <td className="py-3 text-[#1A1A1A]/70">Subtle, editorial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
