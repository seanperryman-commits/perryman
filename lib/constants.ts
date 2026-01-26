export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Newsletter", href: "/newsletter" },
] as const;

// Contact is handled separately as emphasized CTA button in header
export const NAV_CTA = { label: "Contact", href: "/contact" } as const;

export const SERVICES = [
  {
    slug: "public-speaking",
    label: "Speaking",
    shortLabel: "Speaking",
    icon: "mic",
  },
  {
    slug: "consulting",
    label: "Consulting",
    shortLabel: "Consulting",
    icon: "briefcase",
  },
  {
    slug: "coaching",
    label: "Coaching",
    shortLabel: "Coaching",
    icon: "user-check",
  },
] as const;

// TODO: ⚠️ MISSING PROFILE PATHS - Get full URLs from client
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" }, // TODO: Need full profile URL (e.g., linkedin.com/in/seanperryman)
  { label: "X", href: "https://x.com", icon: "twitter" }, // TODO: Need full profile URL (e.g., x.com/seanperryman)
] as const;

export const SITE_CONFIG = {
  name: "Sean Perryman",
  title: "Speaker. Consultant. Strategist. Coach.",
  email: "hello@seanperryman.com", // TODO: Verify correct email with client
} as const;

// Service Detail Page Content
export interface ServiceFeature {
  icon: "presentation" | "users" | "target" | "lightbulb" | "shield" | "chart" | "compass" | "rocket" | "handshake" | "brain" | "clock" | "award" | "mic" | "briefcase" | "user-check";
  title: string;
  description: string;
}

export interface ServiceDetail {
  heroSubtitle: string;
  overview: {
    title: string;
    paragraphs: string[];
    image: string;
  };
  features: ServiceFeature[];
  caseStudy: {
    title: string;
    description: string;
    client: string;
  };
  cta: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "public-speaking": {
    heroSubtitle:
      "Cutting through AI hype and regulatory confusion to deliver strategic insight leaders can actually use.",
    overview: {
      title: "Talks That Bridge Policy and Practice",
      paragraphs: [
        "Sean Perryman is a sought-after speaker at conferences, executive briefings, and academic forums worldwide. He translates dense policy into strategic insight—helping leaders understand not just what's coming, but what to do about it.",
        "His talks connect technical developments to business strategy, regulatory trends to competitive positioning, and ethical questions to practical decisions.",
        "From keynoting major tech conferences to leading executive workshops, Sean delivers content that audiences describe as \"immediately actionable.\"",
      ],
      image: "/images/engagements/panel-sxsw.jpeg",
    },
    features: [
      {
        icon: "presentation",
        title: "Keynote Presentations",
        description:
          "High-impact talks that demystify AI governance and translate complex policy into strategic insight.",
      },
      {
        icon: "users",
        title: "Executive Briefings",
        description:
          "Tailored sessions for leadership teams connecting technical concepts with business reality.",
      },
      {
        icon: "target",
        title: "Panel Moderation",
        description:
          "Expert facilitation that draws out meaningful insights and keeps discussions focused on what matters.",
      },
      {
        icon: "lightbulb",
        title: "Workshop Facilitation",
        description:
          "Interactive sessions that help teams develop shared language and strategic frameworks.",
      },
    ],
    caseStudy: {
      title: "AI Action Summit, Paris", // ✅ Event is real (in copy)
      description:
        "Mainstage panelist at the Building Trustworthy AI session, addressing international leaders on governance frameworks.",
      client: "Building Trustworthy AI Panel",
    },
    cta: {
      headline: "Book Sean for Your Event",
      subtext:
        "Whether you're planning a conference, executive retreat, or board presentation, Sean delivers insights that resonate and inspire action.",
      buttonText: "Inquire About Speaking",
    },
  },
  "consulting": {
    heroSubtitle:
      "Strategic clarity for organizations navigating the messy reality of AI implementation—where ethics, regulation, and competitive advantage collide.",
    overview: {
      title: "Translating AI Policy Into Business Strategy",
      paragraphs: [
        "For over a decade, Sean Perryman has worked where technology policy, corporate strategy, and ethical implementation intersect. He doesn't just analyze what regulations mean—he helps organizations understand what to do about them.",
        "From advising Congress on AI accountability to creating Uber's first EU algorithmic transparency report, Sean brings unusual breadth: policy expertise, strategic foresight, and hands-on implementation experience.",
        "Whether you're a Fortune 500 company navigating AI regulation, a startup building responsible systems from the ground up, or an academic institution developing curriculum, Sean translates complex policy into actionable strategy.",
      ],
      image: "/images/engagements/panel-georgetown-ai.jpeg",
    },
    features: [
      {
        icon: "shield",
        title: "AI Governance Strategy",
        description:
          "Move from compliance checkboxes to genuine accountability with governance frameworks that are both rigorous and practical.",
      },
      {
        icon: "chart",
        title: "Strategy & Risk Assessment",
        description:
          "Understand where AI creates value and where it creates liability—and develop frameworks to move forward confidently.",
      },
      {
        icon: "compass",
        title: "Policy Translation",
        description:
          "Make sense of global AI regulations—from the EU AI Act to state-level requirements—and position ahead of compliance deadlines.",
      },
      {
        icon: "rocket",
        title: "Ethics Frameworks That Scale",
        description:
          "Build approaches to algorithmic fairness that work in production environments, not just PowerPoint decks.",
      },
    ],
    caseStudy: {
      title: "Uber AI Transparency Report",
      description:
        "Created Uber's first EU Algorithmic Transparency Report—a comprehensive public accounting of how algorithms shape platform decisions.",
      client: "Uber Technologies",
    },
    cta: {
      headline: "Let's Work Together",
      subtext:
        "Get strategic guidance on AI governance, executive education for your team, or help making complex policy accessible.",
      buttonText: "Start a Conversation",
    },
  },
  coaching: {
    heroSubtitle:
      "Coaching leaders and executives both professionally and personally through technological disruption and personal growth.",
    overview: {
      title: "How We Work",
      paragraphs: [
        "1:1 coaching engagements typically run 3-6 months with biweekly sessions. Between sessions, you're implementing—I'm available for real-time challenges as they emerge.",
        "Group Coaching for groups of executives adopting, implementing with AI or managing teams through technological change.",
        "As a certified executive coach with practitioner experience designing AI governance for global operations, advising Congress on algorithmic accountability, and teaching AI ethics at Vanderbilt Law, I bring both coaching methodology and hard-won expertise to leadership challenges that are fundamentally unprecedented.",
      ],
      image: "/images/headshots/sean-about.jpg",
    },
    features: [
      {
        icon: "users",
        title: "Leading Through Technological Disruption",
        description:
          "Work on the human dimension of AI leadership—communicating uncertainty, building trust, making ethical calls when there's no clear answer.",
      },
      {
        icon: "compass",
        title: "Strategic Decision-Making in Ambiguity",
        description:
          "Develop frameworks that help you move decisively while managing technical, regulatory, and reputational uncertainty.",
      },
      {
        icon: "target",
        title: "Personal Leadership Development",
        description:
          "Unblock professional and personal barriers that prevent you from reaching the next level of your career.",
      },
      {
        icon: "brain",
        title: "AI Strategy Navigation",
        description:
          "Navigate million-dollar AI investments with incomplete information and develop confident decision-making approaches.",
      },
    ],
    caseStudy: {
      title: "Executive Coaching",
      description:
        "Guiding C-suite executives and senior leaders through AI strategy implementation and personal transformation.",
      client: "Fortune 500 & Startup Leaders",
    },
    cta: {
      headline: "Let's Talk",
      subtext:
        "Let's have a conversation about whether this is right for what you're navigating.",
      buttonText: "Schedule a Conversation",
    },
  },
};
