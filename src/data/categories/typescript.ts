import type { Question } from "../types";

export const tsQuestions: Question[] = [
  {
    id: "ts-union-intersection",
    level: "Intermediate",
    q: "What's the difference between union types and intersection types?",
    wrong: "They're <bad>basically the same</bad> — both combine types.",
    why: "Unions say 'it's one of these' (narrowing), intersections say 'it's all of these simultaneously' (merging) — they have opposite semantics.",
    steps: [
      { icon: "flag", title: "Union: OR", text: "<code>A | B</code> means the value is <kw>either A or B</kw>. You must narrow before accessing properties unique to one side." },
      { icon: "box", title: "Intersection: AND", text: "<code>A & B</code> means the value is <kw>both A and B</kw>. It must satisfy all constraints simultaneously — the result has all properties from both." },
      { icon: "gear", title: "When each breaks", text: "Unions break when you forget to narrow — accessing a property not on the common shape throws. Intersections break when the types contradict — <code>string & number</code> becomes <code>never</code>." },
      { icon: "check", title: "Practical pattern", text: "Use unions for variants (success/error), intersections for mixins (adding fields to an existing type)." },
    ],
    takeaway: "Unions narrow possibilities; intersections accumulate properties. They're <good>complementary tools</good>, not interchangeable ones.",
  },
  {
    id: "ts-utility-types",
    level: "Intermediate",
    q: "When would you use Partial, Pick, and Omit in practice?",
    wrong: "They're <bad>redundant</bad> — you can just type the shape you need manually.",
    why: "They keep types DRY, enforce consistency with a single source, and prevent manual types from drifting out of sync with the real data.",
    steps: [
      { icon: "box", title: "Partial<T>", text: "Makes all properties optional. Use for <kw>update payloads</kw> where you only send the fields you want to change." },
      { icon: "flag", title: "Pick<T, K>", text: "Extracts only the listed keys. Use for <kw>read models</kw> — a card preview needs title and slug, not the full entity." },
      { icon: "key", title: "Omit<T, K>", text: "Removes specific keys. Use when a derived type should have <em>everything except</em> a field — like a <kw>create input</kw> that doesn't include an auto-generated ID." },
      { icon: "check", title: "The real value", text: "If you rename a field in the base type, Partial/Pick/Omit propagate automatically — manual types silently break." },
    ],
    takeaway: "These utilities are <good>derivation operators</good> — they keep derived types coupled to the source so refactors propagate automatically.",
  },
  {
    id: "ts-generics",
    level: "Intermediate",
    q: "Why are generics more than just 'any with extra steps'?",
    wrong: "Generics are just <bad>any with a type parameter</bad>.",
    why: "Generics preserve type relationships across inputs and outputs — they let you write functions where the return type depends on the input type.",
    steps: [
      { icon: "key", title: "Type relationships", text: "A function <code>first&lt;T&gt;(arr: T[]): T</code> returns the <kw>same type</kw> as the array element. <code>any</code> loses that link." },
      { icon: "flag", title: "Constraints", text: "<code>T extends HasId</code> restricts <code>T</code> to types with an <code>id</code> field — you get autocomplete and safety simultaneously." },
      { icon: "gear", title: "Inference", text: "TypeScript infers <code>T</code> from usage: <code>getId({id: 1, name: 'x'})</code> → <code>T</code> is inferred as <code>{id: number, name: string}</code>." },
      { icon: "check", title: "Real-world use", text: "API wrappers, data fetching hooks, form validators, and any function where the output type is derived from the input." },
    ],
    takeaway: "Generics let you write <good>type-safe reusable code</good> where types flow through — they're the opposite of <code>any</code>.",
  },
  {
    id: "ts-declaration-files",
    level: "Intermediate",
    q: "What are .d.ts files, and when do you actually need to write one?",
    wrong: "They're just <bad>extra boilerplate</bad> that TypeScript forces on you.",
    why: "They describe types for code you didn't write — npm packages without types, global APIs, and ambient declarations.",
    steps: [
      { icon: "box", title: "What they are", text: "Declaration files describe the <kw>shape of JavaScript code</kw> without containing any implementation — they're type-only contracts." },
      { icon: "flag", title: "When you need them", text: "When a package ships no <code>.d.ts</code> and no <code>@types/*</code> package. Also for global variables, ambient modules, and window augmentations." },
      { icon: "gear", title: "How to write one", text: "Declare the types as if they exist: <code>declare module 'untyped-lib' { export function foo(): void; }</code>." },
      { icon: "check", title: "The alternative", text: "Prefer <code>@types/*</code> packages from DefinitelyTyped first. Write your own only when no community types exist." },
    ],
    takeaway: ".d.ts files bridge the gap between <good>untyped JS and typed TS</good> — write them only when you must, prefer community types.",
  },
];
