"use client";

import { useState } from "react";
import { MessageCircle, MapPin, Info } from "lucide-react";
import { faqs, faqCategories, type FaqCategory } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactInfoCard } from "@/components/contact-info-card";
import { MotionWrapper } from "@/components/motion-wrapper";

type FilterOption = "All" | FaqCategory;

const filterOptions: FilterOption[] = ["All", ...faqCategories];

export default function FaqsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredFaqs =
    activeFilter === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeFilter);

  const accordionItems = filteredFaqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, sessions, billing, and staff."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <MotionWrapper>
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveFilter(option)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                      activeFilter === option
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <FaqAccordion items={accordionItems} />
          </MotionWrapper>
        </div>
      </SectionWrapper>

      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold">
                    Still Have Questions?
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We are happy to help. Reach out to us directly.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ContactInfoCard />
              </div>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* Where We Are Located */}
      <SectionWrapper>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold">
                  Where We Are Located
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {siteConfig.fullAddress}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  <p className="text-sm text-primary">
                    {siteConfig.locationNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=1+Centrepointe+Dr+Ottawa+ON+K2G+6E2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Achieve Therapy Centre location"
              />
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <CtaSection
        title="Ready to Get Started?"
        subtitle="Contact us today to learn more about our therapy services."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
