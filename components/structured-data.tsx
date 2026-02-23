import { SITE_CONFIG_SEO } from "@/lib/site-config";

function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG_SEO.fullName,
    jobTitle: SITE_CONFIG_SEO.role,
    url: SITE_CONFIG_SEO.url,
    email: `mailto:${SITE_CONFIG_SEO.email}`,
    sameAs: [SITE_CONFIG_SEO.social.linkedin, SITE_CONFIG_SEO.social.twitter],
    knowsAbout: [
      "AI Policy",
      "AI Governance",
      "Responsible AI",
      "Algorithmic Accountability",
      "Technology Ethics",
      "Executive Coaching",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG_SEO.name,
    url: SITE_CONFIG_SEO.url,
    description: SITE_CONFIG_SEO.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_CONFIG_SEO.name} Advisory`,
    url: SITE_CONFIG_SEO.url,
    description: SITE_CONFIG_SEO.description,
    provider: {
      "@type": "Person",
      name: SITE_CONFIG_SEO.fullName,
    },
    serviceType: [
      "AI Policy Consulting",
      "Executive Coaching",
      "Public Speaking",
    ],
    areaServed: "Worldwide",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function StructuredData() {
  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <ProfessionalServiceSchema />
    </>
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Person",
      name: SITE_CONFIG_SEO.fullName,
      url: SITE_CONFIG_SEO.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: readonly FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
