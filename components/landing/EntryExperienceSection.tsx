"use client";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const viewport = { once: true, amount: 0.25 };

const moods = [
  { label: "rough", color: "#d4c9be" },
  { label: "okay", color: "#f0d9a8" },
  { label: "good", color: "#bceec8" },
  { label: "great", color: "#52b788" },
  { label: "calm", color: "#aecde1" },
];

export const EntryExperienceSection = () => (
  <section className="border-t border-base py-20 md:py-24">
    <div className="container">
      <motion.div
        className="flex flex-col items-center text-center mb-10"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="label text-accent mb-3"
        >
          HOW IT FEELS
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-display"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Open. Write. Done.
        </motion.h2>
      </motion.div>

      {/* Single unified card */}
      <motion.div
        className="mx-auto rounded-xl"
        style={{
          maxWidth: 440,
          backgroundColor: "var(--color-surface)",
          boxShadow: "var(--shadow-card)",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
      >
        {/* App bar */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <span className="label" style={{ fontSize: "0.6rem" }}>
            APRIL 9
          </span>
          <span
            className="font-display text-accent"
            style={{ fontSize: "0.9rem", fontStyle: "italic" }}
          >
            Lifelog
          </span>
        </div>

        {/* Entry body */}
        <div className="px-6 pt-5 pb-4">
          <p className="text-secondary mb-3" style={{ fontSize: "0.75rem" }}>
            What happened today?
          </p>
          <p
            className="font-display text-primary"
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              lineHeight: 1.55,
            }}
          >
            Ran into an old friend outside the café. Hadn&apos;t talked in
            years. Felt surprisingly good afterwards.
          </p>
          <div className="animate-pulse duration-40 text-xl">|</div>
          {/* <div
            className="mt-1 animate-pulse"
            style={{
              display: "inline-block",
              width: 2,
              height: 16,
              backgroundColor: "var(--color-accent)",
              opacity: 0.7,
              verticalAlign: "middle",
            }}
          /> */}
        </div>

        {/* Mood row */}
        <div
          className="px-6 py-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-secondary mb-3" style={{ fontSize: "0.7rem" }}>
            How are you feeling?{" "}
            <span style={{ opacity: 0.5 }}>— optional</span>
          </p>
          <div className="flex gap-2 flex-wrap">
            {moods.map((m, i) => {
              const selected = i === 2;
              return (
                <span
                  key={m.label}
                  className="tag"
                  style={{
                    backgroundColor: selected
                      ? "var(--color-accent-light)"
                      : "var(--color-tag-bg)",
                    color: selected
                      ? "var(--color-accent)"
                      : "var(--color-tag-text)",
                    fontWeight: selected ? 500 : 400,
                    fontSize: "0.75rem",
                  }}
                >
                  {m.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Expand row */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <span className="text-secondary" style={{ fontSize: "0.72rem" }}>
            Want to say more?{" "}
            <span style={{ color: "var(--color-accent)", cursor: "default" }}>
              Expand entry
            </span>
          </span>
          <button
            className="btn btn-primary"
            style={{
              fontSize: "0.75rem",
              padding: "0.35rem 1rem",
              cursor: "default",
            }}
          >
            Save
          </button>
        </div>
      </motion.div>

      <motion.p
        className="text-secondary text-center mt-5"
        style={{ fontSize: "0.8rem" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        That&apos;s the whole thing. Everything else is optional.
      </motion.p>
    </div>
  </section>
);
