# Sean Perryman Advisory Site

> **WIP MODE ACTIVE**: `middleware.ts` blocks all routes except `/mockups/*`. Delete `middleware.ts` and update `public/robots.txt` when ready to launch.

Personal brand site for AI policy/governance consulting. Virtual business card for warm leads—not SEO bait. Priority: **fast, polished, professional**. Sloppy or slow = failure.

**IMPORTANT:** only work on the actual site, the mockups do not need to be edited and should not need to be read for context unless explicitly specified
---

## Commands

```bash
npm run dev          # Local dev (Turbopack)
npm run build        # Prod build - RUN BEFORE EVERY DEPLOY
npm run lint         # ESLint
npx tsc --noEmit     # Type check (no pre-commit hook, do manually)
```

Deploy: Push to main → Netlify auto-deploys. No staging environment.

---

## Design Direction

**Chosen direction**: Hybrid — Mockup 2's dark hero + Mockup 3's warm typography + bookended dark sections

**Brand feel**: Credible, authoritative, in-demand

### Color Palette

| Role | Hex | Tailwind Class |
|------|-----|----------------|
| Primary Background | `#FAFAF8` | `bg-background` |
| Secondary (dark) | `#0F172A` | `bg-background-dark` |
| Accent | `#0EA5E9` | `bg-accent`, `text-accent` |
| Text (light bg) | `#1A1A1A` | `text-text-primary` |
| Text (dark bg) | `#FFFFFF` | `text-on-dark` |

### Typography

- **Headings**: Lora (serif) — warm, authoritative
- **Body**: Nunito (sans-serif) — clean, approachable

### Layout Pattern

```
[Header - sticky]
[Hero - dark navy, full-width, photo right]
[Services - 1×3 cards on off-white]
[About - two column, photo left]
[Testimonial - dark box on light bg]
[CTA - dark navy, bookends with hero]
[Footer - light]
```

### Key Decisions
- **Hero**: Big, viewport-filling, dark blue background, portrait photo RIGHT, text LEFT
- **Bookending**: Dark navy hero + dark navy CTA section frame the light content
- **Buttons**: Subtle rounding (6px), filled primary, outlined secondary
- **Cards**: White with shadow, lift on hover
- **Services order**: Public Speaking, Business Consulting, Executive Coaching
- **Nav structure**: Home, About, Services (links) + Contact (emphasized CTA button)
- **Service slugs**: `/services/public-speaking`, `/services/business-consulting`, `/services/executive-coaching`

See `/docs/design-spec.md` for full technical implementation details.
See `/docs/design-brief.md` for client-facing branding summary.

---

## Architecture Decisions

### No State Management
Simple brochure site. React state is enough. Don't add zustand/context unless something changes drastically.

### Client vs Server Components
- **Default to Server Components** for everything static
- **Use 'use client'** only for: animated sections (Framer Motion), mobile menu toggle, contact form
- The mockups are all client components—that's fine for prototyping but production pages should split animated pieces into client islands

### Forms: Netlify Forms
Contact form uses Netlify's built-in form handling. Requirements:
1. Add `data-netlify="true"` to form element
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Match `name="contact"` to form name attribute

No Formspree, no Resend, no custom API route needed.

---

## Animation Pattern

Use `styles/animations.ts` variants. Don't redefine in components.

```tsx
import { fadeInUp, staggerContainer } from "@/styles/animations";

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}  // ALWAYS include once:true
  variants={staggerContainer}
>
  <motion.p variants={fadeInUp}>Content</motion.p>
</motion.div>
```

**Why `once: true`**: Without it, elements re-animate on scroll up. Looks janky.

Available variants: `fadeIn`, `fadeInUp`, `staggerContainer`, `scaleUp`, `slideInLeft`, `slideInRight`

Timing: 0.5-0.6s duration. Easing: `[0.4, 0, 0.2, 1]` (standard ease-out). Don't make animations slower—site should feel snappy.

---

## Tailwind v4 Gotchas

Config lives in `app/globals.css` via `@theme {}`, not a config file.

```css
/* globals.css */
@theme {
  --color-background: #FAFAF8;
  --color-background-dark: #0F172A;
  --color-accent: #0EA5E9;
  /* see docs/design-spec.md for full list */
}
```

Use like: `bg-background`, `bg-background-dark`, `text-accent`, `text-on-dark`

**Custom font variables**:
- `font-heading` = Lora (serif headlines)
- `font-body` = Nunito (body text)

**Typography scale** (fluid, don't override):
- `text-hero` = biggest (hero headlines)
- `text-h1`, `text-h2`, `text-h3` = section headers
- `text-body` = paragraphs
- `text-small` = captions/fine print

---

## File Structure That Matters

```
app/
  mockups/           # Design prototypes for client review
    _components/     # Mockup components + shared mockupData.ts
  (pages)/           # Production routes live here after design lock
components/
  ui/                # Button, Card, Container, Section (built)
  layout/            # Header, Footer, Navigation (built)
styles/
  animations.ts      # Framer Motion variants (use these!)
lib/
  utils.ts           # cn() helper
  constants.ts       # NAV_ITEMS, SITE_CONFIG
```

---

## Content Placeholders

**Client name**: Sean Perryman
**Working title**: AI Policy & Governance Advisor

Waiting on client:
- [ ] Professional headshot
- [ ] Bio copy
- [ ] Client logos / testimonials
- [ ] Calendly URL

Use placeholder images from Unsplash for now (see mockupData.ts for examples). Replace with real assets before launch.

---

## Common Gotchas

1. **Next.js 16 image domains**: If adding external images, update `next.config.ts` with domains/remotePatterns

2. **Framer Motion + Server Components**: Don't try to animate server components. Wrap animated sections in a client component.

3. **Netlify Forms not working**: Usually missing the hidden form-name input or the `data-netlify` attribute.

4. **Tailwind classes not applying**: Probably a typo in the custom color name. Check `@theme {}` in globals.css.

5. **Fonts not loading**: Check `app/layout.tsx`—fonts come from next/font/google and get applied via CSS variables.

---

## Quality Bar

Before shipping:
- [ ] Lighthouse performance > 90
- [ ] No layout shift (CLS < 0.1)
- [ ] All images use next/image with proper sizing
- [ ] Mobile nav works
- [ ] Contact form submits to Netlify
- [ ] No console errors
- [ ] Runs `npm run build` without errors

---

## What NOT to Do

- Don't add a CMS—client will rarely update this
- Don't over-engineer the contact form—Netlify handles it
- Don't add page transitions—scroll animations are enough
- Don't use Calendly embed if it bloats the page—link out instead
- Don't create new animation variants—use the ones in styles/animations.ts
