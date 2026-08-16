export function Header() {
  return (
    <header className="pt-8 sm:pt-16 flex flex-col items-center text-center">
      <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-border bg-secondary/30 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-text-muted shadow-sm">
        <span className="flex size-2 items-center justify-center">
          <span className="size-1.5 rounded-full bg-cyan" />
        </span>
        Master the technical interview
      </div>

      <h1 className="max-w-4xl font-[family-name:var(--font-sans)] text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-[72px] text-foreground">
        Interview questions,{" "}
        <br className="hidden sm:block" />
        <span className="text-cyan">drafted</span> until they&apos;re clear.
      </h1>

      <p className="mt-8 max-w-2xl text-[16px] sm:text-[18px] leading-[1.75] text-text-muted">
        The question, <strong className="font-medium text-foreground">the answer most people give</strong>,
        why it misses, and the reasoning that actually holds up — step by step, not just stated.
      </p>
    </header>
  );
}
