"use client";
import { motion } from "framer-motion";
import { MockStatsCard } from "./MockStatsCard";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, amount: 0.2 };

const insights = [
  "Which days you felt good — and what they had in common",
  "Patterns in your mood across certain weeks",
  "How your tone has quietly changed ",
  "What you keep coming back to, without realizing it",
];

export const StatsSection = () => (
  <section
    className="py-24 md:py-32 border-t border-b border-base"
    style={{ backgroundColor: "var(--color-surface)" }}
  >
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Text */}
        <motion.div
          className="flex-1 w-full"
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
            THE REASON IT EXISTS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            After a month, your days will start to make sense.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-secondary mb-8"
            style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: "40ch" }}
          >
            You begin to notice patterns — not because you tracked them, but
            because they show up.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-4"
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--color-text-primary)",
            }}
          >
            You&apos;ll start to notice:
          </motion.p>
          <motion.ul variants={stagger} className="space-y-3">
            {insights.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-3 text-secondary"
                style={{ fontSize: "0.875rem" }}
              >
                <div
                  className="shrink-0 rounded-full mt-2"
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: "var(--color-accent)",
                  }}
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Card — slightly larger on this section to give it visual weight */}
        <motion.div
          className="flex-1 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <MockStatsCard />
        </motion.div>
      </div>
    </div>
  </section>
);
