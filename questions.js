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
  },

  // -----------------------------------------------------------
  //  Same flavor as Q1: entity modeling + aggregate counters
  //  that must stay correct across add / update / transition / delete.
  // -----------------------------------------------------------
  {
    id: 11,
    title: "Multi-Warehouse Inventory Count by Location",
    difficulty: "Medium",
    tags: ["Data Modeling", "Counters", "State Management", "Inventory"],
    prompt: `A retail company stores products across multiple warehouses, and each warehouse belongs to a region. The company needs to know, at any moment, the total stock of each product per region. A single product can be stocked in several warehouses, and stock can be moved between warehouses (which may belong to different regions).

**Requirements**

1. **Data Model** — Design entities for products, warehouses, and regions. Stock must be trackable per (product, warehouse), and each warehouse carries region information.
2. **Aggregate Tracking** — Maintain a live count of total stock per (product, region) for these events:
   - Stock is added to or removed from a warehouse.
   - Stock is transferred between two warehouses (same region or across regions).
   - A warehouse is reassigned to a different region.
3. **Consistency** — Explain how you keep the per-region aggregates correct when a transfer crosses region boundaries (decrement source region, increment destination region atomically).
4. **Edge Cases & Scale** — Negative stock, concurrent transfers of the same SKU, and warehouses with zero stock. How do you avoid double-counting?`,
    reference: `Company: Acme Retail
regions: { WEST: {}, EAST: {} }

--- Warehouse W1 (region: WEST) ---
product: "Widget-A", qty: 40

--- Warehouse W2 (region: EAST) ---
product: "Widget-A", qty: 10

Total "Widget-A" in WEST = 40, in EAST = 10.

Move 15 units of Widget-A from W1 -> W2:
  WEST = 25, EAST = 25.

If W2 is later reassigned from EAST to WEST:
  WEST = 50, EAST = 0.`
  },
  {
    id: 12,
    title: "Ride-Sharing Drivers Available per Zone",
    difficulty: "Medium",
    tags: ["Data Modeling", "Counters", "State Management", "Geo"],
    prompt: `A ride-sharing platform divides a city into zones. It must track, in real time, how many drivers are currently *available* in each zone. A driver has a current zone (which changes as they move) and a status (available, on_trip, offline). Only available drivers count toward a zone's availability.

**Requirements**

1. **Data Model** — Model drivers, zones, and the per-zone available-driver count. A driver belongs to exactly one current zone and has one status.
2. **State Tracking** — Update the per-zone available count when:
   - A driver comes online / goes offline.
   - A driver moves from one zone to another while available.
   - A driver's status flips between available and on_trip (same zone).
3. **Address Updates** — Carefully handle the case where a driver *both* changes zone and changes status in one update (e.g., finishes a trip in a new zone), so no zone is over- or under-counted.
4. **Edge Cases & Scale** — Rapid zone hops, drivers on a zone boundary, and reconciling drift between the cached counters and ground truth.`,
    reference: `zones: { Z1: 0, Z2: 0 }

--- Driver D1 ---
zone: Z1, status: available     -> Z1 = 1

--- Driver D2 ---
zone: Z1, status: on_trip       -> Z1 = 1 (on_trip not counted)

D1 moves to Z2 (still available)  -> Z1 = 0, Z2 = 1
D2 finishes trip in Z2, becomes available
   (zone Z1 -> Z2 AND on_trip -> available) -> Z1 = 0, Z2 = 2`
  },
  {
    id: 13,
    title: "Hotel Room Availability by City & Type",
    difficulty: "Medium",
    tags: ["Data Modeling", "Counters", "Booking", "Concurrency"],
    prompt: `A hotel-booking platform lists rooms across hotels in many cities. Each room has a type (single, double, suite). The platform must show how many rooms of each type are *available* in a given city for a date range, where availability changes as bookings are made, cancelled, or modified.

**Requirements**

1. **Data Model** — Model cities, hotels, rooms (with type), and bookings spanning a date range. Each hotel belongs to a city; each room has a type.
2. **Availability Tracking** — Maintain available counts per (city, room_type, date) as:
   - A booking is created for a date range.
   - A booking is cancelled.
   - A booking is modified (changed dates, or changed room type).
3. **Address Updates** — Handle a modification that shifts both the date range and the room type, ensuring counts are released for the old slot and reserved for the new one atomically.
4. **Edge Cases & Scale** — Double-booking under concurrency, partial-overlap date changes, and overbooking policy. How would you prevent two users grabbing the last room?`
  },
  {
    id: 14,
    title: "Project Task Counts by Status (Kanban)",
    difficulty: "Easy",
    tags: ["Data Modeling", "Counters", "State Machine"],
    prompt: `A project-management tool organizes tasks on a board with status columns (Todo, In Progress, Review, Done). Each task belongs to a project and has exactly one status. The tool must show, per project, how many tasks are in each status — and these badge counts must stay correct as tasks move.

**Requirements**

1. **Data Model** — Model projects, tasks, and the per-(project, status) count. A task has one project and one status at a time.
2. **State Tracking** — Update the per-status counts when:
   - A task is created (enters Todo).
   - A task transitions between two statuses.
   - A task is deleted or archived.
   - A task is moved to another project.
3. **Address Updates** — Treat status as a small state machine; a task move that changes both project and status must decrement the old (project, status) and increment the new one.
4. **Edge Cases & Scale** — Bulk moves of many tasks at once, and recomputing counts if they drift out of sync with the source rows.`,
    reference: `Project P1 counts: { Todo: 0, "In Progress": 0, Review: 0, Done: 0 }

Create task T1 in P1            -> Todo = 1
Move T1: Todo -> In Progress     -> Todo = 0, In Progress = 1
Move T1: In Progress -> Done     -> In Progress = 0, Done = 1
Move T1 from P1 to P2 (Done)    -> P1.Done = 0, P2.Done = 1`
  },
  {
    id: 15,
    title: "Library Books Available per Branch",
    difficulty: "Easy",
    tags: ["Data Modeling", "Counters", "State Management"],
    prompt: `A library system has multiple branches. Each physical copy of a book belongs to a home branch and has a status (on_shelf, checked_out, in_transit). The system must report how many *available* (on_shelf) copies of a given title exist at each branch, updating as copies are borrowed, returned, or transferred between branches.

**Requirements**

1. **Data Model** — Model titles, physical copies, and branches. Each copy has a home branch, a current branch, and a status.
2. **State Tracking** — Maintain available copies per (title, branch) when:
   - A copy is checked out and later returned.
   - A copy is transferred from one branch to another (in_transit, then arrives).
   - A copy is added to or removed (lost/damaged) from the collection.
3. **Address Updates** — Handle the in_transit state so a copy is counted at neither the source nor the destination until it arrives, avoiding double-counting.
4. **Edge Cases & Scale** — A copy lost while in transit, simultaneous checkouts of the last available copy, and reconciling counts after a stock-take.`
  }
];

// Expose for the renderer (and future modules).
if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}
