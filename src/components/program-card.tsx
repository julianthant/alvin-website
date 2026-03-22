"use client";

import { Clock, Calendar, AlertCircle } from "lucide-react";
import type { GroupProgram } from "@/data/group-programs";

interface ProgramCardProps {
  program: GroupProgram;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="h-full rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5 md:p-6">
      <div className="flex flex-col h-full gap-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">
            {program.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {program.description}
          </p>
        </div>

        {/* Age group badges */}
        <div className="flex flex-wrap gap-2">
          {program.ageGroups.map((ag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
            >
              {ag.label}
            </span>
          ))}
        </div>

        {/* Schedule */}
        <div className="space-y-1.5">
          {program.ageGroups.map((ag, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Clock className="h-3.5 w-3.5 shrink-0" />
              <span>
                {ag.label}: {ag.schedule}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-primary">{program.price}</p>

        {/* Duration and dates */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span>{program.sessionDates}</span>
          </div>
        </div>

        {/* Notes */}
        {program.notes && (
          <div className="mt-auto flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
            <span>{program.notes}</span>
          </div>
        )}
      </div>
    </div>
  );
}
