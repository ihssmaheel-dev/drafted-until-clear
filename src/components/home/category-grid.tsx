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
                "group flex flex-col items-start gap-4 rounded-2xl border border-border/40 bg-card p-6 transition-all duration-300 outline-none text-left",
                "hover:-translate-y-0.5 hover:border-border/80 hover:bg-secondary/20 hover:shadow-sm"
              )}
            >
              <div className="flex w-full items-center justify-between">
                <div 
                  className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 shadow-sm transition-transform duration-300 group-hover:scale-105"
                >
                  <CategoryIcon 
                    icon={cat.icon} 
                    className="size-5"
                    style={{ color: `var(--color-${cat.color || "cyan"})` }}
                  />
                </div>
                <span className="font-mono text-[11px] font-medium text-text-muted transition-colors group-hover:text-foreground">
                  {counts[cat.id] ?? 0} Questions
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="font-sans text-[16px] font-semibold tracking-tight text-foreground">
                  {cat.label}
                </span>
                <span className="text-[14px] text-text-muted leading-relaxed">
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
              "group flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/40 p-6 transition-all duration-300 outline-none text-center",
              "hover:-translate-y-0.5 hover:border-border/80 hover:bg-secondary/10 hover:shadow-sm"
            )}
          >
            <div className="flex size-10 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 text-text-muted transition-all duration-300 group-hover:scale-105 group-hover:text-foreground">
              <ArrowRight className="size-5" />
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="font-sans text-[16px] font-semibold tracking-tight text-foreground">
                Show More
              </span>
              <span className="text-[14px] text-text-muted">
                Explore all {categories.length} categories
              </span>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
}
