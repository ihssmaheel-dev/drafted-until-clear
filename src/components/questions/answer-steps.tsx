"use client";

import { motion } from "framer-motion";
import { StepIcon } from "@/components/icons/category-icon";
import type { StepIcon as StepIconType } from "@/data/types";
import { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div className="relative ml-4 border-l-2 border-border/60 py-2">
      {children}
    </div>
  );
}

interface StepProps {
  icon: StepIconType;
  title: string;
  children: ReactNode;
}

export function Step({ icon, title, children }: StepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative pl-10 pb-10 last:pb-2"
    >
      {/* Icon resting perfectly on the timeline line */}
      <div className="absolute -left-[17px] top-0 flex size-8 items-center justify-center rounded-full border-[3px] border-background bg-secondary text-foreground shadow-sm">
        <StepIcon name={icon} className="size-3.5" />
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <span className="font-[family-name:var(--font-sans)] text-[15px] font-bold text-foreground">
          {title}
        </span>
        <div className="text-[14.5px] leading-relaxed text-text-muted">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
