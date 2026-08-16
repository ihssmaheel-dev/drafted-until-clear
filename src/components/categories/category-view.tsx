"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Category, Question, QuestionLevel } from "@/data/types";
import { SearchBar } from "@/components/questions/search-bar";
import { QuestionCard } from "@/components/questions/question-card";
import { useSearch } from "@/hooks/use-search";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CategoryIcon } from "@/components/icons/category-icon";
import { cn } from "@/lib/utils";

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

  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  useEffect(() => {
    if (filtered.length > 0) {
      if (!activeQuestionId || !filtered.find(q => q.id === activeQuestionId)) {
        setActiveQuestionId(filtered[0].id);
      }
    } else {
      setActiveQuestionId(null);
    }
  }, [filtered, activeQuestionId]);

  const activeQuestion = useMemo(() => {
    return filtered.find(q => q.id === activeQuestionId) || null;
  }, [filtered, activeQuestionId]);

  return (
    <div className="flex-1 flex flex-col gap-8 py-6 sm:py-8">
      <div className="flex flex-col gap-4 border-b border-border pb-6 w-full">
        <Link 
          href="/categories" 
          className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-foreground transition-colors outline-none group self-start"
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-secondary border border-border transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
            <ArrowLeft className="size-3" />
          </div>
          Back to categories
        </Link>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl border border-border bg-secondary shadow-sm">
              <CategoryIcon 
                icon={category.icon} 
                className="size-7"
                style={{ color: `var(--color-${category.color || "cyan"})` }}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {category.label}
              </h1>
              <p className="mt-2 text-[15px] text-text-muted">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Pane: Question List */}
              <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-6 lg:h-[calc(100vh-120px)] lg:overflow-y-auto pr-2">
                {grouped.map(([level, qs]) => (
                  <div key={level} className="flex flex-col gap-3">
                    <h3 className="font-sans text-[11px] font-bold uppercase tracking-wider text-text-muted px-3">
                      {level}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {qs.map((q) => {
                        const isActive = q.id === activeQuestionId;
                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              setActiveQuestionId(q.id);
                              if (window.innerWidth < 1024) {
                                document.getElementById("active-question-pane")?.scrollIntoView({ behavior: "smooth" });
                              }
                            }}
                            className={cn(
                              "text-left px-3 py-3 rounded-lg text-[14px] leading-snug font-medium transition-all",
                              isActive
                                ? "bg-foreground text-background shadow-sm"
                                : "text-text-muted hover:bg-secondary hover:text-foreground"
                            )}
                          >
                            {q.q}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Pane: Active Question Detail */}
              <div className="lg:col-span-8 min-w-0 flex flex-col gap-6">
                <AnimatePresence mode="wait">
                  {activeQuestion && (
                    <QuestionCard question={activeQuestion} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
