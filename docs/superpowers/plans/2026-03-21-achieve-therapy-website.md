# Achieve Therapy Centre Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, professional therapy clinic website with all data from achievetherapycentre.com, using Next.js 15 + HeroUI 3.0 + shadcn/ui with light/dark theme support.

**Architecture:** Next.js 15 App Router with static pages. All content hardcoded in TypeScript data files. Shared layout components (Navbar, Footer) wrap all pages. Reusable content components (ServiceCard, StaffCard, etc.) ensure design consistency. Theme switching via next-themes with CSS variables from theme.md.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, HeroUI 3.0, shadcn/ui, next-themes, Framer Motion, Lucide React

**Spec:** `docs/superpowers/specs/2026-03-21-achieve-therapy-website-design.md`

---

## File Structure

```
src/
  app/
    layout.tsx                                    # Root layout: providers, fonts, metadata
    page.tsx                                      # Home page
    globals.css                                   # Theme variables from theme.md
    occupational-therapy/
      page.tsx                                    # OT overview with service cards
      [slug]/page.tsx                             # Dynamic OT subservice pages
    speech-language-pathology/
      page.tsx                                    # SLP overview with service cards
      [slug]/page.tsx                             # Dynamic SLP subservice pages
    joint-therapy/page.tsx                        # Joint therapy page
    group-therapy/page.tsx                        # Group programs listing
    ontario-autism-program/page.tsx               # OAP page
    about/
      page.tsx                                    # About clinic page
      our-staff/page.tsx                          # Staff directory
    faqs/page.tsx                                 # FAQ accordion page
    contact/page.tsx                              # Contact page
  components/
    layout/
      navbar.tsx                                  # HeroUI navbar with dropdowns + theme toggle
      footer.tsx                                  # Multi-column footer
      page-hero.tsx                               # Reusable hero section
      section-wrapper.tsx                         # Consistent section container
      cta-section.tsx                             # Reusable CTA banner
      breadcrumb-nav.tsx                          # Page hierarchy breadcrumbs
    service-card.tsx                              # Service overview card
    staff-card.tsx                                # Team member card with modal bio
    program-card.tsx                              # Group therapy program card
    faq-accordion.tsx                             # FAQ expandable items
    milestone-timeline.tsx                        # Age-based milestones (SLP)
    contact-info-card.tsx                         # Reusable contact block
    social-links.tsx                              # Facebook + Instagram links
    theme-toggle.tsx                              # Light/dark switch
    theme-provider.tsx                            # next-themes provider wrapper
    status-badge.tsx                              # Waitlist/accepting badges
  data/
    site.ts                                       # Business info, contact, hours, social
    navigation.ts                                 # Menu structure with dropdowns
    services-ot.ts                                # OT services content + subpages
    services-slp.ts                               # SLP services content + subpages
    services-other.ts                             # Joint, Group, OAP content
    group-programs.ts                             # 7 group therapy programs
    staff.ts                                      # 18 team members with bios
    faqs.ts                                       # 15 Q&As categorized
  lib/
    utils.ts                                      # cn() helper, shared utilities
public/
  logo.png                                        # Achieve Therapy Centre bilingual logo
```

---

## Phase 1: Project Setup (sequential, must complete first)

### Task 1: Initialize Next.js 15 project with dependencies

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`
- Create: `src/lib/utils.ts`

- [ ] **Step 1: Create Next.js 15 project**

```bash
cd /c/Users/Julian/Projects/alvin-website
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```

- [ ] **Step 2: Install HeroUI 3.0**

```bash
npm install @heroui/react framer-motion
```

- [ ] **Step 3: Install shadcn/ui dependencies**

```bash
npx shadcn@latest init -y
```

Then install specific components:
```bash
npx shadcn@latest add button accordion badge separator sheet
```

- [ ] **Step 4: Install additional dependencies**

```bash
npm install next-themes lucide-react
```

- [ ] **Step 5: Download the logo**

```bash
curl -o public/logo.png "https://achievetherapycentre.com/wp-content/uploads/2023/06/bilingual-logo.png"
```

- [ ] **Step 6: Set up globals.css with theme variables from theme.md**

Replace `src/app/globals.css` with the full theme.md content (all CSS variables for light + dark mode, @theme inline block, @layer base).

- [ ] **Step 7: Create utils.ts**

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 8: Create ThemeProvider**

```typescript
// src/components/theme-provider.tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
```

- [ ] **Step 9: Create HeroUI provider wrapper**

```typescript
// src/components/heroui-provider.tsx
"use client";
import { HeroUIProvider } from "@heroui/react";

export function HeroUIProviderWrapper({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
```

- [ ] **Step 10: Set up root layout with providers + fonts**

`src/app/layout.tsx` — import Antic from Google Fonts, wrap app in ThemeProvider > HeroUIProvider, set metadata (title: "Achieve Therapy Centre", description from tagline).

- [ ] **Step 11: Create minimal home page placeholder**

`src/app/page.tsx` — simple "Achieve Therapy Centre" heading to verify setup.

- [ ] **Step 12: Verify build**

```bash
npm run build
```
Expected: Build succeeds with no errors.

- [ ] **Step 13: Commit**

```bash
git init && git add -A && git commit -m "feat: initialize Next.js 15 project with HeroUI, shadcn, and theme"
```

---

## Phase 2: Data Layer (parallelizable — all independent)

### Task 2: Create site-wide data constants

**Files:**
- Create: `src/data/site.ts`
- Create: `src/data/navigation.ts`

- [ ] **Step 1: Create site.ts**

Export `siteConfig` with: name ("Achieve Therapy Centre"), tagline, phone (613-680-1780), email (info@achievetherapycentre.com), address (Suite 310, 1 Centrepointe Dr, Ottawa, ON K2G 6E2), hours (Mon-Fri 9am-5pm + note about sessions outside hours), social links (Facebook, Instagram), acceptingClients status message.

- [ ] **Step 2: Create navigation.ts**

Export `navigationItems` array matching the site nav: Occupational Therapy (with 6 subitems), Speech Language Pathology (with 7 subitems), Joint Therapy, Group Therapy, About Our Clinic (with subitems: About, Our Staff), Ontario Autism Program, FAQs, Contact.

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts src/data/navigation.ts && git commit -m "feat: add site config and navigation data"
```

### Task 3: Create OT services data

**Files:**
- Create: `src/data/services-ot.ts`

- [ ] **Step 1: Create services-ot.ts**

Export `otServices` — main OT page content (definition, overview) + array of 6 subservices, each with: slug, title, description, detailed content paragraphs, bullet point lists (signs/symptoms/skills), and CTA text. Services: sensory-processing-regulation, handwriting-fine-motor-skills, gross-motor-skills, self-care-skills, feeding-therapy, executive-functioning-skills. Include ALL text content extracted from each page.

- [ ] **Step 2: Commit**

```bash
git add src/data/services-ot.ts && git commit -m "feat: add OT services data"
```

### Task 4: Create SLP services data

**Files:**
- Create: `src/data/services-slp.ts`

- [ ] **Step 1: Create services-slp.ts**

Export `slpServices` — main SLP page content (definition, overview, service areas) + array of 7 subservices with same structure as OT. Services: infant-toddler-preschool-language (include developmental milestones for 12mo/18mo/24mo/3yr/4yr), articulation-fluency-speech-production, childhood-apraxia-of-speech, language-expression-comprehension, augmentative-alternative-communication, social-communication, literacy-reading-writing. Include ALL text content.

- [ ] **Step 2: Commit**

```bash
git add src/data/services-slp.ts && git commit -m "feat: add SLP services data"
```

### Task 5: Create other services + group programs data

**Files:**
- Create: `src/data/services-other.ts`
- Create: `src/data/group-programs.ts`

- [ ] **Step 1: Create services-other.ts**

Export `jointTherapy` (description, key points, supported diagnoses: ASD, Down Syndrome, Cerebral Palsy, Fragile X, Developmental Disabilities, sensory gym feature). Export `ontarioAutismProgram` (overview, core clinical services info, neurodiversity-affirming approach, AccessOAP reference).

- [ ] **Step 2: Create group-programs.ts**

Export `groupPrograms` array with 7 programs: Craft & Connect (ages 8-12 + 13+), Move and Tell (ages 5-7), Game Explorers (ages 8-12 + 13+), Let's Get Cooking (ages 12-13 + 14+), Adventurer's Club D&D (grade 7+), Teen Social+ (ages 13+), Inclusive Dance Program (ages 8+ / 10+). Each with: name, description, ageGroups, schedule, price, duration, notes.

- [ ] **Step 3: Commit**

```bash
git add src/data/services-other.ts src/data/group-programs.ts && git commit -m "feat: add joint therapy, OAP, and group programs data"
```

### Task 6: Create staff data

**Files:**
- Create: `src/data/staff.ts`

- [ ] **Step 1: Create staff.ts**

Export `staffMembers` array with all 18 team members. Each member: name, role (Co-Owner/OT/SLP/OTA/CDA), title, education array, certifications array, specializations array, bio paragraph, languages array, isFounder boolean. Include: Krista Simon, Nathalie Mabon, Elsa Fougere, Richelle d'Entremont, Katie Walsh, Caitlin Elmslie, Alexia Kateb, Amber Nykyforak, Mya Roberts, Michelle Mercier, Hailey Russell, Tammy Day, Paige Holmes, Olivia McMurtry, Belinda Cantor, Carley Bradley. Group by category: co-owners, occupational-therapists, ot-assistants, speech-language-pathologists, communicative-disorders-assistants.

- [ ] **Step 2: Commit**

```bash
git add src/data/staff.ts && git commit -m "feat: add staff directory data"
```

### Task 7: Create FAQ data

**Files:**
- Create: `src/data/faqs.ts`

- [ ] **Step 1: Create faqs.ts**

Export `faqs` array with all 15 Q&As, each with: question, answer, category. Categories: "General" (referrals, in-home services, pricing, waitlist), "Sessions" (initial assessment, session length, number of sessions, parent attendance, cancellation policy), "Billing" (payment methods, insurance coverage, direct billing), "Staff" (CDA role, OTA role). Include complete answer text from the website.

- [ ] **Step 2: Commit**

```bash
git add src/data/faqs.ts && git commit -m "feat: add FAQ data"
```

---

## Phase 3: Layout Components (sequential — navbar depends on navigation data)

### Task 8: Build layout components (Navbar, Footer, PageHero, SectionWrapper, CTA)

**Files:**
- Create: `src/components/layout/navbar.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/page-hero.tsx`
- Create: `src/components/layout/section-wrapper.tsx`
- Create: `src/components/layout/cta-section.tsx`
- Create: `src/components/layout/breadcrumb-nav.tsx`
- Create: `src/components/theme-toggle.tsx`

- [ ] **Step 1: Create ThemeToggle**

`src/components/theme-toggle.tsx` — "use client" component using `useTheme()` from next-themes. Sun/Moon icon toggle button. Use HeroUI Button component with `isIconOnly` variant.

- [ ] **Step 2: Create Navbar**

`src/components/layout/navbar.tsx` — "use client" HeroUI `Navbar` component. Logo on left (Image from public/logo.png, linked to /). Desktop: horizontal nav items from navigation.ts with HeroUI `NavbarItem` + `Dropdown` for items with children. ThemeToggle on right. Mobile: `NavbarMenuToggle` + `NavbarMenu` with `Accordion` for nested items. Sticky with backdrop blur (`shouldHideOnScroll={false}`, `isBlurred`). Max-width container centered.

- [ ] **Step 3: Create Footer**

`src/components/layout/footer.tsx` — 4-column grid: Col 1 (logo + tagline + social links), Col 2 (Services links), Col 3 (About links), Col 4 (Contact info from siteConfig). Bottom bar with copyright. Use `bg-card` background, `border-t border-border`.

- [ ] **Step 4: Create SectionWrapper**

`src/components/layout/section-wrapper.tsx` — Props: `children`, `className`, `alternate` (boolean for alternating bg). Renders `<section>` with consistent `py-20 px-4` padding, `max-w-7xl mx-auto`. If `alternate`, use `bg-muted/50` (light) or `bg-secondary/30` (dark).

- [ ] **Step 5: Create PageHero**

`src/components/layout/page-hero.tsx` — Props: `title`, `subtitle`, `breadcrumbs` (optional array of {label, href}). Full-width section with gradient bg using primary color at low opacity. Large serif title (`font-serif text-4xl md:text-5xl`), sans subtitle. Optional BreadcrumbNav above title.

- [ ] **Step 6: Create BreadcrumbNav**

`src/components/layout/breadcrumb-nav.tsx` — Props: `items: {label: string, href?: string}[]`. Renders breadcrumb trail with chevron separators. Last item is current page (no link, bold).

- [ ] **Step 7: Create CTASection**

`src/components/layout/cta-section.tsx` — Props: `title`, `subtitle`, `buttonText`, `buttonHref`. Full-width banner with primary gradient background, white text, centered content, HeroUI Button with link.

- [ ] **Step 8: Update root layout to include Navbar + Footer**

Modify `src/app/layout.tsx` — Add `<Navbar />` before `{children}` and `<Footer />` after. Wrap content in `<main className="min-h-screen">`.

- [ ] **Step 9: Verify build + visual check**

```bash
npm run build && npm run dev
```
Open localhost:3000, verify navbar renders with menu items, footer shows, theme toggle works.

- [ ] **Step 10: Commit**

```bash
git add src/components/ src/app/layout.tsx && git commit -m "feat: add layout components — navbar, footer, hero, sections, CTA"
```

---

## Phase 4: Reusable Content Components (parallelizable)

### Task 9: Build ServiceCard, StaffCard, ProgramCard

**Files:**
- Create: `src/components/service-card.tsx`
- Create: `src/components/staff-card.tsx`
- Create: `src/components/program-card.tsx`

- [ ] **Step 1: Create ServiceCard**

Props: `title`, `description`, `href`, `icon` (Lucide icon name). HeroUI `Card` with `CardHeader` (icon + title), `CardBody` (description), `CardFooter` (link arrow). Hover: subtle scale + shadow transition. Use `bg-card` with `border border-border`.

- [ ] **Step 2: Create StaffCard**

Props: `member` (from staff.ts type). HeroUI `Card` with `Avatar` placeholder (initials), name, title, role badge (HeroUI `Chip` with primary color for OT, secondary for SLP, accent for assistants). Click opens HeroUI `Modal` with full bio, education list, certifications chips, specializations.

- [ ] **Step 3: Create ProgramCard**

Props: `program` (from group-programs.ts type). HeroUI `Card` with title, age group badges, schedule, price prominently displayed, description. Use `Chip` for age groups and `Badge` for pricing.

- [ ] **Step 4: Commit**

```bash
git add src/components/service-card.tsx src/components/staff-card.tsx src/components/program-card.tsx && git commit -m "feat: add service, staff, and program card components"
```

### Task 10: Build FAQAccordion, ContactInfoCard, StatusBadge, SocialLinks, MilestoneTimeline

**Files:**
- Create: `src/components/faq-accordion.tsx`
- Create: `src/components/contact-info-card.tsx`
- Create: `src/components/status-badge.tsx`
- Create: `src/components/social-links.tsx`
- Create: `src/components/milestone-timeline.tsx`

- [ ] **Step 1: Create FAQAccordion**

Props: `items` (array of {question, answer}), optional `defaultOpen` indices. Use HeroUI `Accordion` + `AccordionItem`. Style with serif question text, sans answer body.

- [ ] **Step 2: Create ContactInfoCard**

Reusable card showing phone (with tel: link), email (with mailto: link), address, hours. Use Lucide icons (Phone, Mail, MapPin, Clock). HeroUI `Card` with bordered variant.

- [ ] **Step 3: Create StatusBadge**

Props: `status` ("accepting" | "waitlist" | "closed"), `service` string. Green chip for accepting, yellow for waitlist, red for closed. Use HeroUI `Chip` with appropriate color.

- [ ] **Step 4: Create SocialLinks**

Render Facebook + Instagram icon links from siteConfig.socialLinks. Lucide icons, hover color transition to primary.

- [ ] **Step 5: Create MilestoneTimeline**

Props: `milestones` array of {age, description}. Vertical timeline with dots connected by line. Age label on left, description on right. Use primary color for dots, border color for line.

- [ ] **Step 6: Commit**

```bash
git add src/components/faq-accordion.tsx src/components/contact-info-card.tsx src/components/status-badge.tsx src/components/social-links.tsx src/components/milestone-timeline.tsx && git commit -m "feat: add FAQ, contact, status, social, and timeline components"
```

---

## Phase 5: Pages (parallelizable — each page is independent)

### Task 11: Build Home page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build home page with all sections**

Sections in order:
1. **Hero** — Full-width gradient hero with tagline "A client-centered approach to Speech-Language Pathology and Occupational Therapy", "We are currently accepting new clients!" badge, "Contact Us" CTA button. Use Framer Motion fade-in.
2. **Services Overview** — 4 ServiceCards in responsive grid: Occupational Therapy, Speech Language Pathology, Joint Therapy, Group Therapy. Each links to its page.
3. **About Preview** — Split layout: left text (mission statement, founded 2009), right decorative gradient/pattern placeholder. "Learn More" link to /about.
4. **Why Choose Us** — 3-4 feature cards: Client-Centered Approach, Interdisciplinary Team, Sensory Gym Facilities, Neurodiversity Affirming. Icons + short descriptions.
5. **Quick FAQ** — Top 4 FAQs in accordion.
6. **CTA Section** — "Ready to Get Started?" with contact button.

Use SectionWrapper with alternating backgrounds.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx && git commit -m "feat: build home page with hero, services, about preview, FAQ"
```

### Task 12: Build OT overview + subpages

**Files:**
- Create: `src/app/occupational-therapy/page.tsx`
- Create: `src/app/occupational-therapy/[slug]/page.tsx`

- [ ] **Step 1: Build OT overview page**

PageHero with OT title + definition. ServiceCard grid for 6 subservices (sensory processing, handwriting/fine motor, gross motor, self-care, feeding, executive functioning). Each card links to `/occupational-therapy/[slug]`. Full OT overview text. CTASection at bottom.

- [ ] **Step 2: Build dynamic OT subpage**

`[slug]/page.tsx` — `generateStaticParams()` returns all 6 slugs. Look up service data by slug from services-ot.ts. Render: PageHero with breadcrumbs (Home > OT > Service Name), full content paragraphs, bullet lists (signs/symptoms/areas addressed), CTASection. 404 if slug not found via `notFound()`.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/app/occupational-therapy/ && git commit -m "feat: build OT overview and 6 subservice pages"
```

### Task 13: Build SLP overview + subpages

**Files:**
- Create: `src/app/speech-language-pathology/page.tsx`
- Create: `src/app/speech-language-pathology/[slug]/page.tsx`

- [ ] **Step 1: Build SLP overview page**

Same structure as OT overview. PageHero with SLP definition. 7 ServiceCards for subservices. Full SLP overview text. CTASection.

- [ ] **Step 2: Build dynamic SLP subpage**

`[slug]/page.tsx` — `generateStaticParams()` for 7 slugs. Lookup from services-slp.ts. Special handling for infant-toddler-preschool-language page: include MilestoneTimeline component for developmental milestones. All others: standard content + bullet list layout. Breadcrumbs, CTA.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/app/speech-language-pathology/ && git commit -m "feat: build SLP overview and 7 subservice pages"
```

### Task 14: Build Joint Therapy + OAP pages

**Files:**
- Create: `src/app/joint-therapy/page.tsx`
- Create: `src/app/ontario-autism-program/page.tsx`

- [ ] **Step 1: Build Joint Therapy page**

PageHero with breadcrumbs. Content sections: description of combined OT+SLP, sensory gym feature highlight, supported diagnoses as HeroUI Chips (ASD, Down Syndrome, Cerebral Palsy, Fragile X, Developmental Disabilities). CTASection.

- [ ] **Step 2: Build OAP page**

PageHero. Three intro questions as styled callout cards. Core clinical services description. Neurodiversity-affirming badge/note. Important note about contacting OAP directly for funding questions. CTASection.

- [ ] **Step 3: Verify build + commit**

```bash
npm run build && git add src/app/joint-therapy/ src/app/ontario-autism-program/ && git commit -m "feat: build joint therapy and Ontario Autism Program pages"
```

### Task 15: Build Group Therapy page

**Files:**
- Create: `src/app/group-therapy/page.tsx`

- [ ] **Step 1: Build Group Therapy page**

PageHero with breadcrumbs. OAP funding note callout. Program grid: 7 ProgramCards from group-programs.ts. Each showing: program name, age groups (Chip badges), schedule, price, session dates, special notes (e.g., allergy requirement for cooking). Registration CTA at bottom.

- [ ] **Step 2: Verify build + commit**

```bash
npm run build && git add src/app/group-therapy/ && git commit -m "feat: build group therapy programs page"
```

### Task 16: Build About + Staff pages

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/app/about/our-staff/page.tsx`

- [ ] **Step 1: Build About page**

PageHero. Sections: Mission & Vision (side-by-side cards), History (founded 2009 by Nathalie Mabon & Krista Simon), Founders spotlight cards, Clinic facilities description (sensory gyms, ongoing education), Treatment philosophy. CTASection.

- [ ] **Step 2: Build Staff page**

PageHero with breadcrumbs (Home > About > Our Staff). Filter tabs/chips for role categories: All, Occupational Therapists, Speech-Language Pathologists, Assistants. Responsive grid of StaffCards (with modal bios). Use HeroUI Tabs or Chip group for filtering.

- [ ] **Step 3: Verify build + commit**

```bash
npm run build && git add src/app/about/ && git commit -m "feat: build about clinic and staff directory pages"
```

### Task 17: Build FAQs page

**Files:**
- Create: `src/app/faqs/page.tsx`

- [ ] **Step 1: Build FAQs page**

PageHero with breadcrumbs. Category tabs (General, Sessions, Billing, Staff) using HeroUI Tabs. FAQAccordion for each category's questions. All 15 Q&As with full answers. ContactInfoCard at bottom for questions not covered.

- [ ] **Step 2: Verify build + commit**

```bash
npm run build && git add src/app/faqs/ && git commit -m "feat: build FAQ page with categorized accordion"
```

### Task 18: Build Contact page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Build Contact page**

PageHero. Two-column layout: Left — ContactInfoCard (phone, email, address, hours), service availability StatusBadges (SLP: accepting, OT: waitlist for handwriting only, Joint: closed), social links. Right — contact form UI (name, email, phone, service interest dropdown, message textarea, submit button). Form is UI-only, no backend. Map placeholder div with address text. Note about new location as of July 2024.

- [ ] **Step 2: Verify build + commit**

```bash
npm run build && git add src/app/contact/ && git commit -m "feat: build contact page with form and service status"
```

---

## Phase 6: Polish & Final Build

### Task 19: Add Framer Motion scroll animations + responsive polish

**Files:**
- Modify: Multiple page and component files

- [ ] **Step 1: Add scroll reveal animations**

Create a `src/components/motion-wrapper.tsx` "use client" component wrapping Framer Motion `motion.div` with `whileInView` fade-up animation (initial: opacity 0, y: 20; animate: opacity 1, y: 0; transition: duration 0.5). Use `viewport={{ once: true }}`.

- [ ] **Step 2: Wrap major sections in MotionWrapper**

Apply to: home page sections, service card grids, staff cards, program cards, about sections. Keep it subtle — just fade-in-up on scroll.

- [ ] **Step 3: Add responsive breakpoint polish**

Verify all pages render correctly at mobile (375px), tablet (768px), desktop (1280px). Fix any grid/spacing issues. Ensure navbar mobile menu works, cards stack properly on small screens.

- [ ] **Step 4: Final full build verification**

```bash
npm run build
```
Expected: All pages build successfully with no errors.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add scroll animations and responsive polish"
```

---

## Parallel Execution Map

```
Phase 1 (Task 1) ──────────────────────────────────── sequential, must finish first
                  │
Phase 2 (Tasks 2-7) ──────────────────────────────── all 6 tasks in parallel
                  │
Phase 3 (Task 8) ──────────────────────────────────── sequential (needs data + setup)
                  │
Phase 4 (Tasks 9-10) ─────────────────────────────── both tasks in parallel
                  │
Phase 5 (Tasks 11-18) ────────────────────────────── all 8 page tasks in parallel
                  │
Phase 6 (Task 19) ─────────────────────────────────── sequential (needs all pages)
```
