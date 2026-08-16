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
                "group relative overflow-hidden flex flex-col items-start gap-4 rounded-2xl border p-5 sm:p-6 transition-all duration-500 outline-none text-left",
                "border-border/60 bg-gradient-to-b from-secondary/30 to-transparent hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)]"
              )}
            >
              {/* Subtle top inner glow on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex w-full items-center justify-between">
                <div 
                  className="flex size-11 items-center justify-center rounded-[14px] border border-border/80 bg-background/80 backdrop-blur-sm shadow-sm transition-transform duration-500 group-hover:scale-105"
                >
                  <CategoryIcon 
                    icon={cat.icon} 
                    className="size-5"
                    style={{ color: `var(--color-${cat.color || "cyan"})` }}
                  />
                </div>
                <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-background border border-border text-text-muted transition-colors group-hover:border-foreground/20 group-hover:text-foreground shadow-sm">
                  {counts[cat.id] ?? 0} Questions
                </span>
              </div>
              
              <div className="flex flex-col mt-2">
                <span className="font-sans text-[18px] font-semibold tracking-tight text-foreground">
                  {cat.label}
                </span>
                <span className="text-[14px] text-text-muted mt-2 leading-relaxed">
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
              "group relative overflow-hidden flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed p-5 sm:p-6 transition-all duration-500 outline-none text-center",
              "border-border/60 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)]"
            )}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex size-11 items-center justify-center rounded-[14px] border border-border/80 bg-background/80 backdrop-blur-sm text-text-muted transition-all duration-500 group-hover:scale-105 group-hover:text-foreground">
              <ArrowRight className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[18px] font-semibold tracking-tight text-foreground">
                Show More
              </span>
              <span className="text-[14px] text-text-muted mt-1">
                Explore all {categories.length} categories
              </span>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
}
