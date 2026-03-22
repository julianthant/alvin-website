"use client";

import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";
import {
  Target,
  Eye,
  ArrowRight,
  Dumbbell,
  GraduationCap,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { staffMembers } from "@/data/staff";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { MotionWrapper } from "@/components/motion-wrapper";

const founders = staffMembers.filter((m) => m.isFounder);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our Clinic"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          <MotionWrapper>
            <div className="h-full rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex h-full flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-xl font-bold sm:text-2xl">Our Mission</h2>
                <p className="leading-relaxed text-muted-foreground">
                  To provide client-centered, evidence-based therapy services
                  that help babies, children, and adolescents achieve their full
                  potential. We consider each client&apos;s environment and family
                  when setting meaningful, achievable goals.
                </p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <div className="h-full rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex h-full flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-xl font-bold sm:text-2xl">Our Vision</h2>
                <p className="leading-relaxed text-muted-foreground">
                  To be a leading interdisciplinary therapy centre where every
                  child receives individualized care that celebrates their
                  unique strengths and supports their growth in a neurodiversity
                  affirming environment.
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </SectionWrapper>

      {/* History */}
      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our History</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded in 2009 by Nathalie Mabon and Krista Simon,{" "}
              {siteConfig.name} began with a shared vision of providing
              exceptional therapy services to children and families in the
              Ottawa area. What started as a small practice has grown into a
              comprehensive interdisciplinary clinic with a team of over 18
              dedicated professionals.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Over the years, the clinic has expanded its services to include
              Occupational Therapy, Speech-Language Pathology, Joint Therapy,
              and Group Therapy programs. The team includes registered
              Occupational Therapists, Speech-Language Pathologists, OT
              Assistants, and Communicative Disorders Assistants, all working
              together to provide holistic care.
            </p>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* Founders */}
      <SectionWrapper>
        <MotionWrapper>
          <h2 className="text-center font-serif text-2xl font-bold sm:text-3xl">
            Our Founders
          </h2>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 md:gap-8">
          {founders.map((founder, i) => (
            <MotionWrapper key={founder.name} delay={i * 0.15}>
              <div className="h-full rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 md:p-8">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={asset(founder.photo)}
                      alt={founder.name}
                      width={72}
                      height={72}
                      className="h-18 w-18 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-serif text-xl font-bold">
                        {founder.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {founder.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {founder.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      {/* Facilities */}
      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our Facilities</h2>
          </div>
        </MotionWrapper>

        {/* Therapy image */}
        <MotionWrapper delay={0.1}>
          <div className="mx-auto mt-8 max-w-4xl">
            <Image
              src={asset("images/jon-listening.jpg")}
              alt="Therapist engaged in a therapy session"
              width={900}
              height={500}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </MotionWrapper>

        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6">
          <MotionWrapper delay={0.15}>
            <div className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="flex h-full flex-col items-center">
                <Dumbbell className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-serif text-lg font-semibold">
                  Sensory Gyms
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dedicated sensory gyms featuring suspended equipment for
                  enriching therapeutic experiences.
                </p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.25}>
            <div className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="flex h-full flex-col items-center">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-serif text-lg font-semibold">
                  Ongoing Education
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team pursues continuous professional development to bring
                  the latest evidence-based practices to your child.
                </p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.35}>
            <div className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="flex h-full flex-col items-center">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-serif text-lg font-semibold">
                  Treatment Philosophy
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Client-centered, family-focused, and neurodiversity affirming
                  in every interaction.
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/about/our-staff"
              className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary/80"
            >
              Meet Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <CtaSection
        title="Want to Learn More?"
        subtitle="Get in touch to learn about our services and how we can help your child."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
