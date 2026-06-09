# 🧩 JS System Design Practice

A lightweight, static practice site for system design questions. Each question has a difficulty rating, topic tags, and an expandable problem statement.

**Live site:** https://dhunganasaroj3.github.io/js-system-design-practice/

## Adding more questions

All content lives in [`questions.js`](./questions.js). Append an object to the `QUESTIONS` array:

```js
{
  id: 11,
  title: "Your Question Title",
  difficulty: "Easy",          // "Easy" | "Medium" | "Hard"
  tags: ["Topic A", "Topic B"],
  prompt: `Markdown-ish text. **Bold** is supported.`,
  reference: `Optional concrete example.` // omit if not needed
}
```

No build step — just refresh the page. The renderer (`app.js`) picks up new entries automatically.

## Difficulty ratings

| # | Question | Difficulty |
|---|----------|-----------|
| 1 | Employee State Headcount Tracker | Medium |
| 2 | URL Shortener (TinyURL) | Medium |
| 3 | Rate Limiter | Medium |
| 4 | News Feed System | Hard |
| 5 | Distributed Key-Value Store | Hard |
| 6 | Chat / Messaging System | Hard |
| 7 | Web Crawler | Medium |
| 8 | Notification Service | Medium |
| 9 | Typeahead / Autocomplete Search | Medium |
| 10 | Distributed Unique ID Generator | Easy |
| 11 | Multi-Warehouse Inventory Count by Location | Medium |
| 12 | Ride-Sharing Drivers Available per Zone | Medium |
| 13 | Hotel Room Availability by City & Type | Medium |
| 14 | Project Task Counts by Status (Kanban) | Easy |
| 15 | Library Books Available per Branch | Easy |

> Questions **11–15** are in the same flavor as Q1 — real-world entity modeling with aggregate counters that must stay correct across add / update / transition / delete.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Tech

Plain HTML/CSS/JS — no dependencies, no build. Deployed via GitHub Pages.
