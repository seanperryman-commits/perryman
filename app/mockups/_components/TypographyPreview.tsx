"use client";

import {
  Cormorant_Garamond,
  DM_Sans,
  Lora,
  Nunito,
  Space_Grotesk,
  Fraunces,
  Libre_Franklin,
  Inter,
} from "next/font/google";

// Load all fonts for preview
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Map mockup IDs to their font objects
const fontMap: Record<string, { heading: typeof cormorantGaramond; body: typeof inter }> = {
  "1": { heading: cormorantGaramond, body: inter },
  "2": { heading: dmSans, body: dmSans },
  "3": { heading: lora, body: nunito },
  "4": { heading: spaceGrotesk, body: spaceGrotesk },
  "5": { heading: fraunces, body: libreFranklin },
};

interface TypographyPreviewProps {
  mockupId: string;
  headingFont: string;
  bodyFont: string;
  headingSample: string;
  bodySample: string;
  primaryColor: string;
  secondaryColor: string;
}

export function TypographyPreview({
  mockupId,
  headingFont,
  bodyFont,
  headingSample,
  bodySample,
  primaryColor,
  secondaryColor,
}: TypographyPreviewProps) {
  const fonts = fontMap[mockupId];

  if (!fonts) return null;

  const textColor = secondaryColor;

  return (
    <div
      className="rounded-lg p-4"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="mb-1 text-xs opacity-60" style={{ color: textColor }}>
        {headingFont} {headingFont !== bodyFont && `+ ${bodyFont}`}
      </div>
      <h4
        className={`${fonts.heading.className} text-xl font-semibold leading-tight`}
        style={{ color: textColor }}
      >
        {headingSample}
      </h4>
      <p
        className={`${fonts.body.className} mt-2 text-sm leading-relaxed opacity-70`}
        style={{ color: textColor }}
      >
        {bodySample}
      </p>
    </div>
  );
}
