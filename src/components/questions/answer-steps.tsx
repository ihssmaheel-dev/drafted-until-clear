"use client";

import { motion } from "framer-motion";
import { StepIcon } from "@/components/icons/category-icon";
import type { StepIcon as StepIconType } from "@/data/types";
import { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div className="relative py-2">
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
      className="relative pl-12 pb-3 last:pb-2 after:absolute after:left-[15px] after:top-8 after:bottom-0 after:w-[2px] after:bg-border/50 last:after:hidden"
    >
      {/* Icon */}
      <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-border bg-card text-text-muted z-10">
        <StepIcon name={icon} className="size-4" />
      </div>

      <div className="flex flex-col gap-1.5 pt-1">
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
