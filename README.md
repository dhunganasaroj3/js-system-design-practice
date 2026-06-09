# 🧩 JS System Design Practice

A lightweight, static practice site for system design questions. Each question has a difficulty rating, topic tags, and an expandable problem statement. Questions are organized into four categories selectable from the top menu:

- **System Design** — general / distributed systems classics
- **React Patterns** — modern React design patterns (React 19 / React Compiler era)
- **Frontend System Design** — client-side architecture & UI components (RADIO framework)
- **Backend System Design** — distributed-systems & AI-infra design

**Live site:** https://dhunganasaroj3.github.io/js-system-design-practice/

## Adding more questions

All content lives in [`questions.js`](./questions.js). Append an object to the `QUESTIONS` array:

```js
{
  id: 52,
  title: "Your Question Title",
  difficulty: "Easy",          // "Easy" | "Medium" | "Hard"
  category: "React Patterns",  // "System Design" | "React Patterns"
                               // | "Frontend System Design" | "Backend System Design"
                               // (omit to default to "System Design")
  tags: ["Topic A", "Topic B"],
  prompt: `Markdown-ish text. **Bold** is supported.`,
  reference: `Optional concrete example.` // omit if not needed
}
```

The `category` controls which top-menu tab the question appears under. No build step — just
refresh the page. The renderer (`app.js`) picks up new entries automatically.

## Categories

| Category | Questions | Focus |
|----------|-----------|-------|
| System Design | 1–15 | Distributed-systems classics + entity/counter modeling (Q11–15 follow Q1's flavor) |
| React Patterns | 16–27 | Compound components, custom hooks, state reducer, error boundaries, React 19 Actions, Context optimization, virtualization, React Compiler |
| Frontend System Design | 28–39 | Autocomplete, carousel, infinite-scroll feed, data grid, modal/toast systems, uploads, routing, i18n, chat, design system (RADIO framework) |
| Backend System Design | 40–51 | Distributed rate limiter, notification fan-out, distributed cache, pub/sub, URL shortener, feed fan-out, ID generator, LLM serving, GPU scheduler, payments, webhooks |

> Topics are grounded in 2026 interview trends — React 19 / React Compiler, the RADIO framework for
> UI components, and AI-infrastructure prompts (LLM serving, GPU scheduling) alongside the classics.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Tech

Plain HTML/CSS/JS — no dependencies, no build. Deployed via GitHub Pages.
