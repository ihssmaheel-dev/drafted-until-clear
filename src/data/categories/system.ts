import type { Question } from "../types";

export const systemQuestions: Question[] = [
  {
    id: "sys-url-shortener",
    level: "Intermediate",
    q: "How would you approach designing a URL shortener?",
    wrong: "Just store the long URL and short code in <bad>one table</bad> and look it up.",
    why: "That's a fine starting point, but it skips the parts an interviewer is actually probing: how codes are generated, and how reads scale once traffic grows.",
    steps: [
      { icon: "key", title: "Code generation", text: "Base62-encode an auto-incrementing ID, or hash the URL and truncate — each has different <kw>collision</kw> and predictability trade-offs." },
      { icon: "db", title: "Storage shape", text: "A simple key-value store (short code → long URL) is enough; a relational DB works too if you need analytics alongside it." },
      { icon: "gear", title: "Reads dominate", text: "Redirects vastly outnumber creations, so a <flow>cache</flow> in front of the datastore matters more than write throughput." },
      { icon: "scale", title: "Scaling the redirect path", text: "Push the hot path — the actual redirect — behind a <sys>CDN or edge layer</sys> so it never has to hit your origin servers at all." },
    ],
    takeaway: "The interesting part isn't the schema — it's recognising this is a <good>read-heavy system</good> and designing the caching layer accordingly.",
  },
  {
    id: "sys-horizontal-vertical-scaling",
    level: "Intermediate",
    q: "What's the actual difference between horizontal and vertical scaling?",
    wrong: "They both just mean <bad>'making the system handle more load.'</bad>",
    why: "They solve the same problem through opposite mechanisms, with very different limits and failure modes.",
    steps: [
      { icon: "cpu", title: "Vertical scaling", text: "Add more CPU, RAM, or disk to a <sys>single machine</sys> — simple, but capped by the biggest hardware you can buy." },
      { icon: "users", title: "Horizontal scaling", text: "Add more machines and distribute load across them — theoretically unbounded, but needs the system to <flow>coordinate state</flow>." },
      { icon: "net", title: "The real complexity", text: "Horizontal scaling forces decisions about <kw>load balancing</kw>, session/state sharing, and data consistency across nodes." },
      { icon: "check", title: "In practice", text: "Most systems scale vertically first because it's cheap, then horizontally once a single machine becomes the ceiling." },
    ],
    takeaway: "Vertical scaling buys time; horizontal scaling is what actually removes the ceiling — at the cost of <good>distributed-systems complexity</good>.",
  },
  {
    id: "sys-cap-theorem",
    level: "Intermediate",
    q: "Can you explain the CAP theorem without the jargon?",
    wrong: "CAP means you can <bad>never have consistency and availability</bad> at the same time.",
    why: "CAP only forces a trade-off during a network partition — outside of a partition, a system can offer both.",
    steps: [
      { icon: "net", title: "The three properties", text: "<kw>Consistency</kw> (every read gets the latest write), <kw>Availability</kw> (every request gets a response), <kw>Partition tolerance</kw> (the system keeps working despite dropped network links)." },
      { icon: "flag", title: "The forced choice", text: "Partitions are a fact of distributed networks, so partition tolerance isn't optional — the real choice is between consistency and availability when one occurs." },
      { icon: "db", title: "CP systems", text: "Prioritise <flow>consistency</flow> — they may refuse requests during a partition rather than return stale data." },
      { icon: "gear", title: "AP systems", text: "Prioritise <flow>availability</flow> — they keep responding, possibly with data that hasn't fully synced yet." },
    ],
    takeaway: "CAP is a statement about behaviour <good>during a partition</good>, not a permanent trade-off you're locked into all the time.",
  },
  {
    id: "sys-message-queue",
    level: "Intermediate",
    q: "When would you reach for a message queue instead of a direct API call?",
    wrong: "Queues are only for when you have <bad>too much traffic</bad> for a normal API.",
    why: "Volume is one reason, but the bigger driver is usually decoupling — letting services fail or scale independently without taking each other down.",
    steps: [
      { icon: "net", title: "Direct calls couple services", text: "If service A calls B synchronously and B is slow or down, A is <bad>stuck waiting</bad> — or fails outright." },
      { icon: "box", title: "A queue breaks that link", text: "A publishes a message and moves on; B consumes it whenever it's ready, <kw>independently</kw>." },
      { icon: "gear", title: "Where it shines", text: "Spiky workloads, slow downstream processing, and workflows that need <flow>retries or ordering guarantees</flow> all fit this pattern well." },
      { icon: "clock", title: "The trade-off", text: "You trade immediate consistency and simplicity for <sys>resilience</sys> — the caller no longer knows exactly when the work finishes." },
    ],
    takeaway: "Reach for a queue when you need services to <good>fail independently</good>, not just when traffic is high.",
  },
];
