import type { SVGProps } from "react";

export function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
        fill="#339933"
        stroke="#339933"
        strokeWidth="0.5"
      />
      <path
        d="M12 6v6l4 2.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
