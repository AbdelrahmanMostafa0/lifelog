# Lifelog — Frontend

The frontend for **Lifelog**, a personal ops system for capturing what you do, journaling your thoughts, and archiving ideas and links — all in one place.

Built with **Next.js 15 (App Router)**.

---

## What is Lifelog?

Lifelog is made up of three core sections:

- **Log** — Quickly capture what you did throughout the day. Each entry is timestamped and taggable. Later you can search by day, time range, or tag to recall exactly what happened when.
- **Journal** — A dedicated space for longer-form writing, reflections, and daily entries.
- **Archive** — Save ideas, links, and anything worth revisiting. Add notes to items, tag them, and find them later when you need them.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Data Fetching | TanStack Query |
| UI Components | Custom component library |
| Package Manager | npm |

---

## Project Structure

```
src/
├── app/                  # App Router pages & layouts
│   ├── (auth)/           # Login, register
│   ├── log/              # Daily activity log
│   ├── journal/          # Journal entries
│   └── archive/          # Ideas, links & notes
├── components/
│   ├── ui/               # Base UI primitives (Button, Input, Tag…)
│   └── shared/           # Shared layout components (Navbar, Sidebar…)
├── lib/                  # Utilities, helpers, API client
├── hooks/                # Custom React hooks
└── types/                # Shared TypeScript types
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
git clone git@github.com:AbdelrahmanMostafa0/lifelog.git
cd lifelog
pnpm install
```

### Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:9000
```

### Run

```bash
pnpm dev
```

App will be running at `http://localhost:3000`.

---

## Design System

Lifelog uses a custom design system defined in `src/styles/lifelog.css` — a Tailwind v4 theme with custom color tokens, typography scale, spacing grid, and component classes. See the [design system doc](./docs/design-system.md) for the full token reference.

---

## Related

- [`lifelog-api`](https://github.com/AbdelrahmanMostafa0/lifelog-api) — The backend (Node.js + Express + MongoDB)

---

## Status

🚧 Active development
