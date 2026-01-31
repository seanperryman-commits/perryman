/**
 * Centralized content for the site
 * This file consolidates content from mockupData and inline definitions.
 *
 * Key items requiring confirmation with client before launch:
 * - TESTIMONIAL: Entire content is placeholder (J. Smith, Technology Executive)
 * - SOCIAL_LINKS in constants.ts: Need full profile URLs
 * - SITE_CONFIG.email in constants.ts: Verify correct email
 */

// =============================================================================
// HERO SECTION
// =============================================================================

export const HERO_CONTENT = {
  name: "Sean Perryman",
  title: "Speaker. Consultant. Strategist. Coach.",
  tagline: "AI Strategy, Policy, and Ethics",
  primaryCTA: "Schedule a Consultation",
  secondaryCTA: "Learn More",
  image: "/images/headshots/sean-hero.jpg",
} as const;

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const ABOUT_CONTENT = {
  bio: "Sean Perryman works at the intersection of AI policy, corporate strategy, and ethical implementation—helping organizations navigate one of the most consequential technology transitions of our time. His career spans Capitol Hill, Silicon Valley, and law school classrooms. He translates congressional intent for engineers, explains technical constraints to policymakers, and helps executives understand when ethical concerns are actually business risks in disguise.",
  image: "/images/headshots/sean-formal.jpg",
} as const;

export const CAREER_HIGHLIGHTS = [
  {
    iconName: "Briefcase" as const,
    title: "Global Head of AI Policy at Uber",
    description:
      "Created Uber's first EU Algorithmic Transparency Report and served as core team member on Uber's first Civil Rights Assessment.",
  },
  {
    iconName: "Users" as const,
    title: "Congressional Counsel",
    description:
      "Advised the late Congressman Elijah Cummings on the House Oversight Committee on facial recognition, algorithmic accountability, and technology governance.",
  },
  {
    iconName: "GraduationCap" as const,
    title: "Academic Leadership",
    description:
      "Designed Vanderbilt Law School's first AI ethics course. Currently teaches law and policy at Vanderbilt and Marymount University.",
  },
  {
    iconName: "Award" as const,
    title: "Board & Advisory Roles",
    description:
      "Center for Democracy & Technology Advisory Board member. Former FCC Advisory Committee on Diversity and Digital Empowerment appointee.",
  },
] as const;

// =============================================================================
// CREDIBILITY (for hero chips if re-enabled)
// =============================================================================

export const CREDIBILITY = {
  title: "First Global Head of AI Policy at Uber",
  subtitle: "Former Congressional Counsel",
  logos: ["Vanderbilt AI Governance Symposium", "SXSW", "AI Action Summit"],
} as const;

// =============================================================================
// SERVICES
// =============================================================================

export const SERVICE_DESCRIPTIONS = {
  "public-speaking":
    "Cutting through AI hype to deliver strategic insight—from keynotes at major conferences to executive briefings that audiences describe as immediately actionable.",
  consulting:
    "Translating complex AI policy into business strategy. Governance frameworks, risk assessment, regulatory intelligence, and ethics that scale.",
  coaching:
    "One-on-one executive coaching for leaders navigating AI strategy, governance decisions, and organizational transformation.",
} as const;

// =============================================================================
// COACHING CONTENT
// =============================================================================

export const COACHING_OFFERINGS = [
  {
    iconName: "Users" as const,
    title: "Leading Through Technological Disruption",
    description:
      "Your team is anxious. Your board has questions. Your customers have concerns. We work on the human dimension of AI leadership—communicating uncertainty, building trust, making ethical calls when there's no clear answer.",
  },
  {
    iconName: "Compass" as const,
    title: "Strategic Decision-Making in Ambiguity",
    description:
      "Million-dollar AI investments with incomplete information. We develop frameworks that help you move decisively while managing technical, regulatory, and reputational uncertainty.",
  },
  {
    iconName: "Target" as const,
    title: "Personal Leadership Development",
    description:
      "We work to unblock professional and personal barriers that prevent you from reaching the next level of your career.",
  },
] as const;

export const COACHING_CLIENT_TYPES = [
  "C-suite executives implementing AI strategy across their organizations",
  "General Counsels and Policy Leaders translating regulation into competitive advantage",
  "Founders, Executives, and Senior Leaders navigating personal and professional challenges and transitions in their career.",
] as const;

// =============================================================================
// CONTACT FAQ
// =============================================================================

export const CONTACT_FAQ = [
  {
    question: "What happens after I submit?",
    answer:
      "I'll review your message and respond within 24 hours with next steps or any clarifying questions.",
  },
  {
    question: "What types of engagements do you offer?",
    answer:
      "I offer keynote speaking, workshops, consulting retainers, and executive coaching. We'll find the right fit for your needs.",
  },
] as const;

// =============================================================================
// CONTACT FORM
// =============================================================================

export const CONTACT_FORM = {
  subjects: [
    { value: "consulting", label: "Consulting Inquiry" },
    { value: "speaking", label: "Speaking Request" },
    { value: "coaching", label: "Executive Coaching" },
    { value: "other", label: "Other" },
  ],
  fields: {
    name: {
      label: "Name",
      placeholder: "Your name",
    },
    email: {
      label: "Email",
      placeholder: "your@email.com",
    },
    subject: {
      label: "Subject",
      placeholder: "Select a topic",
    },
    message: {
      label: "Message",
      placeholder: "Tell me about your project...",
    },
  },
  messages: {
    success: {
      title: "Thank you!",
      body: "Your message has been sent. I'll get back to you soon.",
    },
    error: "Something went wrong. Please try again.",
    submitting: "Sending...",
    submit: "Send Message",
  },
} as const;

// =============================================================================
// CTA CONTENT
// =============================================================================

export const CTA_CONTENT = {
  headline: "Let's Work Together",
  subtext:
    "Whether you need strategic guidance on AI governance, executive education for your team, or a speaker who can make complex policy accessible, Sean brings a practitioner's perspective to every engagement.",
  buttonText: "Get in Touch",
} as const;

// =============================================================================
// TESTIMONIAL (PLACEHOLDER - needs real content from client)
// =============================================================================

/**
 * TODO: PLACEHOLDER TESTIMONIAL - Need real testimonial from client
 * Current content: "J. Smith", "Technology Executive", "Enterprise Client" are all fake
 */
export const TESTIMONIAL = {
  quote:
    "Sean's guidance was instrumental in shaping our AI governance strategy. His ability to translate complex policy considerations into actionable frameworks helped us move confidently into AI adoption while maintaining stakeholder trust.",
  author: "J. Smith", // PLACEHOLDER
  role: "Technology Executive", // PLACEHOLDER
  company: "Enterprise Client", // PLACEHOLDER
} as const;

// =============================================================================
// FOCUS AREAS (for potential future use)
// =============================================================================

export const FOCUS_AREAS = [
  {
    title: "AI Strategy & Implementation",
    description:
      "Develop comprehensive AI roadmaps aligned with business objectives and ethical principles.",
    icon: "strategy",
  },
  {
    title: "Governance Framework Design",
    description:
      "Build robust governance structures that ensure responsible AI deployment at scale.",
    icon: "governance",
  },
  {
    title: "Policy Advisory & Compliance",
    description:
      "Navigate evolving regulations and establish proactive compliance frameworks.",
    icon: "policy",
  },
  {
    title: "Executive Education & Speaking",
    description:
      "Keynotes and workshops that prepare leadership teams for the AI-driven future.",
    icon: "speaking",
  },
] as const;

// =============================================================================
// VALUE PROPOSITION SECTION (homepage)
// =============================================================================

export const VALUE_PROPOSITION = {
  blocks: [
    {
      heading: "Translating AI Policy Into Business Strategy",
      paragraphs: [
        "For over a decade, Sean Perryman has worked where technology policy, corporate strategy, and ethical implementation intersect. He doesn\u2019t just analyze what regulations mean\u2014he helps you understand what they mean for your business. How will compliance requirements impact your product timeline? Where do cost-saving algorithms create legal or reputational risk? Sean connects policy to the strategic and ethical questions leaders are actually wrestling with.",
        "From advising Congress on AI accountability to creating Uber\u2019s first EU algorithmic transparency report, Sean has an unusual breadth of knowledge on the AI ecosystem, spanning policy expertise, strategic foresight, and hands-on implementation experience.",
        "He helps leaders cut through the noise to understand what actually matters\u2014and how to act on it.",
      ],
    },
    {
      heading: "Strategic Clarity in a Complex Landscape",
      paragraphs: [
        "Sean works with organizations navigating the messy reality of AI implementation\u2014where ethics, regulation, competitive advantage, and risk all collide. His approach combines regulatory insight, strategic thinking, and practical experience to help you make better decisions faster.",
        "Whether you\u2019re a Fortune 500 company navigating AI regulation, a startup building responsible systems from the ground up, or an academic institution developing curriculum, Sean translates complex policy into actionable strategy.",
      ],
    },
  ],
} as const;

// =============================================================================
// NEWSLETTER CTA SECTION (homepage)
// =============================================================================

export const NEWSLETTER_CTA = {
  label: "The Human Cost",
  heading: "AI\u2019s Impact on What Makes Us Human",
  description:
    "Through his newsletter, Sean explores the deeper implications of living in an AI-mediated world\u2014examining what happens to trust, relationships, and human agency when algorithms increasingly shape our choices.",
  buttonText: "Subscribe to the Newsletter",
} as const;

// =============================================================================
// SPEAKING CONTENT
// =============================================================================

export const SPEAKING_ENGAGEMENTS = [
  {
    src: "/images/engagements/keynote-colombia.jpeg",
    alt: "Sean Perryman keynote at Colombia AI conference",
    event: "AI Leadership Summit",
    location: "Bogota, Colombia",
    type: "Keynote",
    featured: true,
  },
  {
    src: "/images/engagements/keynote-colombia-wide.jpeg",
    alt: "Sean Perryman keynoting at Colombia AI conference",
    event: "AI Colombia Summit",
    location: "Bogota, Colombia",
    type: "Keynote",
  },
  {
    src: "/images/engagements/panel-iapp-privacy.jpeg",
    alt: "Sean Perryman at IAPP Privacy Summit",
    event: "IAPP Privacy Summit",
    location: "Washington, DC",
    type: "Panel",
  },
  {
    src: "/images/engagements/panel-georgetown-ai.jpeg",
    alt: "Sean Perryman at Georgetown AI Forum",
    event: "Georgetown AI Forum",
    location: "Washington, DC",
    type: "Panel",
  },
  {
    src: "/images/engagements/panel-chci-tech.jpeg",
    alt: "Sean Perryman at CHCI Tech Summit",
    event: "CHCI Tech Summit",
    location: "Washington, DC",
    type: "Panel",
  },
] as const;

// TODO: Topic descriptions are generic filler - consider getting real descriptions from client
export const SPEAKING_TOPICS = [
  {
    iconName: "Lightbulb" as const,
    title: "AI Governance & Ethics",
    description:
      "Frameworks for responsible AI deployment that balance innovation with accountability.",
  },
  {
    iconName: "Globe" as const,
    title: "Global AI Policy",
    description:
      "Navigating the evolving international regulatory landscape and its implications for business.",
  },
  {
    iconName: "Users" as const,
    title: "Leadership in the AI Era",
    description:
      "Preparing executive teams to make confident decisions about AI strategy and adoption.",
  },
  {
    iconName: "Mic" as const,
    title: "The Future of Work",
    description:
      "How AI will reshape industries and what leaders need to know to stay ahead.",
  },
] as const;

export const SPEAKING_HERO = {
  subtitle: "Speaking & Engagements",
  headingLine1: "Cutting Through",
  headingAccent: "AI Hype",
  description:
    "Sean translates dense policy into strategic insight\u2014helping leaders understand not just what\u2019s coming, but what to do about it. His talks connect technical developments to business strategy, regulatory trends to competitive positioning.",
  ctaText: "Book Sean for Your Event",
} as const;

export const SPEAKING_SECTIONS = {
  gallery: {
    heading: "Recent Engagements",
    description:
      "From policy forums to corporate summits, Sean brings clarity to complex AI topics across diverse audiences.",
  },
  topics: {
    heading: "Speaking Topics",
    description:
      "Every presentation is tailored to your audience, but these themes form the foundation of Sean\u2019s expertise.",
  },
  main: {
    paragraphs: [
      "Sean Perryman cuts through AI hype and regulatory confusion to deliver strategic insight leaders can actually use. As a sought-after speaker at conferences, executive briefings, and academic forums worldwide, he translates dense policy into strategic insight\u2014helping leaders understand not just what\u2019s coming, but what to do about it.",
      "His talks connect technical developments to business strategy, regulatory trends to competitive positioning, and ethical questions to practical decisions.",
      "From keynoting major tech conferences to leading executive workshops, Sean delivers content that audiences describe as \u201Cimmediately actionable.\u201D",
    ],
  },
  cta: {
    heading: "Book Sean for Your Event",
    description:
      "Expert briefings and educational talks tailored to your audience\u2014whether board members, technical teams, or industry conferences. Complex topics made digestible and actionable.",
    bullets: [
      'Keynotes that audiences call \u201Cimmediately actionable\u201D',
      "Executive workshops and team education",
      "Panel moderation and participation",
    ],
    buttonText: "Inquire About Availability",
  },
} as const;

// =============================================================================
// CONSULTING CONTENT
// =============================================================================

export const CONSULTING_CLIENT_TYPES = [
  {
    type: "Fortune 500",
    description: "Navigating AI regulation and building enterprise governance",
  },
  {
    type: "Startups",
    description: "Building responsible systems from the ground up",
  },
  {
    type: "Executives",
    description: "Personal guidance on AI strategy and career decisions",
  },
  {
    type: "Academic Institutions",
    description: "Developing curriculum and research frameworks",
  },
] as const;

export const CONSULTING_OFFERINGS = [
  {
    iconName: "Shield" as const,
    title: "Building AI Governance",
    description:
      "Move from compliance checkboxes to genuine accountability. Governance frameworks that combine regulatory foresight, operational design, and stakeholder engagement.",
  },
  {
    iconName: "Target" as const,
    title: "Strategy & Risk Assessment",
    description:
      "Understanding where AI creates value and where it creates liability\u2014and how to tell the difference. Frameworks that help your organization move forward confidently.",
  },
  {
    iconName: "Compass" as const,
    title: "Policy Translation",
    description:
      "Making sense of the global patchwork of AI regulations\u2014from the EU AI Act to state-level requirements. Position ahead of compliance deadlines rather than scrambling.",
  },
  {
    iconName: "Scale" as const,
    title: "Ethics Frameworks That Scale",
    description:
      "Building approaches to algorithmic fairness and responsible AI that work in production environments, not just PowerPoint decks.",
  },
  {
    iconName: "GraduationCap" as const,
    title: "Executive Education & Workshops",
    description:
      "Equipping leadership teams, product managers, and technical staff with shared language and strategic frameworks tailored to your challenges.",
  },
  {
    iconName: "Users" as const,
    title: "Civil Rights & Impact Assessments",
    description:
      "Identifying potential disparate impacts and algorithmic harms before they become headlines. Rigorous analysis paired with practical remediation strategies.",
  },
  {
    iconName: "Presentation" as const,
    title: "Expert Briefings",
    description:
      "Educational talks tailored to your audience\u2014whether board members, technical teams, or industry conferences. Complex topics made digestible and actionable.",
  },
] as const;

export const CONSULTING_OUTCOMES = [
  "First EU Algorithmic Transparency Report",
  "Company-wide Civil Rights Assessment",
  "Operational fairness frameworks",
  "Regulatory-ready governance",
] as const;

export const CONSULTING_HERO = {
  subtitle: "Strategic Advisory",
  headingLine1: "Translating AI Policy",
  headingAccent: "Into Business Strategy",
  description:
    "Strategic clarity for organizations navigating the messy reality of AI implementation\u2014where ethics, regulation, competitive advantage, and risk all collide.",
  ctaText: "Start a Conversation",
} as const;

export const CONSULTING_SECTIONS = {
  process: {
    heading: "What You Get",
    description:
      "Sean works with organizations navigating the messy reality of AI implementation\u2014where ethics, regulation, competitive advantage, and risk all collide. His approach combines regulatory insight, strategic thinking, and practical experience.",
    callouts: [
      {
        title: "Ethical Clarity in Ambiguous Situations",
        description:
          "Sean specializes in the gray areas\u2014the ethical questions that don\u2019t have obvious answers. He helps organizations think through tradeoffs and make defensible decisions when there\u2019s no perfect option.",
      },
      {
        title: "Regulatory Foresight, Not Just Compliance",
        description:
          "Understanding what\u2019s coming next in AI policy\u2014and positioning your organization to adapt proactively. Sean tracks regulatory developments globally and translates them into strategic implications.",
      },
      {
        title: "Implementation Experience, Not Just Theory",
        description:
          "Sean doesn\u2019t just advise\u2014he\u2019s built these systems. From creating transparency frameworks at scale to designing academic programs, he brings a practitioner\u2019s perspective.",
      },
    ],
  },
  offerings: {
    heading: "Core Offerings",
    subtitle:
      "Sean helps organizations move from compliance checkboxes to genuine accountability\u2014combining regulatory foresight, operational design, and stakeholder engagement.",
  },
  caseStudy: {
    label: "Featured Work",
    heading: "Uber AI Transparency Report",
    description:
      "As Global Head of AI & Fairness Policy at Uber, Sean created the company\u2019s first EU Algorithmic Transparency Report\u2014a comprehensive public accounting of how algorithms shape platform decisions. As a core team member on Uber\u2019s first Civil Rights Assessment, he helped translate abstract principles of fairness into concrete practices.",
    attribution: "\u2014 Uber Technologies",
  },
  cta: {
    heading: "Let\u2019s Work Together",
    description:
      "Whether you need strategic guidance on AI governance, executive education for your team, or help making complex policy accessible, Sean brings a practitioner\u2019s perspective to every engagement.",
    primaryButtonText: "Start a Conversation",
    secondaryButtonText: "View Speaking",
  },
} as const;

// =============================================================================
// COACHING CONTENT (additional - offerings/client types already above)
// =============================================================================

export const COACHING_HERO = {
  subtitle: "Executive Coaching",
  headingLine1: "Coaching leaders and executives both",
  headingAccent: "professionally and personally.",
  ctaText: "Let\u2019s Talk",
} as const;

export const COACHING_PROCESS = {
  heading: "How We Work",
  paragraphs: [
    "1:1 coaching engagements typically run 3-6 months with biweekly sessions. Between sessions, you\u2019re implementing\u2014I\u2019m available for real-time challenges as they emerge.",
    "Group Coaching for groups of executives adopting, implementing with AI or managing teams through technological change.",
    "As a certified executive coach with practitioner experience designing AI governance for global operations, advising Congress on algorithmic accountability, and teaching AI ethics at Vanderbilt Law, I bring both coaching methodology and hard-won expertise to leadership challenges that are fundamentally unprecedented. Also, as a leader and executive that has navigated personal and professional transitions, I work with you to achieve success in the face of challenging changes.",
  ],
} as const;

export const COACHING_CTA = {
  heading: "Let\u2019s Talk",
  subtext:
    "Let\u2019s have a conversation about whether this is right for what you\u2019re navigating.",
  primaryButtonText: "Schedule a Conversation",
  secondaryButtonText: "View Consulting",
} as const;

// =============================================================================
// ABOUT PAGE
// =============================================================================

export const ABOUT_PAGE = {
  header: {
    heading: "About Sean",
    subtitle:
      "Bridging the gap between technological innovation and responsible governance to help organizations harness AI\u2019s potential.",
  },
  bio: [
    // First paragraph uses ABOUT_CONTENT.bio (already centralized above)
    "His career spans Capitol Hill, Silicon Valley, and law school classrooms. As Counsel to the late Congressman Elijah Cummings, Sean advised on the early regulatory debates that shaped how Congress thinks about facial recognition, algorithmic accountability, and technology governance.",
    "What distinguishes Sean\u2019s work is his ability to move fluidly between worlds that rarely speak the same language. He\u2019s equally comfortable briefing C-suite executives, testifying before lawmakers, or teaching first-year law students.",
  ],
  bioNewsletterText:
    "Beyond consulting and teaching, Sean writes and speaks about AI\u2019s broader implications through",
  bioNewsletterLinkText: "The Human Cost",
  bioNewsletterSuffix:
    ", a platform examining what happens when algorithms increasingly mediate human relationships, decision-making, and social connection.",
  approach: {
    heading: "My Approach",
    paragraphs: [
      "Sean doesn\u2019t offer easy answers to hard questions. Instead, he provides frameworks for thinking through complexity, anticipating where regulation is headed, and making decisions that balance innovation with accountability.",
      'His clients describe him as \u201Crefreshingly pragmatic\u201D about ethics\u2014someone who understands that perfect solutions rarely exist, but better decisions always do.',
      "Sean specializes in the gray areas\u2014the ethical questions that don\u2019t have obvious answers. He helps organizations think through tradeoffs, anticipate stakeholder concerns, and make defensible decisions when there\u2019s no perfect option.",
    ],
  },
  quote: "Perfect solutions rarely exist, but better decisions always do.",
  cta: {
    heading: "Let\u2019s Work Together",
    subtext:
      "Ready to navigate AI policy with confidence? Let\u2019s discuss how I can help your organization lead responsibly.",
    buttonText: "Get in Touch",
  },
} as const;

// =============================================================================
// CONTACT PAGE
// =============================================================================

export const CONTACT_PAGE = {
  header: {
    heading: "Get in Touch",
    subtitle:
      "Ready to discuss how AI policy and governance consulting can help your organization? Reach out below.",
  },
  intro:
    "Whether you\u2019re exploring a speaking engagement, seeking strategic consulting, or have questions about AI governance, I\u2019d love to hear from you. Fill out the form below and let\u2019s start a conversation.",
  calendly: {
    text: "Prefer to schedule directly?",
    buttonText: "Book a Call on Calendly",
  },
  faqHeading: "What to Expect",
} as const;

// =============================================================================
// NEWSLETTER PAGE
// =============================================================================

export const NEWSLETTER_PAGE = {
  label: "Newsletter",
  heading: "The Human Cost",
  subtitle: "AI\u2019s Impact on What Makes Us Human",
  description: [
    "Through **The Human Cost**, Sean explores what most AI policy discussions ignore: the deeper implications of living in an AI-mediated world. What happens to trust, relationships, and human agency when algorithms increasingly shape our choices?",
    "Combining personal narrative with policy analysis, this platform asks uncomfortable questions about technology\u2019s role in society\u2014and what we might be losing in our rush toward automation.",
  ],
  subscribe: {
    heading: "Subscribe",
    subtitle:
      "Receive essays, insights, and provocations at the intersection of technology and humanity.",
  },
  aboutLink: {
    text: "Want to learn more about Sean\u2019s background and work?",
    linkText: "Read his full bio",
  },
} as const;

// =============================================================================
// SERVICES PAGE
// =============================================================================

export const SERVICES_PAGE = {
  header: {
    heading: "Services",
    subtitle:
      "Strategic guidance for organizations navigating the intersection of AI innovation and responsible governance.",
  },
  approach: {
    heading: "A Practitioner\u2019s Perspective",
    paragraphs: [
      "Sean doesn\u2019t offer easy answers to hard questions. Instead, he provides frameworks for thinking through complexity, anticipating where regulation is headed, and making decisions that balance innovation with accountability.",
      "Whether you need a keynote that cuts through AI hype or strategic consulting on governance frameworks, Sean brings unusual breadth\u2014policy expertise, strategic foresight, and hands-on implementation experience.",
    ],
  },
  quote: "Perfect solutions rarely exist, but better decisions always do.",
  cta: {
    heading: "Let\u2019s Work Together",
    subtext:
      "Whether you need strategic guidance on AI governance, executive education for your team, or a speaker who can make complex policy accessible, Sean brings a practitioner\u2019s perspective to every engagement.",
    buttonText: "Start a Conversation",
  },
} as const;
