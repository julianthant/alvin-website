export type StaffCategory =
  | "Co-Owners"
  | "Occupational Therapists"
  | "OT Assistants"
  | "Speech-Language Pathologists"
  | "Communicative Disorders Assistants";

export interface StaffMember {
  name: string;
  role: string;
  title: string;
  category: StaffCategory;
  education: string[];
  certifications: string[];
  specializations: string[];
  bio: string;
  languages: string[];
  isFounder: boolean;
  photo: string;
}

export const staffCategories: StaffCategory[] = [
  "Co-Owners",
  "Occupational Therapists",
  "OT Assistants",
  "Speech-Language Pathologists",
  "Communicative Disorders Assistants",
];

export const staffMembers: StaffMember[] = [
  // Co-Owners
  {
    name: "Krista Simon",
    role: "Co-Owner & Speech-Language Pathologist",
    title: "M.S., S-LP(C), Reg. CASLPO",
    category: "Co-Owners",
    photo: "/staff/krista-simon.jpg",
    education: ["Masters of Science, Speech-Language Pathology, SUNY Buffalo, 2005"],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "Member of Speech-Language & Audiology Canada (SAC)",
    ],
    specializations: [
      "Neurodivergent children",
      "Childhood Apraxia of Speech (CAS)",
      "Early language development",
      "Motor speech disorders",
    ],
    bio: "Krista Simon is a co-founder of Achieve Therapy Centre and a Speech-Language Pathologist specializing in working with neurodivergent children. Krista has a particular expertise in Childhood Apraxia of Speech (CAS) and participated in the Apraxia Kids Bootcamp to further her knowledge and skills in this area. She co-founded the Ottawa Walk for Apraxia to raise awareness and support families affected by this motor speech disorder. Krista is passionate about helping children find their voice and communicating to their fullest potential.",
    languages: ["English"],
    isFounder: true,
  },
  {
    name: "Nathalie Mabon",
    role: "Co-Owner & Occupational Therapist",
    title: "BSc OT, OT Reg. (Ont.)",
    category: "Co-Owners",
    photo: "/staff/nathalie-mabon.jpg",
    education: ["Bachelor of Science, Occupational Therapy, University of Ottawa, 2002"],
    certifications: [
      "Registered with the College of Occupational Therapists of Ontario (COTO)",
      "Certified Interactive Metronome Provider",
      "Therapeutic Listening Certified",
      "Safe and Sound Protocol Provider",
      "Rhythmic Movement Training",
    ],
    specializations: [
      "Sensory processing",
      "Self-regulation",
      "Fine and gross motor skills",
      "Bilingual therapy (French/English)",
    ],
    bio: "Nathalie Mabon is a co-founder of Achieve Therapy Centre and an Occupational Therapist with over 19 years of experience. Nathalie is bilingual in French and English, allowing her to serve Ottawa's diverse francophone and anglophone communities. She holds multiple advanced certifications including Certified Interactive Metronome, Therapeutic Listening, Safe and Sound Protocol, and Rhythmic Movement Training. Nathalie is dedicated to helping children achieve their full potential through individualized, evidence-based occupational therapy.",
    languages: ["English", "French"],
    isFounder: true,
  },

  // Occupational Therapists
  {
    name: "Elsa Fougere",
    role: "Occupational Therapist",
    title: "MHSc OT, OT Reg. (Ont.)",
    category: "Occupational Therapists",
    photo: "/staff/elsa-fougere.jpg",
    education: [
      "Masters of Health Sciences, Occupational Therapy, University of Ottawa, 2014",
    ],
    certifications: [
      "Registered with the College of Occupational Therapists of Ontario (COTO)",
      "Therapeutic Listening Certified",
      "Safe and Sound Protocol Provider",
      "Interactive Metronome Certified",
    ],
    specializations: [
      "Sensory processing",
      "Self-regulation",
      "Fine and gross motor development",
    ],
    bio: "Elsa Fougere has been a member of the Achieve Therapy Centre team since January 2015. She holds a Masters of Health Sciences in Occupational Therapy from the University of Ottawa and is trained in Therapeutic Listening, Safe and Sound Protocol, and Interactive Metronome. Elsa brings a warm and creative approach to her practice, helping children develop the skills they need to participate fully in their daily activities at home, school, and in the community.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Richelle d'Entremont",
    role: "Occupational Therapist",
    title: "MSc OT, OT Reg. (Ont.)",
    category: "Occupational Therapists",
    photo: "/staff/richelle-dentremont.jpg",
    education: [
      "Masters of Science, Occupational Therapy, University of Ottawa",
      "PhD Candidate, University of Ottawa",
    ],
    certifications: [
      "Registered with the College of Occupational Therapists of Ontario (COTO)",
      "Cognitive Behavioural Therapy (CBT)",
      "Interactive Metronome Certified",
      "DIR/Floortime",
    ],
    specializations: [
      "Bilingual therapy (French/English)",
      "Cognitive behavioural approaches",
      "Developmental interventions",
    ],
    bio: "Richelle d'Entremont is a bilingual Occupational Therapist who provides services in both French and English. She holds a Masters of Science in Occupational Therapy from the University of Ottawa and is currently pursuing her PhD. Richelle is trained in Cognitive Behavioural Therapy (CBT), Interactive Metronome, and DIR/Floortime, bringing a diverse set of therapeutic tools to her practice. Her ongoing doctoral research further enriches her evidence-based approach to helping children and families.",
    languages: ["English", "French"],
    isFounder: false,
  },
  {
    name: "Katie Walsh",
    role: "Occupational Therapist",
    title: "MSc OT, OT Reg. (Ont.)",
    category: "Occupational Therapists",
    photo: "/staff/katie-walsh.jpg",
    education: [
      "Masters of Science, Occupational Therapy, University of Manitoba",
      "Honours Bachelor of Science, Biology and Psychology, Queen's University",
    ],
    certifications: [
      "Registered with the College of Occupational Therapists of Ontario (COTO)",
      "Safe and Sound Protocol Provider",
      "Therapeutic Listening Certified",
      "Interactive Metronome Certified",
      "Cognitive Behavioural Therapy (CBT)",
      "Motivational Interviewing",
      "DIR-Floortime",
      "SOS Approach to Feeding",
    ],
    specializations: [
      "Sensory processing and regulation",
      "Feeding therapy",
      "Fine and gross motor development",
      "Self-regulation strategies",
    ],
    bio: "Katie Walsh is an Occupational Therapist with a broad range of training and certifications. She holds a Masters of Occupational Therapy from the University of Manitoba and an Honours Bachelor of Science in Biology and Psychology from Queen's University. Katie is certified in the Safe and Sound Protocol, Therapeutic Listening, Interactive Metronome, CBT, Motivational Interviewing, DIR-Floortime, and the SOS Approach to Feeding. This extensive training allows her to address a wide variety of pediatric occupational therapy needs.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Caitlin Elmslie",
    role: "Occupational Therapist",
    title: "MSc OT, OT Reg. (Ont.)",
    category: "Occupational Therapists",
    photo: "/staff/caitlin-elmslie.jpg",
    education: [
      "Master of Science, Occupational Therapy, University of Toronto",
      "Master of Arts, Dance",
    ],
    certifications: [
      "Registered with the College of Occupational Therapists of Ontario (COTO)",
      "Safe and Sound Protocol Provider",
      "Interactive Metronome Certified",
      "Certified Pilates Instructor",
    ],
    specializations: [
      "Movement-based therapy",
      "Sensory integration",
      "Gross motor development",
      "Mind-body approaches",
    ],
    bio: "Caitlin Elmslie brings a unique combination of occupational therapy and movement expertise to Achieve Therapy Centre. She holds a Master of Science in Occupational Therapy from the University of Toronto and a Master of Arts in Dance. Caitlin is certified in the Safe and Sound Protocol, Interactive Metronome, and is a Certified Pilates Instructor. Her background in dance and movement informs her therapeutic approach, allowing her to incorporate creative movement strategies into occupational therapy sessions.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Alexia Kateb",
    role: "Occupational Therapist",
    title: "MSc OT, OT Reg. (Ont.)",
    category: "Occupational Therapists",
    photo: "/staff/alexia-kateb.jpg",
    education: [
      "Master of Science, Occupational Therapy, University of Toronto",
      "Honours Bachelor of Social Science, Sociology and Psychology, University of Ottawa",
    ],
    certifications: [
      "Registered with the College of Occupational Therapists of Ontario (COTO)",
      "DIR-Floortime",
      "Safe and Sound Protocol Provider",
      "ABC-Boom! Handwriting Program",
    ],
    specializations: [
      "Handwriting intervention",
      "Developmental approaches",
      "Indigenous community experience",
      "Sensory processing",
    ],
    bio: "Alexia Kateb is an Occupational Therapist with a Master of Science in Occupational Therapy from the University of Toronto and an Honours Bachelor of Social Science in Sociology and Psychology from the University of Ottawa. Alexia brings valuable experience working with Indigenous communities to her practice. She is trained in DIR-Floortime, the Safe and Sound Protocol, and the ABC-Boom! Handwriting program, giving her specialized tools for supporting children with developmental and handwriting needs.",
    languages: ["English"],
    isFounder: false,
  },

  // OT Assistants
  {
    name: "Amber Nykyforak",
    role: "Occupational Therapy Assistant",
    title: "OTA/PTA",
    category: "OT Assistants",
    photo: "/staff/amber-nykyforak.jpg",
    education: [
      "Diploma, Occupational Therapist Assistant / Physiotherapist Assistant, Algonquin College",
      "Honours Bachelor of Arts, Psychology, Laurentian University",
    ],
    certifications: ["Certified Safe and Sound Protocol Provider"],
    specializations: [
      "Sensory-based interventions",
      "Self-regulation support",
      "Fine and gross motor skill development",
    ],
    bio: "Amber Nykyforak is an Occupational Therapy Assistant with a Diploma in Occupational Therapist Assistant and Physiotherapist Assistant from Algonquin College, as well as an Honours Bachelor of Arts in Psychology from Laurentian University. Amber is a Certified Safe and Sound Protocol provider and works closely with the occupational therapists at Achieve to implement individualized therapy programs for children.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Mya Roberts",
    role: "Occupational Therapy Assistant",
    title: "OTA/PTA",
    category: "OT Assistants",
    photo: "/staff/mya-roberts.jpg",
    education: [
      "Diploma, Occupational Therapist Assistant / Physiotherapist Assistant, Algonquin College",
      "Completing Respiratory Therapy Diploma",
    ],
    certifications: [],
    specializations: [
      "Bilingual therapy support (English/French)",
      "Occupational therapy intervention implementation",
    ],
    bio: "Mya Roberts is a bilingual Occupational Therapy Assistant who provides support in both English and French. She holds a Diploma in Occupational Therapist Assistant and Physiotherapist Assistant from Algonquin College and is currently completing a Respiratory Therapy diploma. Mya works collaboratively with the occupational therapists at Achieve to deliver engaging and effective therapy sessions.",
    languages: ["English", "French"],
    isFounder: false,
  },

  // Speech-Language Pathologists
  {
    name: "Michelle Mercier",
    role: "Speech-Language Pathologist",
    title: "M.Sc., S-LP(C), Reg. CASLPO",
    category: "Speech-Language Pathologists",
    photo: "/staff/michelle-mercier.jpg",
    education: [
      "Masters of Science, Speech-Language Pathology, Western University",
      "Honours Bachelor of Science, Health Sciences with Linguistics Minor",
    ],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "Member of Speech-Language & Audiology Canada (SAC)",
    ],
    specializations: [
      "Bilingual therapy (English/French)",
      "Autism Spectrum Disorder",
      "Down Syndrome",
      "Early language development",
    ],
    bio: "Michelle Mercier is a bilingual Speech-Language Pathologist who provides services in both English and French. She holds a Masters of Science in Speech-Language Pathology from Western University and an Honours Bachelor of Science in Health Sciences with a Linguistics minor. Michelle has a special interest in working with children with Autism Spectrum Disorder and Down Syndrome, bringing compassion and expertise to every therapy session.",
    languages: ["English", "French"],
    isFounder: false,
  },
  {
    name: "Hailey Russell",
    role: "Speech-Language Pathologist",
    title: "M.Sc., S-LP(C), Reg. CASLPO",
    category: "Speech-Language Pathologists",
    photo: "/staff/hailey-russell.jpg",
    education: [
      "Master of Science, Applied Speech-Language Pathology, McGill University",
      "Honours Bachelor of Science, Psychology, Carleton University",
    ],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "Trauma-Informed Care",
      "DIR-Floortime",
      "Meaningful Speech",
    ],
    specializations: [
      "Complex speech production disorders",
      "Augmentative and Alternative Communication (AAC)",
      "Autism Spectrum Disorder",
      "Motor speech disorders",
    ],
    bio: "Hailey Russell is a Speech-Language Pathologist with a Master of Science in Applied Speech-Language Pathology from McGill University and an Honours Bachelor of Science in Psychology from Carleton University. Hailey specializes in complex speech production disorders, Augmentative and Alternative Communication (AAC), and autism. She is trained in Trauma-Informed Care, DIR-Floortime, and Meaningful Speech, enabling her to provide holistic and sensitive therapy to children with diverse communication needs.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Tammy Day",
    role: "Speech-Language Pathologist",
    title: "M.Sc., S-LP(C), Reg. CASLPO",
    category: "Speech-Language Pathologists",
    photo: "/staff/tammy-day.jpg",
    education: [
      "Masters of Science, Speech-Language Pathology, McGill University",
      "Honours Bachelor of Arts, Linguistics with German Minor, Carleton University",
    ],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "Member of Speech-Language & Audiology Canada (SAC)",
    ],
    specializations: [
      "Speech sound disorders",
      "Language delay",
      "Literacy",
      "Stuttering",
    ],
    bio: "Tammy Day is a Speech-Language Pathologist with a Masters of Science in Speech-Language Pathology from McGill University and an Honours Bachelor of Arts in Linguistics with a German minor from Carleton University. Tammy has expertise in speech sound disorders, language delay, literacy, and stuttering, providing comprehensive assessment and treatment across a broad range of communication areas.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Paige Holmes",
    role: "Speech-Language Pathologist",
    title: "M.Sc., S-LP(C), Reg. CASLPO",
    category: "Speech-Language Pathologists",
    photo: "/staff/paige-holmes.jpg",
    education: [
      "Masters of Science, Speech-Language Pathology, McMaster University",
      "Masters of Arts, Developmental and Communication Science, University of Waterloo",
    ],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "Hanen \u201CMore Than Words\u201D Certified",
      "DIR Floortime",
    ],
    specializations: [
      "Early language intervention",
      "Parent coaching",
      "Developmental communication approaches",
    ],
    bio: "Paige Holmes is a Speech-Language Pathologist with two Masters degrees \u2013 one in Speech-Language Pathology from McMaster University and another in Developmental and Communication Science from the University of Waterloo. Paige is certified in the Hanen \u201CMore Than Words\u201D program and DIR Floortime, giving her specialized tools for supporting early language development and working collaboratively with families to build communication skills.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Olivia McMurtry",
    role: "Speech-Language Pathologist",
    title: "M.Sc., S-LP(C), Reg. CASLPO",
    category: "Speech-Language Pathologists",
    photo: "/staff/olivia-mcmurtry.jpg",
    education: [
      "Master of Science, Applied Speech-Language Pathology, McGill University",
      "Honours Bachelor of Science, Cognitive Science, Carleton University",
    ],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "DIR Floortime",
      "Lidcombe Program (preschool stuttering)",
      "MBSImP (Modified Barium Swallow Impairment Profile)",
      "Trauma-Informed Care",
    ],
    specializations: [
      "Cognitive science approaches to language",
      "Stuttering intervention",
      "Developmental communication disorders",
    ],
    bio: "Olivia McMurtry is a Speech-Language Pathologist with a Master of Science in Applied Speech-Language Pathology from McGill University and an Honours Bachelor of Science in Cognitive Science from Carleton University. Olivia is trained in DIR Floortime, the Lidcombe Program for preschool stuttering, MBSImP, and Trauma-Informed Care, bringing a comprehensive skill set to her work with children experiencing a range of speech and language challenges.",
    languages: ["English"],
    isFounder: false,
  },
  {
    name: "Belinda Cantor",
    role: "Speech-Language Pathologist",
    title: "M.Sc., S-LP(C), Reg. CASLPO",
    category: "Speech-Language Pathologists",
    photo: "/staff/belinda-cantor.jpg",
    education: [
      "Masters of Science, Speech-Language Pathology, McGill University",
      "Honours Bachelor of Arts, Psychology, Queen's University",
    ],
    certifications: [
      "Registered with the College of Audiologists and Speech-Language Pathologists of Ontario (CASLPO)",
      "Hanen \u201CIt Takes Two to Talk\u201D Certified",
    ],
    specializations: [
      "Stuttering",
      "Early language development",
      "Speech sound disorders",
      "Parent coaching",
    ],
    bio: "Belinda Cantor is a Speech-Language Pathologist with a Masters of Science in Speech-Language Pathology from McGill University and an Honours Bachelor of Arts in Psychology from Queen's University. Belinda specializes in stuttering, early language development, and speech sound disorders. She is certified in the Hanen \u201CIt Takes Two to Talk\u201D program, which equips her with evidence-based strategies for empowering parents to support their children's language development.",
    languages: ["English"],
    isFounder: false,
  },

  // Communicative Disorders Assistants
  {
    name: "Carley Bradley",
    role: "Communicative Disorders Assistant",
    title: "CDA",
    category: "Communicative Disorders Assistants",
    photo: "/staff/carley-bradley.jpg",
    education: [
      "Honours Bachelor of Science, Cognitive Science (Language and Linguistics), Carleton University, 2019",
      "Graduate Certificate, Communicative Disorders Assistant, St. Lawrence College, 2020",
    ],
    certifications: [],
    specializations: [
      "Speech-language therapy implementation",
      "Language and linguistics",
      "Cognitive science approaches",
    ],
    bio: "Carley Bradley is a Communicative Disorders Assistant with an Honours Bachelor of Science in Cognitive Science with a specialization in Language and Linguistics from Carleton University (2019) and a Graduate Certificate as a Communicative Disorders Assistant from St. Lawrence College (2020). Carley works closely with the Speech-Language Pathologists at Achieve to implement individualized therapy programs, conduct regular therapy sessions, and support children in reaching their communication goals.",
    languages: ["English"],
    isFounder: false,
  },
];
