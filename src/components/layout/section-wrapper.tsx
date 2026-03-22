import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  alternate = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24",
        alternate && "bg-primary/[0.04] dark:bg-primary/[0.06]",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
