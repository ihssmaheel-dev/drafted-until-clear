"use client";

import { motion } from "framer-motion";
import { StepIcon } from "@/components/icons/category-icon";
import type { StepIcon as StepIconType } from "@/data/types";

const STEPS = [
  { icon: "cpu", label: "Read the Q", num: "01", color: "cyan", desc: "Understand the core" },
  { icon: "flag", label: "Spot the trap", num: "02", color: "amber", desc: "Find the edge cases" },
  { icon: "layers", label: "Trace the steps", num: "03", color: "violet", desc: "Break it down" },
  { icon: "check", label: "Lock it in", num: "04", color: "green", desc: "Nail the takeaway" },
] as const;

export function HeroDiagram() {
  return (
    <div className="mb-10 sm:mb-14 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            key={step.icon}
            className="group relative flex flex-col items-start gap-4 p-5 rounded-2xl border border-border bg-secondary/10 overflow-hidden transition-all duration-300 hover:bg-secondary/40 hover:border-foreground/20 hover:shadow-[0_0_30px_-15px_rgba(255,255,255,0.1)]"
          >
            {/* Background Gradient Glow */}
            <div 
              className="absolute -inset-px opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, var(--color-${step.color}), transparent 70%)`
              }}
            />

            <div className="flex w-full items-center justify-between relative z-10">
              <span className="font-mono text-[11px] font-bold tracking-widest text-text-muted transition-colors duration-300 group-hover:text-foreground">
                {step.num}
              </span>
              <div 
                className="flex size-8 items-center justify-center rounded-full bg-background border border-border shadow-sm transition-transform duration-300 group-hover:scale-110"
              >
                <StepIcon 
                  name={step.icon as StepIconType} 
                  className="size-4" 
                  style={{ color: `var(--color-${step.color})` }} 
                />
              </div>
            </div>
            
            <div className="flex flex-col relative z-10 mt-2">
              <span className="font-sans text-[15px] font-semibold text-foreground tracking-tight">
                {step.label}
              </span>
              <span className="font-sans text-[13px] text-text-muted mt-1 transition-colors duration-300 group-hover:text-foreground/80">
                {step.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
