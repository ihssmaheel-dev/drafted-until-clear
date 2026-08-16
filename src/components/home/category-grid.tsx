"use client";

import Link from "next/link";
import { CategoryIcon } from "@/components/icons/category-icon";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/types";
import { cn } from "@/lib/utils";

interface CategoryGridProps {
  categories: Category[];
  counts: Record<string, number>;
  limit?: number;
  hideTitle?: boolean;
}

export function CategoryGrid({ categories, counts, limit, hideTitle }: CategoryGridProps) {
  const displayedCategories = limit ? categories.slice(0, limit) : categories;
  const hasMore = limit && categories.length > limit;

  return (
    <div id="explore" className="scroll-mt-24 w-full">
      {!hideTitle && (
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore by Category
          </h2>
          <p className="mt-4 text-[16px] text-text-muted max-w-lg">
            Select a topic to dive into the most common pitfalls and the reasoning that actually holds up.
          </p>
        </div>
      )}
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {displayedCategories.map((cat) => {
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className={cn(
                "group flex flex-col items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-7 transition-all duration-300 outline-none text-left",
                "hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-2xl"
              )}
            >
              <div className="flex w-full items-center justify-between">
                <div 
                  className="flex size-12 items-center justify-center rounded-[14px] border transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    borderColor: `color-mix(in srgb, var(--color-${cat.color || "cyan"}) 50%, transparent)`,
                    backgroundColor: `color-mix(in srgb, var(--color-${cat.color || "cyan"}) 10%, transparent)`,
                    color: `var(--color-${cat.color || "cyan"})`,
                    boxShadow: `0 0 20px color-mix(in srgb, var(--color-${cat.color || "cyan"}) 30%, transparent)`
                  }}
                >
                  <CategoryIcon 
                    icon={cat.icon} 
                    className="size-6"
                  />
                </div>
                <span className="font-mono text-[11px] font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
                  {counts[cat.id] ?? 0} Questions
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="font-sans text-[17px] font-bold tracking-tight text-zinc-50">
                  {cat.label}
                </span>
                <span className="text-[14px] text-zinc-400 leading-relaxed">
                  {cat.description}
                </span>
              </div>
            </Link>
          );
        })}
        
        {hasMore && (
          <Link
            href="/categories"
            className={cn(
              "group flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-zinc-800 bg-transparent p-6 transition-all duration-300 outline-none text-center",
              "hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-950 hover:shadow-2xl"
            )}
          >
            <div className="flex size-12 items-center justify-center rounded-[14px] border border-zinc-700 bg-zinc-900 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-zinc-50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <ArrowRight className="size-6" />
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="font-sans text-[17px] font-bold tracking-tight text-zinc-50">
                Show More
              </span>
              <span className="text-[14px] text-zinc-400">
                Explore all {categories.length} categories
              </span>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
}
