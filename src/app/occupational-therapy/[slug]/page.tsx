import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  ClipboardList,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { otServices } from "@/data/services-ot";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";

export function generateStaticParams() {
  return otServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = otServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription || `${service.title} — Occupational Therapy services at Achieve Therapy Centre in Ottawa.`,
  };
}

interface OTServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function OTServicePage({ params }: OTServicePageProps) {
  const { slug } = await params;
  const service = otServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { content } = service;

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "Occupational Therapy", href: "/occupational-therapy" },
          { label: service.title },
        ]}
      />

      {/* Overview / Definition */}
      <SectionWrapper>
        <MotionWrapper>
          <article className="mx-auto max-w-3xl space-y-6">
            {content.definition && (
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.definition}
              </p>
            )}
            {content.overview && (
              <p className="leading-relaxed text-muted-foreground">
                {content.overview}
              </p>
            )}
            {content.description && (
              <p className="leading-relaxed text-muted-foreground">
                {content.description}
              </p>
            )}
            {content.development && (
              <p className="leading-relaxed text-muted-foreground">
                {content.development}
              </p>
            )}
            {content.iadls && (
              <p className="leading-relaxed text-muted-foreground">
                {content.iadls}
              </p>
            )}
            {content.philosophy && (
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <p className="leading-relaxed text-foreground">
                    {content.philosophy}
                  </p>
                </div>
              </div>
            )}
          </article>
        </MotionWrapper>
      </SectionWrapper>

      {/* Common Concerns / Challenges / Issues */}
      {(content.commonConcerns ||
        content.commonChallenges ||
        content.commonIssues ||
        content.questionsAddressed) && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl space-y-10">
              {content.questionsAddressed && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Questions to Consider
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.questionsAddressed.map((q) => (
                      <div key={q} className="flex items-start gap-3">
                        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.commonConcerns && (
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
                  <h2 className="font-serif text-lg font-semibold">
                    Common Concerns
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.commonConcerns.map((concern) => (
                      <div key={concern} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.commonChallenges && (
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
                  <h2 className="font-serif text-lg font-semibold">
                    Common Challenges
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.commonChallenges.map((challenge) => (
                      <div key={challenge} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">
                          {challenge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.commonIssues && (
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
                  <h2 className="font-serif text-lg font-semibold">
                    Common Issues
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.commonIssues.map((issue) => (
                      <div key={issue} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Handwriting Red Flags */}
      {content.handwritingRedFlags && (
        <SectionWrapper>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-amber-100/80 via-amber-50/50 to-transparent p-6 dark:from-amber-900/20 dark:via-amber-950/10 dark:to-transparent md:p-8">
                <h2 className="font-serif text-lg font-semibold">
                  Handwriting Red Flags
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Signs that your child may benefit from handwriting
                  intervention:
                </p>
                <div className="mt-4 space-y-3">
                  {content.handwritingRedFlags.map((flag) => (
                    <div key={flag} className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
                      <span className="text-muted-foreground">{flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Key Components / Target Concerns / Approach */}
      {(content.keyComponents || content.targetConcerns || content.approach || content.medicalContext) && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl space-y-10">
              {content.keyComponents && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Key Components
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.keyComponents.map((component) => (
                      <div key={component} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">
                          {component}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.targetConcerns && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Target Concerns
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.targetConcerns.map((concern) => (
                      <div key={concern} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.approach && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Our Approach
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {content.approach}
                  </p>
                </div>
              )}

              {content.medicalContext && (
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-relaxed text-muted-foreground">
                      {content.medicalContext}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Assessment */}
      {content.assessment && (
        <SectionWrapper>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-sky-100/80 via-sky-50/40 to-transparent p-6 dark:from-sky-900/20 dark:via-sky-950/10 dark:to-transparent md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30">
                    <BookOpen className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-semibold">
                      Assessment
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {content.assessment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Expected Outcomes */}
      {content.outcomes && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold">
                Expected Outcomes
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {content.outcomes}
              </p>
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      <CtaSection
        title={`Interested in ${service.title}?`}
        subtitle="Contact us to learn more about how we can help your child."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
