# Client Meeting Prep: Sean Perryman Site Review

**Meeting Duration:** ~30 minutes
**Goal:** Collect design feedback + identify content gaps to fill or delete

---

## Meeting Agenda (30 min)

| Time | Topic | Notes |
|------|-------|-------|
| 0-2 min | Quick intro | "Walk through the site, get your reactions, identify any content gaps" |
| 2-12 min | Design walkthrough | Share screen, scroll through site, collect visceral reactions |
| 12-22 min | Content audit | Go through placeholders—keep, replace, or delete? |
| 22-28 min | Missing assets | Photos, URLs, contact info |
| 28-30 min | Wrap up | Next steps, timeline |

---

## Part 1: Design Feedback Questions

Walk through the homepage. Key questions:

### Overall Feel
- "Does this feel like **you**? Does it match how you want to be perceived?"
- "Too corporate? Too casual? Just right?"
- "Any competitors or peers whose sites you like/dislike?"

### Hero Section
- Dark navy background with photo on right—"First impression?"
- "Speaker. Consultant. Strategist." tagline—accurate?
- "Where AI Policy Meets Real-World Impact"—headline resonate?

### Color & Typography
- Navy blue (#0F172A) + sky blue accent (#0EA5E9)—work for you?
- Lora (serif headings) + Nunito (body)—feel warm/authoritative enough?

### Layout
- Services order: Speaking → Consulting. Correct priority?
- Testimonial section placement—important to you?
- Dark "bookend" sections (hero + CTA)—feels cohesive?

---

## Part 2: Content Audit — Placeholder / Fabricated Content

### 🟠 STATISTICS — Need Verification

**Speaking Page:**
| Stat | Current Value | Question |
|------|---------------|----------|
| Keynotes Delivered | 50+ | Accurate? |
| Countries | 15+ | Accurate? |
| Audience Members | 10K+ | Accurate? |

**CTA Section (Homepage):**
| Stat | Current Value | Question |
|------|---------------|----------|
| Organizations Advised | 50+ | Accurate? |
| Years Experience | 10+ | (Matches "over a decade" in copy ✅) |

---

### 🟡 TESTIMONIAL — Placeholder

**Current testimonial used site-wide:**
> "Sean's guidance was instrumental in shaping our AI governance strategy. His ability to translate complex policy considerations into actionable frameworks helped us move confidently into AI adoption while maintaining stakeholder trust."
> — **J. Smith**, Technology Executive, Enterprise Client

**Question:** "Do you have a real testimonial we can use with permission? Name, title, company? If not, we can remove testimonial sections entirely."

---

### 🟡 COPY VERIFICATION

**Credibility Line:**
- Site: "First Global Head of AI Policy at Uber"
- Copy.md: "First Global Head of AI & Fairness Policy at Uber"
- **Difference:** "& Fairness" is missing. Which is accurate?

---

### ✅ 7 CORE OFFERINGS — Implemented

The Consulting page includes all 7 service areas from your copy. Minor title variations:

| Copy.md | Site | Match |
|---------|------|-------|
| Building AI Governance | Building AI Governance | ✅ |
| Strategy & Risk Assessment | Strategy & Risk Assessment | ✅ |
| Policy Translation & Regulatory Intelligence | Policy Translation | ⚠️ Shortened |
| Ethics Frameworks That Scale | Ethics Frameworks That Scale | ✅ |
| Executive Education & Workshops | Executive Education & Workshops | ✅ |
| Civil Rights & Impact Assessments | Civil Rights & Impact Assessments | ✅ |
| Presentations & Keynotes | Expert Briefings | ⚠️ Different title |

**Question:** "Are the shortened/changed titles acceptable, or do you prefer the exact wording from your original copy?"

---

### ✅ NEWSLETTER PAGE — Already Built

"The Human Cost" newsletter page exists at `/newsletter` with:
- Title and tagline from copy ✅
- Subscribe CTA (placeholder button—needs link to actual newsletter platform)
- "What to Expect" section with themes

**Question:** "Where should the Subscribe button link? Substack? Beehiiv? Something else?"

---

### 🟡 SPEAKING PAGE — Topic Descriptions

The **topic titles** are reasonable, but **descriptions are generic**:

| Topic | Current Description | From Copy? |
|-------|---------------------|------------|
| AI Governance & Ethics | "Frameworks for responsible AI deployment..." | Generic |
| Global AI Policy | "Navigating the evolving international regulatory landscape..." | Generic |
| Leadership in the AI Era | "Preparing executive teams to make confident decisions..." | Generic |
| The Future of Work | "How AI will reshape industries..." | Generic |

**Options:** 1) Provide real descriptions, 2) Keep generic, 3) Remove descriptions entirely and just show titles

---

### 🟡 CASE STUDY — One Detail to Verify

**AI Action Summit case study on Speaking page:**
- Event name: AI Action Summit, Paris ✅ (from copy)
- Description: Accurate ✅
- Client/Organizer: **"Global Policy Forum"** — **Is this the actual organizer name?**

---

## Part 2B: Minor Copy Deviations (Not Significant — FYI Only)

These are small wording differences between copy.md and the site. Not worth discussing in the meeting unless client is detail-oriented. Just note where the content lives if changes are needed later.

### About Page Intro Tagline
- **File:** `app/about/page.tsx:71-72`
- **Site:** "Bridging the gap between technological innovation and responsible governance to help organizations harness AI's potential."
- **Copy:** No equivalent — this is fabricated filler
- **Action:** Keep as-is or ask for real tagline

### Congressional Detail (Minor Omission)
- **File:** `app/about/page.tsx:126-130`
- **Site:** "As Counsel to the late Congressman Elijah Cummings"
- **Copy:** "As Counsel to the late Congressman Elijah Cummings on the House Oversight Committee"
- **Note:** "on the House Oversight Committee" omitted. The career highlight card at line 27-29 includes full detail.

### Speaking Engagements List — Events Added Beyond Copy
- **File:** `components/sections/SpeakingContent.tsx:12-56`
- **Copy lists:** Vanderbilt AI Governance Symposium, Alianza In AI Conference, SXSW, AI Action Summit Paris
- **Site adds:** AI Leadership Summit (Bogota), POLITICO AI Summit, IAPP Privacy Summit, Georgetown AI Forum, CHCI Tech Summit
- **Note:** These appear to be real events from the photos. Copy may just be outdated.

### "Featured At" Venues — Minor Name Differences
- **File:** `components/sections/CredibilityStrip.tsx:6-13`
- **Copy:** "Vanderbilt AI Governance Symposium"
- **Site:** "Vanderbilt AI Symposium"
- **Also added to site:** Georgetown Law, IAPP Privacy Summit

### "What You Get" Descriptions — Condensed
- **File:** `components/sections/ConsultingContent.tsx:250-281`
- Descriptions are slightly condensed from copy (e.g., "designing academic programs from scratch" → "designing academic programs")
- **Note:** No meaning changed, just brevity

### Client Types — Minor Additions
- **File:** `components/sections/ConsultingContent.tsx:21-34`
- **Copy:** "academic institution developing curriculum"
- **Site:** "Academic Institutions - Developing curriculum and research frameworks"
- **Note:** "research frameworks" added

### Newsletter "What to Expect" Themes
- **File:** `app/newsletter/page.tsx:100-126`
- The four theme cards (Policy Analysis, Personal Essays, Critical Questions, Practical Insights) are not in copy.md
- **Note:** These are reasonable fabrications that match the newsletter's described purpose

### Bio Last Line (Intentionally Omitted)
- **File:** N/A (not on site)
- **Copy:** "He's based in the Washington D.C. area. He's an active member of the Northern Virginia commuter."
- **Site:** Location not mentioned
- **Note:** "Northern Virginia commuter" appears incomplete in copy — likely meant something else. Omitted from site.

---

## Part 3: Missing Assets Checklist

### Photos Needed

| Photo | Purpose | Notes |
|-------|---------|-------|
| Hero headshot | Main homepage hero | Professional, high-res |
| About photo | About section | Can be same as hero or different |

**Question:** "Do you have professional photos ready, or do we need to arrange a shoot?"

### URLs & Contact Info

| Item | Current Status | Question |
|------|----------------|----------|
| LinkedIn URL | Missing (just "linkedin.com") | Full profile URL? |
| Twitter/X URL | Missing (just "x.com") | Full profile URL? Do you want X on the site? |
| Email | hello@seanperryman.com | Correct? |
| Calendly URL | Missing | Do you have one? Want scheduling on site? |
| Newsletter platform | Button disabled | Substack/Beehiiv URL? |

---

## Summary: Client Action Items

After meeting, client needs to provide:

### Must-Have (for launch):
- [ ] Professional headshot(s)
- [ ] LinkedIn profile URL
- [ ] Email address confirmation
- [ ] Stat verification (or decision to remove)
- [ ] Newsletter platform URL

### Nice-to-Have:
- [ ] Real testimonial with attribution
- [ ] Speaking topic descriptions (or approval of generic)
- [ ] Twitter/X profile URL (or confirm removal)
- [ ] Calendly URL (or confirm no scheduling)
- [ ] AI Action Summit organizer name

### Design Sign-off:
- [ ] Overall look/feel approval
- [ ] Color palette approval
- [ ] Typography approval
- [ ] Services order/structure approval

---

## Your Talking Points

**Opening:**
"I want to walk you through the site and get your gut reactions on the design direction. Then we'll go through a content checklist—there are some placeholders I need your input on, and some things where I adapted your copy but want to confirm it's accurate."

**On Placeholders:**
"I've clearly marked everything that's a placeholder. For each one, we can either: get the real info from you, write something new together, or delete the element entirely."

**On Stats:**
"These numbers are attention-grabbing but I don't want to publish anything you can't stand behind. Would you rather have accurate lower numbers or no numbers at all?"

**On Testimonial:**
"The testimonial is completely fake right now. If you have a real one with permission, great. If not, we remove it—no fake quotes."

**On Service Titles:**
"I made a couple minor tweaks to your original titles for brevity. Want to confirm those are okay or if you prefer the exact wording."

**Closing:**
"What I need from you after this call: photos, URLs, and decisions on the content gaps. Once I have those, we're very close to launch-ready."

---

## Quick Reference: Pages to Walk Through

1. **Homepage** — Hero, services preview, about preview, testimonial, CTA
2. **Services > Speaking** — Stats, gallery, topics, CTA
3. **Services > Consulting** — 7 offerings cards, case study, CTA
4. **Newsletter** — The Human Cost page
5. **Contact** — Form + Calendly placeholder
