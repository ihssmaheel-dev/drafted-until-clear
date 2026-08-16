import { StepIcon } from "@/components/icons/category-icon";

const STEPS = [
  { icon: "cpu", label: "Read the Q", num: "01", color: "cyan" },
  { icon: "flag", label: "Spot the trap", num: "02", color: "amber" },
  { icon: "layers", label: "Trace the steps", num: "03", color: "violet" },
  { icon: "check", label: "Lock it in", num: "04", color: "green" },
];

export function HeroDiagram() {
  return (
    <div className="mb-20 sm:mb-28">
      <div className="grid grid-cols-2 sm:grid-cols-4 border border-border overflow-hidden rounded-lg">
        {STEPS.map((step, i) => (
          <div
            key={step.icon}
            className={`flex flex-col items-start gap-4 p-5 sm:p-6 bg-card transition-colors hover:bg-secondary ${
              i !== STEPS.length - 1 ? "border-r border-border" : ""
            } ${i === 1 ? "max-sm:border-r-0 max-sm:border-b" : ""} ${i === 0 ? "max-sm:border-b" : ""}`}
          >
            <div className="flex w-full items-center justify-between">
              <span className="font-mono text-[10px] font-medium tracking-widest text-text-faint">
                {step.num}
              </span>
              <StepIcon name={step.icon} className="size-4" style={{ color: `var(--color-${step.color || "cyan"})` }} />
            </div>
            
            <span className="text-[14px] font-medium text-foreground tracking-wide mt-2">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
