import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const TAG_MAP: Record<string, string> = {
  kw: "hl-kw font-semibold",
  flow: "hl-flow font-semibold",
  sys: "hl-sys font-semibold",
  bad: "hl-bad font-semibold",
  good: "hl-good font-semibold",
};

function parseSegment(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  const tagRegex = /<(kw|flow|sys|bad|good|code)>(.*?)<\/\1>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    const [, tag, content] = match;

    if (tag === "code") {
      result.push(
        <code key={match.index} className="code-chip">
          {content}
        </code>
      );
    } else {
      result.push(
        <span key={match.index} className={cn("font-semibold", TAG_MAP[tag])}>
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
