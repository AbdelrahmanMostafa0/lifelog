"use client";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const viewport = { once: true, amount: 0.2 };

const steps = [
  {
    n: "01",
    title: "Write one line about your day",
    body: "Open the app. See a prompt. Type whatever comes to mind. It doesn't have to be profound — it just has to be true.",
  },
  {
    n: "02",
    title: "Come back when you feel like it",
    body: "Tomorrow, next week, whenever. There's no streak to protect. The log is always here, quiet and waiting.",
  },
  {
    n: "03",
    title: "Start noticing the shape of things",
    body: "Patterns surface on their own. A mood that comes and goes. A word you keep using. A version of yourself you didn't know was showing up.",
  },
];

export const HowItWorksSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        className="mb-12 md:mb-16"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="label text-accent mb-3">
          HOW IT WORKS
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-display"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontStyle: "italic", fontWeight: 400 }}
        >
          Less than you think.
          <br />
          More than you expect.
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        {steps.map((s) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative pl-5"
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
              style={{ backgroundColor: "var(--color-accent-light)" }}
            />
            <span
              className="font-mono text-accent block mb-3"
              style={{ fontSize: "0.65rem" }}
            >
              {s.n}
            </span>
            <h3
              className="font-display mb-2"
              style={{ fontSize: "1.1rem", fontStyle: "italic" }}
            >
              {s.title}
            </h3>
            <p className="text-secondary" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              {s.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
