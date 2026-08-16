"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative sm:w-[260px]">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-text-faint" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search questions…"
        className="h-11 w-full rounded-lg border border-border bg-card/40 pl-10 pr-9 font-[family-name:var(--font-body)] text-[13px] text-foreground outline-none transition-all duration-200 placeholder:text-text-faint focus:border-cyan/40 focus:bg-card focus:shadow-[0_0_0_3px_rgba(110,198,255,0.08)]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-text-faint transition-colors hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  );
}
