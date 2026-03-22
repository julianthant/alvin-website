export interface SLPOverview {
  definition: string;
  description: string;
}

export interface LanguageMilestone {
  age: string;
  skills: string[];
}

export interface SLPServiceContent {
  overview?: string;
  description?: string;
  commonConcerns?: string[];
  milestones?: LanguageMilestone[];
  approach?: string;
  keyPoint?: string;
  signs?: string[];
  specialistNote?: string;
  areas?: string[];
  methods?: string[];
  philosophy?: string;
  implementation?: string[];
  targetChildren?: string[];
  assessment?: string[];
  parentInvolvement?: string;
}

export interface SLPService {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  content: SLPServiceContent;
}

export const slpOverview: SLPOverview = {
  definition:
    "Speech Language Pathology is a regulated health profession dedicated to the assessment, treatment and prevention of speech and language dysfunctions or disorders to develop, maintain, rehabilitate or augment oral motor or communicative functions.",
  description:
    "Client-centered speech therapy delivered by certified Speech-Language Pathologists using a multisensorial approach.",
};

export const slpServices: SLPService[] = [
  {
    slug: "infant-toddler-preschool-language",
    title: "Infant, Toddler & Preschool Language",
    icon: "Baby",
    shortDescription:
      "Early language support for children from infancy through preschool years.",
    content: {
      overview:
        "Speech assessments for preschoolers addressing speech production difficulties and/or language difficulties.",
      commonConcerns: [
        "Children not being understood by others",
        "Frustration due to communication difficulties",
        "Skills lagging behind peers",
        "Educator/daycare concerns",
      ],
      milestones: [
        {
          age: "12 months",
          skills: [
            "Say mama/dada meaningfully plus 1-2 additional words",
            "Follow simple instructions",
          ],
        },
        {
          age: "18 months",
          skills: [
            "Minimum 10 meaningful words (up to 50), including nouns, verbs, prepositions, and adjectives",
            "Identify six body parts",
          ],
        },
        {
          age: "24 months",
          skills: [
            "Combine two words purposefully (\u201CNo shoes!\u201D)",
            "Use pronouns (I, me)",
            "Understand complex instructions",
          ],
        },
        {
          age: "3 years",
          skills: [
            "Speech understandable to strangers",
            "String 2-3 sentences together",
            "Answer who/what/where questions",
          ],
        },
        {
          age: "4 years",
          skills: [
            "Recite songs/poems from memory",
            "Tell stories about themselves",
            "Understand same/different",
            "Prefer group play",
          ],
        },
      ],
      approach:
        "Fun and innovative therapy sessions building on developmental foundations to support each child\u2019s unique communication journey.",
    },
  },
  {
    slug: "articulation-fluency-speech-production",
    title: "Articulation, Fluency & Speech Production",
    icon: "Mic",
    shortDescription:
      "Improve clarity of speech, fluency, and sound production.",
    content: {
      overview:
        "Addresses stuttering, sound pronunciation, or unclear speech in children.",
      keyPoint:
        "Children with difficulties pronouncing speech sounds may substitute or delete sounds. For example, a child might say \u201CI want a foon!\u201D instead of \u201Cspoon.\u201D",
      approach:
        "A comprehensive assessment determines if a child\u2019s abilities are developmentally appropriate or if therapy is required to support clearer speech production.",
    },
  },
  {
    slug: "childhood-apraxia-of-speech",
    title: "Childhood Apraxia of Speech",
    icon: "MessageSquare",
    shortDescription:
      "Specialized therapy for motor speech planning difficulties.",
    content: {
      overview:
        "Childhood Apraxia of Speech (CAS) is a motor speech disorder where the brain has difficulty planning and programming the movements needed for speech. Children with CAS know what they want to say but have trouble coordinating the oral movements required to produce words clearly and consistently.",
      signs: [
        "Inconsistent errors on consonants and vowels in repeated productions of syllables or words",
        "Difficulty imitating speech",
        "Groping movements of the jaw, lips, or tongue when attempting to produce sounds",
        "Limited consonant and vowel inventory",
      ],
      specialistNote:
        "Co-founder Krista Simon specializes in CAS and participated in Apraxia Kids Bootcamp. She co-founded the Ottawa Walk for Apraxia to raise awareness and support families affected by this disorder.",
    },
  },
  {
    slug: "language-expression-comprehension",
    title: "Language Expression & Comprehension",
    icon: "BookText",
    shortDescription:
      "Support understanding and use of language for effective communication.",
    content: {
      overview:
        "Addresses children who have difficulty understanding language (receptive) or expressing themselves (expressive). Language difficulties can affect a child\u2019s ability to communicate needs, participate in classroom learning, and build social relationships.",
      areas: [
        "Vocabulary development",
        "Sentence structure",
        "Following directions",
        "Answering questions",
        "Storytelling and narrative skills",
      ],
    },
  },
  {
    slug: "augmentative-alternative-communication",
    title: "Augmentative & Alternative Communication",
    icon: "Tablet",
    shortDescription:
      "Enable communication through alternative methods and technology.",
    content: {
      overview:
        "Augmentative and Alternative Communication (AAC) helps individuals express their thoughts, wants, and needs without relying solely on verbal communication. AAC serves as an enhancement tool, not just a replacement for speech.",
      methods: [
        "Sign language",
        "Symbols and picture-based systems",
        "Pictures and visual supports",
        "Technology-based solutions including speech-generating devices and apps",
      ],
      philosophy:
        "We believe children should have access to robust communication systems so they can communicate to their fullest capacity.",
      implementation: [
        "Assess whether AAC is suitable for the individual",
        "Identify the most appropriate AAC system based on the child\u2019s needs and abilities",
        "Work with existing AAC systems to optimize their use",
      ],
    },
  },
  {
    slug: "social-communication",
    title: "Social Communication",
    icon: "Users",
    shortDescription:
      "Develop conversation skills, social cues, and perspective-taking.",
    content: {
      overview:
        "Addresses challenges with using language in social contexts. Social communication involves more than just words \u2013 it includes conversation skills, understanding nonverbal cues, and taking the perspectives of others.",
      areas: [
        "Turn-taking in conversation",
        "Understanding figurative language",
        "Reading social cues",
        "Making and maintaining friendships",
      ],
    },
  },
  {
    slug: "literacy-reading-writing",
    title: "Literacy: Reading & Writing",
    icon: "BookOpen",
    shortDescription:
      "Build foundational reading and writing skills for academic success.",
    content: {
      overview:
        "Specialized literacy services for reading and writing difficulties, delivered by Speech-Language Pathologists with expertise in the connection between spoken and written language.",
      targetChildren: [
        "Read below age level",
        "Struggle with reading comprehension",
        "Have phonological awareness difficulties",
        "Lack letter sound knowledge",
      ],
      assessment: [
        "Core language skills",
        "Phonological awareness",
        "Reading skills",
        "Working memory",
        "Narrative skills",
      ],
      philosophy:
        "Some children struggle because they missed a few steps early in phonological awareness development. Treatment emphasizes going back to the basics and building a strong foundation for reading and writing success.",
      parentInvolvement:
        "Parent training is a large part of reading and writing therapy. Home programming is provided to reinforce skills learned during therapy sessions.",
    },
  },
];
