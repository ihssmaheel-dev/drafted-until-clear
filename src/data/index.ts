import type { Category, Question } from "./types";
import { jsQuestions } from "./categories/js";
import { tsQuestions } from "./categories/typescript";
import { reactQuestions } from "./categories/react";
import { nodeQuestions } from "./categories/node";
import { systemQuestions } from "./categories/system";
import { dbQuestions } from "./categories/db";

export type { Category, Question, Step, StepIcon, TechIcon } from "./types";

export const categories: Category[] = [
  // Tier 1 — Foundations
  { id: "js", label: "JavaScript", icon: "javascript", color: "#F7DF1E", tier: 1, description: "Closures, event loop, and the core mechanics of JS." },
  { id: "ts", label: "TypeScript", icon: "typescript", color: "#3178C6", tier: 1, description: "Type narrowing, generics, and avoiding \"any\"." },
  { id: "react", label: "React", icon: "react", color: "#61DAFB", tier: 2, description: "Hooks, rendering behavior, and performance." },
  { id: "node", label: "Node.js", icon: "node", color: "#339933", tier: 3, description: "Event-driven architecture, streams, and async patterns." },
  { id: "system", label: "System Design", icon: "network", color: "#6EC6FF", tier: 6, description: "Architecting reliable and scalable backend systems." },
  { id: "db", label: "Databases", icon: "database", color: "#C792EA", tier: 4, description: "Indexing, ACID transactions, and query optimization." },
];

export const questions: Record<string, Question[]> = {
  js: jsQuestions,
  ts: tsQuestions,
  react: reactQuestions,
  node: nodeQuestions,
  system: systemQuestions,
  db: dbQuestions,
};

export function getAllQuestions(): (Question & { categoryId: string })[] {
  return Object.entries(questions).flatMap(([catId, qs]) =>
    qs.map((q) => ({ ...q, categoryId: catId }))
  );
}

export function getQuestionById(id: string): (Question & { categoryId: string }) | undefined {
  return getAllQuestions().find((q) => q.id === id);
}

export function getTotalCount(): number {
  return Object.values(questions).reduce((acc, qs) => acc + qs.length, 0);
}

export function getCategoriesByTier(): Category[][] {
  const grouped = new Map<number, Category[]>();
  categories.forEach((c) => {
    const group = grouped.get(c.tier) || [];
    group.push(c);
    grouped.set(c.tier, group);
  });
  return Array.from(grouped.entries())
    .sort(([a], [b]) => a - b)
    .map(([, cats]) => cats.sort((a, b) => a.label.localeCompare(b.label)));
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryColor(id: string): string {
  return getCategoryById(id)?.color ?? "#6EC6FF";
}
