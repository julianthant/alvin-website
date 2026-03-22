# Comprehensive Website Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Use superpowers:frontend-design for all UI redesign tasks (navbar, hero, sections).

**Goal:** Fix all broken HeroUI 3.0 component APIs, redesign the navbar, make logo transparent, improve section boundaries, and add real images from the source website throughout.

**Architecture:** Replace all broken HeroUI compound component imports (Card.Content, Accordion.Item, Modal.Backdrop etc.) with plain Tailwind HTML + shadcn components where HeroUI v3 API is unreliable. Keep HeroUI only for Button, Dropdown, Chip where API is confirmed working. Download all images from source site. Use /frontend-design skill for navbar and visual redesigns.

**Tech Stack:** Next.js 15, Tailwind CSS v4, HeroUI 3.0 (Button/Dropdown/Chip only), shadcn/ui (Accordion), Framer Motion, Lucide React

**Spec:** `docs/superpowers/specs/2026-03-21-achieve-therapy-website-design.md`

---

## Root Cause Analysis

### HeroUI 3.0 API Breaking Changes
HeroUI v3 uses **compound component pattern** (`Card.Content`, `Accordion.Item`, `Modal.Backdrop`). Our code imports **named exports** (`CardContent`, `AccordionItem`, `ModalBackdrop`) which **do not exist** — causing components to render nothing. This is why sections appear empty.

### Confirmed Working HeroUI v3 APIs
From context7 docs:
- `Card` → `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, `Card.Footer`
- `Accordion` → `Accordion.Item`, `Accordion.Heading`, `Accordion.Trigger`, `Accordion.Indicator`, `Accordion.Panel`, `Accordion.Body`
- `Modal` → `Modal.Backdrop`, `Modal.Container`, `Modal.Dialog`, `Modal.Header`, `Modal.Heading`, `Modal.Body`, `Modal.Footer`, `Modal.CloseTrigger`
- `Button` variants: primary (default), secondary, tertiary, ghost, danger, danger-soft
- `Button` does NOT have: outline, soft, flat, bordered, light, isIconOnly
- `Dropdown` → `Dropdown`, `DropdownTrigger`, `DropdownPopover`, `DropdownMenu`, `DropdownItem`

### Strategy
**Replace** broken named imports with the correct compound pattern (`Card.Content` not `CardContent`). For complex components (Modal, Accordion) where the compound API is fragile, fall back to **shadcn/ui** or **plain Tailwind** for reliability.

---

## File Map

```
Files to MODIFY:
  src/components/service-card.tsx          — Fix Card API
  src/components/staff-card.tsx            — Fix Card + Modal API, add photo
  src/components/program-card.tsx          — Fix Card API
  src/components/contact-info-card.tsx     — Fix Card API
  src/components/faq-accordion.tsx         — Replace with shadcn Accordion
  src/components/status-badge.tsx          — Fix Chip API
  src/components/layout/cta-section.tsx    — Fix Button variant
  src/components/layout/navbar.tsx         — Complete redesign with /frontend-design
  src/components/layout/page-hero.tsx      — Stronger visual distinction
  src/components/layout/section-wrapper.tsx — Better section boundaries
  src/components/theme-toggle.tsx          — Fix Button API
  src/components/layout/footer.tsx         — Add logo transparency class
  src/app/page.tsx                         — Fix Button variants, add images
  src/app/about/page.tsx                   — Fix Card API, add images
  src/app/about/our-staff/page.tsx         — Fix filtering, add photos
  src/app/joint-therapy/page.tsx           — Fix Chip API
  src/app/ontario-autism-program/page.tsx   — Fix Chip/Card API
  src/app/contact/page.tsx                 — Fix form, StatusBadge
  src/app/faqs/page.tsx                    — Fix Tabs API
  src/data/staff.ts                        — Add photo paths

Files to CREATE:
  public/images/jon-listening.jpg          — Downloaded therapy photo
  public/images/liam-balls-in.jpg          — Downloaded therapy photo
  public/staff/*.jpg                       — 16 staff headshots
  scripts/download-images.sh               — Image download script
```

---

## Task 1: Download all images and make logo transparent

**Files:**
- Create: `public/images/jon-listening.jpg`
- Create: `public/images/liam-balls-in.jpg`
- Create: `public/staff/` (16 headshot files)
- Modify: `public/logo.png` (remove white background)

- [ ] **Step 1: Create directories**
```bash
mkdir -p public/images public/staff
```

- [ ] **Step 2: Download therapy session photos**
```bash
curl -o public/images/jon-listening.jpg "https://achievetherapycentre.com/wp-content/uploads/2023/10/jon-listening.jpg"
curl -o public/images/liam-balls-in.jpg "https://achievetherapycentre.com/wp-content/uploads/2023/10/liam-balls-in.jpg"
```

- [ ] **Step 3: Download all 16 staff headshots**
```bash
curl -o public/staff/krista-simon.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/krista-staff-photo-edited.jpg"
curl -o public/staff/nathalie-mabon.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/01/nathalie-mabon-staff-photo.jpg"
curl -o public/staff/elsa-fougere.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/20240312_165606-edited.jpg"
curl -o public/staff/richelle-dentremont.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/richelle-photo-1.jpg"
curl -o public/staff/katie-walsh.jpg "https://achievetherapycentre.com/wp-content/uploads/2023/12/blank-profile-picture.png"
curl -o public/staff/caitlin-elmslie.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/12/caitlin-staff-photo-edited.jpg"
curl -o public/staff/alexia-kateb.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/20240314_120631-edited.jpg"
curl -o public/staff/amber-nykyforak.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/amber-nykyforak-staff-photo-edited.jpg"
curl -o public/staff/mya-roberts.jpg "https://achievetherapycentre.com/wp-content/uploads/2026/01/img_2168-cropped-1.jpeg"
curl -o public/staff/michelle-mercier.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/20240321_143321-1-edited.jpg"
curl -o public/staff/hailey-russell.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/hailey-russell-staff-photo-edited.jpg"
curl -o public/staff/tammy-day.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/20240308_150149-edited.jpg"
curl -o public/staff/paige-holmes.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/01/paige-holmes-staff-photo-edited.jpg"
curl -o public/staff/olivia-mcmurtry.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/20240315_102122-edited.jpg"
curl -o public/staff/belinda-cantor.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/12/belinda-photo-edited-1.jpg"
curl -o public/staff/carley-bradley.jpg "https://achievetherapycentre.com/wp-content/uploads/2024/05/carley-bradley-staff-photo-edited.jpg"
```

- [ ] **Step 4: Make logo background transparent**
Use CSS approach: Add `mix-blend-mode: multiply` or `dark:invert` class to all logo Image components. Alternatively, use a canvas/sharp script to remove white bg. CSS approach is simplest:
- In navbar.tsx logo Image: add `className="h-10 w-auto mix-blend-multiply dark:brightness-0 dark:invert"`
- In footer.tsx logo Image: same classes

- [ ] **Step 5: Update staff.ts to include photo paths**
Add `photo: string` field to StaffMember interface. Map each member to their downloaded photo path (e.g., `/staff/krista-simon.jpg`).

- [ ] **Step 6: Commit**
```bash
git add public/images/ public/staff/ src/data/staff.ts
git commit -m "feat: add all images from source website + staff photos"
```

---

## Task 2: Fix all HeroUI component APIs across all components

This is the critical fix. Replace broken named imports with correct compound pattern.

**Files to modify:**
- `src/components/service-card.tsx`
- `src/components/staff-card.tsx`
- `src/components/program-card.tsx`
- `src/components/contact-info-card.tsx`
- `src/components/faq-accordion.tsx`
- `src/components/status-badge.tsx`
- `src/components/layout/cta-section.tsx`
- `src/components/theme-toggle.tsx`

- [ ] **Step 1: Fix service-card.tsx**
Change `import { Card, CardContent } from "@heroui/react"` to `import { Card } from "@heroui/react"`.
Change `<CardContent>` to `<Card.Content>`.
Verify Card component renders.

- [ ] **Step 2: Fix program-card.tsx**
Same Card.Content fix as service-card. Also fix `Chip variant="soft"` → verify if "soft" is valid or use "secondary".

- [ ] **Step 3: Fix contact-info-card.tsx**
Same Card.Content fix.

- [ ] **Step 4: Fix faq-accordion.tsx**
Replace HeroUI Accordion entirely with shadcn Accordion (already installed at src/components/ui/accordion.tsx). Import from "@/components/ui/accordion". Use `<Accordion>`, `<AccordionItem>`, `<AccordionTrigger>`, `<AccordionContent>` pattern. Remove all HeroUI accordion imports.

- [ ] **Step 5: Fix staff-card.tsx**
Replace HeroUI Card/Modal/Avatar/Separator with:
- Card: Use `Card` + `Card.Content` compound pattern
- Modal: Use HeroUI compound pattern `Modal`, `Modal.Backdrop`, `Modal.Container`, `Modal.Dialog`, etc. — but import as single `Modal` and use dot notation
- Avatar: Replace with plain div + Next.js Image (for staff photos)
- Separator: Replace with `<hr>` or shadcn Separator
- `useOverlayState`: Check if this exists, or use useState toggle
Add Next.js Image for staff photo display.

- [ ] **Step 6: Fix status-badge.tsx**
Verify Chip import and variant. Test that `variant="soft"` works in HeroUI v3, otherwise use className for styling.

- [ ] **Step 7: Fix cta-section.tsx**
Change `variant="outline"` to `variant="secondary"` or use plain button with Tailwind classes.

- [ ] **Step 8: Fix theme-toggle.tsx**
Replace `isIconOnly` prop (doesn't exist in v3). Use a plain button or HeroUI Button without isIconOnly, applying icon-only sizing with className.

- [ ] **Step 9: Verify build**
```bash
npx next build
```
Expected: Build succeeds with 0 errors.

- [ ] **Step 10: Commit**
```bash
git add src/components/
git commit -m "fix: migrate all components to correct HeroUI 3.0 compound API"
```

---

## Task 3: Complete navbar redesign

**USE SKILL: superpowers:frontend-design for this task.**

**Files:**
- Modify: `src/components/layout/navbar.tsx`

Design requirements:
- Professional, modern healthcare navbar inspired by ontheball.ca
- Sticky with backdrop blur
- Logo left, nav items center, CTA button + theme toggle right
- Desktop: clean horizontal nav with dropdown menus for OT and SLP
- Mobile: slide-in sheet/drawer menu (use shadcn Sheet)
- Active page highlighting
- "Contact Us" as a prominent CTA button on the right
- Smooth transitions, proper spacing
- Must work with both light and dark themes
- Logo uses mix-blend-multiply for transparency

- [ ] **Step 1: Redesign navbar using /frontend-design**
Build a completely new navbar component. Key design points:
- Clean horizontal layout, max-w-7xl centered
- Logo: Image with mix-blend-multiply, height 44px
- Nav items: text-sm font-medium, hover:text-primary transition
- Dropdowns: Use HeroUI Dropdown with DropdownTrigger/DropdownPopover/DropdownMenu/DropdownItem
- Only show top-level items in desktop nav (OT, SLP, Joint, Group, About, OAP, FAQ)
- Contact as CTA button (bg-primary text-primary-foreground) on far right
- ThemeToggle next to CTA
- Mobile: shadcn Sheet component sliding from right, with full nav tree
- Active link detection with usePathname

- [ ] **Step 2: Verify on desktop and mobile**
```bash
npx next build
```

- [ ] **Step 3: Commit**
```bash
git add src/components/layout/navbar.tsx
git commit -m "feat: complete navbar redesign — professional healthcare nav"
```

---

## Task 4: Fix hero sections and section boundaries

**USE SKILL: superpowers:frontend-design for visual design.**

**Files:**
- Modify: `src/components/layout/page-hero.tsx`
- Modify: `src/components/layout/section-wrapper.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Redesign PageHero with stronger visual distinction**
Give the hero a more distinctive look:
- Darker/richer gradient: `bg-gradient-to-br from-primary/10 via-primary/5 to-accent/15`
- Bottom border/divider: add decorative wave SVG or thick `border-b-4 border-primary/20`
- More vertical padding: py-20 md:py-32
- Decorative accent element (subtle dot pattern or geometric shape)

- [ ] **Step 2: Improve SectionWrapper alternating pattern**
Make alternate sections more visually distinct:
- Default: `bg-background` (pure white/black)
- Alternate: `bg-muted/40 dark:bg-muted/20 border-y border-border/50`
- Add subtle top/bottom border to alternate sections for clear separation

- [ ] **Step 3: Fix home page hero**
- Stronger gradient background
- Add therapy session image (liam-balls-in.jpg) as decorative element on the right side (desktop only)
- Fix Button variants: primary → default (no variant needed), "outline" → `variant="secondary"`
- Fix Chip: verify variant works or use plain styled span

- [ ] **Step 4: Verify build + visual check**
```bash
npx next build
```

- [ ] **Step 5: Commit**
```bash
git add src/components/layout/ src/app/page.tsx
git commit -m "feat: improve hero sections and section boundaries for visual clarity"
```

---

## Task 5: Add images throughout all pages

**Files:**
- Modify: `src/components/staff-card.tsx` — show actual photos
- Modify: `src/app/page.tsx` — therapy images in hero and about sections
- Modify: `src/app/about/page.tsx` — clinic/founder images
- Modify: `src/app/about/our-staff/page.tsx` — ensure photos render
- Modify: `src/app/occupational-therapy/page.tsx` — add therapy image
- Modify: `src/app/speech-language-pathology/page.tsx` — add therapy image

- [ ] **Step 1: Update StaffCard to show real photos**
Replace Avatar initials with Next.js Image using the photo path from staff data. Fallback to initials div if photo is blank-profile-picture.

- [ ] **Step 2: Add images to home page**
- Hero section: Add therapy image (jon-listening.jpg) in a split layout on desktop
- About preview section: Replace the stat cards column with a therapy image (liam-balls-in.jpg)

- [ ] **Step 3: Add images to About page**
- Founders section: Show Krista Simon and Nathalie Mabon photos
- Clinic section: Could use one of the therapy images as a facility preview

- [ ] **Step 4: Add images to OT and SLP overview pages**
- Add a therapy image to the hero or intro section of each overview page

- [ ] **Step 5: Verify build**
```bash
npx next build
```

- [ ] **Step 6: Commit**
```bash
git add src/components/ src/app/ src/data/
git commit -m "feat: add real photos to staff cards, home, about, and service pages"
```

---

## Task 6: Fix remaining page-specific issues

**Files:**
- Modify: `src/app/about/page.tsx` — Fix Card API
- Modify: `src/app/joint-therapy/page.tsx` — Fix Chip API
- Modify: `src/app/ontario-autism-program/page.tsx` — Fix Chip/Card API
- Modify: `src/app/contact/page.tsx` — Fix form and imports
- Modify: `src/app/faqs/page.tsx` — Fix Tabs (use shadcn or plain buttons)
- Modify: `src/app/about/our-staff/page.tsx` — Fix filtering with Chip/Tabs
- Modify: `src/app/group-therapy/page.tsx` — Verify ProgramCard renders
- Modify: `src/app/occupational-therapy/[slug]/page.tsx` — Verify renders
- Modify: `src/app/speech-language-pathology/[slug]/page.tsx` — Verify renders

- [ ] **Step 1: Read all page files and fix HeroUI imports**
For every page that imports from @heroui/react:
- Replace any Card named imports with compound pattern
- Replace Chip variant="soft" → verify or use className
- Replace Tabs with plain buttons + state for filtering
- Fix any Button variant issues

- [ ] **Step 2: Fix about page Card usage**
Replace `Card, CardContent` import with `Card` and use `Card.Content`.

- [ ] **Step 3: Fix joint-therapy Chip usage**
Verify Chip renders correctly.

- [ ] **Step 4: Fix ontario-autism-program Card/Chip usage**

- [ ] **Step 5: Fix contact page form**
Ensure form renders with proper input styling (use plain HTML inputs with Tailwind classes or shadcn Input).

- [ ] **Step 6: Fix FAQs page category filtering**
Replace HeroUI Tabs with plain button group for category selection (most reliable).

- [ ] **Step 7: Fix our-staff page filtering**
Same — use plain buttons for category filter.

- [ ] **Step 8: Verify full build — all 27 routes**
```bash
npx next build
```
Expected: 27 static routes, 0 errors.

- [ ] **Step 9: Commit**
```bash
git add src/app/
git commit -m "fix: resolve all page-level HeroUI API issues"
```

---

## Task 7: Final build verification and visual QA

- [ ] **Step 1: Full production build**
```bash
npx next build
```
Expected: All routes build successfully.

- [ ] **Step 2: Start dev server and check all pages visually**
```bash
npm run dev
```
Navigate to every route and verify:
- Home page renders all sections with content visible
- Service cards show icons and text
- OT/SLP overview pages show service grids
- OT/SLP subpages render full content
- Staff page shows photos in cards, modal opens on click
- FAQs accordion expands/collapses
- Contact form renders
- Group therapy shows program cards
- Theme toggle works (light ↔ dark)
- Navbar dropdowns work on desktop
- Mobile menu works

- [ ] **Step 3: Final commit**
```bash
git add -A
git commit -m "feat: complete website fixes — all components rendering, images added, navbar redesigned"
```

---

## Parallel Execution Map

```
Task 1 (Images) ─────────────────── can run first, independent
Task 2 (Component API fixes) ────── depends on Task 1 (staff photos)
Task 3 (Navbar redesign) ────────── independent, use /frontend-design
Task 4 (Hero/sections) ──────────── independent, use /frontend-design
Task 5 (Add images to pages) ────── depends on Tasks 1 + 2
Task 6 (Page fixes) ─────────────── depends on Task 2
Task 7 (Final QA) ───────────────── depends on ALL above
```

Tasks 1, 3, and 4 can run in parallel.
Tasks 2 runs after 1.
Tasks 5 and 6 run after 2.
Task 7 runs last.
