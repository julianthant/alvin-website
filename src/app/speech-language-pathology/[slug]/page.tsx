import { notFound } from "next/navigation";
import {
  CheckCircle,
  AlertCircle,
  Star,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { slpServices } from "@/data/services-slp";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";
import { MilestoneTimeline } from "@/components/milestone-timeline";

export function generateStaticParams() {
  return slpServices.map((service) => ({
    slug: service.slug,
  }));
}

interface SLPServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function SLPServicePage({ params }: SLPServicePageProps) {
  const { slug } = await params;
  const service = slpServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const { content } = service;

  // Build milestone data for the timeline component
  const timelineMilestones = content.milestones?.map((m) => ({
    age: m.age,
    description: m.skills.join(". "),
  }));

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumbs={[
          {
            label: "Speech Language Pathology",
            href: "/speech-language-pathology",
          },
          { label: service.title },
        ]}
      />

      {/* Overview */}
      <SectionWrapper>
        <MotionWrapper>
          <article className="mx-auto max-w-3xl space-y-6">
            {content.overview && (
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.overview}
              </p>
            )}
            {content.description && (
              <p className="leading-relaxed text-muted-foreground">
                {content.description}
              </p>
            )}
            {content.keyPoint && (
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <p className="leading-relaxed text-foreground">
                    {content.keyPoint}
                  </p>
                </div>
              </div>
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
            {content.specialistNote && (
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <p className="leading-relaxed text-foreground">
                    {content.specialistNote}
                  </p>
                </div>
              </div>
            )}
          </article>
        </MotionWrapper>
      </SectionWrapper>

      {/* Common Concerns */}
      {content.commonConcerns && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
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
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Developmental Milestones Timeline */}
      {timelineMilestones && timelineMilestones.length > 0 && (
        <SectionWrapper>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-bold">
                Developmental Milestones
              </h2>
              <p className="mt-2 mb-8 text-muted-foreground">
                Key language milestones to look for in your child&apos;s
                development:
              </p>
              <MilestoneTimeline milestones={timelineMilestones} />
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Signs */}
      {content.signs && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-amber-100/80 via-amber-50/50 to-transparent p-6 dark:from-amber-900/20 dark:via-amber-950/10 dark:to-transparent md:p-8">
                <h2 className="font-serif text-lg font-semibold">
                  Signs to Watch For
                </h2>
                <div className="mt-4 space-y-3">
                  {content.signs.map((sign) => (
                    <div key={sign} className="flex items-start gap-3">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
                      <span className="text-muted-foreground">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Areas / Methods */}
      {(content.areas || content.methods) && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl space-y-10">
              {content.areas && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Areas Addressed
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.areas.map((area) => (
                      <div key={area} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.methods && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Communication Methods
                  </h2>
                  <div className="mt-4 space-y-3">
                    {content.methods.map((method) => (
                      <div key={method} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Implementation + Target Children */}
      {(content.implementation || content.targetChildren) && (
        <SectionWrapper>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl space-y-10">
              {content.implementation && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">Our Process</h2>
                  <div className="mt-6 space-y-4">
                    {content.implementation.map((step, i) => (
                      <div
                        key={step}
                        className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-sm"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.targetChildren && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Who Can Benefit
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    This service is designed for children who:
                  </p>
                  <div className="mt-4 space-y-3">
                    {content.targetChildren.map((child) => (
                      <div key={child} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{child}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Assessment areas */}
      {content.assessment && (
        <SectionWrapper alternate>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-sky-100/80 via-sky-50/40 to-transparent p-6 dark:from-sky-900/20 dark:via-sky-950/10 dark:to-transparent md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30">
                    <BookOpen className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-semibold">
                      Assessment Areas
                    </h2>
                    <div className="mt-4 space-y-3">
                      {content.assessment.map((area) => (
                        <div key={area} className="flex items-start gap-3">
                          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
                          <span className="text-muted-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      {/* Parent Involvement + Approach */}
      {(content.parentInvolvement || content.approach) && (
        <SectionWrapper>
          <MotionWrapper>
            <div className="mx-auto max-w-3xl space-y-8">
              {content.parentInvolvement && (
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Parent Involvement
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {content.parentInvolvement}
                  </p>
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
            </div>
          </MotionWrapper>
        </SectionWrapper>
      )}

      <CtaSection
        title={`Interested in ${service.title}?`}
        subtitle="Contact us to learn more about how we can help your child communicate."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
