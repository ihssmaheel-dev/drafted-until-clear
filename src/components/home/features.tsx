import { ShieldCheck, Target, LockOpen } from "lucide-react";

export function Features() {
  return (
    <div id="about" className="scroll-mt-24 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Why Drafted Until Clear?
        </h2>
        <p className="mt-4 text-[16px] text-text-muted max-w-2xl">
          Most interview prep sites give you a bulleted list of buzzwords to memorize. We believe in understanding the actual reasoning so you can confidently whiteboard any problem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground shadow-sm">
            <Target className="size-6 text-amber" />
          </div>
          <h3 className="font-sans text-[18px] font-bold text-foreground">Real Answers</h3>
          <p className="text-[14px] leading-relaxed text-text-muted">
            We don&apos;t just tell you what the definition is. We show you the common trap most candidates fall into, and how to answer it correctly.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground shadow-sm">
            <ShieldCheck className="size-6 text-green" />
          </div>
          <h3 className="font-sans text-[18px] font-bold text-foreground">Step-by-Step</h3>
          <p className="text-[14px] leading-relaxed text-text-muted">
            Every concept is broken down logically. You won&apos;t just memorize; you&apos;ll be able to trace the execution and explain the &quot;why&quot;.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground shadow-sm">
            <LockOpen className="size-6 text-cyan" />
          </div>
          <h3 className="font-sans text-[18px] font-bold text-foreground">100% Free</h3>
          <p className="text-[14px] leading-relaxed text-text-muted">
            No premium subscriptions, no paywalls. All questions and in-depth breakdowns are completely open source and free to access forever.
          </p>
        </div>
      </div>
    </div>
  );
}
