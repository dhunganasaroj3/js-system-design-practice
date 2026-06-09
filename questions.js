// =============================================================
//  System Design Practice — Question Bank
//  To add a new question, append an object to the array below.
//  Fields:
//    id          unique number
//    title       short headline
//    difficulty  "Easy" | "Medium" | "Hard"
//    category    "System Design" | "React Patterns"
//                | "Frontend System Design" | "Backend System Design"
//                (omit to default to "System Design")
//    tags        array of topic strings
//    prompt      full markdown-ish problem statement
//    reference   optional concrete example (rendered in a callout)
// =============================================================

const QUESTIONS = [
  {
    id: 1,
    title: "Employee State Headcount Tracker",
    difficulty: "Medium",
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
    category: "System Design",
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
  },

  // ===========================================================
  //  React Design Patterns — the patterns interviewers probe in
  //  2026 (React 19 / React Compiler era). Each asks you to
  //  reason about composition, state ownership, and tradeoffs.
  // ===========================================================
  {
    id: 16,
    title: "Compound Components (Tabs / Accordion)",
    difficulty: "Medium",
    category: "React Patterns",
    tags: ["Compound Components", "Context", "Composition", "Design Systems"],
    prompt: `Design a reusable **Tabs** component using the compound components pattern, the way \`<select>\` and \`<option>\` work together in HTML.

**Requirements**

1. **API shape** — Expose \`<Tabs>\`, \`<Tabs.List>\`, \`<Tabs.Tab>\`, and \`<Tabs.Panel>\` so consumers compose the UI declaratively without prop drilling.
2. **Shared state** — The root owns the active tab; children read it via Context instead of explicit props. Explain why Context (not cloneElement) is the modern choice.
3. **Controlled & uncontrolled** — Support both an uncontrolled mode (internal state) and a controlled mode (\`value\` + \`onChange\`).
4. **Accessibility** — Wire up \`role="tablist"/"tab"/"tabpanel"\`, \`aria-selected\`, and arrow-key navigation with roving tabindex.
5. **Tradeoffs** — When does this pattern hurt readability, and when would you prefer a flat props API?`,
    reference: `<Tabs defaultValue="billing">
  <Tabs.List>
    <Tabs.Tab value="profile">Profile</Tabs.Tab>
    <Tabs.Tab value="billing">Billing</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="profile">…</Tabs.Panel>
  <Tabs.Panel value="billing">…</Tabs.Panel>
</Tabs>

// Root holds activeValue in state and provides it via context.
// Tabs.Tab calls ctx.setValue(value); Tabs.Panel renders only when
// ctx.value === its value. This is the pattern behind Radix/Headless UI.`
  },
  {
    id: 17,
    title: "Custom Hooks for Logic Reuse",
    difficulty: "Easy",
    category: "React Patterns",
    tags: ["Custom Hooks", "Reuse", "Separation of Concerns"],
    prompt: `Custom hooks have replaced HOCs and render props for ~90% of logic-reuse cases. Design a set of custom hooks that extract stateful logic out of components.

**Requirements**

1. Build \`useDebouncedValue(value, delay)\`, \`useLocalStorage(key, initial)\`, and \`useFetch(url)\` and explain the rules of hooks they must obey.
2. Show how hooks compose — e.g. a \`useSearch\` hook built on top of \`useDebouncedValue\` + \`useFetch\`.
3. Contrast custom hooks with HOCs and render props: no wrapper elements in the DOM, trivial to test in isolation, natural composition.
4. Discuss pitfalls: stale closures, missing dependency-array entries, and overusing effects where derived state would be cleaner.`,
    reference: `function useDebouncedValue(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

// Composition:
function useSearch(query) {
  const q = useDebouncedValue(query, 300);
  return useFetch(q ? \`/api/search?q=\${q}\` : null);
}`
  },
  {
    id: 18,
    title: "State Reducer Pattern",
    difficulty: "Hard",
    category: "React Patterns",
    tags: ["State Reducer", "Inversion of Control", "Design Systems"],
    prompt: `Design a component using the **state reducer pattern** (popularized by Kent C. Dodds / Downshift) that lets consumers override how internal state transitions happen.

**Requirements**

1. Build a \`useToggle\` (or a small autocomplete) whose internal \`useReducer\` can be intercepted by a consumer-supplied \`stateReducer(state, action)\` prop.
2. Explain inversion of control: the component owns the default transitions, but the consumer can veto or modify any of them (e.g. "don't allow toggling on more than 4 times").
3. Define a stable action-type contract so consumers can branch on \`action.type\`.
4. Compare this to plain controlled components — when is the extra indirection worth it for a design-system primitive?`,
    reference: `function useToggle({ reducer = (s, a) => a.changes } = {}) {
  const [state, dispatch] = useReducer((s, action) => {
    const changes = defaultReducer(s, action);   // built-in transition
    return reducer({ ...s, ...changes }, { ...action, changes });
  }, { on: false });
  // consumer can intercept:  reducer={(s, a) => a.type === 'toggle' && tooMany ? s : a.changes}
  return state;
}`
  },
  {
    id: 19,
    title: "Controlled vs Uncontrolled Components",
    difficulty: "Easy",
    category: "React Patterns",
    tags: ["Forms", "State Ownership", "Controlled"],
    prompt: `Explain and design a component that supports **both** controlled and uncontrolled usage, and articulate when each is appropriate.

**Requirements**

1. Build a \`<Rating>\` (or \`<TextInput>\`) that works uncontrolled (\`defaultValue\`) and controlled (\`value\` + \`onChange\`).
2. Detect the mode from props and warn if a consumer switches between modes across renders.
3. Discuss why controlled inputs re-render on every keystroke and how that affects large forms.
4. Cover the React 19 change: \`ref\` can now be passed as a regular prop (no \`forwardRef\` needed) — how does that simplify imperative-handle escapes?`
  },
  {
    id: 20,
    title: "Context Splitting & Re-render Optimization",
    difficulty: "Hard",
    category: "React Patterns",
    tags: ["Context", "Performance", "Re-renders"],
    prompt: `A single large Context value is causing every consumer to re-render on any change. Redesign it.

**Requirements**

1. Split one context into a **state context** and a **dispatch/setter context** so components that only dispatch don't re-render on state changes.
2. Memoize the provider \`value\` object and wrap pure consumers in \`React.memo\`.
3. Explain when to reach for \`use-context-selector\` to subscribe to a slice of a large value.
4. Cover how the **React Compiler** auto-memoizes in 2026 — what manual \`useMemo\`/\`useCallback\` work does it remove, and what does it *not* solve (Context fan-out)?`,
    reference: `// Two providers instead of one big value:
<StateCtx.Provider value={state}>
  <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
</StateCtx.Provider>

// A component that only dispatches reads DispatchCtx and never
// re-renders when state changes. With one combined value it would.`
  },
  {
    id: 21,
    title: "Error Boundaries + Suspense",
    difficulty: "Medium",
    category: "React Patterns",
    tags: ["Error Boundaries", "Suspense", "Resilience"],
    prompt: `Design a resilient UI that gracefully handles both loading and error states for independent features.

**Requirements**

1. Build an error boundary that catches render errors in its subtree and shows a fallback instead of a white screen.
2. Explain why error boundaries still require class components (or a wrapper like \`react-error-boundary\`) and why a single app-wide boundary is an anti-pattern.
3. Combine \`<ErrorBoundary>\` with \`<Suspense>\` so each feature has unified loading + error UI and a crash in one widget doesn't take down the nav.
4. Add a "reset" path so the user can retry the failed subtree without a full reload.`
  },
  {
    id: 22,
    title: "Render Props vs HOC (and why hooks won)",
    difficulty: "Medium",
    category: "React Patterns",
    tags: ["Render Props", "HOC", "Legacy", "Composition"],
    prompt: `Implement the same cross-cutting concern (e.g. mouse-position tracking) three ways — HOC, render prop, and custom hook — and argue which to ship in 2026.

**Requirements**

1. Write \`withMouse(Component)\` (HOC), \`<Mouse>{(pos) => …}</Mouse>\` (render prop), and \`useMouse()\` (hook).
2. Enumerate the problems hooks solve: wrapper hell, prop-name collisions, ref forwarding, and the "false hierarchy" in the tree.
3. Explain where HOCs/render props legitimately survive (e.g. \`connect\` in legacy Redux, libraries that must support class components).
4. Per React 19 docs, justify defaulting all new logic-reuse to custom hooks.`
  },
  {
    id: 23,
    title: "Provider Pattern (Theme / Auth / i18n)",
    difficulty: "Easy",
    category: "React Patterns",
    tags: ["Provider", "Context", "App Architecture"],
    prompt: `Design the global-provider layer for an app that needs theme, auth, and locale available everywhere.

**Requirements**

1. Create a \`<ThemeProvider>\`, \`<AuthProvider>\`, and \`<I18nProvider>\` plus matching \`useTheme()\` / \`useAuth()\` / \`useI18n()\` hooks.
2. Avoid the "provider pyramid" — compose providers cleanly (a \`composeProviders\` helper or a single \`<AppProviders>\`).
3. Throw a clear error when a hook is used outside its provider.
4. Discuss the re-render cost of putting frequently-changing state in a top-level provider and how to mitigate it (see Context splitting).`
  },
  {
    id: 24,
    title: "Optimistic UI with React 19 Actions",
    difficulty: "Hard",
    category: "React Patterns",
    tags: ["React 19", "useOptimistic", "Actions", "Forms"],
    prompt: `Design a "like" button and a comment form using React 19's \`useOptimistic\`, \`useActionState\`, and form Actions.

**Requirements**

1. Use \`useOptimistic\` to reflect a like/comment immediately, then reconcile with the server result.
2. Use \`useActionState\` (and \`<form action={…}>\`) to manage pending state and server-returned errors without manual \`useState\` plumbing.
3. Handle rollback when the action fails, and prevent double-submits while pending.
4. Contrast this with the pre-19 manual pattern (local state + try/catch + revert) and explain what the new primitives remove.`,
    reference: `function Likes({ initial }) {
  const [optimistic, addOptimistic] = useOptimistic(initial, (n) => n + 1);
  async function like() {
    addOptimistic();              // instant UI bump
    await fetch('/api/like', { method: 'POST' }); // server reconciles
  }
  return <button formAction={like}>♥ {optimistic}</button>;
}`
  },
  {
    id: 25,
    title: "Portals & Accessible Modal/Dialog",
    difficulty: "Medium",
    category: "React Patterns",
    tags: ["Portals", "Modal", "Accessibility", "Focus Trap"],
    prompt: `Design a reusable Modal/Dialog that renders outside the DOM hierarchy via a portal.

**Requirements**

1. Use \`createPortal\` to render into a top-level node so the dialog escapes \`overflow: hidden\` / stacking-context traps.
2. Implement a focus trap, return focus to the trigger on close, and close on \`Esc\` / overlay click.
3. Set \`aria-modal\`, \`role="dialog"\`, and \`aria-labelledby\`; make the background inert.
4. Discuss stacking multiple dialogs and scroll-locking the body.`
  },
  {
    id: 26,
    title: "List Virtualization (Windowing)",
    difficulty: "Hard",
    category: "React Patterns",
    tags: ["Virtualization", "Performance", "Rendering"],
    prompt: `Render a list of 100,000 rows without freezing the browser by only mounting what's visible.

**Requirements**

1. Implement windowing: compute the visible range from scroll offset + container height and render only those rows (+ overscan).
2. Handle fixed-height rows first, then variable-height rows (measure + cache, or estimate + correct).
3. Keep scroll position stable when data prepends/appends; support keyboard and screen-reader access.
4. Discuss when to reach for a library (react-window / TanStack Virtual) vs rolling your own, and the tradeoffs vs pagination/infinite scroll.`
  },
  {
    id: 27,
    title: "React Compiler & Memoization Tradeoffs",
    difficulty: "Hard",
    category: "React Patterns",
    tags: ["React Compiler", "useMemo", "useCallback", "Performance"],
    prompt: `Explain how you'd reason about memoization in a 2026 codebase that has adopted the React Compiler.

**Requirements**

1. Describe what the React Compiler auto-memoizes (components, values) and which manual \`useMemo\`/\`useCallback\` calls it makes redundant.
2. Identify what the compiler does **not** fix: Context fan-out, expensive non-render work, and code that violates the rules of React.
3. Walk through profiling a "this re-renders even though props didn't change" bug and the steps to fix it.
4. Give a decision rule: when is reaching for manual memoization still justified after adopting the compiler?`
  },

  // ===========================================================
  //  Frontend System Design — client-side architecture for
  //  complex product surfaces. Use the RADIO framework:
  //  Requirements, Architecture, Data model, Interface, Optimize.
  // ===========================================================
  {
    id: 28,
    title: "Autocomplete / Typeahead Component",
    difficulty: "Medium",
    category: "Frontend System Design",
    tags: ["RADIO", "UI Component", "Debounce", "Accessibility"],
    prompt: `Design a reusable, accessible **autocomplete** component (the classic frontend system design warm-up). Use the RADIO framework.

**Requirements**

1. **Requirements** — Async suggestions, keyboard nav, configurable min-chars and debounce, custom result rendering.
2. **Architecture** — Subcomponents: input, dropdown list, option. Define the external props/API and internal state (query, results, activeIndex, open).
3. **Data & caching** — Cache results per query; cancel stale in-flight requests so a slow earlier response can't overwrite a newer one.
4. **Optimize** — Debounce input, memoize the result list, ARIA combobox semantics (\`aria-activedescendant\`), and handle the empty/error/loading states.`,
    reference: `External API (props):
  value, onChange, fetcher(query) -> Promise<Item[]>,
  renderItem, minChars = 1, debounceMs = 300

Internal state:
  { query, results, activeIndex, isOpen, status }

Race-condition guard: tag each request with a seq id; ignore a
response whose seq is not the latest before calling setResults.`
  },
  {
    id: 29,
    title: "Image Carousel",
    difficulty: "Medium",
    category: "Frontend System Design",
    tags: ["RADIO", "UI Component", "Prefetch", "Performance"],
    prompt: `Design an **image carousel** with current image, prev/next controls, and thumbnail pagination.

**Requirements**

1. **API** — \`images\`, \`autoPlay\`, \`interval\`, \`loop\`, \`onChange\`; support both controlled and uncontrolled active index.
2. **Prefetching** — While the user views image N, preload N+1 (and optionally N+2) so "Next" has no network delay; handle rapid clicks.
3. **Performance** — Lazy-load off-screen images, use \`srcset\`/responsive images, and avoid layout shift (reserve dimensions).
4. **Accessibility & UX** — Keyboard arrows, swipe on touch, pause-on-hover/focus for autoplay, \`aria-roledescription="carousel"\`, and reduced-motion support.`
  },
  {
    id: 30,
    title: "Infinite-Scroll News / Twitter Feed",
    difficulty: "Hard",
    category: "Frontend System Design",
    tags: ["RADIO", "Feed", "Pagination", "Virtualization"],
    prompt: `Design the **front end** of an infinite-scrolling social feed (Twitter/X home timeline) — a progressive favorite at Meta/Google/X.

**Requirements**

1. **Pagination** — Cursor-based fetching with an \`IntersectionObserver\` sentinel; explain why cursors beat offset for a live feed.
2. **Rendering** — Render posts of varied media types; virtualize/recycle DOM for very long sessions to bound memory.
3. **Data model & cache** — Normalize posts/authors so a liked/edited post updates everywhere; optimistic like with rollback.
4. **UX & resilience** — Optimistic interactions, "new posts" pill on top, error/retry per page, and scroll-position restoration on back-navigation.`,
    reference: `Levels often asked live:
  1) render posts from hardcoded data
  2) add a new post (prepend)
  3) fetch post + author; if author === currentUser show "You"
  4) show likes count; liking increments and re-sorts by likes

Normalized store:
  posts: { [id]: {…, authorId, likes} }
  authors: { [id]: {name} }   // dedupe author fetches`
  },
  {
    id: 31,
    title: "Data Table / Grid Component",
    difficulty: "Hard",
    category: "Frontend System Design",
    tags: ["RADIO", "Table", "Sorting", "Virtualization"],
    prompt: `Design a high-performance, reusable **data table** supporting large datasets.

**Requirements**

1. **Features** — Column sort, filter, resize, reorder, pin; row selection; server-side vs client-side pagination.
2. **Performance** — Virtualize rows (and optionally columns) for 100k+ rows; avoid re-rendering the whole grid on a single cell edit.
3. **API design** — A column-definition schema (accessor, header, cell renderer, sort fn) and headless vs styled tradeoffs.
4. **Accessibility** — Proper \`role="grid"\`, header associations, keyboard cell navigation, and sticky headers.`
  },
  {
    id: 32,
    title: "Modal / Dialog System",
    difficulty: "Medium",
    category: "Frontend System Design",
    tags: ["RADIO", "Modal", "Focus Management", "Stacking"],
    prompt: `Design an app-wide **modal/dialog system** (not just one modal component).

**Requirements**

1. **Imperative + declarative API** — Support both \`<Modal open>\` and an imperative \`openModal(<Content/>)\` for confirm/alert flows.
2. **Stacking** — Manage a stack of modals with correct z-index, backdrop, and focus restoration as each closes.
3. **Accessibility** — Focus trap, \`Esc\` to close, \`aria-modal\`, background inert, and body scroll lock.
4. **Optimize** — Portal rendering, lazy-loading heavy modal content, and animating enter/exit without trapping focus prematurely.`
  },
  {
    id: 33,
    title: "Toast / Notification System",
    difficulty: "Medium",
    category: "Frontend System Design",
    tags: ["RADIO", "Notifications", "Queue", "Accessibility"],
    prompt: `Design a client-side **toast notification** system triggered from anywhere in the app.

**Requirements**

1. **API** — A global \`toast.success/error/custom(msg, opts)\` plus a provider; support duration, position, and manual dismiss.
2. **Queueing** — Cap concurrent toasts, queue overflow, and dedupe identical messages.
3. **Accessibility** — Use an \`aria-live\` region (polite vs assertive) so screen readers announce toasts; pause auto-dismiss on hover/focus.
4. **Optimize** — Portal rendering, exit animations that don't block the queue, and reduced-motion support.`
  },
  {
    id: 34,
    title: "Resumable File / Photo Upload",
    difficulty: "Hard",
    category: "Frontend System Design",
    tags: ["RADIO", "Upload", "Chunking", "Resilience"],
    prompt: `Design a robust **file/photo upload** widget for large files on flaky networks.

**Requirements**

1. **Chunked & resumable** — Split files into chunks, upload in parallel with concurrency limits, and resume after a network drop.
2. **UX** — Per-file progress, overall progress, pause/cancel/retry, drag-and-drop, and client-side validation (type/size/dimensions).
3. **Reliability** — Retry failed chunks with backoff, dedupe via content hash, and verify integrity on completion.
4. **Optimize** — Client-side image compression/thumbnailing before upload, and using a Web Worker to avoid blocking the main thread.`
  },
  {
    id: 35,
    title: "Client-Side Router",
    difficulty: "Hard",
    category: "Frontend System Design",
    tags: ["RADIO", "Routing", "Code Splitting", "SPA"],
    prompt: `Design a **client-side router** for a single-page app (a mini react-router).

**Requirements**

1. **Matching** — Parse the URL, match against route patterns with params (\`/users/:id\`) and nested/wildcard routes; rank by specificity.
2. **Navigation** — Use the History API (\`pushState\`/\`popState\`), intercept link clicks, and support programmatic navigation + redirects.
3. **Performance** — Route-level code splitting (lazy + Suspense), data prefetching on link hover, and scroll restoration.
4. **Edge cases** — 404s, route guards/auth, query-string state, and CSR vs SSR/SSG rendering-strategy tradeoffs.`
  },
  {
    id: 36,
    title: "Frontend Internationalization (i18n) System",
    difficulty: "Medium",
    category: "Frontend System Design",
    tags: ["RADIO", "i18n", "Localization", "Bundle Size"],
    prompt: `Design an **i18n** system for a large web app (a senior-level differentiator).

**Requirements**

1. **Translation lookup** — A \`t(key, vars)\` API with interpolation, pluralization (ICU MessageFormat), and fallbacks for missing keys.
2. **Locale data** — Lazy-load per-locale message bundles (don't ship all languages); handle number/date/currency via \`Intl\`.
3. **Direction & layout** — RTL support, locale-aware formatting, and avoiding hardcoded concatenation.
4. **Optimize** — Code-split locales, cache the active bundle, and detect locale from URL/header/user preference.`
  },
  {
    id: 37,
    title: "Real-Time Chat UI",
    difficulty: "Hard",
    category: "Frontend System Design",
    tags: ["RADIO", "WebSocket", "Real-Time", "Optimistic"],
    prompt: `Design the **front end** of a real-time chat/messaging application.

**Requirements**

1. **Transport** — Manage a WebSocket connection with reconnect/backoff and offline buffering; fall back to long-polling.
2. **Rendering** — Virtualized message list, sticky-to-bottom behavior, "scroll to latest" affordance, and grouped/threaded messages.
3. **State & sync** — Optimistic send with pending/sent/failed states, dedupe by client message id, ordering, and read receipts/typing indicators.
4. **Optimize** — Lazy-load history on scroll-up, image/media lazy loading, and battery/CPU-friendly presence updates.`
  },
  {
    id: 38,
    title: "Real-Time Poll / Live Widget",
    difficulty: "Medium",
    category: "Frontend System Design",
    tags: ["RADIO", "Real-Time", "Polling", "SSE"],
    prompt: `Design a **live poll / live-results widget** embeddable on many pages at once.

**Requirements**

1. **Transport choice** — Compare polling, long-polling, SSE, and WebSocket for one-way live updates; justify your pick for read-mostly data.
2. **Rendering** — Animate result bars smoothly as counts change without layout thrash; show optimistic vote then reconcile.
3. **Scale on the client** — Many widgets on a page should share a single connection (a connection manager), not open one each.
4. **Resilience** — Backoff on errors, pause updates when the tab is hidden (\`visibilitychange\`), and recover missed updates on resume.`
  },
  {
    id: 39,
    title: "Component Library / Design System",
    difficulty: "Hard",
    category: "Frontend System Design",
    tags: ["RADIO", "Design System", "Theming", "Tokens"],
    prompt: `Design a reusable **component library / design system** consumed by many product teams.

**Requirements**

1. **Architecture** — Design tokens (color/space/type), theming (light/dark/brand), and headless vs styled component layers.
2. **API consistency** — A shared prop contract (\`variant\`, \`size\`, \`as\` polymorphism), composition via compound components, and ref forwarding.
3. **Quality** — Accessibility baked in, tree-shakeable exports to control bundle size, visual regression + a11y testing, and versioning/changelogs.
4. **DX** — Documentation (Storybook), TypeScript types, codemods for breaking changes, and how you roll out a breaking change across teams.`
  },

  // ===========================================================
  //  Backend System Design — distributed-systems reasoning and
  //  tradeoffs (2026: classics + AI-infra prompts). Lead with
  //  "what makes this hard at scale?" not the easy version.
  // ===========================================================
  {
    id: 40,
    title: "Distributed Rate Limiter",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Rate Limiting", "Redis", "Distributed", "Concurrency"],
    prompt: `Design a **distributed** rate limiter shared across 50+ API servers (the deceptively hard classic).

**Requirements**

1. **Algorithms** — Compare fixed window, sliding window log/counter, token bucket, and leaky bucket and their burst/accuracy tradeoffs.
2. **Placement** — API gateway vs application layer vs edge; combine aggressive edge limits (DDoS) with per-user gateway limits.
3. **Distributed state** — Use a centralized counter (Redis \`INCR\`/\`EXPIRE\`) and address race conditions across servers (Lua scripts / atomic ops).
4. **Tradeoffs** — Centralized counter (SPOF + latency) vs local-plus-sync (temporary over-admission). Pick per use case: payment API vs social feed. Cover sharding Redis, the per-instance op ceiling, and returning \`429\` with retry headers.`,
    reference: `Centralized vs local trade-off:
  payment API  -> centralized counter, accept +p99 latency (over-admission = $ loss)
  social feed  -> local token buckets + async sync, accept brief burst over limit

Redis atomic check (avoids race across 50 servers):
  EVAL "local n=redis.call('INCR',KEYS[1])
        if n==1 then redis.call('EXPIRE',KEYS[1],ARGV[1]) end
        return n" 1 user:123 60`
  },
  {
    id: 41,
    title: "Notification / Fan-out System",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Queues", "Fan-out", "Reliability", "DLQ"],
    prompt: `Design a backend that delivers notifications across push, SMS, and email with guaranteed delivery.

**Requirements**

1. **Fan-out** — Route a single event to multiple channels with per-channel provider adapters (APNs/FCM, Twilio, SES).
2. **Async processing** — Message queue + workers; the hard part is jobs failing halfway and workers crashing after side effects.
3. **Reliability** — At-least-once delivery, idempotency keys to avoid duplicates, retries with backoff, and a dead-letter queue.
4. **Control** — User preferences/opt-out, Do-Not-Disturb windows, per-provider rate limiting, and deduplication.`
  },
  {
    id: 42,
    title: "Distributed Cache",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Caching", "Consistent Hashing", "Eviction", "Consistency"],
    prompt: `Design a **distributed cache** (Redis/Memcached-style) that scales across nodes.

**Requirements**

1. **Partitioning** — Distribute keys with consistent hashing + virtual nodes; explain rebalancing when a node joins/leaves.
2. **Strategies** — Cache-aside vs write-through vs write-behind; choose per workload and discuss staleness risk.
3. **Eviction & TTL** — LRU/LFU eviction, TTLs, and the thundering-herd / cache-stampede problem (locking, request coalescing).
4. **Consistency & availability** — Invalidation propagation speed (e.g. a deleted hot key), replication, and behavior on node failure.`,
    reference: `Senior follow-up that trips candidates:
  "Your cluster has 50GB of short URLs cached. A popular link is
   deleted. How fast must invalidation propagate, and how?"

Answer with: write-through delete + pub/sub invalidation channel,
bounded staleness SLA, and the cost tradeoff vs lazy TTL expiry.`
  },
  {
    id: 43,
    title: "Pub/Sub Messaging (Kafka-style)",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Pub/Sub", "Kafka", "Partitions", "Ordering"],
    prompt: `Design a distributed **publish/subscribe** message system like Kafka.

**Requirements**

1. **Model** — Topics, partitions, producers, consumer groups; how partitioning enables parallelism and per-key ordering.
2. **Durability** — Append-only commit log, replication across brokers, and the leader/follower (ISR) model.
3. **Delivery semantics** — At-most-once / at-least-once / exactly-once; consumer offset management and rebalancing.
4. **Scale & ops** — Retention, backpressure, hot-partition handling, and how consumers catch up after downtime.`
  },
  {
    id: 44,
    title: "URL Shortener at Scale",
    difficulty: "Medium",
    category: "Backend System Design",
    tags: ["Hashing", "Read-Heavy", "Caching", "Databases"],
    prompt: `Design a URL shortener (bit.ly) at ~100M new links/day, 100:1 read:write.

**Requirements**

1. **Key generation** — Counter+base62 vs hashing vs a key-generation service; collision handling and custom aliases.
2. **Storage** — Choose the DB for a write-once / read-heavy workload; partition/shard strategy and capacity estimate.
3. **Read path** — CDN + cache for redirects, target sub-50ms p99; handle the hot-link / celebrity-link case.
4. **Extras** — Expiration, analytics (click counts) without slowing redirects, and abuse/malware-link prevention.`
  },
  {
    id: 45,
    title: "News Feed Fan-out Backend",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Fan-out", "Feed", "Ranking", "Scalability"],
    prompt: `Design the **backend** for a personalized, ranked social feed.

**Requirements**

1. **Fan-out** — Compare fan-out-on-write (push) vs fan-out-on-read (pull) and the hybrid for celebrity accounts.
2. **Data model** — Posts, follows, and the per-user feed store; how you bound feed size and store ranking signals.
3. **Ranking** — Mix recency + engagement signals; precompute vs rank-at-read tradeoffs.
4. **Scale** — Handle a viral post's thundering herd, hot-key mitigation, pagination, and near-real-time delivery.`
  },
  {
    id: 46,
    title: "Distributed Unique ID Generator",
    difficulty: "Medium",
    category: "Backend System Design",
    tags: ["Snowflake", "Clocks", "Coordination", "Uniqueness"],
    prompt: `Design a service that issues globally unique, roughly time-sortable IDs at high throughput.

**Requirements**

1. **Approaches** — Compare UUIDv4/v7, DB auto-increment, ticket server, and Snowflake; pick for sortability + no coordination.
2. **Snowflake layout** — Timestamp + datacenter/machine id + sequence; compute the per-node IDs/ms ceiling.
3. **Failure modes** — Clock skew and clock-going-backwards; machine-id assignment without collisions.
4. **Scale** — Throughput per node, horizontal scaling, and what breaks if two nodes share a machine id.`
  },
  {
    id: 47,
    title: "LLM Serving / Inference Gateway",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["AI Infra", "LLM", "GPU", "Streaming"],
    prompt: `Design a backend that serves an **LLM** behind an API — now a standard 2026 interview prompt.

**Requirements**

1. **Request path** — Token streaming (SSE), request queuing, batching (continuous/dynamic batching) to maximize GPU utilization.
2. **Scaling** — Autoscaling GPU workers, KV-cache memory limits, model sharding/replicas, and cold-start mitigation.
3. **Reliability & cost** — Per-tenant rate limits and quotas, timeouts, fallback/smaller-model routing, and caching of identical prompts.
4. **Safety & observability** — Input/output guardrails, prompt/abuse logging, token accounting, and latency (TTFT / tokens-per-sec) SLOs.`,
    reference: `Why batching matters: a GPU running one request at a time is badly
underutilized. Continuous batching merges in-flight requests so new
prompts join a running batch — the single biggest throughput lever.

KV-cache is the memory bottleneck: it grows with (batch x context len),
so admission control must bound concurrent tokens, not just requests.`
  },
  {
    id: 48,
    title: "GPU / Distributed Compute Scheduler",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["AI Infra", "Scheduling", "Resource Allocation", "Fairness"],
    prompt: `Design a scheduler that allocates scarce **GPU/compute** across many projects and teams.

**Requirements**

1. **Allocation** — Quotas/priorities per team, fair-share vs strict priority, preemption of low-priority jobs, and gang scheduling for multi-GPU jobs.
2. **Bin-packing** — Place jobs onto heterogeneous nodes (GPU type/memory) while maximizing utilization and respecting topology/locality.
3. **Reliability** — Handle node failure mid-job (checkpoint/restart), straggler detection, and queue starvation prevention.
4. **Cost & observability** — Spot/on-demand mix, utilization metrics, chargeback per project, and SLOs for queue wait time.`
  },
  {
    id: 49,
    title: "Idempotent Payment Processing",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Payments", "Idempotency", "Consistency", "Sagas"],
    prompt: `Design a payment-processing backend where correctness under retries is everything.

**Requirements**

1. **Idempotency** — Idempotency keys so a retried charge never double-charges; storage and TTL of key results.
2. **Consistency** — Avoid distributed-transaction pitfalls: use the saga pattern / outbox for charge → ledger → notification.
3. **Reliability** — Exactly-once *effect* via at-least-once delivery + dedupe; reconciliation jobs against the provider.
4. **Edge cases** — Partial failures, refunds/chargebacks, currency/rounding, and an immutable audit ledger (double-entry).`,
    reference: `Idempotency key flow:
  client sends Idempotency-Key: abc123 with the charge request.
  server: if key seen -> return the stored prior result (no re-charge);
          else acquire lock on key, perform charge, persist result, release.

Outbox pattern: write the charge + an "events" row in one DB tx, then a
relay publishes the event — so the ledger/notification can't be lost.`
  },
  {
    id: 50,
    title: "Search Autocomplete Backend",
    difficulty: "Medium",
    category: "Backend System Design",
    tags: ["Tries", "Top-K", "Streaming", "Latency"],
    prompt: `Design the **backend** powering search autocomplete (typeahead) suggestions.

**Requirements**

1. **Data structure** — Trie/prefix tree with precomputed top-K suggestions per prefix; how you store and shard it.
2. **Ranking** — Rank by frequency/recency; update counts from a high-volume query stream (batch vs streaming aggregation).
3. **Latency** — Sub-100ms p99 via in-memory tries, caching, and CDN/edge placement.
4. **Freshness & scale** — Periodic trie rebuilds without downtime, trie sharding by prefix, and handling trending/breaking queries.`
  },
  {
    id: 51,
    title: "Reliable Webhook Delivery",
    difficulty: "Hard",
    category: "Backend System Design",
    tags: ["Webhooks", "Retries", "DLQ", "Idempotency"],
    prompt: `Design a system that delivers **webhooks** to customer endpoints reliably.

**Requirements**

1. **Delivery** — Async queue of outbound events with at-least-once delivery; per-subscriber ordering guarantees (or explicitly none).
2. **Retries** — Exponential backoff with jitter, max attempts, and a dead-letter queue with manual replay.
3. **Security & trust** — HMAC signatures so receivers verify authenticity, replay protection (timestamps), and SSRF protection on customer URLs.
4. **Resilience** — Circuit-break flapping endpoints, isolate noisy tenants (per-tenant queues), and expose a delivery-log/replay API.`
  }
];

// Expose for the renderer (and future modules).
if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}
