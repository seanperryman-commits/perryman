# Sean Perryman Advisory — Design Specification

A condensed reference for implementing the production site. Follow this exactly.

---

## Design Philosophy: "Quiet Confidence"

Premium executive advisory, not a startup. Every element must earn its place. Reference: McKinsey Digital, Linear.app, Apple Services.

**Core principles:**
1. **Earn every element** — No decoration without purpose. White space is a feature.
2. **Typography is the design** — 90% of this site is text. Hierarchy through weight/size, not color.
3. **Color with purpose** — Dark slate foundation, blue accent for ONE focal CTA per section.
4. **Depth through subtlety** — Soft shadows, glassmorphism, faint gradients. If you notice the effect, dial it back 50%.
5. **Restrained motion** — 2-4px max movement. `transition-all duration-300 ease-out` on everything interactive.

---

## Color System

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
  --color-text-on-dark: #FFFFFF;
  --color-text-on-dark-muted: #94a3b8;

  /* Accent */
  --color-accent: #0EA5E9;
  --color-accent-hover: #0284c7;
  --color-accent-light: rgba(14, 165, 233, 0.1);

  /* UI */
  --color-border: #e5e7eb;
  --color-card: #FFFFFF;
  --color-card-shadow: rgba(0, 0, 0, 0.08);
}
```

**Usage:** Dark sections (Hero, CTA) use `background-dark` + `text-on-dark`. Light sections use `background` + `text-primary`. Accent only for primary CTAs and icons.

---

## Typography

**Fonts:** Lora (headings) + Nunito (body) via `next/font/google`

```css
@theme {
  --font-heading: 'Lora', serif;
  --font-body: 'Nunito', sans-serif;

  --text-hero: clamp(2.5rem, 5vw, 4rem);
  --text-h1: clamp(2rem, 4vw, 3rem);
  --text-h2: clamp(1.5rem, 3vw, 2.25rem);
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);
  --text-body: clamp(1rem, 1.5vw, 1.125rem);
  --text-small: clamp(0.875rem, 1vw, 0.9375rem);
}
```

**Rules:**
- Headlines: `font-heading font-semibold tracking-tight`
- Body: `font-body` with generous line-height (1.6-1.7)
- Max readable width: `max-w-xl` for body text
- Avoid all-caps except small labels

---

## Spacing System

**Base unit:** 8px grid. All spacing derives from multiples of 8.

| Token | Value | Tailwind | Use Case |
|-------|-------|----------|----------|
| `xs` | 8px | `2` | Icon gaps, tight inline elements |
| `sm` | 16px | `4` | Related elements, button icon spacing |
| `md` | 24px | `6` | Between paragraphs, form field gaps |
| `lg` | 32px | `8` | Card padding, component gaps |
| `xl` | 48px | `12` | Between content blocks, grid gaps |
| `2xl` | 64px | `16` | Section padding (mobile) |
| `3xl` | 96px | `24` | Section padding (desktop) |
| `4xl` | 128px | `32` | Hero/CTA section padding (desktop) |

### Section Spacing

```tsx
// Standard section (Services, About, Testimonial)
<section className="py-20 md:py-24">

// Emphasis sections (Hero, CTA) — more breathing room
<section className="py-24 md:py-32">

// Tight section (Footer)
<section className="py-12 md:py-16">
```

### Component Internal Spacing

```tsx
// Card internals
<div className="p-8">                    // 32px padding
  <Icon className="mb-4" />              // 16px below icon
  <h3 className="mb-3">Title</h3>        // 12px below title
  <p className="mb-6">Description</p>    // 24px below description
  <Button />
</div>

// Content stack (headline + body + CTA)
<div className="space-y-6">              // 24px between children
```

### Grid Gaps

| Context | Gap | Tailwind |
|---------|-----|----------|
| Service cards | 32px | `gap-8` |
| Two-column layouts | 48px | `gap-12` |
| Footer columns | 32px | `gap-8` |
| Inline button groups | 16px | `gap-4` |

### Margin Patterns

```tsx
// Section headline to content
<h2 className="mb-12">...</h2>           // 48px

// Subheading to body
<h3 className="mb-4">...</h3>            // 16px

// Paragraph to paragraph
<p className="mb-6">...</p>              // 24px

// CTA button group
<div className="mt-8 flex gap-4">        // 32px above, 16px between
```

**Principle:** When in doubt, go larger. Cramped spacing feels cheap; generous spacing feels premium.

---

## Layout

```tsx
// Container
<div className="max-w-7xl mx-auto px-6 md:px-8">

// Section spacing (generous)
<section className="py-16 md:py-20">  // minimum
<section className="py-24 md:py-32">  // preferred

// Grids
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">     // Services
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">   // About
```

---

## Page Structure

```
Header (sticky, blur on scroll)
Hero (dark, full-width) — 60% text left, 40% photo right
Services (light bg) — 3 cards: Speaking, Consulting, Coaching
About (light bg) — photo left, bio right
Testimonial (light bg) — dark box with quote
CTA (dark, full-width) — bookends with hero
Footer (light bg)
```

---

## Component Patterns

### Hero
- `bg-gradient-to-br from-background-dark to-background-dark-end`
- `min-h-[90vh]` split layout
- Photo: `rounded-lg shadow-2xl`, contained with padding

### Navigation
- `sticky top-0 z-50`
- On scroll: `bg-background/80 backdrop-blur-md shadow-sm`
- Links: Home, About, Services | Contact (emphasized CTA button)

### Cards
```tsx
<div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
```
- No visible borders unless interaction requires them
- Consistent `rounded-xl` (12px)
- Generous padding (`p-8` minimum)

### Buttons

**Primary (filled):**
```tsx
className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
```

**Secondary (outlined, on dark):**
```tsx
className="px-8 py-4 border-2 border-white/20 text-slate-300 font-semibold rounded-lg transition-all duration-200 hover:bg-slate-800 hover:border-transparent"
```

- Never pill-shaped (rounded-full)
- Generous padding (`px-8 py-4`)
- Primary: darken + lift 2px on hover
- Secondary: clearly subordinate to primary

### Testimonial
```tsx
<div className="bg-background-dark rounded-2xl p-8 md:p-12">
  <Quote className="w-12 h-12 text-accent mb-6" />
  <blockquote className="text-h3 font-heading text-on-dark mb-6">...</blockquote>
  <cite className="text-body text-on-dark-muted">— Name, Title</cite>
</div>
```

---

## Animations

Import from `/styles/animations.ts`: `fadeIn`, `fadeInUp`, `staggerContainer`, `scaleUp`, `slideInLeft`, `slideInRight`

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}  // ALWAYS once:true
  variants={staggerContainer}
>
  <motion.h2 variants={fadeInUp}>...</motion.h2>
</motion.div>
```

**Hover effects:**
- Buttons: `hover:-translate-y-0.5`
- Cards: `hover:-translate-y-1`
- Links: `hover:text-accent transition-colors`

---

## Breakpoints

- `md` (768px): Nav expands, grids activate
- `lg` (1024px): Hero splits, About becomes 2-col

---

## Anti-Patterns — Never Do These

- Bright saturated accent colors (neon blues, teals)
- Multiple competing CTAs of equal weight
- All-caps text larger than 14px
- Shadows with visible edges
- Decorative elements that don't communicate
- Carousels or auto-playing anything
- "Section title + grid of 3 cards" repeated without variation
- Borders trying to "frame" content
- Hover effects that feel jumpy (>4px movement)

---

## Quality Checklist

Before shipping each section:
- [ ] Can I remove any element without losing meaning?
- [ ] Is there one clear focal point?
- [ ] Does typography hierarchy read correctly when I squint?
- [ ] Are interactive elements obviously interactive?
- [ ] Does this feel like a consultant's site or a template?

Before launch:
- [ ] `npm run build` passes
- [ ] Lighthouse performance > 90
- [ ] All animations use `once: true`
- [ ] Mobile nav works
- [ ] Contact form has `data-netlify="true"` + hidden `form-name` input

---

## Files Reference

**Modify:** `app/globals.css` (@theme), `app/layout.tsx` (fonts), `lib/constants.ts` (NAV_ITEMS)

**Service routes:** `/services/public-speaking`, `/services/business-consulting`, `/services/executive-coaching`
