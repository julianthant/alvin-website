"use client";

import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Brain, Hand, Heart, Users, BookOpen, Puzzle, MessageCircle,
  Activity, Sparkles, Baby, GraduationCap, Utensils, Mic,
  MessageSquare, BookText, Tablet, Shirt, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Hand, Heart, Users, BookOpen, Puzzle, MessageCircle,
  Activity, Sparkles, Baby, GraduationCap, Utensils, ArrowRight,
  Mic, MessageSquare, BookText, Tablet, Shirt,
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  index?: number;
}

export function ServiceCard({ title, description, href, icon, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || Brain;
  const num = String(index + 1).padStart(2, "0");

  return (
    <NextLink href={href} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/25">
        {/* Top accent — thin line that grows on hover */}
        <div className="h-0.5 bg-primary/30 transition-all duration-300 group-hover:h-1 group-hover:bg-primary" />

        <div className="flex h-full flex-col p-6 md:p-8">
          {/* Header: number + icon */}
          <div className="flex items-start justify-between">
            <span className="font-serif text-3xl font-bold text-primary/15 dark:text-primary/20 select-none">
              {num}
            </span>
            <div className="rounded-lg bg-primary/8 p-2.5 dark:bg-primary/15">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:gap-3">
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </NextLink>
  );
}
