"use client";

import { useState, useCallback } from "react";
import type { Question } from "@/data/types";

export function useSearch() {
  const [query, setQuery] = useState("");

  const matchesQuery = useCallback(
    (item: Question): boolean => {
      if (!query) return true;
      const haystack = (item.q + " " + item.wrong + " " + item.why + " " + item.takeaway)
        .replace(/<[^>]+>/g, " ")
        .toLowerCase();
      return haystack.includes(query.toLowerCase());
    },
    [query]
  );

  const filterQuestions = useCallback(
    (items: Question[]): Question[] => {
      if (!query) return items;
      return items.filter(matchesQuery);
    },
    [query, matchesQuery]
  );

  return { query, setQuery, matchesQuery, filterQuestions };
}
