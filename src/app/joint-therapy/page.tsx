"use client";

import { CheckCircle, Dumbbell } from "lucide-react";
import { jointTherapy } from "@/data/services-other";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";

const benefits = [
  "Addresses multiple developmental areas in single appointments",
  "Combines both therapeutic disciplines into unified activities",
  "More efficient and cohesive therapy experience for families",
  "Children can practice combined activities at home",
  "Strengthens speech, language, regulation, and motor skills simultaneously",
];

export default function JointTherapyPage() {
  return (
    <>
      <PageHero
        title={jointTherapy.title}
        breadcrumbs={[{ label: "Joint Therapy" }]}
      />

      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {jointTherapy.description}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {jointTherapy.details}
            </p>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
              <h2 className="font-serif text-lg font-semibold">
                Key Benefits of Joint Therapy
              </h2>
              <div className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* Supported Diagnoses + Sensory Gym combined */}
      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold">
                Supported Diagnoses
              </h2>
              <p className="mt-2 text-muted-foreground">
                Joint therapy is particularly beneficial for children with
                the following diagnoses:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {jointTherapy.supportedDiagnoses.map((diagnosis) => (
                  <span
                    key={diagnosis}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {diagnosis}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">
                {jointTherapy.focusAreas}
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">
                  Sensory Gym Facilities
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {jointTherapy.facilityFeature}
                </p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <CtaSection
        title="Interested in Joint Therapy?"
        subtitle="Contact us to learn more about our combined OT and SLP therapy approach."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
