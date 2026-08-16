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

import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type QuestionLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Question {
  id: string;
  categoryId: string;
  q: string;
  level: QuestionLevel;
  wrong: string;
  takeaway: string;
  mdxSource?: MDXRemoteSerializeResult;
}

export interface Category {
  id: string;
  label: string;
  icon: TechIcon;
  color: string;
  tier: number;
  description?: string;
}
