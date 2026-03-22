import { Info, Users } from "lucide-react";
import { groupTherapyOverview, groupPrograms } from "@/data/group-programs";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { ProgramCard } from "@/components/program-card";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function GroupTherapyPage() {
  return (
    <>
      <PageHero
        title="Group Therapy"
        breadcrumbs={[{ label: "Group Therapy" }]}
      />

      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {groupTherapyOverview.description}
            </p>

            {/* OAP Funding Callout */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">OAP Funding</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {groupTherapyOverview.fundingNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-muted-foreground">
                {groupTherapyOverview.staffing}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Suitability:
                </span>{" "}
                {groupTherapyOverview.suitability}
              </p>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our Programs</h2>
            <p className="mt-2 text-muted-foreground">
              Interdisciplinary group programs for children and youth
            </p>
          </div>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {groupPrograms.map((program, i) => (
            <MotionWrapper key={program.name} delay={i * 0.1}>
              <ProgramCard program={program} />
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        title="Interested in Group Therapy?"
        subtitle="Contact us to register for an upcoming program or learn more."
        buttonText="Register Now"
        buttonHref="/contact"
      />
    </>
  );
}
