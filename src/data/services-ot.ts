export interface OTOverview {
  definition: string;
  description: string;
}

export interface OTServiceContent {
  definition?: string;
  description?: string;
  overview?: string;
  commonConcerns?: string[];
  handwritingRedFlags?: string[];
  outcomes?: string;
  assessment?: string;
  development?: string;
  commonChallenges?: string[];
  medicalContext?: string;
  approach?: string;
  questionsAddressed?: string[];
  iadls?: string;
  philosophy?: string;
  commonIssues?: string[];
  keyComponents?: string[];
  targetConcerns?: string[];
}

export interface OTService {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  content: OTServiceContent;
}

export const otOverview: OTOverview = {
  definition:
    "Occupational Therapy is a regulated health profession dedicated to helping individuals achieve and maximize independence in all areas of their lives.",
  description:
    "At Achieve, therapeutic activities help clients improve participation in school, gain self-care autonomy, and engage in play and learning. The clinic considers each client's environment and family when setting meaningful, achievable goals.",
};

export const otServices: OTService[] = [
  {
    slug: "sensory-processing-regulation",
    title: "Sensory Processing & Regulation",
    icon: "Brain",
    shortDescription:
      "Help children process and respond to sensory information effectively.",
    content: {
      overview:
        "Sensory processing is the way the nervous system receives, organizes, and responds to sensory input from the environment. When sensory processing is disrupted, children may have difficulty regulating their responses to everyday sensory experiences such as sounds, textures, movements, and visual stimuli.",
      description:
        "Occupational therapists at Achieve Therapy Centre work with children who experience sensory processing challenges to help them better understand and respond to sensory information. Through individualized therapy plans, children learn strategies to regulate their responses, participate more fully in daily activities, and feel more comfortable in their environments.",
      commonConcerns: [
        "Over-sensitivity or under-sensitivity to touch, sound, or movement",
        "Difficulty with transitions or changes in routine",
        "Challenges with self-regulation and emotional responses",
        "Avoidance of certain textures, foods, or environments",
        "Seeking excessive sensory input such as spinning, crashing, or mouthing objects",
        "Difficulty focusing or attending in busy or noisy environments",
      ],
      approach:
        "Our clinicians use evidence-based sensory integration techniques and work closely with families to develop sensory strategies that can be implemented at home, at school, and in the community. Therapy takes place in our sensory gyms equipped with suspended equipment designed to provide a variety of sensory experiences.",
    },
  },
  {
    slug: "handwriting-fine-motor-skills",
    title: "Handwriting & Fine Motor Skills",
    icon: "Hand",
    shortDescription:
      "Develop precise hand movements for writing, self-care, and everyday tasks.",
    content: {
      definition:
        "Fine motor skills are movements involving small muscles of the body \u2013 notably the muscles of the fingers and the hands. These skills are essential for independence in dressing, feeding, play, and school.",
      commonConcerns: [
        "Difficulty picking up and manipulating small objects",
        "Avoidance of utensils and fasteners",
        "Trouble learning to tie shoelaces",
        "Challenges with cutting and crafts",
      ],
      handwritingRedFlags: [
        "Letters formed from the bottom up",
        "Handwriting slowing down written expression",
        "Teacher concerns about writing",
        "Child resistance to writing tasks",
        "Issues identified in psychoeducational assessments",
      ],
      outcomes:
        "Children typically show significant changes in their handwriting in 4 to 6 therapy sessions, with success heavily dependent on individualized home practice programs.",
      assessment:
        "Initial evaluations last up to 90 minutes and include standardized testing. Parents receive a separate debriefing session.",
    },
  },
  {
    slug: "gross-motor-skills",
    title: "Gross Motor Skills",
    icon: "Activity",
    shortDescription:
      "Build strength, coordination, and confidence in whole-body movements.",
    content: {
      definition:
        "Gross motor skills refer to the movements and coordination of the large muscles of the body \u2013 such as the trunk, the arms, and the legs. These abilities develop progressively from birth through childhood.",
      development:
        "Skills start with fundamental activities like crawling and walking, then advance to running, jumping, and eventually swimming, cycling, and sports. Core strength forms the foundation for stability needed for fine motor movements.",
      commonChallenges: [
        "Clumsiness during running, jumping, or ball activities",
        "Difficulty maintaining upright posture while sitting or standing",
        "Struggles learning skills like skating, biking, or ball dribbling",
      ],
      medicalContext:
        "Gross motor difficulties can be part of dyspraxia or Developmental Coordination Disorder (DCD). Motor planning plays a significant role in these challenges.",
      approach:
        "Clinicians assess gross motor skills in both a structured and semi-structured fashion, developing individualized plans to build strength, coordination, and confidence.",
    },
  },
  {
    slug: "self-care-skills",
    title: "Self-Care Skills",
    icon: "Shirt",
    shortDescription:
      "Support independence in dressing, hygiene, sleep, and daily routines.",
    content: {
      overview:
        "From dressing to toileting, from brushing teeth to getting enough sleep, children learn the skills of daily living while acquiring more independence and confidence.",
      questionsAddressed: [
        "Does your child struggle with dressing skills?",
        "Does your child have difficulty falling asleep and/or staying asleep?",
        "Does your child experience challenges with toileting?",
      ],
      iadls:
        "Daily living activities such as meal preparation, housework, money management and general safety skills become increasingly important as children approach adulthood.",
      approach:
        "Breaking down tasks step-by-step to help children achieve independence in all areas of daily living.",
    },
  },
  {
    slug: "feeding-therapy",
    title: "Feeding Therapy",
    icon: "Utensils",
    shortDescription:
      "Address picky eating, food aversions, and mealtime challenges.",
    content: {
      overview:
        "Picky eating program for children with limited diets or feeding challenges.",
      questionsAddressed: [
        "Are mealtimes stressful for you and/or your child?",
        "Did your child appear to struggle with transitioning to puree or solid food?",
      ],
      commonIssues: [
        "Restricted number of foods",
        "Anxiety surrounding trying new foods",
        "Difficulty accepting certain food textures",
      ],
      philosophy:
        "Picky eaters won't try new foods for many reasons and can make mealtimes stressful. We can help you find out why!",
      approach:
        "We meet with families to identify underlying reasons for feeding challenges, provide initial strategies, and conduct a thorough assessment for a customized treatment plan.",
    },
  },
  {
    slug: "executive-functioning-skills",
    title: "Executive Functioning Skills",
    icon: "BookOpen",
    shortDescription:
      "Strengthen planning, organization, focus, and self-regulation abilities.",
    content: {
      definition:
        "Executive functioning skills are the mental processes that enable us to plan, focus attention, remember instructions, and juggle multiple tasks successfully. Think of executive functioning as the air traffic controller of the brain \u2013 managing the complex flow of information and coordinating actions to achieve goals.",
      keyComponents: [
        "Attentional control",
        "Inhibitory control",
        "Working memory",
        "Cognitive flexibility",
        "Prioritization, planning, and organization",
        "Problem-solving",
        "Self-control",
      ],
      targetConcerns: [
        "Completing multi-step age-appropriate tasks",
        "Organization and memory compared to peers",
        "Task initiation and goal-setting",
      ],
      approach:
        "Our occupational therapists work with children and youth to develop strategies that support executive functioning in everyday life, from school tasks to home routines.",
    },
  },
];
