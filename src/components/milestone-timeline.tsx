interface Milestone {
  age: string;
  description: string;
}

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

export function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  return (
    <ul>
      {milestones.map((milestone, index) => (
        <li
          key={index}
          className="grid grid-cols-[auto_auto_1fr] gap-0"
        >
          {/* Age label - top aligned */}
          <div className="min-w-[60px] self-start pr-2 pt-1 text-right sm:min-w-[80px] sm:pr-4 md:min-w-[100px]">
            <span className="inline-block rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground sm:px-3 sm:py-1 sm:text-xs md:text-sm">
              {milestone.age}
            </span>
          </div>

          {/* Middle column: stretches full row height for continuous line */}
          <div className="flex flex-col items-center self-stretch">
            {/* Top connector: line if not first, spacer if first */}
            {index > 0 ? (
              <div className="w-0.5 bg-primary/30" style={{ height: 6 }} />
            ) : (
              <div style={{ height: 6 }} />
            )}

            {/* Dot */}
            <div className="z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
            </div>

            {/* Bottom connector: stretches to fill remaining row height */}
            {index < milestones.length - 1 ? (
              <div className="w-0.5 flex-1 bg-primary/30" />
            ) : (
              <div className="flex-1" />
            )}
          </div>

          {/* Content card */}
          <div className={`pl-2 pt-0.5 sm:pl-4 ${index < milestones.length - 1 ? "pb-3 sm:pb-4" : ""}`}>
            <div className="rounded-xl border border-border/60 bg-card p-3 shadow-sm sm:p-4">
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                {milestone.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
