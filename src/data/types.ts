export type StepIcon =
  | "cpu"
  | "flag"
  | "layers"
  | "check"
  | "loop"
  | "gear"
  | "clock"
  | "users"
  | "db"
  | "scale"
  | "net"
  | "key"
  | "box"
  | "search"
  | "zap"
  | "shield"
  | "globe"
  | "wrench"
  | "code"
  | "server"
  | "git-branch"
  | "network";

export type TechIcon =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "vue"
  | "angular"
  | "svelte"
  | "node"
  | "graphql"
  | "deno"
  | "bun"
  | "html-css"
  | "globe"
  | "shield"
  | "zap"
  | "wrench"
  | "check-circle"
  | "git-branch"
  | "database"
  | "server"
  | "network"
  | "lock";

export interface Step {
  icon: StepIcon;
  title: string;
  text: string;
}

export type QuestionLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Question {
  id: string;
  q: string;
  level: QuestionLevel;
  wrong: string;
  why: string;
  steps: Step[];
  takeaway: string;
}

export interface Category {
  id: string;
  label: string;
  icon: TechIcon;
  color: string;
  tier: number;
  description?: string;
}
