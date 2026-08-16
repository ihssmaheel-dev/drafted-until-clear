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
      className="group relative pl-10 pb-8 last:pb-2"
    >
      {/* Centered exactly on the 2px line (size-9 = 36px; center of 2px border is at -1px from padding box. -19px + 18px = -1px) */}
      <div className="absolute -left-[19px] top-0 flex size-9 items-center justify-center rounded-full border border-cyan/50 bg-zinc-950 text-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
        <StepIcon name={icon} className="size-4.5" />
      </div>

      <div className="flex flex-col gap-1.5 -mt-1 p-5 rounded-2xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all duration-300 shadow-xl">
        <span className="font-[family-name:var(--font-sans)] text-[15px] font-semibold text-zinc-50">
          {title}
        </span>
        <div className="text-[14px] leading-relaxed text-zinc-400">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
