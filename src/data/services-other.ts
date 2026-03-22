export interface JointTherapy {
  title: string;
  description: string;
  details: string;
  facilityFeature: string;
  supportedDiagnoses: string[];
  focusAreas: string;
}

export interface OntarioAutismProgram {
  title: string;
  questions: string[];
  description: string;
  services: string;
  approach: string;
  providerStatus: string;
  importantNote: string;
}

export const jointTherapy: JointTherapy = {
  title: "Joint Therapy",
  description:
    "Achieve Therapy Centre is pleased to offer joint therapy: combined Speech-Language Pathology and Occupational Therapy for children with multiple needs.",
  details:
    "Joint therapy combines both therapeutic disciplines into unified activities that children can practice at home. This approach addresses multiple developmental areas in single appointments, making therapy more efficient and cohesive for families.",
  facilityFeature:
    "Therapy takes place in dedicated sensory gyms featuring suspended equipment.",
  supportedDiagnoses: [
    "Autism Spectrum Disorder",
    "Down Syndrome",
    "Cerebral Palsy",
    "Fragile X",
    "Developmental Disabilities",
  ],
  focusAreas:
    "Developmental needs while strengthening speech, language, regulation, and motor skills.",
};

export const ontarioAutismProgram: OntarioAutismProgram = {
  title: "Ontario Autism Program (OAP)",
  questions: [
    "Has your child recently received a diagnosis of Autism Spectrum Disorder (ASD)?",
    "Is your child receiving funding from the Ontario Autism Program (AccessOAP)?",
    "Are you looking for a Core Clinical Services provider?",
  ],
  description:
    "At Achieve Therapy Centre, we offer services to families whose children have received a diagnosis of Autism Spectrum Disorder (ASD).",
  services:
    "Speech-Language Pathology, Occupational Therapy, or combined joint therapy.",
  approach:
    "We are neurodiversity affirming and employ a variety of different approaches to therapy.",
  providerStatus: "We are a Core Clinical Services provider.",
  importantNote:
    "For questions about accessing the Ontario Autism program or child funding, families should contact OAP directly.",
};
