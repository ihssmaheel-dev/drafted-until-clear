import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { Category, Question } from "./types";

export type { Category, Question, StepIcon, TechIcon, QuestionLevel } from "./types";

export const categories: Category[] = [
  // Tier 1 — Foundations
  { id: "js", label: "JavaScript", icon: "javascript", color: "#F7DF1E", tier: 1, description: "Closures, event loop, and the core mechanics of JS." },
  { id: "ts", label: "TypeScript", icon: "typescript", color: "#3178C6", tier: 1, description: "Type narrowing, generics, and avoiding \"any\"." },
  { id: "react", label: "React", icon: "react", color: "#61DAFB", tier: 2, description: "Hooks, rendering behavior, and performance." },
  { id: "node", label: "Node.js", icon: "node", color: "#339933", tier: 3, description: "Event-driven architecture, streams, and async patterns." },
  { id: "system", label: "System Design", icon: "network", color: "#6EC6FF", tier: 6, description: "Architecting reliable and scalable backend systems." },
  { id: "db", label: "Databases", icon: "database", color: "#C792EA", tier: 4, description: "Indexing, ACID transactions, and query optimization." },
];

const CONTENT_DIR = path.join(process.cwd(), "content", "categories");

export function getAllQuestionsMetadata(): Omit<Question, "mdxSource">[] {
  const questions: Omit<Question, "mdxSource">[] = [];
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const categoriesDirs = fs.readdirSync(CONTENT_DIR);
  for (const catId of categoriesDirs) {
    const catPath = path.join(CONTENT_DIR, catId);
    if (!fs.statSync(catPath).isDirectory()) continue;

    const files = fs.readdirSync(catPath).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const filePath = path.join(catPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      questions.push({
        id: data.id,
        categoryId: catId,
        q: data.q,
        level: data.level,
        wrong: data.wrong,
        takeaway: data.takeaway,
      });
    }
  }
  return questions;
}

export async function getQuestionsByCategory(categoryId: string): Promise<Question[]> {
  const catPath = path.join(CONTENT_DIR, categoryId);
  if (!fs.existsSync(catPath)) return [];

  const files = fs.readdirSync(catPath).filter((f) => f.endsWith(".mdx"));
  const questions: Question[] = [];

  for (const file of files) {
    const filePath = path.join(catPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const mdxSource = await serialize(content);

    questions.push({
      id: data.id,
      categoryId,
      q: data.q,
      level: data.level,
      wrong: data.wrong,
      takeaway: data.takeaway,
      mdxSource,
    });
  }

  return questions;
}

export function getTotalCount(): number {
  return getAllQuestionsMetadata().length;
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
