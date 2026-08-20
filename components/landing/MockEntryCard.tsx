"use client";
import { motion } from "framer-motion";

const tags = ["café", "friends", "unplanned"];

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
      style={{ fontSize: "0.8rem", lineHeight: 1.65, opacity: 0.7 }}
    >
      + expand entry
    </p>

    <div
      className="flex items-center gap-2 mt-4 pt-4"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>
            {t}
          </span>
        ))}
      </div>
      <span
        className="text-secondary font-mono ml-auto shrink-0"
        style={{ fontSize: "0.65rem", opacity: 0.8 }}
      >
        SAVED
      </span>
    </div>
  </motion.div>
);
