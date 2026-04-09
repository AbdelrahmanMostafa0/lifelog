"use client";
import { motion } from "framer-motion";

const moodColors = [
  "#bceec8",
  "#bceec8",
  "#e4dfd7",
  "#bceec8",
  "#52b788",
  "#bceec8",
  "#bceec8",
];

export const MockEntryCard = () => (
  <motion.div
    className="card w-full"
    style={{ maxWidth: 380 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="flex items-center justify-between mb-4">
      <span className="label" style={{ fontSize: "0.65rem" }}>
        TODAY · APR 9
      </span>
      <span className="tag tag-selected">good day</span>
    </div>

    <p
      className="font-display"
      style={{
        fontSize: "1.05rem",
        fontStyle: "italic",
        lineHeight: 1.55,
        marginBottom: "0.75rem",
        color: "var(--color-text-primary)",
      }}
    >
      Ran into an old friend outside the café. We talked for an hour. I
      didn&apos;t expect to feel that good afterwards.
    </p>

    <p
      className="text-secondary"
      style={{
        fontSize: "0.8rem",
        lineHeight: 1.65,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        opacity: 0.7,
      }}
    >
      + expand entry
    </p>

    <div
      className="flex items-center gap-2 mt-4 pt-4"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <span
        className="text-secondary font-mono"
        style={{ fontSize: "0.65rem" }}
      >
        MOOD
      </span>
      <div className="flex gap-1">
        {moodColors.map((c, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 3,
              backgroundColor: c,
            }}
          />
        ))}
      </div>
      <span className="text-secondary ml-auto" style={{ fontSize: "0.7rem" }}>
        5-day streak 🔥
      </span>
    </div>
  </motion.div>
);
