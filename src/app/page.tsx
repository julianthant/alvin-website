"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/hero-background";
import { FloatingShapes } from "@/components/floating-shapes";
import { SectionDivider } from "@/components/section-divider";
import {
  Heart,
  Users,
  Dumbbell,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { faqs } from "@/data/faqs";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { ServiceCard } from "@/components/service-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { MotionWrapper } from "@/components/motion-wrapper";

const homeServices = [
  {
    title: "Occupational Therapy",
    description:
      "Helping children achieve independence in daily activities, school, and play through individualized therapy.",
    href: "/occupational-therapy",
    icon: "Hand",
  },
  {
    title: "Speech Language Pathology",
    description:
      "Client-centered speech therapy to develop, maintain, and strengthen communication skills.",
    href: "/speech-language-pathology",
    icon: "MessageCircle",
  },
  {
    title: "Joint Therapy",
    description:
      "Combined Speech-Language Pathology and Occupational Therapy for children with multiple needs.",
    href: "/joint-therapy",
    icon: "Heart",
  },
  {
    title: "Group Therapy",
    description:
      "Interdisciplinary group programs for children and youth with autism, building social and life skills.",
    href: "/group-therapy",
    icon: "Users",
  },
];

const whyChooseUs = [
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description:
      "We tailor every therapy plan to your child's unique strengths, needs, and goals, ensuring meaningful progress.",
  },
  {
    icon: Users,
    title: "Interdisciplinary Team",
    description:
      "Our team of OTs, SLPs, and assistants collaborate to provide comprehensive, holistic care for every child.",
  },
  {
    icon: Dumbbell,
    title: "Sensory Gym Facilities",
    description:
      "Dedicated sensory gyms with suspended equipment provide enriching therapeutic environments for your child.",
  },
  {
    icon: Sparkles,
    title: "Neurodiversity Affirming",
    description:
      "We celebrate neurodiversity and employ strengths-based approaches that respect each child's unique way of being.",
  },
];

const generalFaqs = faqs
  .filter((f) => f.category === "General")
  .slice(0, 4)
  .map((f) => ({ question: f.question, answer: f.answer }));

/* Staggered word animation for the hero heading */
const headingWords =
  "A Client-Centered Approach to Speech-Language Pathology and Occupational Therapy".split(
    " "
  );

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 border-b-2 border-primary/20 px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32">
        {/* Video background */}
        <HeroBackground />

        {/* Floating organic shapes — reduced on mobile */}
        <FloatingShapes />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <MotionWrapper>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-light text-primary-foreground shadow-md backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse sm:h-2 sm:w-2" />
              {siteConfig.acceptingClients}
            </span>
          </MotionWrapper>

          {/* Staggered word reveal heading */}
          <motion.h1
            className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90 sm:mt-6 sm:text-lg md:text-xl">
              At {siteConfig.name}, we help babies, children, and adolescents
              achieve their full potential through individualized, evidence-based
              therapy services.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 sm:w-auto sm:text-base"
              >
                Contact Us
              </Link>
              <Link
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-muted sm:w-auto sm:text-base"
              >
                Our Services
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Divider: hero -> services */}
      <div className="bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10">
        <SectionDivider />
      </div>

      {/* Services Overview */}
      <SectionWrapper id="services">
        <MotionWrapper>
          <div className="text-center">
            <div className="mx-auto mb-3 flex items-center justify-center gap-3 sm:mb-4">
              <span className="h-px w-6 bg-primary/40 sm:w-8" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                What we offer
              </span>
              <span className="h-px w-6 bg-primary/40 sm:w-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our Services</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Comprehensive therapy services for children and adolescents
            </p>
          </div>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {homeServices.map((service, i) => (
            <MotionWrapper key={service.title} delay={i * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                index={i}
              />
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper alternate>
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionWrapper>
            <div>
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <span className="h-px w-6 bg-primary/40 sm:w-8" />
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  Our story
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                About {siteConfig.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Founded in 2009 by Nathalie Mabon and Krista Simon, Achieve
                Therapy Centre has grown into a team of dedicated professionals
                committed to helping children and adolescents reach their full
                potential. We take a client-centered, interdisciplinary approach
                to therapy, considering each child&apos;s environment and family when
                setting meaningful, achievable goals.
              </p>
              <p className="mt-3 text-sm font-medium text-primary sm:mt-4">
                Est. 2009
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:text-base"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl p-1 shadow-2xl ring-1 ring-primary/10">
                <Image
                  src="/images/liam-balls-in.jpg"
                  alt="Child in sensory gym with colorful balls during therapy session"
                  width={600}
                  height={450}
                  className="w-full rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <MotionWrapper>
          <div className="text-center">
            <div className="mx-auto mb-3 flex items-center justify-center gap-3 sm:mb-4">
              <span className="h-px w-6 bg-primary/40 sm:w-8" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                The difference
              </span>
              <span className="h-px w-6 bg-primary/40 sm:w-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Why Choose Us</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              What sets {siteConfig.name} apart
            </p>
          </div>
        </MotionWrapper>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:mt-12 md:gap-6 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <MotionWrapper key={item.title} delay={i * 0.1}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/25 md:p-8">
                <div className="flex h-full flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/8 p-3 dark:bg-primary/15">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      {/* Quick FAQ */}
      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="text-center">
            <div className="mx-auto mb-3 flex items-center justify-center gap-3 sm:mb-4">
              <span className="h-px w-6 bg-primary/40 sm:w-8" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Common questions
              </span>
              <span className="h-px w-6 bg-primary/40 sm:w-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Quick answers to common questions
            </p>
          </div>
        </MotionWrapper>
        <MotionWrapper delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
            <FaqAccordion items={generalFaqs} />
            <div className="mt-5 text-center sm:mt-6">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:text-base"
              >
                View All FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      {/* CTA */}
      <CtaSection
        title="Ready to Get Started?"
        subtitle="Contact us to learn more about our services and how we can help your child."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
