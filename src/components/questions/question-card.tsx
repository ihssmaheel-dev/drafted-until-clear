"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { WrongAnswer } from "./wrong-answer";

import { Takeaway } from "./takeaway";
import type { Question } from "@/data/types";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  index: number;
}

import { MDXRemote } from "next-mdx-remote";
import { Steps, Step } from "./answer-steps";

const components = {
  Steps,
  Step,
  Bad: ({ children }: { children: React.ReactNode }) => <span className="font-semibold text-destructive">{children}</span>,
  Good: ({ children }: { children: React.ReactNode }) => <span className="font-semibold text-green">{children}</span>,
  Kw: ({ children }: { children: React.ReactNode }) => <span className="font-semibold text-foreground">{children}</span>,
  Flow: ({ children }: { children: React.ReactNode }) => <span className="font-semibold italic text-foreground">{children}</span>,
  Sys: ({ children }: { children: React.ReactNode }) => <span className="font-mono text-[0.9em] text-foreground">{children}</span>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded bg-foreground/10 px-1 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-green mb-2 mt-4">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-[14.5px] leading-relaxed text-text-muted mb-3">
      {children}
    </p>
  ),
};

export function QuestionCard({ question, index }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02, ease: "easeOut" }}
      className={cn(
        "card-base overflow-hidden rounded-md border",
        isOpen ? "border-text-faint" : "border-border"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-start gap-4 p-4 text-left select-none"
      >
        <span className="shrink-0 font-mono text-[11px] font-medium text-text-muted mt-[3px]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 font-[family-name:var(--font-sans)] text-[15px] font-medium leading-snug text-foreground sm:text-[16px]">
          {question.q}
        </span>

        <div className="flex size-6 shrink-0 items-center justify-center text-text-muted mt-[1px]">
          <ChevronRight
            className={cn(
              "size-4 transition-transform duration-200 ease-out",
              isOpen ? "rotate-90" : ""
            )}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-4 pt-4 pb-6 sm:px-5 sm:pt-5 sm:pb-6 bg-secondary/50">
              <WrongAnswer wrong={question.wrong} why={""} />
              
              <div className="mdx-content mt-4">
                {question.mdxSource && (
                  <MDXRemote {...question.mdxSource} components={components} />
                )}
              </div>

              <Takeaway text={question.takeaway} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
