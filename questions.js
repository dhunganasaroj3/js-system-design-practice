// =============================================================
//  System Design Practice — Question Bank
//  To add a new question, append an object to the array below.
//  Fields:
//    id          unique number
//    title       short headline
//    difficulty  "Easy" | "Medium" | "Hard"
//    tags        array of topic strings
//    prompt      full markdown-ish problem statement
//    reference   optional concrete example (rendered in a callout)
// =============================================================

const QUESTIONS = [
  {
    id: 1,
    title: "Employee State Headcount Tracker",
    difficulty: "Medium",
    tags: ["Data Modeling", "Counters", "State Management"],
    prompt: `Design a system for a company that manages employee data, including home and office addresses. The company operates in multiple states and needs to track the number of employees working in each state at any given time. Employees can work from home or an office, so their work and home addresses can be the same or different. Employees can change their work location, affecting the state employee count.

**Requirements**

1. **Data Model Design** — Propose a data model supporting employee details including home and office addresses. Each address must include state information.
2. **State Tracking** — Implement a mechanism to track and update the count of employees per state for these scenarios:
   - An employee is added to the system.
   - An employee updates their work address (different state, office→home, or home→office).
   - An employee leaves the company.
3. **Address Updates** — Explain how the system handles work-address updates, ensuring correct per-state count adjustments, including when work and home addresses switch between same and different.
4. **Edge Cases & Scalability** — Discuss anticipated edge cases and how the design handles them.`,
    reference: `Imagine a company in the US that needs to track no_of_employees in each state. Employees work from home or office.

Company Name: Acme Corp
no_of_employee: []

--- Employee One ---
name: Sizan Rana
home_state: OH
work_place: Home

--- Employee Two ---
name: Biplov
home_state: CA
office_state: NJ
work_place: Office

If an employee lives in Ohio and works from home, the count for OH is 1.
If another lives in California but works from the office in NJ, the count for NJ (office address) is 1.

Employers can update an employee's work_from, home_address, and office_address. Design to address all these cases.`
  },
  {
    id: 2,
    title: "URL Shortener (TinyURL)",
    difficulty: "Medium",
    tags: ["Hashing", "Databases", "Caching", "Read-Heavy"],
    prompt: `Design a URL shortening service like TinyURL or bit.ly.

**Requirements**

1. Generate a short, unique alias for any long URL.
2. Redirect a short URL to its original long URL.
3. Support custom aliases and optional expiration dates.
4. Discuss the key-generation strategy (counter + base62, hashing, KGS) and collision handling.
5. Address scale: ~100M new URLs/day, read-heavy (100:1 reads to writes). Cover caching, DB choice, and analytics.`
  },
  {
    id: 3,
    title: "Rate Limiter",
    difficulty: "Medium",
    tags: ["Algorithms", "Distributed Systems", "Concurrency"],
    prompt: `Design a rate limiter that restricts the number of requests a client can make in a time window.

**Requirements**

1. Compare algorithms: fixed window, sliding window log, sliding window counter, token bucket, leaky bucket.
2. Where does it live — client side, middleware, API gateway, or a separate service?
3. Make it work in a distributed environment with multiple app servers (shared state via Redis).
4. Handle race conditions and decide what response to return when a limit is exceeded (429, headers).`
  },
  {
    id: 4,
    title: "News Feed System",
    difficulty: "Hard",
    tags: ["Fan-out", "Caching", "Ranking", "Scalability"],
    prompt: `Design a social media news feed (like Facebook/Twitter/Instagram home feed).

**Requirements**

1. Generate and display a personalized, ranked feed of posts from followed accounts.
2. Compare fan-out-on-write vs fan-out-on-read and the hybrid approach for celebrity/hot users.
3. Design the data model for posts, follows, and the feed cache.
4. Address ranking, pagination, real-time updates, and the "thundering herd" of a viral post.`
  },
  {
    id: 5,
    title: "Distributed Key-Value Store",
    difficulty: "Hard",
    tags: ["Consistency", "Partitioning", "Replication", "CAP"],
    prompt: `Design a distributed key-value store (like DynamoDB or Cassandra).

**Requirements**

1. Partition data across nodes using consistent hashing; explain virtual nodes.
2. Choose a replication strategy and explain quorum (N, R, W) trade-offs.
3. Position the system on the CAP theorem and justify the choice.
4. Handle conflict resolution (vector clocks, last-write-wins), failure detection (gossip), and hinted handoff.`
  },
  {
    id: 6,
    title: "Chat / Messaging System",
    difficulty: "Hard",
    tags: ["WebSockets", "Real-Time", "Storage", "Presence"],
    prompt: `Design a real-time chat system like WhatsApp or Messenger.

**Requirements**

1. Support 1:1 and group messaging with delivery + read receipts.
2. Choose the transport (WebSocket vs long polling) and design the connection layer.
3. Design message storage and the schema for efficient conversation history retrieval.
4. Handle online/offline presence, push notifications for offline users, and message ordering.`
  },
  {
    id: 7,
    title: "Web Crawler",
    difficulty: "Medium",
    tags: ["BFS", "Queues", "Deduplication", "Politeness"],
    prompt: `Design a scalable web crawler that downloads and indexes billions of web pages.

**Requirements**

1. Design the crawl frontier (URL queue) and the BFS-style traversal.
2. Deduplicate URLs and detect duplicate content at scale.
3. Respect robots.txt and implement politeness (per-domain rate limiting).
4. Make it distributed and fault-tolerant; handle crawler traps and infinite spaces.`
  },
  {
    id: 8,
    title: "Notification Service",
    difficulty: "Medium",
    tags: ["Queues", "Fan-out", "Reliability", "Templating"],
    prompt: `Design a notification system that sends push, SMS, and email notifications.

**Requirements**

1. Support multiple channels with provider abstraction (APNs/FCM, Twilio, SES).
2. Handle templating, user preferences, and opt-out/Do-Not-Disturb.
3. Guarantee at-least-once delivery with retries, dead-letter queues, and idempotency.
4. Support high throughput and rate limiting per provider; handle deduplication.`
  },
  {
    id: 9,
    title: "Typeahead / Autocomplete Search",
    difficulty: "Medium",
    tags: ["Tries", "Caching", "Ranking", "Latency"],
    prompt: `Design a search autocomplete (typeahead) system that suggests the top results as a user types.

**Requirements**

1. Design the data structure (trie) and how top-K suggestions per prefix are stored/precomputed.
2. Rank suggestions by frequency/recency and update counts from a stream of queries.
3. Meet very low latency (<100ms) — cover caching and CDN/edge strategies.
4. Handle scale, trie sharding, and periodic rebuilds without downtime.`
  },
  {
    id: 10,
    title: "Distributed Unique ID Generator",
    difficulty: "Easy",
    tags: ["Snowflake", "Clocks", "Coordination"],
    prompt: `Design a service that generates unique IDs in a distributed system.

**Requirements**

1. IDs must be globally unique and, ideally, roughly time-sortable.
2. Compare approaches: UUID, DB auto-increment, ticket server, and Snowflake.
3. Explain a Snowflake-style bit layout (timestamp + machine ID + sequence).
4. Handle clock skew/clock-going-backwards and the throughput limit per node.`
  }
];

// Expose for the renderer (and future modules).
if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}
