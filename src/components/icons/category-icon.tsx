"use client";

import {
  Cpu,
  Flag,
  Layers,
  Check,
  RotateCcw,
  Settings,
  Clock,
  Users,
  Database,
  Scale,
  Network,
  Key,
  Box,
  Search,
  Zap,
  Shield,
  Globe,
  Wrench,
  Code,
  Server,
  GitBranch,
  Lock,
  CircleCheck,
} from "lucide-react";
import type { ComponentType } from "react";
import { JavaScriptIcon } from "./tech/javascript";
import { TypeScriptIcon } from "./tech/typescript";
import { ReactIcon } from "./tech/react";
import { NodeIcon } from "./tech/node";
import {
  NextjsIcon,
  VueIcon,
  AngularIcon,
  SvelteIcon,
  GraphqlIcon,
  DenoIcon,
  BunIcon,
  HtmlCssIcon,
} from "./tech/tech-icons";

const STEP_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  cpu: Cpu,
  flag: Flag,
  layers: Layers,
  check: Check,
  loop: RotateCcw,
  gear: Settings,
  clock: Clock,
  users: Users,
  db: Database,
  scale: Scale,
  net: Network,
  key: Key,
  box: Box,
  search: Search,
  zap: Zap,
  shield: Shield,
  globe: Globe,
  wrench: Wrench,
  code: Code,
  server: Server,
  "git-branch": GitBranch,
  network: Network,
  lock: Lock,
  "check-circle": CircleCheck,
};

const TECH_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  react: ReactIcon,
  nextjs: NextjsIcon,
  vue: VueIcon,
  angular: AngularIcon,
  svelte: SvelteIcon,
  node: NodeIcon,
  graphql: GraphqlIcon,
  deno: DenoIcon,
  bun: BunIcon,
  "html-css": HtmlCssIcon,
};

interface StepIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StepIcon({ name, className }: StepIconProps) {
  const Icon = STEP_ICONS[name] ?? CircleCheck;
  return <Icon className={className} />;
}

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = TECH_ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

interface CategoryIconProps {
  icon: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CategoryIcon({ icon, color, className }: CategoryIconProps) {
  const Icon = TECH_ICONS[icon] ?? STEP_ICONS[icon];
  if (!Icon) return null;
  return (
    <span className={className} style={color ? { color } : undefined}>
      <Icon className="size-full" />
    </span>
  );
}
