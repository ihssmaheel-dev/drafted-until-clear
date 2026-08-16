import { Code2 } from "lucide-react";

interface FooterProps {
  count: number;
}

export function Footer({ count }: FooterProps) {
  return (
    <footer className="border-t border-border py-8 mt-16 sm:mt-24">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 items-center sm:items-start">
          <span className="font-sans font-semibold text-[14px] tracking-tight text-foreground">
            Drafted Until Clear
          </span>
          <span className="text-[13px] text-text-muted">
            {count} questions currently available.
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-foreground transition-colors"
          >
            <Code2 className="size-4" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
