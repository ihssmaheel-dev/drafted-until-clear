import type { SVGProps } from "react";

export function JavaScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
      <path
        d="M6.5 17.5l2-10.5h3l-2 10.5h-3zm8-10.5h3l-2 10.5h-3l1.5-7.5-1.5-3zm-5.5 0h3l-1.5 7.5 1.5 3h-3l1.5-7.5-1.5-3z"
        fill="#323330"
      />
    </svg>
  );
}
