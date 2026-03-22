"use client";

import { useState } from "react";
import { staffMembers, staffCategories, type StaffCategory } from "@/data/staff";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { StaffCard } from "@/components/staff-card";
import { MotionWrapper } from "@/components/motion-wrapper";

type FilterOption = "All" | StaffCategory;

const filterOptions: FilterOption[] = ["All", ...staffCategories];

export default function OurStaffPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredMembers =
    activeFilter === "All"
      ? staffMembers
      : staffMembers.filter((m) => m.category === activeFilter);

  // Sort so Co-Owners appear first
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (a.category === "Co-Owners" && b.category !== "Co-Owners") return -1;
    if (a.category !== "Co-Owners" && b.category === "Co-Owners") return 1;
    return 0;
  });

  return (
    <>
      <PageHero
        title="Our Staff"
        subtitle="Meet the dedicated professionals behind Achieve Therapy Centre."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Staff" },
        ]}
      />

      <SectionWrapper>
        <MotionWrapper>
          <div className="mb-6 sm:mb-8">
            <div className="-mx-1 flex flex-wrap gap-1.5 sm:mx-0 sm:gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                    activeFilter === option
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6 xl:grid-cols-4">
          {sortedMembers.map((member, i) => (
            <MotionWrapper key={member.name} delay={i * 0.05}>
              <StaffCard member={member} />
            </MotionWrapper>
          ))}
        </div>

        {sortedMembers.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            No staff members found for this category.
          </div>
        )}
      </SectionWrapper>

      <CtaSection
        title="Want to Join Our Team?"
        subtitle="We are always looking for passionate professionals."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
