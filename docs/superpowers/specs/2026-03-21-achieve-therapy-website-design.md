# Achieve Therapy Centre - Website Redesign Spec

## Overview
Modern, professional therapy clinic website using Next.js 15 App Router with HeroUI 3.0 + shadcn/ui components. All data hardcoded. Light + dark theme support using the provided theme.md variables.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **UI Libraries**: HeroUI 3.0 (navbar, cards, accordion, modals, chips, avatars) + shadcn/ui (buttons, forms, sheets, separators, badges)
- **Styling**: Tailwind CSS v4 with theme.md CSS variables
- **Theme Switching**: next-themes
- **Fonts**: Antic (sans), Signifier (serif), JetBrains Mono (mono)
- **Animations**: Framer Motion for scroll reveals and page transitions
- **Icons**: Lucide React

## Design Direction
- Inspired by ontheball.ca: clean section-based layout, generous spacing, service cards with imagery, professional healthcare aesthetic
- Sage green primary palette, cream light / deep black dark backgrounds
- Alternating light/dark sections for visual hierarchy
- High-quality placeholder imagery (therapy-related stock from Unsplash/placeholder)
- Subtle shadows (from theme.md), small border radius (0.35rem)

## Pages & Routes

### 1. Home (`/`)
- Hero: Full-width with tagline, CTA button, accepting-clients badge
- Services overview: 4 cards (OT, SLP, Joint, Group)
- About preview with mission snippet
- Stats/credibility banner
- Quick FAQ accordion (top 4)
- Contact CTA section

### 2. Occupational Therapy (`/occupational-therapy`)
- Hero with OT definition
- Service grid: 6 cards linking to subpages
- CTA contact section

### 3. OT Subpages (`/occupational-therapy/[slug]`)
- sensory-processing-regulation
- handwriting-fine-motor-skills
- gross-motor-skills
- self-care-skills
- feeding-therapy
- executive-functioning-skills
Each: Hero, detailed content, signs/symptoms list, CTA

### 4. Speech Language Pathology (`/speech-language-pathology`)
- Hero with SLP definition
- Service grid: 7 cards linking to subpages
- CTA contact section

### 5. SLP Subpages (`/speech-language-pathology/[slug]`)
- infant-toddler-preschool-language (with milestones timeline)
- articulation-fluency-speech-production
- childhood-apraxia-of-speech
- language-expression-comprehension
- augmentative-alternative-communication
- social-communication
- literacy-reading-writing
Each: Hero, detailed content, CTA

### 6. Joint Therapy (`/joint-therapy`)
- Description of combined OT+SLP approach
- Supported diagnoses chips
- Sensory gym feature section
- CTA

### 7. Group Therapy (`/group-therapy`)
- Overview with OAP funding note
- Program cards (7 programs) with ages, schedule, pricing
- Registration CTA

### 8. Ontario Autism Program (`/ontario-autism-program`)
- OAP overview
- Core clinical services info
- Neurodiversity-affirming approach
- CTA

### 9. About (`/about`)
- Mission & Vision
- Founded 2009 history
- Founders spotlight
- Clinic facilities
- CTA

### 10. Our Staff (`/about/our-staff`)
- Team grid with avatar cards
- Role-based filtering (OTs, SLPs, Assistants)
- Expandable bios via modal or accordion

### 11. FAQs (`/faqs`)
- Accordion with all 15 Q&As
- Category grouping (General, Billing, Sessions, Staff)

### 12. Contact (`/contact`)
- Contact info card (phone, email, address, hours)
- Service availability status badges
- Embedded map placeholder
- Contact form (UI only, no backend)
- Social links

## Reusable Components

### Layout
- `Navbar` - HeroUI navbar with dropdown menus, theme toggle, mobile hamburger
- `Footer` - Multi-column with nav links, contact info, social icons
- `PageHero` - Reusable hero section with title, subtitle, optional CTA
- `SectionWrapper` - Consistent padding/max-width container with alternating bg
- `CTASection` - Reusable call-to-action banner

### Content
- `ServiceCard` - Card with icon, title, description, link
- `StaffCard` - Avatar, name, title, credentials chip, expandable bio
- `ProgramCard` - Group therapy program with schedule, price, age badge
- `FAQAccordion` - Expandable Q&A items
- `MilestoneTimeline` - Age-based developmental milestones
- `DiagnosisChip` - Chip/badge for supported conditions
- `StatusBadge` - Waitlist/accepting status indicators

### UI
- `ThemeToggle` - Light/dark mode switch
- `BreadcrumbNav` - Page hierarchy breadcrumbs
- `ContactInfoCard` - Reusable contact details block
- `SocialLinks` - Facebook + Instagram icons

## Data Architecture
All content in `src/data/` as TypeScript constants:
- `site.ts` - Business info, contact, hours, social links
- `services-ot.ts` - OT services data
- `services-slp.ts` - SLP services data
- `services-other.ts` - Joint, Group, OAP data
- `staff.ts` - All 18 team members
- `faqs.ts` - All 15 Q&As
- `navigation.ts` - Menu structure with dropdowns
- `group-programs.ts` - 7 group therapy programs

## Theme Implementation
- CSS variables from theme.md loaded globally
- `next-themes` ThemeProvider wrapping app
- All components use `bg-background`, `text-foreground`, `bg-primary`, etc.
- Both HeroUI and shadcn configured to use the same CSS variable system
- Smooth transition between themes

## Design Patterns (from ontheball.ca inspiration)
- Full-width hero sections with overlay text
- Service cards in responsive grids (1/2/3 columns)
- Alternating white/cream (light) or dark/darker (dark) section backgrounds
- Generous vertical spacing between sections (py-20+)
- Sticky navbar with blur backdrop
- Scroll-reveal animations on sections
- Professional photography placeholders
- Clear typography hierarchy: serif headings, sans body
