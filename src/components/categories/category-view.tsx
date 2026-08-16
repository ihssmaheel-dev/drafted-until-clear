"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Category, Question, QuestionLevel } from "@/data/types";
import { SearchBar } from "@/components/questions/search-bar";
import { QuestionCard } from "@/components/questions/question-card";
import { useSearch } from "@/hooks/use-search";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
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

  const [collapsedLevels, setCollapsedLevels] = useState<string[]>([]);
  const toggleLevel = (level: string) => {
    setCollapsedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const activeQuestion = useMemo(() => {
    return filtered.find(q => q.id === activeQuestionId) || null;
  }, [filtered, activeQuestionId]);

  return (
    <div className="flex-1 flex flex-col gap-6 py-4 lg:py-6 min-h-0">
      <div className="flex flex-col gap-4 border-b border-border pb-4 w-full sm:flex-row sm:items-center sm:justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            href="/categories" 
            className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-text-muted hover:bg-foreground hover:text-background hover:border-foreground transition-all group"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <div className="flex items-baseline gap-3">
            <h1 className="font-sans text-2xl font-bold tracking-tight text-foreground">
              {category.label}
            </h1>
            <span className="text-[14px] font-medium text-text-muted">
              {questions.length} questions
            </span>
          </div>
        </div>
        
        <div className="w-full sm:w-[280px]">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </div>

      <section className="flex-1 flex flex-col gap-6 min-h-0">
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
            <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0">
              {/* Left Pane: Question List */}
              <div className="w-full lg:w-1/3 xl:w-80 shrink-0 flex flex-col gap-6 lg:overflow-y-auto pr-2 custom-scrollbar pb-6 min-h-0">
                {grouped.map(([level, qs]) => (
                  <div key={level} className="flex flex-col gap-2">
                    <button 
                      onClick={() => toggleLevel(level)}
                      className="flex items-center justify-between px-3 py-1.5 text-text-muted hover:text-foreground transition-colors outline-none rounded-md"
                    >
                      <h3 className="font-sans text-[11px] font-bold uppercase tracking-wider">
                        {level}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium font-mono text-text-faint">{qs.length}</span>
                        <ChevronDown className={cn("size-3 transition-transform", collapsedLevels.includes(level) && "-rotate-90")} />
                      </div>
                    </button>
                    {!collapsedLevels.includes(level) && (
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
                                "text-left px-3 py-2.5 rounded-lg text-[13.5px] leading-snug font-medium transition-all",
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
                    )}
                  </div>
                ))}
              </div>

              {/* Right Pane: Active Question Detail */}
              <div className="flex-1 min-w-0 flex flex-col gap-6 lg:overflow-y-auto pr-2 lg:pr-4 custom-scrollbar pb-6 min-h-0">
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
