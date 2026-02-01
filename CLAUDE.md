# Sean Perryman Advisory Site

Personal brand site for AI policy/governance consulting. Virtual business card for warm leads—not SEO bait. Priority: **fast, polished, professional**.

---

## Commands

```bash
npm run dev          # Local dev (Turbopack)
npm run build        # Prod build - RUN BEFORE EVERY DEPLOY
npm run lint         # ESLint
npx tsc --noEmit     # Type check
```

Deploy: Push to main → Netlify auto-deploys.

---

## Routes & Service Slugs

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/public-speaking` | Speaking detail |
| `/services/consulting` | Consulting detail |
| `/services/coaching` | Coaching detail |
| `/contact` | Contact form |
| `/newsletter` | Newsletter signup |

**Domain redirects** (configured in `netlify.toml`):
- `perrymanconsulting.com` → `/services/consulting`
- `perrymancoaching.com` → `/services/coaching`
- `perrymanspeaking.com` → `/services/public-speaking`

---

## File Structure

```
app/
  page.tsx                    # Home
  about/page.tsx
  services/page.tsx
  services/[slug]/page.tsx    # Dynamic service detail pages
  contact/page.tsx
  newsletter/page.tsx
components/
  ui/                         # Button, Card, Container, Section, OptimizedImage
  layout/                     # Header, Footer, Navigation
  sections/                   # HeroSection, ServicesSection, AboutPreview, etc.
  forms/                      # ContactForm
styles/
  animations.ts               # Framer Motion variants
lib/
  utils.ts                    # cn() helper
  constants.ts                # NAV_ITEMS, SERVICES, SITE_CONFIG, SERVICE_DETAILS
docs/                         # Design specs, copy docs (reference only)
```

---

## Design Tokens

Tailwind v4 config lives in `app/globals.css` via `@theme {}`.

**Colors**: `bg-background`, `bg-background-dark`, `text-accent`, `text-on-dark`

**Fonts**: `font-heading` (Lora), `font-body` (Nunito)

**Typography scale**: `text-hero`, `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-small`

---

## Animation Pattern

Use variants from `styles/animations.ts`. Don't redefine.

```tsx
import { fadeInUp, staggerContainer } from "@/styles/animations";

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}  // ALWAYS include
  variants={staggerContainer}
>
  <motion.p variants={fadeInUp}>Content</motion.p>
</motion.div>
```

Available: `fadeIn`, `fadeInUp`, `staggerContainer`, `scaleUp`, `slideInLeft`, `slideInRight`

---

## Forms

Contact form uses Netlify Forms:
1. `data-netlify="true"` on form element
2. Hidden input: `<input type="hidden" name="form-name" value="contact" />`

---

## Key Constants

All in `lib/constants.ts`:
- `NAV_ITEMS` / `NAV_CTA` — navigation links
- `SERVICES` — service slugs and labels
- `SERVICE_DETAILS` — full content for service detail pages
- `SOCIAL_LINKS` — LinkedIn, X
- `EXTERNAL_LINKS.calendly` — booking link

---

## Common Gotchas

1. **Framer Motion + Server Components**: Wrap animated sections in a client component
2. **Netlify Forms not working**: Check hidden `form-name` input exists
3. **Tailwind classes not applying**: Check spelling against `@theme {}` in globals.css
4. **External images**: Add domains to `next.config.ts` remotePatterns

---

## Quality Bar

Before shipping:
- [ ] `npm run build` passes
- [ ] Lighthouse performance > 90
- [ ] Mobile nav works
- [ ] Contact form submits to Netlify
- [ ] No console errors

---

## What NOT to Do

- Don't add a CMS
- Don't over-engineer the contact form
- Don't add page transitions
- Don't create new animation variants
