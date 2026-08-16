"use client";

import { motion } from "framer-motion";
import { StepIcon } from "@/components/icons/category-icon";
import type { StepIcon as StepIconType } from "@/data/types";
import { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div className="relative ml-4 md:ml-6 border-l-2 border-border/50 py-2">
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
      className="group relative pl-10 md:pl-14 pb-8 last:pb-2"
    >
      {/* Centered exactly on the 2px line (size-10 = 40px; center of 2px border is at -1px from padding box. -21px + 20px = -1px) */}
      <div className="absolute -left-[21px] top-0 flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-110 group-hover:border-foreground/30">
        <StepIcon name={icon} className="size-4.5 text-text-muted transition-colors group-hover:text-foreground" />
      </div>

      <div className="flex flex-col gap-3 -mt-2 p-5 sm:p-6 rounded-[24px] border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-foreground/20 hover:shadow-md transition-all duration-300 relative overflow-hidden">
        {/* Inner subtle glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <span className="font-[family-name:var(--font-sans)] text-[16px] font-bold text-foreground">
          {title}
        </span>
        <div className="text-[14.5px] leading-relaxed text-text-faint group-hover:text-text-muted transition-colors">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
