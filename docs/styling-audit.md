# Website Styling Audit Report

**Date:** 2026-01-18
**Auditor:** Claude (automated)
**Spec Reference:** `/docs/design-spec.md`

---

## Executive Summary

The site demonstrates **strong spec compliance** overall with a well-implemented Tailwind v4 theme system and consistent animation patterns. The design system fundamentals are solid: colors, typography scale, and spacing tokens match the specification exactly.

However, there are **template fatigue risks** across interior pages—About, Services, and Contact all share an identical dark page header pattern, and the two-column "text left/content right" layout repeats multiple times without variation. The Contact page in particular feels underdeveloped compared to other pages.

Key issues include: several undefined CSS classes in the ContactForm component, hardcoded color values in HeroSection bypassing the design system, inconsistent button padding specifications, and container padding that exceeds spec values. The home page achieves good visual differentiation with unique elements (credential chips, numbered cards, trust indicators), but interior pages would benefit from more distinctive treatments.

---

## 1. Spec Compliance Table

| Category | Status | Notes |
|----------|--------|-------|
| **Colors - Background** | PASS | All values match spec exactly: `#FAFAF8`, `#0F172A`, `#1e293b` |
| **Colors - Text** | PASS | Primary `#1A1A1A`, secondary `#4a4a4a`, muted `#6b7280` |
| **Colors - Accent** | PASS | `#0EA5E9` with hover state `#0284c7` |
| **Typography - Fonts** | PASS | Lora (serif) + Nunito (sans) via next/font/google |
| **Typography - Scale** | PASS | Fluid clamp values match spec |
| **Typography - Line Height** | PASS | 1.2 tight, 1.5 normal, 1.75 relaxed |
| **Spacing - Sections** | PASS | `py-16 md:py-20` (md), `py-24 md:py-32` (xl) |
| **Spacing - Cards** | PASS | `p-8` padding throughout |
| **Spacing - Grids** | PASS | `gap-8` for cards, `gap-12` for two-column |
| **Layout - Container** | PARTIAL | Spec says `px-6 md:px-8`; implementation uses `px-6 md:px-12 lg:px-16` |
| **Animations** | PASS | 0.5s duration, ease-out `[0.4, 0, 0.2, 1]`, `once: true` |
| **Buttons - Primary** | PARTIAL | Spec: `px-8 py-4`; implementation uses height-based sizing |
| **Focus States** | PASS | 2px accent outline with 2px offset |
| **Reduced Motion** | PASS | Media query properly implemented |

---

## 2. Component-Level Audit

### Buttons (`components/ui/Button.tsx`)

**Variants:** PASS - Primary, secondary, ghost all present
**Sizing:** PARTIAL - Uses height-based (`h-9`, `h-11`, `h-14`) vs spec's padding-based (`px-8 py-4`)
**States:**
- PASS Hover: lift + shadow on primary, bg change on secondary
- PASS Focus: ring-2 ring-accent ring-offset-2
- PASS Disabled: opacity-50, pointer-events-none
- PARTIAL Active state not explicitly defined

**Issues:**
- Spec: `px-8 py-4` for primary buttons
- Implementation: `h-11 px-7` (md), `h-14 px-8` (lg)
- Horizontal padding is close, but vertical differs due to height approach

### Navigation (`components/layout/Header.tsx`)

**Styling:** PASS - Matches spec
- Sticky positioning with `bg-background/80 backdrop-blur-md`
- Shadow appears on scroll
- Desktop/mobile breakpoint at `md`

**Mobile Menu:** PASS
- Smooth expand/collapse via `max-h` transition
- Focus trap and ESC key handling via `useMobileNav` hook

**Issue:** None significant

### Cards (Service cards, feature cards)

**Styling:** PASS - Generally matches spec
- `rounded-xl` or `rounded-lg` consistently
- `p-8` padding
- `shadow-lg` with `hover:shadow-xl`
- Hover lift: `hover:-translate-y-1`

**Deviation:**
- Homepage service cards have `border-t-4 border-accent` — not in spec but intentional differentiation
- Middle card emphasis with `md:scale-[1.02]` — creative addition

### Forms (`components/forms/ContactForm.tsx`)

**Critical Issues:**
```tsx
// Line 39, 66-67, 75, etc.
className="... text-foreground ..."  // undefined
className="... border-muted ..."     // undefined
className="... text-h3 ..."          // undefined
```

These should be:
- `text-foreground` → `text-text-primary`
- `border-muted` → `border-border`
- `text-h3` → `text-[length:var(--text-h3)]`

**Input styling:** Generally good
- Consistent border radius (`rounded-lg`)
- Focus states with accent color

### Footer (`components/layout/Footer.tsx`)

PASS - Matches spec
- 3-column layout
- Proper spacing and typography
- Social icons from lucide-react

---

## 3. Page-by-Page Differentiation Audit

### Home Page

**Differentiation Score: 4/5**

**Unique Visual Elements:**
1. Hero with gradient background (`from-slate-950 via-slate-900`) and radial glow
2. Floating credential chips on hero image
3. Service cards with numbered badges and top accent border
4. Credentials strip in About preview (15+ Years, 500+ Leaders, etc.)
5. Trust indicators in CTA section

**Template Risk Flags:** None significant

**Purpose Served:** PASS - Establishes authority with credential chips, creates clear pathways via service cards

**Enhancement Opportunities:**
1. Add subtle texture or grain to hero background for more depth
2. Consider an animated stat counter for the trust indicators

---

### About Page

**Differentiation Score: 3/5**

**Unique Visual Elements:**
1. Career highlights 2x2 grid with icon cards
2. Philosophy quote in dark box (right column)

**Template Risk Flags:**
- ALERT: Dark page header identical to Services/Contact pages
- ALERT: Bio section (photo left, text right) repeats on Service Detail pages
- ALERT: Quote box treatment repeats on Services page

**Purpose Served:** Partially — humanizes somewhat but feels more like "another information page"

**Enhancement Opportunities:**
1. Add a timeline or visual career journey instead of static cards
2. Include a more personal element (values, interests, approach philosophy as pull-out callouts)

---

### Services Page

**Differentiation Score: 3/5**

**Unique Visual Elements:**
1. Three-column service card grid
2. "Holistic Approach" section with light quote box

**Template Risk Flags:**
- ALERT: Same dark page header as About/Contact
- ALERT: Layout nearly mirrors About page (text left, quote right)
- ALERT: Generic 3-card grid pattern

**Purpose Served:** PASS - Organizes offerings clearly with visual hierarchy

**Enhancement Opportunities:**
1. Add visual connecting elements between services (arrows, flow diagram)
2. Include "most popular" or recommendation badges to guide decision-making

---

### Service Detail Pages (`/services/[slug]`)

**Differentiation Score: 4/5**

**Unique Visual Elements:**
1. Overview image with slide-in animation
2. "What to Expect" features 2x2 grid
3. Case study dark box — unique element not repeated elsewhere
4. Related services navigation buttons
5. CTA in contained dark box (vs full-width on other pages)

**Template Risk Flags:**
- ALERT: Features grid identical pattern to About page Career Highlights

**Purpose Served:** PASS - Detailed information hierarchy works well

**Enhancement Opportunities:**
1. Add testimonial specific to each service
2. Include FAQ accordion for common questions

---

### Contact Page

**Differentiation Score: 2/5**

**Unique Visual Elements:**
1. Calendly link box (minimal styling)

**Template Risk Flags:**
- CRITICAL: Same dark page header as all interior pages
- CRITICAL: Feels sparse compared to other pages
- CRITICAL: No visual warmth or approachability signals

**Purpose Served:** PARTIAL - Functional but not approachable

**Enhancement Opportunities:**
1. Add availability indicator or response time expectation
2. Include a short personal message/photo to humanize
3. Add location/timezone information
4. Consider a brief FAQ section ("What happens after I submit?")

---

## 4. Modern Design Pattern Verification

### Layout Patterns
| Pattern | Status | Notes |
|---------|--------|-------|
| Bento grid / asymmetric layouts | PARTIAL | Only standard grids used |
| Generous whitespace | PASS | Good use of section padding |
| Full-bleed sections with contained content | PASS | Dark sections work well |
| Scroll-based reveals | PASS | Framer Motion animations |

### Visual Treatments
| Pattern | Status | Notes |
|---------|--------|-------|
| Subtle gradients/textures | PARTIAL | Hero has gradient; CTA has grid pattern; could add more |
| Modern border-radius | PASS | `rounded-lg`, `rounded-xl` — not over-rounded |
| Blur/glass effects | PASS | Header backdrop blur, credential chips |
| High-quality image treatments | PASS | Proper aspect ratios, shadows |

### Micro-interactions
| Pattern | Status | Notes |
|---------|--------|-------|
| Smooth transitions | PASS | `transition-all duration-300` |
| Hover states | PASS | Lift effects, color changes |
| Scroll-triggered animations | PASS | Using `whileInView` with `once: true` |
| Loading states | PASS | Form has submitting state |

### Typography Trends
| Pattern | Status | Notes |
|---------|--------|-------|
| Variable/modern fonts | PASS | Lora + Nunito via Google Fonts |
| Weight hierarchy | PASS | semibold headings, regular body |
| Pull quotes/statement text | PASS | Testimonial, philosophy quote |
| Typographic details | PASS | Smart quotes used (`&ldquo;`) |

---

## 5. Anti-Template Checklist

| Issue | Status | Location | Recommendation |
|-------|--------|----------|----------------|
| Hero sections all identical height/layout | ALERT | About, Services, Contact share identical page header | Vary header treatments: different heights, add patterns, or use hero image on some |
| Every section alternates image-left/image-right | ALERT | About bio, Service details | Mix in full-width text or centered layouts |
| Uniform 3-column card grids everywhere | OK | Only on Services page | Appropriate use |
| Same CTA button styling in every section | OK | Consistent by design | Intentional |
| Identical padding/margin on all sections | MINOR | Most sections use same padding | Add occasional `padding="xl"` for emphasis |
| No visual "moments" or focal points | OK | Hero credential chips, testimonial | Good differentiation |
| Testimonials look copy-pasted | N/A | Single testimonial | N/A |
| Icon style inconsistent | OK | All lucide-react | Consistent |

---

## 6. Code Quality Issues

### Critical: Undefined CSS Classes

**File:** `components/forms/ContactForm.tsx`

```tsx
// Lines 39, 66-67, 75, 84-85, 92, 100-101, 108, 119-120, 129
className="... text-foreground ..."  // Should be text-text-primary
className="... border-muted ..."     // Should be border-border
className="... text-h3 ..."          // Should be text-[length:var(--text-h3)]
```

### !important Usage

**File:** `components/sections/CTASection.tsx:67`
```tsx
className="... !text-white"  // Avoid !important
```

**File:** `app/about/page.tsx:143`, `app/services/[slug]/ServiceDetailContent.tsx:142,224`
```tsx
className="!bg-[#f8f8f6]"  // Should use design token
```

### Hardcoded Values Bypassing Design System

**File:** `components/sections/HeroSection.tsx:15`
```tsx
// Uses slate-* colors instead of design system
className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
// Should reference --color-background-dark
```

**File:** `components/sections/HeroSection.tsx:80`
```tsx
// Hardcoded shadow
className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]"
// Consider adding to design system as --shadow-hero
```

### Spec Deviation: Container Padding

**File:** `components/ui/Container.tsx:21-22`
```tsx
// Current
className="mx-auto w-full px-6 md:px-12 lg:px-16"
// Spec says
className="max-w-7xl mx-auto px-6 md:px-8"
```

This isn't necessarily wrong but deviates from spec. The current approach gives more horizontal padding on larger screens.

---

## 7. Priority Issue List (Top 10)

| # | Issue | Impact | Location | Fix |
|---|-------|--------|----------|-----|
| 1 | Undefined CSS classes in ContactForm | HIGH | `ContactForm.tsx:39,66,75,etc.` | Replace `text-foreground` → `text-text-primary`, `border-muted` → `border-border` |
| 2 | Contact page lacks visual differentiation | HIGH | `app/contact/page.tsx` | Add personal element, availability info, warm touches |
| 3 | Identical page headers across 4 pages | MEDIUM | About, Services, Contact, Service Details | Vary treatments or add unique elements per page |
| 4 | `!important` overrides | MEDIUM | `CTASection.tsx:67` | Remove `!text-white`, fix specificity properly |
| 5 | Hardcoded `!bg-[#f8f8f6]` | MEDIUM | About, Service Detail | Add as `--color-background-alt` token |
| 6 | HeroSection uses hardcoded slate colors | MEDIUM | `HeroSection.tsx:15` | Reference design system colors |
| 7 | Button padding differs from spec | LOW | `Button.tsx:29-33` | Consider adjusting to spec's `px-8 py-4` |
| 8 | Container padding exceeds spec | LOW | `Container.tsx:21-22` | Intentional choice; document deviation |
| 9 | Service cards top border not in spec | LOW | `ServicesSection.tsx:57` | Intentional differentiation; OK to keep |
| 10 | Missing active button state | LOW | `Button.tsx` | Add `:active` styles for tactile feedback |

---

## 8. Quick Wins (High Impact, Low Effort)

### 1. Fix ContactForm Undefined Classes
**Effort:** 5 min | **Impact:** Eliminates potential runtime issues

```tsx
// ContactForm.tsx - Replace all instances:
- text-foreground → text-text-primary
- border-muted → border-border
- text-h3 → text-[length:var(--text-h3)]
```

### 2. Add Background Alt Token
**Effort:** 2 min | **Impact:** Eliminates !important overrides

```css
/* globals.css @theme block */
--color-background-alt: #f8f8f6;
```

Then replace `!bg-[#f8f8f6]` with `bg-background-alt`.

### 3. Remove !important from CTASection
**Effort:** 1 min | **Impact:** Better CSS hygiene

```tsx
// CTASection.tsx:67
- className="... !text-white"
+ className="... text-white"
```
The `!text-white` is unnecessary since Section already applies `text-white` on dark backgrounds.

### 4. Add Page-Specific Header Variation to Contact
**Effort:** 10 min | **Impact:** Breaks template pattern

Add a personal message or smaller secondary text with availability:
```tsx
<motion.p variants={fadeInUp} className="mt-4 text-sm text-text-on-dark-muted">
  I typically respond within 24 hours
</motion.p>
```

### 5. Document Container Padding Deviation
**Effort:** 1 min | **Impact:** Clarifies intentional decision

Add comment in `Container.tsx`:
```tsx
// NOTE: Horizontal padding exceeds spec (px-6 md:px-8) intentionally
// for better content breathing room on larger screens
```

---

## 9. Recommended Code Fixes

### Fix 1: ContactForm Class Names

```tsx
// components/forms/ContactForm.tsx

// Line 39: Success state
<h3 className="font-heading text-[length:var(--text-h3)] text-text-primary">Thank you!</h3>
<p className="mt-2 text-text-secondary">

// Line 66-67, 84-85, 100-101, 119-120: Labels
className="block text-sm font-medium text-text-primary"

// Line 75, 92, 108, 129: Inputs
className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
```

### Fix 2: Add Background Alt Token

```css
/* app/globals.css - inside @theme {} */
--color-background-alt: #f8f8f6;
```

```tsx
// app/about/page.tsx:143
- className="!bg-[#f8f8f6]"
+ className="bg-background-alt"

// app/services/[slug]/ServiceDetailContent.tsx:142, 224
- className="!bg-[#f8f8f6]"
+ className="bg-background-alt"
```

### Fix 3: HeroSection Design System Colors

```tsx
// components/sections/HeroSection.tsx:15
// Option A: Use existing dark colors
- className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
+ className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background-dark via-background-dark-end to-background-dark text-white"

// Option B: Add specific hero gradient tokens to globals.css
// --color-hero-from: #020617;  /* slate-950 */
// --color-hero-via: #0f172a;   /* slate-900 */
```

---

## 10. Summary Recommendations

### Immediate Actions
1. Fix undefined CSS classes in ContactForm (breaking issue)
2. Add `--color-background-alt` token and remove `!important` overrides

### Short-term Improvements
3. Enhance Contact page with warmth/personality elements
4. Vary page header treatments (different heights, add subtle elements)
5. Document intentional spec deviations in code comments

### Consider for Future
6. Add more visual texture (subtle grain, additional gradients)
7. Create page-specific "moments" (unique hero treatments, featured elements)
8. Add testimonials to service detail pages for social proof per service
