/**
 * PLACEHOLDER CONTENT FOR MOCKUPS
 * All content below is intentionally generic and needs to be replaced with real information.
 * Key items requiring confirmation with Sean before launch:
 * - credibility.title & subtitle (current role/background)
 * - credibility.logos (media appearances)
 * - testimonial (need real client quote)
 */
export const mockupData = {
  hero: {
    name: "Sean Perryman",
    title: "Speaker. Consultant. Strategist.",
    tagline: "Where AI Policy Meets Real-World Impact",
    primaryCTA: "Schedule a Consultation",
    secondaryCTA: "View Speaking",
    image: "/images/headshots/sean-hero.jpg",
  },
  credibility: {
    title: "First Global Head of AI Policy at Uber",
    subtitle: "Former Congressional Counsel",
    logos: ["Vanderbilt AI Symposium", "SXSW", "AI Action Summit", "POLITICO"],
  },
  focusAreas: [
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
  ],
  about: {
    bio: "Sean Perryman works at the intersection of AI policy, corporate strategy, and ethical implementation—helping organizations navigate one of the most consequential technology transitions of our time. His career spans Capitol Hill, Silicon Valley, and law school classrooms. He translates congressional intent for engineers, explains technical constraints to policymakers, and helps executives understand when ethical concerns are actually business risks in disguise.",
    image: "/images/headshots/sean-about.jpg",
  },
  // TODO: ❌ PLACEHOLDER TESTIMONIAL - Need real testimonial from client
  // Current content: "J. Smith", "Technology Executive", "Enterprise Client" are all fake
  testimonial: {
    quote:
      "Sean's guidance was instrumental in shaping our AI governance strategy. His ability to translate complex policy considerations into actionable frameworks helped us move confidently into AI adoption while maintaining stakeholder trust.",
    author: "J. Smith", // ❌ PLACEHOLDER
    role: "Technology Executive", // ❌ PLACEHOLDER
    company: "Enterprise Client", // ❌ PLACEHOLDER
  },
  cta: {
    headline: "Let's Work Together",
    subtext:
      "Whether you need strategic guidance on AI governance, executive education for your team, or a speaker who can make complex policy accessible, Sean brings a practitioner's perspective to every engagement.",
    buttonText: "Get in Touch",
  },
};

export const typographyConfig = {
  "1": {
    heading: "Cormorant Garamond",
    body: "Inter",
    headingSample: "Bridging Innovation",
    bodySample: "Strategic advisory for responsible AI governance.",
    style: "Elegant editorial serif + Swiss-style sans",
  },
  "2": {
    heading: "DM Sans",
    body: "DM Sans",
    headingSample: "Bridging Innovation",
    bodySample: "Strategic advisory for responsible AI governance.",
    style: "Clean geometric sans throughout",
  },
  "3": {
    heading: "Lora",
    body: "Nunito",
    headingSample: "Bridging Innovation",
    bodySample: "Strategic advisory for responsible AI governance.",
    style: "Warm serif + rounded sans",
  },
  "4": {
    heading: "Space Grotesk",
    body: "Space Grotesk",
    headingSample: "Bridging Innovation",
    bodySample: "Strategic advisory for responsible AI governance.",
    style: "Bold geometric sans",
  },
  "5": {
    heading: "Fraunces",
    body: "Libre Franklin",
    headingSample: "Bridging Innovation",
    bodySample: "Strategic advisory for responsible AI governance.",
    style: "Distinctive serif + editorial sans",
  },
} as const;

export const mockupMeta = [
  {
    id: "1",
    name: "Editorial Minimal",
    description: "Clean, restrained, editorial quality",
    vibe: "Prestigious policy journal",
    colors: {
      primary: "#FAFAFA",
      secondary: "#1A1A1A",
      accent: "#4A90A4",
    },
    typography: typographyConfig["1"],
  },
  {
    id: "2",
    name: "Modern Executive",
    description: "Polished, contemporary professional",
    vibe: "McKinsey partner",
    colors: {
      primary: "#FFFFFF",
      secondary: "#0F172A",
      accent: "#0EA5E9",
    },
    typography: typographyConfig["2"],
  },
  {
    id: "3",
    name: "Warm Authority",
    description: "Authoritative but inviting",
    vibe: "Trusted advisor",
    colors: {
      primary: "#FAF7F2",
      secondary: "#2D2A26",
      accent: "#C75B39",
    },
    typography: typographyConfig["3"],
  },
  {
    id: "4",
    name: "Bold & Confident",
    description: "Strong visual presence",
    vibe: "Thought leader",
    colors: {
      primary: "#111111",
      secondary: "#FFFFFF",
      accent: "#3B82F6",
    },
    typography: typographyConfig["4"],
  },
  {
    id: "5",
    name: "Editorial Dark",
    description: "Dark hero, alternating sections, sophisticated palette",
    vibe: "Rumman Chowdhury",
    colors: {
      primary: "#F5F3F0",
      secondary: "#1B2D38",
      accent: "#9B8579",
    },
    typography: typographyConfig["5"],
  },
];
