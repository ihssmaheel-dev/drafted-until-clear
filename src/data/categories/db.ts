import type { Question } from "../types";

export const dbQuestions: Question[] = [
  {
    id: "db-sql-nosql",
    level: "Intermediate",
    q: "What actually separates SQL databases from NoSQL ones?",
    wrong: "SQL is for <bad>small apps</bad> and NoSQL is for big, modern apps.",
    why: "The real distinction is about data shape and consistency guarantees, not scale or how 'modern' a project is.",
    steps: [
      { icon: "box", title: "Schema shape", text: "SQL databases enforce a <kw>fixed schema</kw> with relations between tables; most NoSQL stores allow flexible, often nested, document shapes." },
      { icon: "key", title: "Consistency model", text: "Relational databases typically guarantee strong <flow>ACID consistency</flow>; many NoSQL stores trade some of that for availability and horizontal scale." },
      { icon: "net", title: "Query patterns", text: "SQL excels at complex joins across normalized data; document and key-value stores excel when you mostly fetch a whole record by key." },
      { icon: "check", title: "The actual decision", text: "Pick based on how <good>relational the data is</good> and what consistency guarantees the domain needs — not on perceived modernity." },
    ],
    takeaway: "This is a <good>data-modeling decision</good>, not a maturity ranking — plenty of large-scale systems run on relational databases.",
  },
  {
    id: "db-indexing",
    level: "Intermediate",
    q: "What is a database index actually doing, and what does it cost?",
    wrong: "Adding an index just makes queries faster with <bad>no downside</bad>.",
    why: "Indexes speed up reads by adding real overhead to writes and storage — they're a trade-off, not a free upgrade.",
    steps: [
      { icon: "db", title: "What it builds", text: "An index maintains a separate, sorted data structure (commonly a <kw>B-tree</kw>) mapping column values to row locations." },
      { icon: "clock", title: "Why reads speed up", text: "Instead of scanning every row, the database can binary-search the index and <flow>jump straight</flow> to matching rows." },
      { icon: "gear", title: "What it costs on writes", text: "Every insert, update, or delete has to also update every relevant index, which adds <sys>overhead</sys> proportional to how many indexes exist." },
      { icon: "check", title: "Where to apply them", text: "Index columns that are frequently filtered or joined on, and be deliberate about it on write-heavy tables." },
    ],
    takeaway: "An index is a <good>read/write trade-off</good>, not a pure win — over-indexing a write-heavy table can quietly slow everything down.",
  },
  {
    id: "db-race-conditions",
    level: "Intermediate",
    q: "What's a race condition at the database level, and how do transactions prevent it?",
    wrong: "Race conditions only happen in <bad>multi-threaded application code</bad>, not in the database itself.",
    why: "Any time two operations read and then write the same row without coordination, the database can produce the exact same class of bug.",
    steps: [
      { icon: "users", title: "The classic case", text: "Two requests both read a balance of 100, both add 10 locally, and both write back 110 — one update is <bad>silently lost</bad>." },
      { icon: "key", title: "Isolation levels", text: "Transactions with appropriate <kw>isolation levels</kw> prevent one transaction from seeing another's uncommitted changes mid-flight." },
      { icon: "gear", title: "Locking strategies", text: "Row-level locks, or <flow>optimistic concurrency</flow> with a version column, stop two writers from clobbering each other's update." },
      { icon: "check", title: "The fix in this example", text: "An atomic <code>UPDATE ... SET balance = balance + 10</code> avoids the read-then-write gap entirely." },
    ],
    takeaway: "Race conditions come from the <bad>gap between reading and writing</bad> — transactions and locking exist specifically to close that gap.",
  },
  {
    id: "db-normalization",
    level: "Intermediate",
    q: "Normalization vs denormalization — how do you actually decide?",
    wrong: "You should <bad>always normalize</bad> your schema as much as possible; it's just the correct way to do it.",
    why: "Full normalization optimizes for data integrity and storage efficiency, but it can mean expensive joins on every read — sometimes the wrong trade for the workload.",
    steps: [
      { icon: "db", title: "What normalization buys", text: "Splitting data to eliminate duplication keeps writes consistent — update one row instead of hunting down every copy." },
      { icon: "net", title: "What it costs on reads", text: "Reconstructing a full picture of the data often means <flow>joining several normalized tables</flow> together." },
      { icon: "box", title: "What denormalization buys", text: "Duplicating some data avoids those joins, which matters a lot for <sys>read-heavy, latency-sensitive</sys> paths." },
      { icon: "check", title: "The actual rule", text: "Normalize by default for correctness, then denormalize deliberately — and only where a specific read pattern demands it." },
    ],
    takeaway: "Neither is universally correct — <good>normalize for integrity, denormalize for performance</good>, and let the read pattern decide.",
  },
];
