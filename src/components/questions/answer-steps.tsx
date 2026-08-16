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
      className="group relative pl-10 md:pl-12 pb-8 last:pb-2"
    >
      {/* Centered exactly on the 2px line (size-8 = 32px; center of 2px border is at -1px from padding box. -17px + 16px = -1px) */}
      <div className="absolute -left-[17px] top-0 flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-105 group-hover:border-foreground/30">
        <StepIcon name={icon} className="size-4 text-text-muted transition-colors group-hover:text-foreground" />
      </div>

      <div className="flex flex-col gap-2 -mt-1 p-4 sm:p-5 rounded-2xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-foreground/20 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
        {/* Inner subtle glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <span className="font-[family-name:var(--font-sans)] text-[15px] font-bold text-foreground">
          {title}
        </span>
        <div className="text-[14px] leading-relaxed text-text-faint group-hover:text-text-muted transition-colors">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
