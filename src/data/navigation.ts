export interface NavigationChild {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationChild[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Occupational Therapy",
    href: "/occupational-therapy",
    children: [
      {
        label: "Sensory Processing & Regulation",
        href: "/occupational-therapy/sensory-processing-regulation",
      },
      {
        label: "Handwriting & Fine Motor Skills",
        href: "/occupational-therapy/handwriting-fine-motor-skills",
      },
      {
        label: "Gross Motor Skills",
        href: "/occupational-therapy/gross-motor-skills",
      },
      {
        label: "Self-Care Skills",
        href: "/occupational-therapy/self-care-skills",
      },
      {
        label: "Feeding Therapy",
        href: "/occupational-therapy/feeding-therapy",
      },
      {
        label: "Executive Functioning Skills",
        href: "/occupational-therapy/executive-functioning-skills",
      },
    ],
  },
  {
    label: "Speech Language Pathology",
    href: "/speech-language-pathology",
    children: [
      {
        label: "Infant/Toddler/Preschool Language",
        href: "/speech-language-pathology/infant-toddler-preschool-language",
      },
      {
        label: "Articulation/Fluency/Speech Production",
        href: "/speech-language-pathology/articulation-fluency-speech-production",
      },
      {
        label: "Childhood Apraxia of Speech",
        href: "/speech-language-pathology/childhood-apraxia-of-speech",
      },
      {
        label: "Language Expression & Comprehension",
        href: "/speech-language-pathology/language-expression-comprehension",
      },
      {
        label: "Augmentative & Alternative Communication",
        href: "/speech-language-pathology/augmentative-alternative-communication",
      },
      {
        label: "Social Communication",
        href: "/speech-language-pathology/social-communication",
      },
      {
        label: "Literacy: Reading & Writing",
        href: "/speech-language-pathology/literacy-reading-writing",
      },
    ],
  },
  {
    label: "Joint Therapy",
    href: "/joint-therapy",
  },
  {
    label: "Group Therapy",
    href: "/group-therapy",
  },
  {
    label: "About Our Clinic",
    href: "/about",
    children: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Our Staff",
        href: "/about/our-staff",
      },
    ],
  },
  {
    label: "Ontario Autism Program",
    href: "/ontario-autism-program",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
