const palette = ["#144227", "#2d6a4f", "#52b788", "#bceec8", "#e4dfd7", "#f0d9a8"];
const moodIdx = [4, 2, 1, 2, 1, 0, 1, 2, 4, 3, 2, 1, 0, 2, 1, 3, 2, 1, 0, 2, 1, 2, 4, 1, 0, 2, 1, 3];

const stats = [
  { value: "14", label: "Day streak", icon: "🔥" },
  { value: "47", label: "Entries", icon: "📖" },
  { value: "6.8", label: "Avg mood", icon: "✨" },
];

const tags = ["reflection", "gratitude", "travel", "nature", "quiet hours"];

export const MockStatsCard = () => (
  <div className="card w-full" style={{ maxWidth: 460 }}>
    <div className="flex items-center justify-between mb-6">
      <h3 className="font-display" style={{ fontSize: "1rem", fontStyle: "italic" }}>
        Your journey so far
      </h3>
      <span className="label" style={{ fontSize: "0.65rem" }}>OCTOBER 2024</span>
    </div>

    <div className="grid grid-cols-3 gap-3 mb-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="text-center rounded-lg p-3"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div style={{ fontSize: "1.2rem", marginBottom: 2 }}>{s.icon}</div>
          <div
            className="font-display text-accent"
            style={{ fontSize: "1.4rem", fontStyle: "italic", lineHeight: 1 }}
          >
            {s.value}
          </div>
          <div className="text-secondary mt-1" style={{ fontSize: "0.65rem" }}>{s.label}</div>
        </div>
      ))}
    </div>

    <div className="mb-5">
      <span className="label block mb-2" style={{ fontSize: "0.65rem" }}>MOOD THIS MONTH</span>
      <div className="flex flex-wrap gap-1">
        {moodIdx.map((idx, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              backgroundColor: palette[idx],
              opacity: i > 23 ? 0.3 : 1,
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-secondary" style={{ fontSize: "0.65rem" }}>Less</span>
        {palette.slice().reverse().slice(1).map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: 2, backgroundColor: c }} />
        ))}
        <span className="text-secondary" style={{ fontSize: "0.65rem" }}>More</span>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
      {tags.map((t) => <span key={t} className="tag">{t}</span>)}
    </div>
  </div>
);
