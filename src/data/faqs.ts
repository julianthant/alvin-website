export type FaqCategory = "General" | "Sessions" | "Billing" | "Staff";

export interface FAQ {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqCategories: FaqCategory[] = [
  "General",
  "Sessions",
  "Billing",
  "Staff",
];

export const faqs: FAQ[] = [
  // General
  {
    question: "Is a referral required?",
    answer:
      "No referral is needed for services, though some insurance companies require one for coverage. Check with your insurance provider.",
    category: "General",
  },
  {
    question: "Are in-home services offered?",
    answer:
      "All services occur in-clinic or virtually when appropriate.",
    category: "General",
  },
  {
    question: "Why isn't pricing listed online?",
    answer:
      "Contact the office directly for quotes, as pricing varies depending on service types required.",
    category: "General",
  },
  {
    question: "What happens when a child is on the waitlist?",
    answer:
      "The office contacts families by phone and email with available appointment spots for initial assessments and subsequent therapy on weekly or biweekly schedules.",
    category: "General",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, we have paid parking at our location. The fee is $2 per visit. Limited free street parking exists on weekdays after 5:30 pm and weekends. Request a parking voucher at the front desk.",
    category: "General",
  },

  // Sessions
  {
    question: "What occurs during an initial assessment?",
    answer:
      "The clinician evaluates areas of concern mentioned during intake, then provides results and discusses a therapy plan.",
    category: "Sessions",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Therapy sessions, including assessment sessions, are usually 1 hour and include 45-50 minutes of direct therapy time. The remaining 10-15 minutes cover session review, homework discussion, scheduling, and charting. Virtual appointments of 45 or 30 minutes are also available.",
    category: "Sessions",
  },
  {
    question: "How many sessions are needed?",
    answer:
      "The number varies by concern and individual needs. After initial assessment, clinicians propose a therapy plan including treatment length (for example 10 or 20 sessions). Informal reassessment follows to determine if further intervention is needed.",
    category: "Sessions",
  },
  {
    question: "Can parents attend sessions?",
    answer:
      "Yes, parents and caregivers are welcome to attend assessments and therapy sessions.",
    category: "Sessions",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We do have a 48 hour cancellation policy to cancel any assessments or appointments. For illness, notify your clinician before 8 am the day of appointment. Contact your clinician by email or call 613-680-1780.",
    category: "Sessions",
  },

  // Billing
  {
    question: "What payment methods are accepted?",
    answer:
      "Payments accepted include debit, exact change cash, cheques, and e-transfer. A valid credit card must be kept on file; if payment isn't made, the card gets charged at end of business day.",
    category: "Billing",
  },
  {
    question: "Is direct billing to insurance available?",
    answer:
      "No direct billing is offered, though paid invoices can be submitted to insurance providers.",
    category: "Billing",
  },
  {
    question: "Are services covered by insurance?",
    answer:
      "Speech-Language Pathology and Occupational Therapy are often covered by insurance. Contact your provider to verify coverage, as plans vary.",
    category: "Billing",
  },

  // Staff
  {
    question: "What is a Communicative Disorders Assistant (CDA)?",
    answer:
      "CDAs work with Speech-Language Pathologists implementing therapy. After SLP assessment, CDAs conduct regular sessions. The SLP and CDA meet regularly to adjust goals and perform informal reassessments every 2-3 months.",
    category: "Staff",
  },
  {
    question: "What is an Occupational Therapy Assistant (OTA)?",
    answer:
      "OTAs work with Occupational Therapists implementing therapy. After OT assessment, OTAs conduct regular sessions. The OT and OTA meet regularly to adjust goals and perform informal reassessments every 2-3 months.",
    category: "Staff",
  },
];
