# Homepage Design Revisions

Critical fixes to elevate the homepage from "AI template" to polished, high-quality personal brand site.

---

## Problem Summary

The current implementation follows the design spec correctly but lacks **craft, personality, and visual confidence**. Every section uses the most obvious, default approach. There are no "design moments" that signal intentionality.

---

## Revision Plan

### 1. Hero Section

**Current issues:**
- Flat dark background with no visual interest
- Photo floats without grounding
- Generic eyebrow + H1 + tagline + buttons pattern

**Revisions:**
- [ ] Add gradient background: `bg-gradient-to-br from-background-dark to-background-dark-end`
- [ ] Add subtle geometric accent shape (angled line or abstract form) behind or near photo
- [ ] Add offset border/shadow treatment to hero photo (e.g., accent-colored border offset by 8px)
- [ ] Add 2-3 floating credential chips near photo (placeholder badges like "Featured in Forbes", "Harvard Kennedy School", "500+ Executives Coached")
- [ ] Improve tagline copy—less generic, more specific value prop

**Files:** `components/sections/HeroSection.tsx`

---

### 2. Services Section

**Current issues:**
- All three cards visually identical
- Low-contrast icon boxes
- Generic "Learn more" CTAs
- No visual hierarchy

**Revisions:**
- [ ] Add 4px top border accent (`border-t-4 border-accent`) to each card
- [ ] Increase icon size to 48px and use filled icon style or stronger visual treatment
- [ ] Replace generic "Learn more" with specific CTAs: "See Past Talks", "View Frameworks", "Start Coaching"
- [ ] Add subtle card numbering or visual differentiator (01, 02, 03)
- [ ] Consider emphasizing middle card (slight scale or shadow difference)

**Files:** `components/sections/ServicesSection.tsx`

---

### 3. About Preview Section

**Current issues:**
- Standard two-column, no visual interest
- Pull quote understyled
- Too much empty space
- Stock placeholder image obvious

**Revisions:**
- [ ] Add background accent shape behind photo (offset rectangle or gradient wash)
- [ ] Elevate blockquote styling: larger decorative quote marks, card treatment, or stronger visual presence
- [ ] Add credentials strip below bio text (e.g., "15+ Years | 500+ Leaders Coached | 50+ Keynotes")
- [ ] Tighten spacing and add visual anchors to text column

**Files:** `components/sections/AboutPreview.tsx`

---

### 4. Testimonial Section

**Current status:** Strongest section—dark card on light background works well.

**Minor revisions:**
- [ ] Replace empty avatar circle with initials badge or subtle pattern
- [ ] Add company logo placeholder next to attribution
- [ ] Make quote icon larger and more decorative (consider custom SVG)

**Files:** `components/sections/TestimonialSection.tsx`

---

### 5. CTA Section

**Current issues:**
- Just centered text on flat dark background
- Generic headline copy
- Single button feels sparse

**Revisions:**
- [ ] Add subtle texture or geometric pattern to background
- [ ] Rewrite headline: "Ready to lead on AI?" or similar with more urgency
- [ ] Add trust indicators: client count badge, satisfaction stat, or mini logo strip
- [ ] Add secondary text link below button ("or email me directly")

**Files:** `components/sections/CTASection.tsx`

---

### 6. Footer

**Current issues:**
- Bare minimum, adds nothing to brand

**Revisions:**
- [ ] Add brief tagline or positioning statement
- [ ] Add email contact link
- [ ] Slightly increase visual presence

**Files:** `components/layout/Footer.tsx`

---

### 7. Global Enhancements

**Add throughout the site:**
- [ ] Decorative accent shapes/lines as section dividers or background elements
- [ ] Expand accent color usage beyond just buttons/icons
- [ ] Add client/press logo strip component (grayscale, subtle)
- [ ] Consider subtle section transition elements

**New components to create:**
- [ ] `components/ui/CredentialChip.tsx` — Small badge for credentials/logos
- [ ] `components/ui/LogoStrip.tsx` — Horizontal row of client/press logos
- [ ] `components/ui/DecorativeShape.tsx` — Reusable accent shapes (optional)

---

## Implementation Priority

### Phase 1: High Impact (Do First)
1. Hero gradient + photo treatment
2. Service card top borders + better CTAs
3. Credential chips in hero
4. Testimonial avatar fix

### Phase 2: Polish
5. About section background shape + quote styling
6. CTA section enhancements
7. Logo strip component

### Phase 3: Details
8. Footer improvements
9. Additional decorative elements
10. Copy refinements throughout

---

## Design Constraints (Per CLAUDE.md)

- Use existing animation variants from `styles/animations.ts`
- Maintain color palette from `globals.css` @theme
- Keep Lora (headings) + Nunito (body) typography
- Don't over-engineer—this is a brochure site
- Animations: 0.5-0.6s, `[0.4, 0, 0.2, 1]` easing, always `once: true`

---

## Success Criteria

After revisions, the homepage should:
- Feel intentionally designed, not template-generated
- Have 3-4 distinct "design moments" that catch the eye
- Use the accent color more strategically throughout
- Include visual credibility markers (logos, credentials, social proof)
- Maintain fast performance (Lighthouse > 90)

---

*Revision plan created January 2026*
