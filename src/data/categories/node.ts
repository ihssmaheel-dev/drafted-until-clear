import type { Question } from "../types";

export const nodeQuestions: Question[] = [
  {
    id: "node-event-loop",
    level: "Intermediate",
    q: "If Node.js is single-threaded, how does it handle thousands of requests at once?",
    wrong: "Node spins up a <bad>new thread</bad> for every incoming request.",
    why: "That's the opposite of Node's model — it describes something closer to a traditional thread-per-request server like older Apache setups.",
    steps: [
      { icon: "loop", title: "The one thread", text: "Your JavaScript runs on a single thread with an <kw>event loop</kw> managing what runs next." },
      { icon: "gear", title: "Handing off I/O", text: "For things like network calls or file reads, Node hands the work to the <sys>OS kernel</sys> or, for tasks like DNS lookups and filesystem access, to <code>libuv</code>'s <sys>worker pool</sys>." },
      { icon: "clock", title: "Waiting doesn't block", text: "While that work happens elsewhere, the main thread is free to keep processing <flow>other requests</flow> instead of sitting idle." },
      { icon: "users", title: "The payoff", text: "Thousands of connections can be in-flight at once because none of them are holding the single thread hostage while waiting on <flow>I/O</flow>." },
    ],
    takeaway: "Concurrency here means <good>overlapping wait time</good>, not parallel execution. CPU-heavy work still blocks everything — that's what <sys>worker threads</sys> exist for.",
  },
  {
    id: "node-nexttick-setimmediate",
    level: "Intermediate",
    q: "What's the actual difference between process.nextTick() and setImmediate()?",
    wrong: "They're <bad>basically the same thing</bad>, just different names.",
    why: "They queue work at different points in the loop — mixing them up is a common source of ordering bugs.",
    steps: [
      { icon: "flag", title: "Two different queues", text: "<code>process.nextTick()</code> queues a callback for right after the current operation, before the <kw>event loop</kw> continues." },
      { icon: "clock", title: "nextTick runs first", text: "The nextTick queue is drained completely before the loop moves to timers, I/O, or immediates — even before <flow>promise microtasks</flow> in older Node versions." },
      { icon: "loop", title: "setImmediate waits its turn", text: "<code>setImmediate()</code> schedules a callback for the check phase, after the current poll phase completes." },
      { icon: "gear", title: "Why it matters", text: "Overusing <code>nextTick</code> can <bad>starve the event loop</bad>, since it keeps deferring the next phase until its queue is empty." },
    ],
    takeaway: "nextTick jumps the entire queue; setImmediate waits for its phase. Reach for setImmediate when you specifically want to <good>yield to I/O first</good>.",
  },
  {
    id: "node-libuv-threadpool",
    level: "Intermediate",
    q: "What actually uses the libuv thread pool, and what doesn't?",
    wrong: "<bad>All</bad> asynchronous operations in Node run through the thread pool.",
    why: "Most network I/O — TCP, HTTP — is handled by the OS's async primitives directly, not the thread pool at all.",
    steps: [
      { icon: "box", title: "Two async paths", text: "Node's async I/O splits into <sys>OS-level async</sys> (sockets, most networking) and <code>libuv</code>'s own <sys>worker pool</sys> for things the OS can't do async." },
      { icon: "gear", title: "What lands in the pool", text: "File system calls, DNS lookups via <code>dns.lookup()</code>, and some crypto functions like <code>pbkdf2</code> run on the <sys>pool</sys>." },
      { icon: "users", title: "The pool is small", text: "By default it has only <flow>4 threads</flow>, so piling on filesystem-heavy work can create a real bottleneck." },
      { icon: "check", title: "Tuning it", text: "The pool size is adjustable via the <code>UV_THREADPOOL_SIZE</code> environment variable when that becomes the constraint." },
    ],
    takeaway: "Network I/O mostly bypasses the thread pool entirely — it's the <sys>filesystem, DNS, and certain crypto calls</sys> that queue up on those 4 threads.",
  },
  {
    id: "node-cpu-heavy",
    level: "Intermediate",
    q: "Why is running CPU-heavy work directly in a request handler a problem in Node?",
    wrong: "It's fine <bad>as long as the function is marked async</bad>.",
    why: "async only helps with I/O-bound waiting — it does nothing to stop synchronous CPU work from occupying the single thread.",
    steps: [
      { icon: "cpu", title: "One thread, one thing at a time", text: "A tight synchronous loop — image resizing, heavy JSON parsing, hashing — runs to completion before anything else gets a turn." },
      { icon: "users", title: "Everyone else waits", text: "Every other request queued behind it stalls, even ones that have <flow>nothing to do</flow> with the CPU-bound task." },
      { icon: "gear", title: "Where the work belongs", text: "Offload it to <code>worker_threads</code>, a child process, or an external queue/service so the main thread stays <good>responsive</good>." },
      { icon: "check", title: "Rule of thumb", text: "If a task takes more than a few milliseconds of pure CPU time, it doesn't belong on the <kw>request-handling thread</kw>." },
    ],
    takeaway: "async/await manages waiting, not computing. Heavy computation needs to <good>leave the main thread entirely</good>, not just get an await in front of it.",
  },
];
