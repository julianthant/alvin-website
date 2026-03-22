"use client";

import Link from "next/link";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export function CtaSection({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: CtaSectionProps) {
  return (
    <section className="bg-primary px-4 py-12 text-primary-foreground sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-serif text-xl font-bold sm:text-2xl md:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm text-primary-foreground/80 sm:text-base">{subtitle}</p>
        )}
        <div className="mt-5 sm:mt-6">
          <Link href={buttonHref} className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground hover:text-primary sm:px-6 sm:py-3 sm:text-base">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
