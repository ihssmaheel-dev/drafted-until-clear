"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { RichText } from "@/lib/rich-text";

interface WrongAnswerProps {
  wrong: string;
  why?: string;
}

export function WrongAnswer({ wrong, why }: WrongAnswerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="mb-10 flex flex-col sm:flex-row gap-4 rounded-lg bg-secondary/30 p-5 border border-border/50"
    >
      <div className="flex-shrink-0 mt-0.5">
        <AlertCircle className="size-5 text-red" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-red mb-1 block">
            Common Trap
          </span>
          <div className="text-[14.5px] font-medium leading-relaxed text-foreground">
            <RichText text={wrong} />
          </div>
        </div>
        {why && (
          <div className="text-[13.5px] leading-relaxed text-text-muted">
            <RichText text={why} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
