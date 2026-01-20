import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, SERVICE_DETAILS, SITE_CONFIG } from "@/lib/constants";
import { SpeakingContent } from "@/components/sections/SpeakingContent";
import { ConsultingContent } from "@/components/sections/ConsultingContent";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

const SERVICE_METADATA: Record<string, { title: string; description: string }> = {
  "public-speaking": {
    title: "Speaking & Engagements",
    description:
      "Cutting through AI hype to deliver strategic insight—keynotes at major conferences and executive briefings that audiences describe as immediately actionable.",
  },
  "consulting": {
    title: "Consulting",
    description:
      "Translating complex AI policy into business strategy. Governance frameworks, risk assessment, regulatory intelligence, and ethics that scale.",
  },
};

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const meta = SERVICE_METADATA[slug];

  if (!service || !meta) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${meta.title} | ${SITE_CONFIG.name}`,
    description: meta.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const details = SERVICE_DETAILS[slug];

  if (!service || !details) {
    notFound();
  }

  switch (slug) {
    case "public-speaking":
      return <SpeakingContent />;
    case "consulting":
      return <ConsultingContent />;
    default:
      notFound();
  }
}
