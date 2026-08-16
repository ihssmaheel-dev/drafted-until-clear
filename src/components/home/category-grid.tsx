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
              className="flex flex-col items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors outline-none text-left"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
                  <CategoryIcon icon={cat.icon} className="size-5" />
                </div>
                <span className="font-mono text-[11px] font-medium text-text-muted">
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
            className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl border border-dashed border-border/40 hover:border-border/80 hover:bg-secondary/10 transition-colors outline-none text-center"
          >
            <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-text-muted">
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
