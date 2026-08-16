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
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors">
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
            <Target className="size-5" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <h3 className="font-sans text-[16px] font-semibold text-foreground">Real Answers</h3>
            <p className="text-[14px] leading-relaxed text-text-muted">
              We don't just tell you what the definition is. We show you the common trap most candidates fall into, and how to answer it correctly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors">
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
            <ShieldCheck className="size-5" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <h3 className="font-sans text-[16px] font-semibold text-foreground">Step-by-Step</h3>
            <p className="text-[14px] leading-relaxed text-text-muted">
              Every concept is broken down logically. You won't just memorize; you'll be able to trace the execution and explain the "why".
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/30 transition-colors">
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
            <LockOpen className="size-5" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <h3 className="font-sans text-[16px] font-semibold text-foreground">100% Free</h3>
            <p className="text-[14px] leading-relaxed text-text-muted">
              No premium subscriptions, no paywalls. All questions and in-depth breakdowns are completely open source and free to access forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
