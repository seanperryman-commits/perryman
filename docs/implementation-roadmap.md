# Sean Perryman Advisory — Implementation Roadmap

A phased plan to go from current mockup state to production-ready site.

---

## Current State Assessment

### What Exists
| Category | Status | Notes |
|----------|--------|-------|
| Design mockups | 5 variations | Hybrid direction chosen (Mockup 2 hero + Mockup 3 typography) |
| Design spec | Complete | `/docs/design-spec.md` has full implementation details |
| Content template | Complete | `/docs/content-request.md` ready for client |
| UI components | Built | Button, Card, Container, Section in `/components/ui/` |
| Layout components | Built (outdated) | Header, Footer, Navigation need updates for new design |
| Page routes | Stubbed | `/`, `/about`, `/services`, `/services/[slug]`, `/contact` exist as placeholders |
| Theme (globals.css) | Outdated | Uses old colors/fonts, needs update to hybrid spec |
| Animations | Ready | `/styles/animations.ts` has variants |
| Placeholder content | Ready | `mockupData.ts` has content structure |

### What's Missing
| Item | Blocking? | Owner |
|------|-----------|-------|
| Professional headshot | Yes (for polish) | Client |
| Bio copy | Yes (for launch) | Client |
| Testimonial(s) | Yes (for credibility) | Client |
| Client logos | No (can skip initially) | Client |
| Calendly URL | Yes (for CTA) | Client |
| Social links | Low priority | Client |

---

## Phase Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 1: Foundation Setup                                      │
│  Theme, typography, base components aligned to design spec      │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 2: Homepage Build (Placeholder Content)                  │
│  All homepage sections with mockup data                         │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 3: Secondary Pages (Placeholder Content)                 │
│  About, Services, Speaking, Contact pages                       │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 4: Content Integration                                   │
│  Swap placeholders for real client content                      │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 5: Polish & QA                                           │
│  Performance, accessibility, cross-browser, mobile              │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 6: Launch                                                │
│  Remove middleware, DNS, final checks                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Foundation Setup

**Goal:** Align all base styles and components with the approved design spec.

### 1.1 Update Theme (globals.css)

Update `/app/globals.css` `@theme {}` block with design spec colors:

```css
@theme {
  /* Backgrounds */
  --color-background: #FAFAF8;
  --color-background-dark: #0F172A;
  --color-background-dark-end: #1e293b;

  /* Text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4a4a4a;
  --color-text-muted: #6b7280;
  --color-on-dark: #FFFFFF;
  --color-on-dark-muted: #94a3b8;

  /* Accent */
  --color-accent: #0EA5E9;
  --color-accent-hover: #0284c7;
  --color-accent-light: rgba(14, 165, 233, 0.1);

  /* UI */
  --color-border: #e5e7eb;
  --color-card: #FFFFFF;
  --color-card-shadow: rgba(0, 0, 0, 0.08);

  /* Typography */
  --font-heading: var(--font-lora);
  --font-body: var(--font-nunito);

  --text-hero: clamp(2.5rem, 5vw, 4rem);
  --text-h1: clamp(2rem, 4vw, 3rem);
  --text-h2: clamp(1.5rem, 3vw, 2.25rem);
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);
  --text-body: clamp(1rem, 1.5vw, 1.125rem);
  --text-small: clamp(0.875rem, 1vw, 0.9375rem);
}
```

### 1.2 Update Font Loading (layout.tsx)

Replace current fonts with Lora + Nunito:

```tsx
import { Lora, Nunito } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-lora',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-nunito',
  display: 'swap',
});

// Apply to <html>: className={`${lora.variable} ${nunito.variable}`}
```

### 1.3 Update Button Component

Update `/components/ui/Button.tsx` to use new color tokens:

- Primary: `bg-accent text-white hover:bg-accent-hover`
- Secondary (light bg): `border-accent text-accent hover:bg-accent hover:text-white`
- Secondary (dark bg): `border-white text-white hover:bg-white hover:text-background-dark`
- Add shadow on hover: `hover:shadow-lg hover:shadow-accent/25`
- Standardize radius to `rounded-md` (6px)

### 1.4 Update Section Component

Ensure Section component supports:
- `background="light"` → `bg-background`
- `background="dark"` → `bg-background-dark` with text-on-dark
- Proper container max-widths (1280px)
- Section padding: `py-16 md:py-20`

### 1.5 Update Header Component

- Make sticky with scroll behavior (`sticky top-0 z-50`)
- Add backdrop blur on scroll: `bg-background/80 backdrop-blur-md shadow-sm`
- Update CTA button to filled accent style
- Update colors to use new tokens
- Change logo text to "Sean Perryman"

### 1.6 Update Footer Component

- Light background (`bg-background`)
- Use muted text colors
- Add social icon links (LinkedIn, Twitter/X)
- Simple layout: copyright, nav links, social

### 1.7 Verify Animation Variants

Confirm `/styles/animations.ts` has these variants ready:
- `fadeIn`
- `fadeInUp`
- `staggerContainer`
- `scaleUp`
- `slideInLeft`
- `slideInRight`

**Deliverable:** Running `npm run dev` shows updated fonts, colors, and base components matching design spec.

---

## Phase 2: Homepage Build (Placeholder Content)

**Goal:** Complete homepage with all sections using placeholder content from `mockupData.ts`.

### 2.1 Create Homepage Section Components

Create these files in `/components/sections/`:

| Component | Description |
|-----------|-------------|
| `HeroSection.tsx` | Dark navy, split layout, photo right |
| `ServicesSection.tsx` | 3-card grid on light background |
| `AboutPreview.tsx` | Two-column, photo left, bio right |
| `TestimonialSection.tsx` | Dark box quote on light background |
| `CTASection.tsx` | Dark navy, centered headline + button |

### 2.2 HeroSection Implementation

Key requirements:
- Full-width dark navy background (`bg-background-dark`)
- Optional gradient: `bg-gradient-to-br from-background-dark to-background-dark-end`
- Split layout: text left (60%), photo right (40%)
- Min-height: `min-h-[90vh]`
- Photo: `rounded-lg shadow-2xl`
- Eyebrow text (optional): `text-accent uppercase tracking-wider`
- Headline: `text-hero font-heading font-semibold text-on-dark`
- Subheadline: `text-body text-on-dark-muted max-w-xl`
- Button row: Primary filled + Secondary outlined (white border on dark)
- Responsive: Stack on mobile (`flex-col lg:flex-row`)
- Animation: `fadeInUp` with stagger

### 2.3 ServicesSection Implementation

Key requirements:
- Light background (`bg-background`)
- Centered section title
- 3-column grid (`grid-cols-1 md:grid-cols-3 gap-8`)
- Card order: Public Speaking, Business Consulting, Executive Coaching
- Cards are clickable, linking to `/services/[slug]`
- Cards: White bg, soft shadow, hover lift (`hover:-translate-y-1 hover:shadow-xl`)
- Icon in accent color
- Card title: `font-heading font-semibold`
- Animation: staggered `fadeInUp`

### 2.4 AboutPreview Implementation

Key requirements:
- Light background
- Two-column grid (`lg:grid-cols-2 gap-12 items-center`)
- Photo left with rounded corners and shadow
- Right side: heading + 2-3 paragraph bio snippet
- Optional pull quote with left border accent
- "Learn More" link to About page
- Animation: `slideInLeft` for photo, `fadeInUp` for text

### 2.5 TestimonialSection Implementation

Key requirements:
- Light outer background
- Dark navy inner box (`bg-background-dark rounded-2xl p-8 md:p-12`)
- Quote icon in accent color
- Large quote text: `text-h3 md:text-h2 font-heading text-on-dark`
- Attribution: name, title, company in muted text
- Centered layout, max-width constraint
- Animation: `scaleUp`

### 2.6 CTASection Implementation

Key requirements:
- Full-width dark navy background (bookends with hero)
- Centered content (`text-center max-w-3xl mx-auto`)
- Headline: `text-h1 font-heading text-on-dark`
- Subtext in muted color
- Primary CTA button (filled accent)
- Animation: `fadeInUp`

### 2.7 Assemble Homepage

Update `/app/page.tsx`:

```tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
```

### 2.8 Create Placeholder Images

- Add placeholder images to `/public/images/` or continue using Unsplash URLs
- Ensure `next.config.ts` has Unsplash in `remotePatterns`

**Deliverable:** Complete homepage visually matching design spec with placeholder content. All sections animate on scroll.

---

## Phase 3: Secondary Pages (Placeholder Content)

**Goal:** Build out About, Services, Speaking, and Contact pages.

### 3.1 About Page (`/app/about/page.tsx`)

Sections:
1. **Page header** — Title + intro paragraph
2. **Bio section** — Full biography with photo (use design spec About section pattern)
3. **Career highlights** — Timeline or bulleted achievements (optional)
4. **Pull quote** — Highlighted quote with accent border
5. **CTA** — Link to contact

### 3.2 Services Overview Page (`/app/services/page.tsx`)

Sections:
1. **Page header** — "Services" title + intro paragraph
2. **Services grid** — Same 3-card layout from homepage, each card links to its detail page
3. **"Who I Work With"** — Description of ideal clients
4. **CTA** — Encourage contact

**Service cards link to:**
- `/services/public-speaking`
- `/services/business-consulting`
- `/services/executive-coaching`

### 3.3 Service Detail Pages (Required)

Create dynamic route `/app/services/[slug]/page.tsx` or individual pages:
- `/app/services/public-speaking/page.tsx`
- `/app/services/business-consulting/page.tsx`
- `/app/services/executive-coaching/page.tsx`

**Each detail page includes:**
1. **Page header** — Service title + hero description
2. **Service overview** — What this service is about
3. **What's included** — Bullet list of deliverables
4. **Who it's for** — Ideal client description
5. **Outcomes** — Expected results
6. **Related services** — Links to other two services
7. **CTA** — Contact to discuss this service

**Access paths for service detail pages:**
1. Click service card on homepage `/`
2. Click service card on services overview `/services`
3. Direct URL navigation (e.g., `/services/public-speaking`)

### 3.5 Contact Page (`/app/contact/page.tsx`)

Sections:
1. **Page header** — "Get in Touch"
2. **Contact form** — Name, email, message fields
3. **Alternative contact** — Email address, Calendly link
4. **Social links** — LinkedIn, Twitter/X

**Form implementation:**
- Use existing `/components/forms/ContactForm.tsx`
- Ensure Netlify attributes: `data-netlify="true"`, hidden `form-name` input
- Simple validation (required fields)
- Success state after submission

### 3.6 Update Navigation

Ensure `/lib/constants.ts` matches page structure:

```ts
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

// Contact is handled separately as emphasized CTA button in header
export const NAV_CTA = { label: "Contact", href: "/contact" };

export const SERVICES = [
  { slug: "public-speaking", label: "Public Speaking", icon: "mic" },
  { slug: "business-consulting", label: "Business Consulting", icon: "briefcase" },
  { slug: "executive-coaching", label: "Executive Coaching", icon: "users" },
];
```

**Header Navigation Pattern:**
- Nav links: Home, About, Services (regular links)
- Contact: Emphasized CTA button (filled accent style per design spec)

**Deliverable:** All pages accessible, styled consistently, using placeholder content.

---

## Phase 4: Content Integration

**Goal:** Replace all placeholder content with real client-provided content.

### 4.1 Receive Client Content

Use `/docs/content-request.md` as checklist. Priority items:
1. Primary headshot
2. Hero headline + tagline
3. Service card titles and descriptions
4. Bio snippet (about preview)
5. One testimonial
6. Calendly URL

### 4.2 Create Content Data File

Create `/lib/content.ts` to centralize all copy:

```ts
export const siteContent = {
  hero: {
    name: "Sean Perryman",
    title: "AI Policy & Governance Advisor",
    headline: "...",
    tagline: "...",
    primaryCTA: "Schedule a Consultation",
    secondaryCTA: "View Speaking",
  },
  services: [...],
  about: {...},
  testimonial: {...},
  // etc.
};
```

### 4.3 Replace Placeholder Images

- Add real headshot to `/public/images/headshot.jpg`
- Add secondary photos as provided
- Update all Image components with proper `alt` text
- Ensure proper sizing for performance

### 4.4 Update Components to Use Real Content

- Import from `/lib/content.ts`
- Remove mockupData.ts references
- Update any hardcoded strings

### 4.5 Add Calendly Integration

Options:
1. **Simple link** (preferred): Button links to external Calendly page
2. **Embed** (if requested): Inline embed with lazy loading

**Deliverable:** Site displays real client content throughout.

---

## Phase 5: Polish & QA

**Goal:** Production-ready quality across all dimensions.

### 5.1 Performance Optimization

- [ ] Run Lighthouse audit, target >90 performance score
- [ ] Ensure all images use `next/image` with proper sizing
- [ ] Add `priority` to hero image
- [ ] Check for layout shift (CLS < 0.1)
- [ ] Lazy load below-fold images

### 5.2 Accessibility Audit

- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA
- [ ] Images have descriptive alt text
- [ ] Form inputs have labels
- [ ] Skip link for main content (optional)

### 5.3 Responsive Testing

Test at breakpoints:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px - 1440px)
- [ ] Large desktop (1920px+)

Specific checks:
- [ ] Hero stacks properly on mobile
- [ ] Mobile nav hamburger works
- [ ] Service cards stack on mobile
- [ ] Text remains readable at all sizes

### 5.4 Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### 5.5 Form Testing

- [ ] Contact form submits to Netlify
- [ ] Validation prevents empty submissions
- [ ] Success message displays after submit
- [ ] Form appears in Netlify dashboard

### 5.6 Animation Review

- [ ] All animations use `once: true`
- [ ] No janky re-animations on scroll
- [ ] Reduced motion preference respected
- [ ] Animations don't cause layout shift

### 5.7 Build Verification

```bash
npm run build   # Must pass without errors
npm run lint    # Fix any linting issues
npx tsc --noEmit  # Fix any type errors
```

**Deliverable:** Clean build, passing audits, cross-browser/device verified.

---

## Phase 6: Launch

**Goal:** Go live with the production site.

### 6.1 Pre-Launch Checklist

- [ ] All content finalized and approved
- [ ] All images optimized and in place
- [ ] Contact form tested on production
- [ ] Calendly link working
- [ ] Social links working
- [ ] 404 page exists
- [ ] Favicon set
- [ ] Meta tags/OG tags configured
- [ ] `npm run build` passes

### 6.2 Remove WIP Mode

1. Delete `/middleware.ts`
2. Update `/public/robots.txt`:
```
User-agent: *
Allow: /
```

### 6.3 Netlify Configuration

- [ ] Environment variables set (if any)
- [ ] Build settings correct
- [ ] Deploy previews enabled
- [ ] Form notifications configured

### 6.4 DNS & Domain

- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] www redirect configured (if applicable)

### 6.5 Post-Launch Verification

- [ ] Visit production URL
- [ ] Test all pages
- [ ] Submit contact form
- [ ] Check Netlify dashboard for form submission
- [ ] Run Lighthouse on production

### 6.6 Handoff

- [ ] Share production URL with client
- [ ] Provide Netlify login (if client needs access)
- [ ] Document any ongoing maintenance needs

---

## Appendix: Task Breakdown for Development

### Phase 1 Tasks (Foundation)
1. Update `globals.css` with design spec theme
2. Update `layout.tsx` with Lora + Nunito fonts
3. Update Button component styles
4. Update Section component for dark/light variants
5. Update Header with sticky scroll behavior
6. Update Footer with new design
7. Test all components render correctly

### Phase 2 Tasks (Homepage)
1. Create HeroSection component
2. Create ServicesSection component
3. Create AboutPreview component
4. Create TestimonialSection component
5. Create CTASection component
6. Assemble homepage with all sections
7. Test responsive behavior
8. Test animations

### Phase 3 Tasks (Secondary Pages)
1. Build About page
2. Build Services overview page
3. Build Service detail pages (public-speaking, business-consulting, executive-coaching)
4. Build Contact page with form
5. Update navigation (Contact as emphasized CTA button)
6. Test all page routes including service slugs

### Phase 4 Tasks (Content)
1. Receive and organize client content
2. Create content data file
3. Add real images to public folder
4. Update all components with real content
5. Final content review with client

### Phase 5 Tasks (QA)
1. Lighthouse audit and fixes
2. Accessibility audit and fixes
3. Responsive testing
4. Cross-browser testing
5. Form testing
6. Animation polish
7. Build verification

### Phase 6 Tasks (Launch)
1. Pre-launch checklist review
2. Remove middleware
3. Update robots.txt
4. Configure Netlify
5. DNS/domain setup
6. Post-launch verification
7. Client handoff

---

## Dependency Notes

- **Phase 2 requires Phase 1** — Can't build sections without theme/components
- **Phase 3 can parallel Phase 2** — Secondary pages independent of homepage
- **Phase 4 blocks on client** — Need real content before integration
- **Phase 5 can start after Phase 2/3** — QA on placeholder content is valid
- **Phase 6 requires all phases** — Launch needs everything complete

---

*Document created January 2026*
