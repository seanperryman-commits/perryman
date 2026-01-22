# Client Meeting Guide: Sean Perryman Site Walkthrough

**Last Updated:** Jan 22, 2026
**Build Status:** ✅ Passes (`npm run build` clean)

---

## Meeting Overview

**Duration:** 30 minutes
**Format:** Screenshare walkthrough
**Goal:** Get design sign-off + decisions on placeholder content

### Your Opening Line
> "I'm going to walk you through the site page by page. As we go, I'll point out a few places where I've mocked up what certain elements could look like—stats, testimonials, that kind of thing. For each one, the question is: do you have real content to put there, or should I remove it entirely? No fake numbers, no fake quotes."

---

## Page-by-Page Walkthrough

Navigate in this order. For each page, I've noted what's real content (from your copy) vs. what's placeholder that needs a decision.

---

### 1. HOMEPAGE (`/`)

**Sections on this page:** Hero → Credibility Strip → Services Preview → About Preview → Testimonial → Newsletter CTA → Final CTA

#### ✅ Hero Section — GOOD TO GO
| Element | Status | Notes |
|---------|--------|-------|
| "Sean Perryman" | ✅ Real | |
| "Speaker. Consultant. Strategist." | ✅ Real | From your copy |
| "Bridging AI Strategy, Policy, and Ethics" | ✅ Real | From your copy |
| Credential chips | ✅ Real | "First Global Head of AI Policy at Uber", "Former Congressional Counsel" |
| Photo | ⚠️ Placeholder | Using current headshot — is this the hero photo you want? |

#### ✅ Credibility Strip — GOOD TO GO
Shows: Vanderbilt AI Governance Symposium, Alianza In AI Conference, SXSW, AI Action Summit Paris
**All from your copy — accurate?**

#### ✅ Services Preview — GOOD TO GO
Shows Speaking + Consulting cards. Links work.

#### ✅ About Preview — GOOD TO GO
Bio text from your copy.

---

#### 🟡 TESTIMONIAL — PLACEHOLDER (Decision Needed)

**What client sees:**
> "Sean's guidance was instrumental in shaping our AI governance strategy. His ability to translate complex policy considerations into actionable frameworks helped us move confidently into AI adoption while maintaining stakeholder trust."
> — **J. Smith**, Technology Executive, Enterprise Client

**This is fake.** "J. Smith" and "Enterprise Client" are obvious placeholders.

**Ask:**
> "This is what a testimonial could look like here. Do you have a real one with permission to use? If not, I'll remove this section entirely—no fake quotes."

**Options:**
- [ ] Provide real testimonial (name, title, company, quote)
- [ ] Remove testimonial section from homepage

---

#### 🟡 STATS — PLACEHOLDER (Decision Needed)

**What client sees in CTA section:**
- **50+** Organizations Advised
- **10+** Years Experience

**"10+ Years" matches "over a decade" from your copy — that's fine.**

**"50+ Organizations" — is this accurate?**

**Ask:**
> "Is 50+ organizations advised accurate? If you have a real number, I'll use it. If not, I can remove the stat entirely."

**Options:**
- [ ] Confirm 50+ is accurate
- [ ] Provide different number: ___
- [ ] Remove stat, keep "10+ Years" only

---

### 2. SPEAKING PAGE (`/services/public-speaking`)

**Sections:** Hero with stats → Credibility strip → Photo gallery → Speaking topics → CTA

#### 🟡 STATS — PLACEHOLDER (Decision Needed)

**What client sees in hero:**
- **50+** Keynotes Delivered
- **15+** Countries
- **10K+** Audience Members

**None of these are in your copy. They're attention-grabbing but I made them up.**

**Ask:**
> "These stats are mockups of what this space could look like. Are any of these numbers accurate? I'd rather have smaller real numbers than impressive fake ones."

**Options:**
- [ ] Provide real numbers: ___ keynotes, ___ countries, ___ audience members
- [ ] Remove stats section entirely

---

#### ✅ Credibility Strip — GOOD TO GO
Same venues as homepage — from your copy.

#### ✅ Photo Gallery — GOOD TO GO
Real engagement photos. Captions describe actual events.

---

#### 🟡 SPEAKING TOPICS — Generic Descriptions

**Current topics shown:**
| Topic | Description |
|-------|-------------|
| AI Governance & Ethics | "Frameworks for responsible AI deployment..." |
| Global AI Policy | "Navigating the evolving international regulatory landscape..." |
| Leadership in the AI Era | "Preparing executive teams to make confident decisions..." |
| The Future of Work | "How AI will reshape industries..." |

**Topic titles are reasonable. Descriptions are generic filler.**

**Ask:**
> "These topic titles feel right for your work. The descriptions are placeholder—do you want to provide real ones, or should I just show titles without descriptions?"

**Options:**
- [ ] Provide real descriptions
- [ ] Keep titles only, remove descriptions
- [ ] Keep as-is (generic is fine)

---

### 3. CONSULTING PAGE (`/services/consulting`)

**Sections:** Hero → Credibility strip → "What You Get" → Core Offerings → Case Study → CTA

#### ✅ Everything on this page is from your copy — GOOD TO GO

**What to verify:**
- 7 Core Offerings match your copy (minor wording tweaks for brevity)
- Uber case study is accurate
- "Who I Work With" client types: Fortune 500, Startups, Academic Institutions

**Quick sanity check:**
> "This page pulls directly from your copy. Does anything feel off or need adjusting?"

---

### 4. NEWSLETTER PAGE (`/newsletter`)

#### ✅ Content — GOOD TO GO
"The Human Cost: AI's Impact on What Makes Us Human" — headline and description from your copy.

---

#### 🟡 SUBSCRIBE BUTTON — Not Connected

**What client sees:** "Subscribe Now" button that does nothing, with "Newsletter platform coming soon" text below.

**Ask:**
> "Where does your newsletter live? Substack? Beehiiv? I need the URL to connect this button."

**Options:**
- [ ] Provide newsletter platform URL: ___
- [ ] Remove subscribe button for now, add later

---

### 5. ABOUT PAGE (`/about`)

#### ✅ Bio Content — GOOD TO GO
Full bio from your copy. Career highlights, credentials, all accurate.

**One small thing to verify:**
> Site says "First Global Head of AI Policy at Uber"
> Your copy says "First Global Head of AI & Fairness Policy at Uber"

**Ask:**
> "Should it include '& Fairness' in the title, or is 'AI Policy' sufficient?"

---

### 6. CONTACT PAGE (`/contact`)

#### ✅ Form — GOOD TO GO
Netlify form configured. Will work on launch.

---

#### 🟡 CALENDLY BUTTON — Not Connected

**What client sees:** "Book a Call on Calendly" button that does nothing.

**Ask:**
> "Do you have a Calendly link? If so, I'll connect it. If not, I can remove the button."

**Options:**
- [ ] Provide Calendly URL: ___
- [ ] Remove Calendly button

---

### 7. FOOTER (visible on all pages)

#### 🟡 SOCIAL LINKS — Not Connected

**What client sees:** LinkedIn and X icons that link to linkedin.com and x.com root (not profile pages).

**Don't click these during demo — they go nowhere useful.**

**Ask:**
> "What are your LinkedIn and Twitter/X profile URLs? Or would you prefer I remove social links entirely?"

**Options:**
- [ ] LinkedIn URL: ___
- [ ] X/Twitter URL: ___
- [ ] Remove social links

---

#### 🟡 EMAIL — Needs Verification

**Currently:** hello@seanperryman.com

**Ask:**
> "Is hello@seanperryman.com the right contact email?"

---

## Summary: Client Action Items

### Must Decide Today

| Item | Decision |
|------|----------|
| Testimonial | Provide real one OR remove |
| Stats (50+ orgs) | Confirm OR provide real number OR remove |
| Stats (speaking page) | Confirm OR provide real numbers OR remove |
| Newsletter platform URL | Provide OR remove button |
| Calendly URL | Provide OR remove button |

### Info to Send After Meeting

| Item | Status |
|------|--------|
| LinkedIn profile URL | Needed |
| X/Twitter profile URL | Needed (or confirm removal) |
| Email confirmation | hello@seanperryman.com correct? |
| Hero photo | Confirm current OR provide new |
| "& Fairness" in title | Include or omit? |

### Optional / Nice-to-Have

| Item | Notes |
|------|-------|
| Speaking topic descriptions | Currently generic — can provide real ones |
| Real testimonial | If you have one with permission |

---

## Design Sign-Off Checklist

At end of walkthrough, confirm:

- [ ] Overall look and feel works
- [ ] Navy blue + sky blue accent colors work
- [ ] Lora (headings) + Nunito (body) fonts work
- [ ] Speaking → Consulting priority order is correct
- [ ] Dark "bookend" layout (dark hero, light middle, dark CTA) works

---

## Technical Notes (Don't Discuss Unless Asked)

**Site readiness:**
- Build passes ✅
- All pages load ✅
- Navigation works ✅
- Contact form configured ✅
- Animations working ✅
- Mobile responsive ✅

**Known visual things:**
- Credential chips hidden on mobile (intentional — too cramped)
- Hero photo stacks below text on mobile (intentional)

---

## Your Closing Line

> "I need a few things from you after this call: decisions on the placeholder content we discussed, and the URLs I mentioned. Once I have those, we're launch-ready. Does next week work as a target?"
