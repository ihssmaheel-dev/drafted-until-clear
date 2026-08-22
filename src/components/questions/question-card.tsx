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

import { Lightbulb, Info, AlertTriangle } from "lucide-react";

const components = {
  Steps,
  Step,
  Bad: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-red/10 px-1.5 py-0.5 text-[13.5px] font-medium text-red border border-red/20">{children}</span>,
  Good: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-green/10 px-1.5 py-0.5 text-[13.5px] font-medium text-green border border-green/20">{children}</span>,
  Kw: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-violet/10 px-1.5 py-0.5 text-[13.5px] font-medium text-violet border border-violet/20">{children}</span>,
  Flow: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-cyan/10 px-1.5 py-0.5 text-[13.5px] font-medium text-cyan border border-cyan/20">{children}</span>,
  Sys: ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-md bg-amber/10 px-1.5 py-0.5 font-mono text-[12px] font-medium text-amber border border-amber/20">{children}</span>,
  Tip: ({ children, title = "Interview Tip" }: { children: React.ReactNode; title?: string }) => (
    <div className="my-5 flex items-start gap-3 rounded-xl border border-amber/30 bg-amber/5 p-4 text-[14px] text-foreground/90">
      <Lightbulb className="size-5 text-amber shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber">{title}</span>
        <div className="text-text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  ),
  Note: ({ children, title = "Key Concept" }: { children: React.ReactNode; title?: string }) => (
    <div className="my-5 flex items-start gap-3 rounded-xl border border-cyan/30 bg-cyan/5 p-4 text-[14px] text-foreground/90">
      <Info className="size-5 text-cyan shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan">{title}</span>
        <div className="text-text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  ),
  pre: ({ children, className, ...props }: any) => (
    <pre 
      className={cn(
        "overflow-x-auto rounded-xl border border-border bg-[#0d1117] p-4 font-mono text-[13px] leading-relaxed my-5 custom-scrollbar shadow-sm", 
        className
      )} 
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }: any) => {
    const isInline = !props["data-language"];
    return (
      <code 
        className={cn(
          isInline ? "rounded-md border border-border/50 bg-secondary/50 px-1.5 py-0.5 text-foreground whitespace-nowrap" : "",
          "font-mono text-[0.85em] font-medium",
          className
        )} 
        {...props}
      >
        {children}
      </code>
    );
  },
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-5 rounded-xl border border-border bg-card">
      <table className="w-full text-left text-[13.5px] border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-secondary/50 border-b border-border text-foreground font-semibold">{children}</thead>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 font-mono text-[11.5px] font-bold uppercase tracking-wider text-text-muted">{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 border-b border-border/40 text-text-muted last:border-0">{children}</td>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside space-y-1.5 text-[14px] text-text-muted my-3 pl-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside space-y-1.5 text-[14px] text-text-muted my-3 pl-2">{children}</ol>
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
