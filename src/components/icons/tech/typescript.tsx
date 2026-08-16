import type { SVGProps } from "react";

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
      <path
        d="M14.5 17.5h-3V8.5h3v8zm-1.5-9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6.5 3.5h-3l-2 2v2l3.5 3.5h3V11.5z"
        fill="white"
      />
    </svg>
  );
}
