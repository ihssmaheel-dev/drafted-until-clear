import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const TAG_MAP: Record<string, string> = {
  kw: "text-violet font-semibold tracking-tight",
  flow: "text-cyan font-semibold tracking-tight",
  sys: "text-amber font-mono text-[0.9em] font-semibold tracking-tight",
  bad: "text-red font-semibold tracking-tight",
  good: "text-green font-semibold tracking-tight",
};

function parseSegment(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  const tagRegex = /<(kw|flow|sys|bad|good|code)>(.*?)<\/\1>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    const [, tag, content] = match;
    const tagLower = tag.toLowerCase();

    if (tagLower === "code") {
      result.push(
        <code key={match.index} className="rounded-md border border-border/50 bg-secondary/50 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-foreground whitespace-nowrap">
          {content}
        </code>
      );
    } else {
      result.push(
        <span key={match.index} className={TAG_MAP[tagLower]}>
          {content}
        </span>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}

interface RichTextProps {
  text: string;
  className?: string;
}

export function RichText({ text, className }: RichTextProps) {
  return <span className={className}>{parseSegment(text)}</span>;
}
