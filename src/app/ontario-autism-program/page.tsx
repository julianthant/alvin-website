"use client";

import { HelpCircle, Sparkles, AlertTriangle, Shield } from "lucide-react";
import { ontarioAutismProgram } from "@/data/services-other";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function OntarioAutismProgramPage() {
  return (
    <>
      <PageHero
        title={ontarioAutismProgram.title}
        breadcrumbs={[{ label: "Ontario Autism Program" }]}
      />

      {/* Introduction Questions */}
      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6">
              {ontarioAutismProgram.questions.map((question, i) => (
                <MotionWrapper key={question} delay={i * 0.1}>
                  <div className="flex h-full flex-col items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5 md:p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-foreground">
                      {question}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* Core Description */}
      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {ontarioAutismProgram.description}
            </p>

            <div>
              <h2 className="font-serif text-2xl font-bold">
                Available Services
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {ontarioAutismProgram.services}
              </p>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* Neurodiversity Affirming Approach */}
      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-serif text-xl font-semibold">
                    Neurodiversity Affirming
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {ontarioAutismProgram.approach}
                  </p>
                </div>
              </div>
            </div>

            {/* Provider Status */}
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {ontarioAutismProgram.providerStatus}
              </span>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* Important Note */}
      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-amber-100/80 via-amber-50/50 to-transparent dark:from-amber-900/20 dark:via-amber-950/10 dark:to-transparent p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    Important Information
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {ontarioAutismProgram.importantNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <CtaSection
        title="Looking for OAP Services?"
        subtitle="Contact us to learn more about our autism program services."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
