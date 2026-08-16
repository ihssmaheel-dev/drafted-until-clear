"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { WrongAnswer } from "./wrong-answer";
import { AnswerSteps } from "./answer-steps";
import { Takeaway } from "./takeaway";
import type { Question } from "@/data/types";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  index: number;
}

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
        className="flex w-full cursor-pointer items-start gap-4 p-5 text-left select-none sm:p-6"
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
            <div className="border-t border-border px-5 pt-6 pb-8 sm:px-6 sm:pt-7 sm:pb-9 bg-secondary/50">
              <WrongAnswer wrong={question.wrong} why={question.why} />
              <AnswerSteps steps={question.steps} />
              <Takeaway text={question.takeaway} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
