"use client";

import { ShieldCheck, Target, LockOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <div id="about" className="scroll-mt-24 w-full">
      <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Why Drafted Until Clear?
        </h2>
        <p className="mt-4 text-[16px] text-text-muted">
          Most interview prep sites give you a bulleted list of buzzwords to memorize. We believe in understanding the actual reasoning so you can confidently whiteboard any problem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative flex flex-col gap-5 p-7 sm:p-8 rounded-[32px] border border-border/60 bg-gradient-to-b from-secondary/30 to-transparent overflow-hidden hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] transition-all duration-500"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex size-14 items-center justify-center rounded-2xl border border-amber/20 bg-amber/10 text-amber transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Target className="size-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-sans text-[17px] font-bold text-foreground">Real Answers</h3>
            <p className="text-[14px] leading-relaxed text-text-muted">
              We don't just tell you what the definition is. We show you the common trap most candidates fall into, and how to answer it correctly.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative flex flex-col gap-5 p-7 sm:p-8 rounded-[32px] border border-border/60 bg-gradient-to-b from-secondary/30 to-transparent overflow-hidden hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] transition-all duration-500"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex size-14 items-center justify-center rounded-2xl border border-green/20 bg-green/10 text-green transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="size-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-sans text-[17px] font-bold text-foreground">Step-by-Step</h3>
            <p className="text-[14px] leading-relaxed text-text-muted">
              Every concept is broken down logically. You won't just memorize; you'll be able to trace the execution and explain the "why".
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative flex flex-col gap-5 p-7 sm:p-8 rounded-[32px] border border-border/60 bg-gradient-to-b from-secondary/30 to-transparent overflow-hidden hover:border-foreground/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] transition-all duration-500"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <LockOpen className="size-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-sans text-[17px] font-bold text-foreground">100% Free</h3>
            <p className="text-[14px] leading-relaxed text-text-muted">
              No premium subscriptions, no paywalls. All questions and in-depth breakdowns are completely open source and free to access forever.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
