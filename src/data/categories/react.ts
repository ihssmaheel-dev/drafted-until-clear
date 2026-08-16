import type { Question } from "../types";

export const reactQuestions: Question[] = [
  {
    id: "react-hooks-rules",
    level: "Intermediate",
    q: "Why can't you call hooks inside loops, conditions, or nested functions?",
    wrong: "It's just an <bad>arbitrary React rule</bad> you have to memorize.",
    why: "Hooks rely on call-order identity. Breaking that order means React can't tell which state belongs to which hook call.",
    steps: [
      { icon: "key", title: "Call-order identity", text: "React tracks hooks by the <kw>order they're called</kw> on each render — the first <code>useState</code> is slot 0, the second is slot 1, and so on." },
      { icon: "flag", title: "Why conditions break it", text: "If a hook is skipped on one render (inside an <code>if</code>), every subsequent hook shifts position — React reads the <bad>wrong state</bad> for the wrong hook." },
      { icon: "gear", title: "The array behind the scenes", text: "Internally React maintains a <flow>linked list of hook states</flow> per component. The list length and order must stay identical across renders." },
      { icon: "check", title: "The fix", text: "Extract conditional logic into a child component, or use early returns <em>before</em> the hook call." },
    ],
    takeaway: "Hooks are <good>identified by position</good>, not by name. Keeping the call order identical across renders is the entire contract.",
  },
  {
    id: "react-useeffect-misuse",
    level: "Intermediate",
    q: "When should you NOT use useEffect?",
    wrong: "Use useEffect for <bad>anything that needs to run after render</bad>.",
    why: "Most useEffect calls are either derivable state (should be computed during render) or event handlers (should be in the event itself).",
    steps: [
      { icon: "flag", title: "Derived state", text: "If you're computing <code>b</code> from <code>a</code> in a useEffect, you're creating an unnecessary render cycle. Compute it <kw>during render</kw> instead." },
      { icon: "gear", title: "Event handlers belong in events", text: "Fetching on button click? That's an <flow>event handler</flow>, not an effect. Put it in <code>onClick</code>." },
      { icon: "box", title: "Resetting state on prop change", text: "When a prop changes and you need to reset state, use the <kw>key prop</kw> to remount the component instead of a useEffect that sets state." },
      { icon: "check", title: "When useEffect is correct", text: "Synchronizing with external systems (DOM, browser APIs, third-party libraries) and network requests that must happen on mount." },
    ],
    takeaway: "Most useEffect calls are bugs. Ask: <good>can I compute this during render?</good> If yes, don't use an effect.",
  },
  {
    id: "react-keys",
    level: "Intermediate",
    q: "Why does using array index as key cause bugs?",
    wrong: "It's just a <bad>performance issue</bad> — React warns you but it still works.",
    why: "Using index as key breaks React's reconciliation — it reuses DOM nodes incorrectly when the list order changes, causing stale state and broken animations.",
    steps: [
      { icon: "key", title: "What keys tell React", text: "Keys tell React <kw>which item in the new list corresponds to which item in the old list</kw> — they're identity, not index." },
      { icon: "flag", title: "The reorder problem", text: "If you insert at the beginning, index keys shift — React thinks every item changed and <bad>remounts all of them</bad> instead of moving the existing DOM." },
      { icon: "gear", title: "Stale state", text: "A component at index 0 keeps its internal state even if the data at index 0 is now a different item — leading to <flow>ghost state</flow> from the previous item." },
      { icon: "check", title: "When index keys are fine", text: "Static lists that never reorder, filter, or have items inserted — like a static form field list." },
    ],
    takeaway: "Keys are <good>stable identity</good>, not position. Use unique IDs — index keys cause silent state corruption on reorders.",
  },
  {
    id: "react-server-components",
    level: "Intermediate",
    q: "What do Server Components actually give you that Client Components don't?",
    wrong: "They're just <bad>faster Client Components</bad> because they run on the server.",
    why: "Server Components run once on the server, ship zero JS to the browser, and can access server resources directly — they're a fundamentally different execution model.",
    steps: [
      { icon: "cpu", title: "Zero client JS", text: "Server Components <kw>never ship their code</kw> to the browser. A 50KB component with heavy dependencies adds 0 bytes to the client bundle." },
      { icon: "gear", title: "Direct server access", text: "They can read files, query databases, and call internal APIs <flow>without an API layer</flow> — no fetch, no loading states, no serialization." },
      { icon: "box", title: "The boundary", text: "The server renders them to HTML/RSC payload. Client Components pick up where interaction is needed — <code>'use client'</code> marks the boundary." },
      { icon: "check", title: "When to use which", text: "Default to Server. Add <code>'use client'</code> only for: state, effects, event handlers, browser APIs." },
    ],
    takeaway: "Server Components aren't a performance hack — they're a <good>new rendering paradigm</good> that eliminates API layers and shrinks client bundles.",
  },
];
