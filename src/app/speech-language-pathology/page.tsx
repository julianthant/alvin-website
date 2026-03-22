import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { slpOverview, slpServices } from "@/data/services-slp";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { ServiceCard } from "@/components/service-card";
import { MotionWrapper } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Speech Language Pathology",
  description:
    "Speech-Language Pathology services for children — language development, articulation, fluency, literacy, AAC, and social communication in Ottawa.",
};

const slpAreas = [
  "Early language development and milestones",
  "Articulation and speech sound production",
  "Fluency and stuttering",
  "Childhood Apraxia of Speech",
  "Language expression and comprehension",
  "Augmentative and Alternative Communication (AAC)",
  "Social communication and pragmatic language",
  "Literacy, reading, and writing",
];

export default function SpeechLanguagePathologyPage() {
  return (
    <>
      <PageHero
        title="Speech Language Pathology"
        subtitle={slpOverview.definition}
        breadcrumbs={[{ label: "Speech Language Pathology" }]}
      />

      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {slpOverview.description}
            </p>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our SLP Services</h2>
            <p className="mt-2 text-muted-foreground">
              Specialized speech-language pathology programs for every
              communication need
            </p>
          </div>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {slpServices.map((service, i) => (
            <MotionWrapper key={service.slug} delay={i * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                href={`/speech-language-pathology/${service.slug}`}
                icon={service.icon}
              />
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <MotionWrapper>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Areas of Assessment &amp; Treatment
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our speech-language pathologists provide assessment and treatment
              across a wide range of areas
            </p>
          </div>
        </MotionWrapper>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {slpAreas.map((area, i) => (
            <MotionWrapper key={area} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 shadow-sm sm:p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{area}</span>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        title="Interested in Speech Language Pathology?"
        subtitle="Contact us to learn more about how speech therapy can help your child communicate."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
