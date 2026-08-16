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
}

import { MDXRemote } from "next-mdx-remote";
import { Steps, Step } from "./answer-steps";

const components = {
  Steps,
  Step,
  Bad: ({ children }: { children: React.ReactNode }) => <span className="text-red font-semibold tracking-tight">{children}</span>,
  Good: ({ children }: { children: React.ReactNode }) => <span className="text-green font-semibold tracking-tight">{children}</span>,
  Kw: ({ children }: { children: React.ReactNode }) => <span className="text-violet font-semibold tracking-tight">{children}</span>,
  Flow: ({ children }: { children: React.ReactNode }) => <span className="text-cyan font-semibold tracking-tight">{children}</span>,
  Sys: ({ children }: { children: React.ReactNode }) => <span className="text-amber font-mono text-[0.9em] font-semibold tracking-tight">{children}</span>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded-md border border-border/50 bg-secondary/50 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-foreground whitespace-nowrap">
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

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <motion.article
      key={question.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="card-base overflow-hidden rounded-xl border border-border shadow-sm"
      id="active-question-pane"
    >
      <div className="flex flex-col gap-4 p-5 sm:p-7 border-b border-border bg-card">
        <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
          {question.q}
        </h2>
      </div>

      <div className="px-5 py-6 sm:px-7 sm:py-8 bg-secondary/30">
        <WrongAnswer wrong={question.wrong} why={""} />
        
        <div className="mdx-content mt-6">
          {question.mdxSource && (
            <MDXRemote {...question.mdxSource} components={components} />
          )}
        </div>

        <div className="mt-8">
          <Takeaway text={question.takeaway} />
        </div>
      </div>
    </motion.article>
  );
}
