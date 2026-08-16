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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all duration-300 shadow-2xl"
        >
          <div className="flex size-12 items-center justify-center rounded-[14px] border border-amber/50 bg-amber/10 text-amber shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
            <Target className="size-6" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <h3 className="font-sans text-[17px] font-bold text-zinc-50">Real Answers</h3>
            <p className="text-[14px] leading-relaxed text-zinc-400">
              We don't just tell you what the definition is. We show you the common trap most candidates fall into, and how to answer it correctly.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all duration-300 shadow-2xl"
        >
          <div className="flex size-12 items-center justify-center rounded-[14px] border border-green/50 bg-green/10 text-green shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            <ShieldCheck className="size-6" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <h3 className="font-sans text-[17px] font-bold text-zinc-50">Step-by-Step</h3>
            <p className="text-[14px] leading-relaxed text-zinc-400">
              Every concept is broken down logically. You won't just memorize; you'll be able to trace the execution and explain the "why".
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all duration-300 shadow-2xl"
        >
          <div className="flex size-12 items-center justify-center rounded-[14px] border border-cyan/50 bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <LockOpen className="size-6" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <h3 className="font-sans text-[17px] font-bold text-zinc-50">100% Free</h3>
            <p className="text-[14px] leading-relaxed text-zinc-400">
              No premium subscriptions, no paywalls. All questions and in-depth breakdowns are completely open source and free to access forever.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
