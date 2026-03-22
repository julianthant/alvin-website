interface StatusBadgeProps {
  status: "accepting" | "waitlist" | "closed";
  label: string;
}

const dotColorMap = {
  accepting: "bg-green-500",
  waitlist: "bg-yellow-500",
  closed: "bg-red-500",
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
      <span className={`inline-block h-2 w-2 shrink-0 rounded-full ${dotColorMap[status]}`} />
      {label}
    </div>
  );
}
