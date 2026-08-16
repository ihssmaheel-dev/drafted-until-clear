"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Category, Question, QuestionLevel } from "@/data/types";
import { SearchBar } from "@/components/questions/search-bar";
import { QuestionCard } from "@/components/questions/question-card";
import { useSearch } from "@/hooks/use-search";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CategoryIcon } from "@/components/icons/category-icon";

interface CategoryViewProps {
  category: Category;
  questions: Question[];
}

const LEVEL_ORDER: Record<QuestionLevel, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export function CategoryView({ category, questions }: CategoryViewProps) {
  const { query, setQuery, filterQuestions } = useSearch();

  const filtered = useMemo(() => {
    return filterQuestions(questions);
  }, [questions, filterQuestions]);

  const grouped = useMemo(() => {
    const groups: Record<string, Question[]> = {};
    filtered.forEach((q) => {
      if (!groups[q.level]) {
        groups[q.level] = [];
      }
      groups[q.level].push(q);
    });
    
    // Sort groups by the predefined order
    return Object.entries(groups).sort(
      ([levelA], [levelB]) => 
        LEVEL_ORDER[levelA as QuestionLevel] - LEVEL_ORDER[levelB as QuestionLevel]
    );
  }, [filtered]);

  return (
    <div className="flex-1 flex flex-col gap-8 py-6 sm:py-8">
      <div className="flex flex-col gap-6 border-b border-border pb-4 w-full">
        <Link 
          href="/categories" 
          className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-foreground transition-colors outline-none mb-1 group self-start"
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-secondary border border-border transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
            <ArrowLeft className="size-3" />
          </div>
          Back to categories
        </Link>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl border border-border bg-secondary shadow-sm">
              <CategoryIcon 
                icon={category.icon} 
                className="size-7"
                style={{ color: `var(--color-${category.color || "cyan"})` }}
              />
            </div>
            <div>
              <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {category.label}
              </h1>
              <p className="text-text-muted mt-2 text-[15px]">
                {questions.length} questions available
              </p>
            </div>
          </div>
          
          <div className="w-full sm:w-[320px]">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-dashed border-border bg-secondary/20 px-6 py-12 text-center"
            >
              <p className="font-mono text-[13px] text-text-faint">
                No questions match &ldquo;{query}&rdquo;
              </p>
            </motion.div>
          ) : (
            grouped.map(([level, qs]) => (
              <motion.div 
                key={level}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <h2 className="font-sans text-xl font-bold tracking-tight text-foreground">
                    {level}
                  </h2>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                <div className="flex flex-col gap-4">
                  {qs.map((q, i) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
