import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { otOverview, otServices } from "@/data/services-ot";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { ServiceCard } from "@/components/service-card";
import { MotionWrapper } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Occupational Therapy",
  description:
    "Occupational Therapy services for children — sensory processing, handwriting, fine & gross motor skills, self-care, feeding therapy, and executive functioning in Ottawa.",
};

const otAreas = [
  "Sensory processing and self-regulation",
  "Fine motor skills and handwriting",
  "Gross motor skills and coordination",
  "Self-care and daily living skills",
  "Feeding and mealtime challenges",
  "Executive functioning and organization",
  "Visual motor and visual perceptual skills",
  "Social participation and play skills",
];

export default function OccupationalTherapyPage() {
  return (
    <>
      <PageHero
        title="Occupational Therapy"
        subtitle={otOverview.definition}
        breadcrumbs={[{ label: "Occupational Therapy" }]}
      />

      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {otOverview.description}
            </p>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our OT Services</h2>
            <p className="mt-2 text-muted-foreground">
              Specialized occupational therapy programs tailored to your
              child&apos;s needs
            </p>
          </div>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {otServices.map((service, i) => (
            <MotionWrapper key={service.slug} delay={i * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                href={`/occupational-therapy/${service.slug}`}
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
              Our occupational therapists provide assessment and treatment across
              a wide range of areas
            </p>
          </div>
        </MotionWrapper>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {otAreas.map((area, i) => (
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
        title="Interested in Occupational Therapy?"
        subtitle="Contact us to learn more about how occupational therapy can help your child."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
