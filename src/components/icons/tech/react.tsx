import type { SVGProps } from "react";

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.5"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.5"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.5"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}
