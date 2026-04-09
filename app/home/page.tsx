"use client";
import { useState } from "react";
import {
  PenLine,
  BookOpen,
  TrendingUp,
  Tag,
  Settings,
  Flame,
} from "lucide-react";
import LogForm from "@/components/logs/LogForm";
import LoggsFeed from "@/components/logs/LoggsFeed";

// ─── Mock data ────────────────────────────────────────────────────────────────

// const topTags = ["reflection", "morning", "reading", "quiet hours", "work"];

const navItems = [
  { icon: PenLine, label: "Today" },
  { icon: BookOpen, label: "Journal" },
  { icon: TrendingUp, label: "Stats" },
  { icon: Tag, label: "Tags" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Today");

  return (
    <div
      className="flex flex-col h-screen "
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* ── Sidebar (md+) ── */}
      {/* <aside
        className="hidden md:flex flex-col w-52 shrink-0 border-r border-base"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="px-5 py-5 border-b border-base">
          <span
            className="font-display text-accent"
            style={{ fontSize: "1.1rem", fontStyle: "italic" }}
          >
            Lifelog
          </span>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{
                backgroundColor:
                  activeNav === label ? "var(--color-accent-light)" : "transparent",
                color:
                  activeNav === label
                    ? "var(--color-accent)"
                    : "var(--color-text-secondary)",
                fontWeight: activeNav === label ? 500 : 400,
              }}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>

        <div className="mx-3 mb-3 px-3 py-2 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: "var(--color-bg)" }}>
          <Flame size={13} style={{ color: "var(--color-accent)" }} />
          <span className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
            14-day streak
          </span>
        </div>
        <div className="p-4 border-t border-base flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="rounded-full flex items-center justify-center text-xs font-medium"
              style={{
                width: 28,
                height: 28,
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent)",
              }}
            >
              A
            </div>
            <span className="text-sm">Alex</span>
          </div>
          <button className="text-secondary hover:text-primary transition-colors">
            <Settings size={14} />
          </button>
        </div>
      </aside> */}

      {/* ── Main ── */}
      <main className="flex-1 min-h-0  pb-20 md:pb-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          {/* Date header */}
          <div className="mb-7">
            <p
              className="label text-accent mb-1"
              style={{ fontSize: "0.65rem" }}
            >
              TODAY
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "1.6rem",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Tuesday, April 8
            </h1>
          </div>

          {/* Form */}
          <div className="mb-12">
            <LogForm />
          </div>

          {/* Feed */}
          <LoggsFeed />
          {/* <div>
            <p
              className="label"
              style={{ fontSize: "0.65rem", marginBottom: "1.25rem" }}
            >
              RECENT ENTRIES
            </p>
            <div className="space-y-3">
              {entries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div> */}
        </div>
      </main>

      {/* ── Right panel (lg+) ── */}
      {/* <aside
        className="hidden lg:flex flex-col w-60 shrink-0 border-l border-base p-5 gap-6"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div>
          <p className="label mb-3" style={{ fontSize: "0.65rem" }}>THIS MONTH</p>
          <div className="space-y-2">
            {[
              { label: "Entries", value: "47" },
              { label: "Avg mood", value: "7.2 / 10" },
              { label: "Streak", value: "14 days" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-secondary" style={{ fontSize: "0.8rem" }}>{label}</span>
                <span
                  className="font-display text-accent"
                  style={{ fontSize: "0.95rem", fontStyle: "italic" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ borderColor: "var(--color-border)" }} />

        <div>
          <p className="label mb-3" style={{ fontSize: "0.65rem" }}>TOP TAGS</p>
          <div className="flex flex-wrap gap-1.5">
            {topTags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="label mb-3" style={{ fontSize: "0.65rem" }}>MOOD THIS WEEK</p>
          <div className="flex items-end gap-1.5">
            {[7, 5, 8, 7, 6, 8, null].map((mood, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                {mood !== null ? (
                  <div
                    className="rounded-sm w-5"
                    style={{
                      height: `${mood * 4}px`,
                      backgroundColor: moodColor(mood),
                    }}
                  />
                ) : (
                  <div className="rounded-sm w-5 h-3 border border-dashed border-base" />
                )}
                <span className="text-secondary" style={{ fontSize: "0.55rem" }}>
                  {["M", "T", "W", "T", "F", "S", "T"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside> */}

      {/* ── Mobile bottom nav ── */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 border-t border-base flex"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveNav(label)}
            className="flex-1 flex flex-col items-center gap-1 py-3"
            style={{
              fontSize: "0.6rem",
              color:
                activeNav === label
                  ? "var(--color-accent)"
                  : "var(--color-text-secondary)",
            }}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
