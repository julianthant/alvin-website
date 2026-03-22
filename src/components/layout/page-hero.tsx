import { BreadcrumbNav } from "./breadcrumb-nav";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 border-b-2 border-primary/20 px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-28">
      {/* Decorative shapes — hidden on small screens to prevent overflow */}
      <div className="pointer-events-none absolute -right-24 -top-24 hidden h-64 w-64 rounded-full bg-primary/5 sm:block" />
      <div className="pointer-events-none absolute -left-16 bottom-0 hidden h-48 w-48 rounded-full bg-accent/10 sm:block" />
      <div className="relative mx-auto max-w-7xl">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <BreadcrumbNav items={breadcrumbs} />
        )}
        <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
