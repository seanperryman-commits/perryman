# Client Copy Requests & Remaining Placeholders

This document identifies content still needed from the client and placeholder text that remains on the site.

**Last updated:** Content audit completed - removed unverifiable claims, flagged fabricated content

---

## ⚠️ CRITICAL: Executive Coaching Service

**Status:** NOT A CONFIRMED SERVICE OFFERING

The Executive Coaching page (`/services/executive-coaching`) contains entirely fabricated content. This service does not appear in the client copy (`docs/copy.md`).

**File:** `components/sections/CoachingContent.tsx`

**Fabricated content includes:**
- "500+ Leaders Coached" stat
- "C-Suite & Board Level" stat
- "15+ Years Experience" stat
- All coaching benefits (4 items)
- All coaching areas (6 items)
- Venues: Google, World Economic Forum (NO evidence in images or copy)
- Testimonial (placeholder duplicate)

**Action required:**
> Is Executive Coaching a real service offering? If YES, please provide real content. If NO, we should remove this page entirely.

---

## Required Before Launch

### 1. Testimonials (Critical)

**Current state:** Placeholder testimonial on homepage

**Location:** `app/mockups/_components/mockupData.ts` line 54-58

**Current placeholder:**
```
Quote: "Sean's guidance was instrumental in shaping our AI governance strategy..."
Author: "J. Smith"
Role: "Technology Executive"
Company: "Enterprise Client"
```

**Request to client:**
> Can you provide 1-2 client testimonials we can use on the site?
>
> Format needed:
> - Quote (1-2 sentences about working with you)
> - Name (or "Anonymous" if preferred)
> - Title/Role
> - Company (or "Fortune 500 Company" if anonymized)

---

### 2. Contact Information (Critical)

**Calendly URL**
- Location: `app/contact/page.tsx` line 74-77
- Current: Button exists but has no link
- Request: Calendly booking page URL

**Email verification**
- Location: `lib/constants.ts` (`SITE_CONFIG.email`) and `components/sections/CTASection.tsx`
- Current: `hello@seanperryman.com` (standardized across site)
- Request: Confirm this is the correct contact email

**Social media URLs**
- Location: `lib/constants.ts` lines 32-34 (`SOCIAL_LINKS`)
- Request:
  - LinkedIn profile URL
  - X/Twitter profile URL

---

### 3. Statistics Verification (Important)

Multiple sections display metrics that need client confirmation.

**Speaking stats** (`components/sections/SpeakingContent.tsx`)
- "50+ Keynotes Delivered" - ❌ No source
- "15+ Countries" - ❌ No source
- "10K+ Audience Members" - ❌ No source

**Homepage CTA** (`components/sections/CTASection.tsx`)
- "50+ Organizations Advised" - ❌ No source
- "10+ Years Experience" - ✅ Matches "over a decade" from copy
- ~~"100% Client Satisfaction"~~ - ❌ **REMOVED** (unverifiable claim)

**About preview** (`components/sections/AboutPreview.tsx`)
- "10+ Years in AI Policy" - ✅ Matches "over a decade" from copy
- "Uber - Global Head" - ✅ Confirmed
- "Congress - Former Counsel" - ✅ Confirmed

**Request to client:**
> Please confirm or provide accurate numbers for:
> - Number of keynotes/speaking engagements (currently showing "50+")
> - Number of countries you've spoken in (currently showing "15+")
> - Approximate audience reach (currently showing "10K+")
> - Number of organizations advised (currently showing "50+")

---

## Nice to Have

### 4. Newsletter Platform Details

**Context:** Client copy mentions "The Human Cost" newsletter/platform

**Request:**
> Where is "The Human Cost" newsletter hosted?
> - Substack URL?
> - Other platform?
> - Should we add a newsletter signup section to the site?

---

### 5. Speaking Venues (Verified vs Fabricated)

**Image-verified venues (KEEP):**
- ✅ SXSW - `panel-sxsw.jpeg`
- ✅ POLITICO AI Summit - `panel-politico.jpeg`
- ✅ Georgetown Law - `panel-georgetown-ai.jpeg`
- ✅ IAPP Privacy Summit - `panel-iapp-privacy.jpeg`
- ✅ CHCI Tech Summit - `panel-chci-tech.jpeg`
- ✅ Bogota/Colombia Keynote - `keynote-bogota.jpeg`
- ✅ IGG23 - `panel-igg23.jpeg`

**From client copy (KEEP):**
- ✅ AI Action Summit, Paris
- ✅ Vanderbilt AI Symposium
- ✅ Alianza In AI Conference

**REMOVED (no evidence):**
- ❌ Google - was listed in CoachingContent.tsx
- ❌ World Economic Forum - was listed in CoachingContent.tsx

**Request:**
> Are there additional venues, media appearances, or publications we should highlight?
> - Podcast appearances
> - Written features
> - TV/video appearances

---

### 6. Case Study Client Name

**Location:** `lib/constants.ts` (public-speaking service detail)

**Issue:** The AI Action Summit Paris case study lists "Global Policy Forum" as the client, but this name has no source.

**Current:**
```
client: "Global Policy Forum"  // ❌ Fabricated
```

**Request:**
> What organization hosted the AI Action Summit in Paris where you were a panelist? We need the correct name for the case study.

---

## Remaining Placeholder Locations

### Homepage (`app/page.tsx`)

| Section | Component | Placeholder Content | Status |
|---------|-----------|---------------------|--------|
| Testimonial | `TestimonialSection` | "J. Smith" generic quote | ❌ Needs real testimonial |
| CTA stats | `CTASection` | "50+ orgs", "10+ years" | ⚠️ Needs verification (100% satisfaction REMOVED) |

### About Page (`app/about/page.tsx`)

| Section | Placeholder Content | Status |
|---------|---------------------|--------|
| Page subtitle | Generic description | ✅ Updated with client copy |
| Career highlights | 4 highlight cards | ✅ Updated with real experience |
| Philosophy quotes | Placeholder wisdom | ✅ Updated with client voice |

### Contact Page (`app/contact/page.tsx`)

| Section | Placeholder Content | Status |
|---------|---------------------|--------|
| Calendly button | No URL linked | ❌ Needs Calendly URL |
| FAQ answers | Generic responses | ⚠️ Review for accuracy |

### Speaking Page (`/services/public-speaking`)

| Section | Placeholder Content | Status |
|---------|---------------------|--------|
| Hero stats | "50+", "15+", "10K+" | ⚠️ Needs verification |
| Featured venues | 6 venues listed | ✅ All image-verified or from copy |
| Speaking topics | 4 topic cards | ⚠️ Descriptions are generic filler |

### Consulting Page (`/services/consulting`)

| Section | Placeholder Content | Status |
|---------|---------------------|--------|
| Client types | Fortune 500, Startups, Academic | ⚠️ Review for accuracy |
| Featured work | Uber case study | ✅ Uses real client copy |
| Offerings | 7 core offerings | ✅ Updated with client copy |
| Case study client | "Global Policy Forum" | ❌ Fabricated name - needs real organizer |

### Executive Coaching Page (`/services/executive-coaching`)

| Section | Placeholder Content | Status |
|---------|---------------------|--------|
| ENTIRE PAGE | All content fabricated | ❌ Confirm if service exists or REMOVE PAGE |

---

## Copy That Has Been Integrated

These items from `docs/copy.md` have been successfully integrated:

- [x] Hero section tagline and title
- [x] About bio (shortened for preview, full on About page)
- [x] Credential chips (Uber, Congress roles)
- [x] Speaking venues (SXSW, Paris, Vanderbilt, Alianza)
- [x] 7 Core Consulting Offerings
- [x] Value proposition text
- [x] CTA section copy ("Let's Work Together")
- [x] Career highlights (Uber, Congress, Vanderbilt, CDT)
- [x] Philosophy/approach quotes

---

## Files Modified During Integration

```
app/mockups/_components/mockupData.ts    # Hero, about, CTA copy
lib/constants.ts                          # Services restructured (3→2)
components/sections/HeroSection.tsx       # Credential chips
components/sections/AboutPreview.tsx      # Credentials, pull quote
components/sections/CredibilityStrip.tsx  # Featured venues
components/sections/CTASection.tsx        # Headline, subtext
components/sections/ServicesSection.tsx   # 2 cards, descriptions
components/sections/SpeakingContent.tsx   # Hero, venues, topics
components/sections/ConsultingContent.tsx # 7 offerings, case study
app/about/page.tsx                        # Career highlights, philosophy
app/services/page.tsx                     # Descriptions, approach text
app/services/[slug]/page.tsx              # Routing for 2 services
```

---

## Next Steps

1. **CRITICAL: Confirm Executive Coaching** - Is this a real service? Remove page if not
2. **Send copy requests to client:**
   - Real testimonial (name, title, company, quote)
   - Social media URLs (LinkedIn, X/Twitter)
   - Calendly URL
   - Verify email (hello@seanperryman.com)
   - Verify stats (50+ keynotes, 15+ countries, 10K+ audience, 50+ orgs)
   - Case study organizer name for AI Action Summit Paris
3. **Receive and integrate** remaining content
4. **Create newsletter page** if client wants dedicated `/newsletter` route
5. **Final review** of all pages for consistency
6. **Remove WIP middleware** when ready to launch
