# Visual Polish & Design Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Use max effort opus model for every subagent.

**Goal:** Fix all visual/theming issues, make every page look thoughtfully designed, fix card grids, button colors, navbar, and hero section.

**Architecture:** The root cause of most visual issues is that `globals.css` defines shadcn-style theme tokens but HeroUI v3 expects its own token system (`--default`, `--success`, `--warning`, `--danger`, `--surface`, `--overlay`, `--accent-soft`). We must bridge these two systems. Additionally, MotionWrapper breaks CSS Grid equal-height, cards need flex-grow layouts, the hero should be single-column, the navbar needs to be taller with a bigger logo, and every subpage needs a thoughtful visual redesign.

**Tech Stack:** Next.js 15, Tailwind CSS v4, HeroUI 3.0, shadcn/ui, Framer Motion

---

## Root Cause Analysis

### 1. HeroUI Theme Token Gap (CRITICAL)
`globals.css` defines `--primary`, `--secondary`, `--accent`, `--muted`, `--destructive` etc. (shadcn pattern).
HeroUI v3 expects `--default`, `--success`, `--warning`, `--danger`, `--surface`, `--overlay`, `--accent-soft` etc.
These are NOT defined, so HeroUI Button, Chip, Accordion, Modal, Dropdown all render with missing/wrong colors.

### 2. MotionWrapper Height (HIGH)
`MotionWrapper` renders `<motion.div>` without `h-full`. CSS Grid children need to stretch, but MotionWrapper sits between grid and card, breaking equal height. Every card grid is affected.

### 3. Card Internal Layout
When cards stretch to equal height in a grid, the internal content needs `flex flex-col` with the last element using `mt-auto` or `flex-grow` to push it down. Otherwise content looks mushed or top-heavy.

---

## File Map

```
MODIFY globals.css               — Add HeroUI theme tokens (--default, --success, etc.)
MODIFY motion-wrapper.tsx         — Add h-full support
MODIFY navbar.tsx                 — Increase height, bigger logo
MODIFY service-card.tsx           — Flex layout for equal-height grids
MODIFY program-card.tsx           — h-full + flex layout
MODIFY staff-card.tsx             — h-full + flex layout
MODIFY contact-info-card.tsx      — Ensure proper height
MODIFY cta-section.tsx            — Fix button colors
MODIFY status-badge.tsx           — Verify with new tokens
MODIFY page.tsx (home)            — Single-column hero, fix buttons
MODIFY about/page.tsx             — Polish
MODIFY about/our-staff/page.tsx   — Polish
MODIFY occupational-therapy/page.tsx           — Add design polish
MODIFY occupational-therapy/[slug]/page.tsx    — Thoughtful redesign
MODIFY speech-language-pathology/page.tsx      — Add design polish
MODIFY speech-language-pathology/[slug]/page.tsx — Thoughtful redesign
MODIFY joint-therapy/page.tsx     — Add design polish
MODIFY group-therapy/page.tsx     — Add design polish
MODIFY ontario-autism-program/page.tsx — Add design polish
MODIFY faqs/page.tsx              — Polish
MODIFY contact/page.tsx           — Fix button colors, polish
MODIFY footer.tsx                 — Fix copyright year
```

---

## Task 1: Fix HeroUI theme tokens in globals.css

**Files:** `src/app/globals.css`

This is the ROOT CAUSE fix. Map our shadcn theme values to HeroUI's expected token names.

- [ ] **Step 1: Add HeroUI token definitions to `:root`**

After the existing `:root` block variables, add the HeroUI-required tokens. Map them to our existing values:

```css
/* HeroUI v3 required tokens */
--default: var(--muted);
--default-foreground: var(--foreground);
--success: oklch(0.5965 0.1377 142.5);
--success-foreground: oklch(1.0000 0 0);
--warning: oklch(0.7694 0.1585 70.08);
--warning-foreground: oklch(0.2417 0.0298 269.8827);
--danger: var(--destructive);
--danger-foreground: var(--destructive-foreground);
--surface: var(--card);
--surface-foreground: var(--card-foreground);
--overlay: oklch(0 0 0 / 0.5);
--overlay-foreground: oklch(1.0000 0 0);
--accent-soft: var(--accent);
--accent-soft-foreground: var(--accent-foreground);
--accent-foreground: oklch(1.0000 0 0);
```

- [ ] **Step 2: Add same tokens to `.dark` block**

Map dark mode versions:

```css
--default: var(--muted);
--default-foreground: var(--foreground);
--success: oklch(0.6485 0.1554 148.74);
--success-foreground: oklch(0 0 0);
--warning: oklch(0.8014 0.1605 73.07);
--warning-foreground: oklch(0 0 0);
--danger: var(--destructive);
--danger-foreground: var(--destructive-foreground);
--surface: var(--card);
--surface-foreground: var(--card-foreground);
--overlay: oklch(0 0 0 / 0.7);
--overlay-foreground: oklch(1.0000 0 0);
--accent-soft: var(--accent);
--accent-soft-foreground: var(--accent-foreground);
--accent-foreground: oklch(0 0 0);
```

- [ ] **Step 3: Add token mappings in @theme inline block**

```css
--color-default: var(--default);
--color-default-foreground: var(--default-foreground);
--color-success: var(--success);
--color-success-foreground: var(--success-foreground);
--color-warning: var(--warning);
--color-warning-foreground: var(--warning-foreground);
--color-danger: var(--danger);
--color-danger-foreground: var(--danger-foreground);
--color-surface: var(--surface);
--color-surface-foreground: var(--surface-foreground);
--color-overlay: var(--overlay);
--color-overlay-foreground: var(--overlay-foreground);
```

- [ ] **Step 4: Build and verify**
```bash
rm -rf .next && npx next build
```

- [ ] **Step 5: Commit**
```bash
git add src/app/globals.css && git commit -m "fix: add HeroUI v3 theme tokens to bridge shadcn/heroui theme systems"
```

---

## Task 2: Fix MotionWrapper and card component equal-height layouts

**Files:**
- `src/components/motion-wrapper.tsx`
- `src/components/service-card.tsx`
- `src/components/program-card.tsx`
- `src/components/staff-card.tsx`

- [ ] **Step 1: Fix MotionWrapper to pass h-full**

Read motion-wrapper.tsx. The motion.div needs `className` that includes `h-full` when used in grids. The simplest fix: always add `h-full` to the motion.div since MotionWrapper is almost always used inside grids. Merge the `h-full` into the className prop:

```tsx
<motion.div className={cn("h-full", className)} ...>
```

Import `cn` from `@/lib/utils`.

- [ ] **Step 2: Fix ServiceCard internal layout for equal height**

The card div should use `flex flex-col h-full` and the description paragraph should have `flex-1` to fill available space, pushing the arrow to the bottom:

```
outer div: h-full rounded-xl border ... p-6 shadow-sm
  inner div: flex flex-col h-full gap-3
    icon div
    h3 title
    p description: flex-1 (grows to fill)
    arrow div: mt-auto (pushed to bottom)
```

- [ ] **Step 3: Fix ProgramCard for equal height**

Add `h-full` to the outer div. Use `flex flex-col h-full` on the inner content div. The notes section (if present) should be at the bottom with `mt-auto`.

- [ ] **Step 4: Fix StaffCard for equal height**

The outer wrapper (button or div that triggers modal) needs `h-full`. The card div needs `h-full`. Content should flex-col with the role chip at the bottom via `mt-auto`.

- [ ] **Step 5: Build and verify**
```bash
npx next build
```

- [ ] **Step 6: Commit**
```bash
git add src/components/ && git commit -m "fix: equal-height card grids with flex layout + MotionWrapper h-full"
```

---

## Task 3: Fix navbar — taller, bigger logo

**Files:** `src/components/layout/navbar.tsx`

- [ ] **Step 1: Increase navbar height**

Change `h-16` (64px) to `h-20` (80px) on the nav element.

- [ ] **Step 2: Make logo bigger**

Change the logo Image from `h-16` to `h-14` (or even `h-16`) — the point is it should be noticeably bigger than before. Since the navbar is now h-20, we have room. Use:
```
width={360} height={90} className="h-14 w-auto dark:brightness-0 dark:invert"
```

Also fix the mobile menu logo to be proportionally bigger.

- [ ] **Step 3: Commit**
```bash
git add src/components/layout/navbar.tsx && git commit -m "fix: increase navbar height and logo size"
```

---

## Task 4: Fix hero section — single column centered

**Files:** `src/app/page.tsx`

The user wants a single-column hero, not 2-column. Consider whether the image fits — if not, remove it.

- [ ] **Step 1: Rewrite hero section**

Remove the 2-column grid layout. Make it a single centered column:
- Centered text, max-w-3xl mx-auto
- Large serif heading
- Subtitle paragraph
- Chip badge (accepting clients)
- Two buttons side by side
- OPTIONAL: If the image fits naturally below the text or as a subtle background element, include it. Otherwise remove it from the hero. The image can be used elsewhere (about section or as a decorative element).
- Background: keep the gradient but make it more visible

- [ ] **Step 2: Fix button colors**

For the "Contact Us" primary button:
- It should have `bg-primary text-primary-foreground` in light mode (dark text on green)
- And in dark mode: `bg-primary text-primary-foreground` (white text on green)
- If HeroUI Button doesn't render this correctly, use a plain styled link instead:
```tsx
<NextLink href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">
  Contact Us
</NextLink>
```

For the "Our Services" secondary button:
- Light mode: bordered, dark text
- Dark mode: bordered, white text
```tsx
<NextLink href="#services" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-base font-medium text-foreground shadow-sm transition hover:bg-muted">
  Our Services
</NextLink>
```

- [ ] **Step 3: Commit**
```bash
git add src/app/page.tsx && git commit -m "fix: single-column hero with correct button colors"
```

---

## Task 5: Fix button and chip colors across all files

**Files:**
- `src/components/layout/cta-section.tsx`
- `src/components/status-badge.tsx`
- `src/app/contact/page.tsx`
- `src/components/layout/footer.tsx`

- [ ] **Step 1: Fix CTA section button**

The CTA section has `bg-primary` background with white text. The button inside needs to be visible. Replace HeroUI Button with a plain styled link:
```tsx
<Link href={buttonHref} className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground px-6 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary-foreground hover:text-primary">
  {buttonText}
</Link>
```
Remove the HeroUI Button import entirely from this component.

- [ ] **Step 2: Fix contact page submit button**

Replace HeroUI Button with a styled HTML button:
```tsx
<button type="submit" className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">
  Send Message
</button>
```

- [ ] **Step 3: Verify StatusBadge works with new theme tokens**

After Task 1 adds `--success`, `--warning`, `--danger` tokens, the HeroUI Chip colors should now work. Verify by checking the contact page status badges render correctly.

- [ ] **Step 4: Fix footer copyright year**

Change `&copy; 2024` to `&copy; {new Date().getFullYear()}` (since footer is a server component, use a hardcoded `2025` or make it dynamic).

- [ ] **Step 5: Commit**
```bash
git add src/components/ src/app/contact/ && git commit -m "fix: button colors, status badges, copyright year"
```

---

## Task 6: Thoughtful redesign of every subpage

**USE SKILL: superpowers:frontend-design for this task.**

This is the most important task. Every page needs to look like it was designed with care — not just text dumped on a page.

**Files:**
- `src/app/occupational-therapy/page.tsx`
- `src/app/occupational-therapy/[slug]/page.tsx`
- `src/app/speech-language-pathology/page.tsx`
- `src/app/speech-language-pathology/[slug]/page.tsx`
- `src/app/joint-therapy/page.tsx`
- `src/app/group-therapy/page.tsx`
- `src/app/ontario-autism-program/page.tsx`
- `src/app/about/page.tsx`
- `src/app/about/our-staff/page.tsx`
- `src/app/faqs/page.tsx`
- `src/app/contact/page.tsx`

### Design Principles for Every Page:

1. **Visual hierarchy**: Clear heading → supporting text → content blocks → CTA
2. **Break up text walls**: Use styled callout boxes, icon-accompanied lists, subtle background shifts
3. **Card consistency**: All cards in grids must be equal height with flex layout
4. **Button colors**:
   - Primary buttons: `bg-primary text-primary-foreground` (works in both themes)
   - Secondary buttons: `border border-border text-foreground` (adapts to theme)
   - On colored backgrounds: `border-2 border-primary-foreground text-primary-foreground`
5. **No raw bullet lists**: Style them with check icons, colored dots, or card-based layouts
6. **Spacing**: Generous, consistent — py-16 md:py-24 for sections
7. **Each page should have at least ONE visual element**: icon grid, colored callout, decorative gradient, or image

### Per-Page Design Direction:

**OT Overview** (`occupational-therapy/page.tsx`):
- PageHero with OT definition
- ServiceCard grid for 6 subservices (already exists, just ensure equal height)
- Areas of assessment: styled as a 3-column icon grid (not bullet list)
- CTA section

**OT Subpages** (`occupational-therapy/[slug]/page.tsx`):
- PageHero with breadcrumbs
- Content in a clean max-w-3xl layout (like a well-formatted article)
- Bullet lists: style with CheckCircle icons, alternating subtle backgrounds
- Signs/symptoms: put in styled callout cards with colored left border
- Assessment info: put in a highlighted callout box with gradient bg
- CTA at bottom

**SLP Overview** (`speech-language-pathology/page.tsx`):
- Same structure as OT overview
- ServiceCard grid for 7 subservices

**SLP Subpages** (`speech-language-pathology/[slug]/page.tsx`):
- Same high-quality treatment as OT subpages
- Milestones page: MilestoneTimeline component with clean styling
- Literacy page: parent involvement callout
- AAC page: communication methods visual

**Joint Therapy** (`joint-therapy/page.tsx`):
- PageHero
- Description with split layout or callout card
- Supported diagnoses: styled Chip tags in a centered flex wrap
- Sensory gym feature: highlighted card or callout
- CTA

**Group Therapy** (`group-therapy/page.tsx`):
- PageHero
- Funding note: styled info callout with icon
- ProgramCard grid (equal height, 2 or 3 cols)
- Registration CTA

**Ontario Autism Program** (`ontario-autism-program/page.tsx`):
- PageHero
- Three questions as visually distinct cards
- Core services description
- Neurodiversity callout with sparkle icon
- Provider status badge
- Important note callout
- CTA

**About** (`about/page.tsx`):
- Already decent — refine card heights
- Ensure founder photos render well
- Facilities image should be prominent

**Our Staff** (`about/our-staff/page.tsx`):
- Filter buttons already done
- Staff cards with photos — ensure equal height
- Modal should work properly

**FAQs** (`faqs/page.tsx`):
- Category filter + accordion — already decent
- Add a "Still have questions?" section with contact info

**Contact** (`contact/page.tsx`):
- Fix form button color
- Fix status badge rendering
- Ensure dark mode text colors are correct on all inputs

- [ ] **Step 1: Read ALL page files first**
- [ ] **Step 2: Read ALL data files to understand available content**
- [ ] **Step 3: Redesign OT overview + subpages**
- [ ] **Step 4: Redesign SLP overview + subpages**
- [ ] **Step 5: Redesign Joint Therapy page**
- [ ] **Step 6: Redesign Group Therapy page**
- [ ] **Step 7: Redesign Ontario Autism Program page**
- [ ] **Step 8: Polish About, Staff, FAQs, Contact pages**
- [ ] **Step 9: Build and verify all 27 routes**
```bash
npx next build
```
- [ ] **Step 10: Commit**
```bash
git add src/app/ && git commit -m "feat: thoughtful redesign of every page with proper visual hierarchy"
```

---

## Task 7: Final build verification

- [ ] **Step 1: Clean build**
```bash
rm -rf .next && npx next build
```
Expected: 27 routes, 0 errors.

- [ ] **Step 2: Commit all remaining changes**
```bash
git add -A && git commit -m "feat: complete visual polish — theme tokens, equal-height cards, page redesigns"
```

---

## Execution Order

```
Task 1 (Theme tokens) ────── FIRST — root cause fix
Task 2 (MotionWrapper + cards) ── after Task 1
Task 3 (Navbar height) ───── parallel with Task 2
Task 4 (Hero single column) ── after Task 1
Task 5 (Button/chip colors) ── after Task 1
Task 6 (Page redesigns) ───── after Tasks 1-5 (depends on all fixes)
Task 7 (Final verification) ── LAST
```
