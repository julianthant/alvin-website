export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`-mt-1 ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-full md:h-12"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 32C672 36 768 36 864 32C960 28 1056 20 1152 20C1248 20 1344 28 1392 32L1440 36V60H0Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
}
