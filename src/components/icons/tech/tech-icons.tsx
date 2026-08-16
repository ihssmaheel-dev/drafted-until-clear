import type { SVGProps } from "react";

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
      <path
        d="M9 16V8h2.5c1.4 0 2.5 1 2.5 2.3 0 1.3-1.1 2.2-2.5 2.2H10.5V16H9zm1.5-3.5h1c.6 0 1-.4 1-1s-.4-1-1-1h-1v2z"
        fill="var(--background)"
      />
      <path
        d="M15 16l3-8h1.5l-3 8H15z"
        fill="var(--background)"
      />
    </svg>
  );
}

export function VueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2 3h3.5L12 14l6.5-11H22L12 22 2 3z" fill="#42B883" />
      <path d="M7 3h3l5 8.5L17 3h3L12 22 7 3z" fill="#35495E" />
    </svg>
  );
}

export function AngularIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2L2 7v2l10 13L22 9V7L12 2z" fill="#DD0031" />
      <path d="M12 2l8 5v1l-8 11L4 8V7l8-5z" fill="#C3002F" />
      <path
        d="M12 6.5L7 16h2.5l1-2h3l1 2H17L12 6.5zm.5 5l1.2-2.5L15 16h-2.5l-1-2.5-.5 1z"
        fill="white"
      />
    </svg>
  );
}

export function SvelteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17.5 3.5c-2.5 0-4.5 1-6 3.5-1.5-2.5-3.5-3.5-6-3.5C2.5 3.5 0 6 0 9.5c0 5 10 14 10 14s10-9 10-14c0-3.5-2.5-6-4.5-6z"
        fill="#FF3E00"
      />
      <path
        d="M12 5c-1.5 0-3 .8-4 2.5C7 6 5.5 5.5 4 5.5 2 5.5 0 7.5 0 9.5c0 4 7 12 7 12"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GraphqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="none" stroke="#E10098" strokeWidth="1.5" />
      <circle cx="12" cy="7" r="2" fill="#E10098" />
      <circle cx="6" cy="12" r="1.5" fill="#E10098" />
      <circle cx="18" cy="12" r="1.5" fill="#E10098" />
      <circle cx="12" cy="17" r="1.5" fill="#E10098" />
    </svg>
  );
}

export function DenoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#000" />
      <path
        d="M7 7h3v3H7V7zm0 3.5h3v3H7v-3zm0 3.5h3v3H7v-3zm3.5-7H14v3h-3.5V7zm3.5 3.5h3v3h-3v-3zm-3.5 3.5H14v3h-3.5v-3z"
        fill="white"
      />
    </svg>
  );
}

export function BunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#FBF0DF" />
      <path
        d="M8 10c0-2 1.5-3 3-3s3 1 3 3c0 1.5-1 2.5-2 3l-1 1v3"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="17" r="1" fill="#000" />
    </svg>
  );
}

export function HtmlCssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 2l1.5 18L12 22l7.5-2L21 2H3z" fill="#E34F26" />
      <path d="M12 4v16l6.5-1.5L20 4H12z" fill="#F06529" />
      <path d="M7 7h10l-.5 5H8l.2 3h8.5l-.3 3L12 20l-4.5-1 .3-4" fill="#EBEBEB" />
      <path d="M7 7h10l-.5 5H8l.2 3h8.5l-.3 3L12 20l-4.5-1 .3-4" fill="#fff" />
    </svg>
  );
}
