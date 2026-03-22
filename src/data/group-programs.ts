export interface GroupTherapyOverview {
  description: string;
  fundingNote: string;
  staffing: string;
  suitability: string;
}

export interface AgeGroup {
  label: string;
  schedule: string;
}

export interface GroupProgram {
  name: string;
  description: string;
  ageGroups: AgeGroup[];
  price: string;
  duration: string;
  sessionDates: string;
  notes?: string;
}

export const groupTherapyOverview: GroupTherapyOverview = {
  description:
    "We are happy to offer interdisciplinary Occupational and Speech group therapy for children and youth with autism.",
  fundingNote:
    "Programs qualify for Ontario Autism Program (OAP) core clinical services funding.",
  staffing:
    "Groups are co-led by an Occupational Therapy Assistant and Communicative Disorders Assistant.",
  suitability:
    "Our group therapy programs are best suited to autistic children and youth with low or minimal support needs.",
};

export const groupPrograms: GroupProgram[] = [
  {
    name: "Craft & Connect",
    description:
      "An interdisciplinary group combining creative crafting activities with social connection opportunities, designed to build fine motor skills, social communication, and self-regulation through engaging craft projects.",
    ageGroups: [
      {
        label: "Ages 8\u201312",
        schedule: "Wednesday 5:00\u20136:30 pm",
      },
      {
        label: "Ages 13+",
        schedule: "Wednesday 7:00\u20138:30 pm",
      },
    ],
    price: "$1,100",
    duration: "10 weeks",
    sessionDates: "Session 5: April 8 \u2013 June 10",
  },
  {
    name: "Move and Tell",
    description:
      "Building language through movement. This program combines physical activity with language development, using movement-based activities to support communication skills in a fun and active environment.",
    ageGroups: [
      {
        label: "Ages 5\u20137",
        schedule: "Friday 5:00\u20135:50 pm",
      },
      {
        label: "Ages 5\u20137",
        schedule: "Saturday 1:00\u20131:50 pm",
      },
      {
        label: "Ages 5\u20137",
        schedule: "Saturday 2:30\u20133:20 pm",
      },
    ],
    price: "$340",
    duration: "4 weeks",
    sessionDates: "March\u2013April",
  },
  {
    name: "Game Explorers",
    description:
      "A group program that uses board games, card games, and collaborative games to develop social skills, turn-taking, problem-solving, and communication in a relaxed and enjoyable setting.",
    ageGroups: [
      {
        label: "Ages 8\u201312",
        schedule: "Thursday 5:00\u20136:30 pm",
      },
      {
        label: "Ages 13+",
        schedule: "Thursday 7:00\u20138:30 pm",
      },
    ],
    price: "$1,050",
    duration: "10 weeks",
    sessionDates: "Session 5: April 9 \u2013 June 11",
  },
  {
    name: "Let's Get Cooking",
    description:
      "A hands-on cooking program that builds life skills, executive functioning, social communication, and sensory exploration through preparing meals and snacks together.",
    ageGroups: [
      {
        label: "Ages 12\u201313",
        schedule: "Saturday 9:00 am \u2013 12:00 pm",
      },
      {
        label: "Ages 14+",
        schedule: "Saturday 1:00 pm \u2013 4:00 pm",
      },
    ],
    price: "$1,680",
    duration: "8 weeks",
    sessionDates: "Contact for upcoming session dates",
    notes:
      "Participants must have no life-threatening allergies to participate in this program.",
  },
  {
    name: "Adventurer's Club: Dungeons & Dragons",
    description:
      "A tabletop role-playing group using Dungeons & Dragons to develop social communication, collaborative problem-solving, creative thinking, and perspective-taking in an imaginative and structured setting.",
    ageGroups: [
      {
        label: "Grade 7+",
        schedule: "Wednesday 5:00\u20136:30 pm",
      },
    ],
    price: "$1,050",
    duration: "10 weeks",
    sessionDates: "Session 5: April 15 \u2013 June 17",
  },
  {
    name: "Teen Social+",
    description:
      "A social skills group designed for teens, focusing on building and maintaining friendships, navigating social situations, developing conversation skills, and increasing confidence in social settings.",
    ageGroups: [
      {
        label: "Ages 13+",
        schedule: "Friday 6:00\u20138:00 pm",
      },
    ],
    price: "$1,400",
    duration: "10 weeks",
    sessionDates: "Session 5: April 10 \u2013 June 12",
  },
  {
    name: "Inclusive Dance Program",
    description:
      "A movement-based program that uses dance to build gross motor skills, body awareness, self-expression, and social connection in an inclusive and supportive environment.",
    ageGroups: [
      {
        label: "Ages 8+",
        schedule: "Thursday 6:30\u20137:30 pm",
      },
      {
        label: "Ages 10+",
        schedule: "Thursday 7:30\u20138:30 pm",
      },
    ],
    price: "$1,050",
    duration: "14 weeks",
    sessionDates: "January 8 \u2013 April 16",
  },
];
