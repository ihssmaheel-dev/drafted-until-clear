"use client";

import { motion } from "framer-motion";
import { StepIcon } from "@/components/icons/category-icon";
import type { StepIcon as StepIconType } from "@/data/types";
import { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div className="relative ml-4 border-l-2 border-border/50 py-2">
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
      className="relative pl-10 pb-8 last:pb-2"
    >
      {/* Centered exactly on the 2px line (size-8 = 32px; center of 2px border is at -1px from padding box. -17px + 16px = -1px) */}
      <div className="absolute -left-[17px] top-0 flex size-8 items-center justify-center rounded-full border border-border bg-card text-text-muted">
        <StepIcon name={icon} className="size-4" />
      </div>

      <div className="flex flex-col gap-1.5 -mt-1 p-5 rounded-xl border border-border bg-card">
        <span className="font-[family-name:var(--font-sans)] text-[15px] font-semibold text-foreground">
          {title}
        </span>
        <div className="text-[14px] leading-relaxed text-text-muted">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
