export function TickFrame() {
  return (
    <div className="pointer-events-none fixed inset-3 z-50 border border-cyan-dim/15 sm:inset-4">
      {/* Top-left corner */}
      <span className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-cyan-dim/60 sm:h-3.5 sm:w-3.5" />
      {/* Top-right corner */}
      <span className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-cyan-dim/60 sm:h-3.5 sm:w-3.5" />
      {/* Bottom-left corner */}
      <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-cyan-dim/60 sm:h-3.5 sm:w-3.5" />
      {/* Bottom-right corner */}
      <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-cyan-dim/60 sm:h-3.5 sm:w-3.5" />
    </div>
  );
}
