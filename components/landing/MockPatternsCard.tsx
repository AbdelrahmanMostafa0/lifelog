/**
 * Deliberately number-free: no counts, no scores, no streak. The landing copy
 * promises a journal that doesn't measure you, so the mock must not either.
 */
const recurring = [
  { word: "the café", weight: 1 },
  { word: "walking", weight: 0.72 },
  { word: "my sister", weight: 0.55 },
  { word: "slept badly", weight: 0.72 },
  { word: "quiet", weight: 1 },
  { word: "rain", weight: 0.55 },
];

const moments = [
  { when: "SUN", line: "Long walk, no music. Head cleared by the second mile." },
  { when: "WED", line: "Same café, same corner table. Wrote for an hour." },
  { when: "FRI", line: "Called my sister. We talked about nothing for ages." },
];

export const MockPatternsCard = () => (
  <div className="card w-full" style={{ maxWidth: 460 }}>
    <div className="flex items-center justify-between mb-6">
      <h3
        className="font-display"
        style={{ fontSize: "1rem", fontStyle: "italic" }}
      >
        What kept coming back
      </h3>
      <span className="label" style={{ fontSize: "0.65rem" }}>
        THIS MONTH
      </span>
    </div>

    {/* Words that repeat — emphasis carries the frequency, not a number */}
    <div className="flex flex-wrap gap-2 mb-6">
      {recurring.map((r) => (
        <span
          key={r.word}
          className="font-display"
          style={{
            fontStyle: "italic",
            fontSize: `${0.85 + r.weight * 0.45}rem`,
            lineHeight: 1.3,
            padding: "0.25rem 0.6rem",
            borderRadius: "var(--radius-full)",
            backgroundColor:
              r.weight === 1 ? "var(--color-accent-light)" : "var(--color-bg)",
            color:
              r.weight === 1
                ? "var(--color-accent)"
                : "var(--color-text-secondary)",
          }}
        >
          {r.word}
        </span>
      ))}
    </div>

    {/* A few days, as they were written */}
    <div className="mb-5">
      <span className="label block mb-3" style={{ fontSize: "0.65rem" }}>
        DAYS THAT FELT GOOD
      </span>
      <div className="flex flex-col gap-3">
        {moments.map((m) => (
          <div key={m.when} className="flex gap-3 items-baseline">
            <span
              className="font-mono text-accent shrink-0"
              style={{ fontSize: "0.6rem", width: "2rem" }}
            >
              {m.when}
            </span>
            <p
              className="font-display text-secondary"
              style={{ fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.5 }}
            >
              {m.line}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div
      className="flex items-center gap-2 pt-4"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <span className="text-secondary" style={{ fontSize: "0.72rem" }}>
        Three of them started with a walk.
      </span>
    </div>
  </div>
);
