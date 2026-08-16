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
  index?: number;
}

import { MDXRemote } from "next-mdx-remote";
import { Steps, Step } from "./answer-steps";

const components = {
  Steps,
  Step,
  Bad: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-red/10 px-1.5 py-0.5 text-[13.5px] font-medium text-red border border-red/20">{children}</span>,
  Good: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-green/10 px-1.5 py-0.5 text-[13.5px] font-medium text-green border border-green/20">{children}</span>,
  Kw: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-violet/10 px-1.5 py-0.5 text-[13.5px] font-medium text-violet border border-violet/20">{children}</span>,
  Flow: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-cyan/10 px-1.5 py-0.5 text-[13.5px] font-medium text-cyan border border-cyan/20">{children}</span>,
  Sys: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-amber/10 px-1.5 py-0.5 font-mono text-[12px] font-medium text-amber border border-amber/20">{children}</span>,
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="overflow-x-auto rounded-xl border border-border bg-secondary/50 p-4 font-mono text-[13px] leading-relaxed my-5 custom-scrollbar shadow-sm">
      {children}
    </pre>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded-md border border-border/50 bg-secondary/50 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-foreground whitespace-nowrap">
      {children}
    </code>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-green mb-3 mt-6 flex items-center gap-2">
      <span className="w-4 h-px bg-green/40 rounded-full" />
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-[14.5px] leading-relaxed text-text-muted mb-4">
      {children}
    </p>
  ),
};

export function QuestionCard({ question, index }: QuestionCardProps) {
  return (
    <motion.article
      key={question.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="card-base overflow-hidden rounded-xl border border-border shadow-sm"
      id="active-question-pane"
    >
      <div className="flex flex-col gap-3 p-5 sm:p-6 border-b border-border bg-card">
        <h2 className="font-sans text-[19px] sm:text-[21px] font-semibold tracking-tight text-foreground leading-snug flex items-start gap-3">
          <span className="flex h-7 shrink-0 items-center justify-center rounded-md bg-cyan/10 px-2 min-w-7 text-[13px] font-bold text-cyan border border-cyan/20 font-mono tracking-tight">
            Q{index !== undefined ? index : ""}
          </span>
          <span className="mt-0.5">{question.q}</span>
        </h2>
      </div>

      <div className="px-5 py-6 sm:px-6 sm:py-8 bg-secondary/10">
        <WrongAnswer wrong={question.wrong} why={""} />
        
        <div className="mdx-content mt-5">
          {question.mdxSource && (
            <MDXRemote {...question.mdxSource} components={components} />
          )}
        </div>

        <div className="mt-5">
          <Takeaway text={question.takeaway} />
        </div>
      </div>
    </motion.article>
  );
}
