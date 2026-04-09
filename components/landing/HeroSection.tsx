"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MockEntryCard } from "./MockEntryCard";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export const HeroSection = () => (
  <section className="container py-20 md:py-28">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Copy */}
      <motion.div
        className="flex-1 w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-display"
          style={{
            fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Capture your day
          <br />
          in seconds.
          <br />
          <span style={{ color: "var(--color-accent)" }}>Understand it</span>
          <br />
          over time.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="text-primary"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.5,
            maxWidth: "30ch",
            marginBottom: "1rem",
            fontWeight: 400,
          }}
        >
          One sentence is enough.
        </motion.p>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-secondary"
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "42ch",
            marginBottom: "2rem",
          }}
        >
          No prompts. No streaks. Just write what happened — and over time,
          start to see yourself more clearly.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link href="/auth/register" className="btn btn-primary">
            Start logging <ArrowRight size={14} />
          </Link>
          <Link href="/auth/login" className="btn btn-secondary">
            Sign in
          </Link>
        </motion.div>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-secondary mt-3"
          style={{ fontSize: "0.75rem" }}
        >
          Takes 10 seconds · No setup required · Private from day one
        </motion.p>
      </motion.div>

      {/* Card */}
      <motion.div
        className="flex-1 w-full flex justify-center lg:justify-end relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, var(--color-accent-light) 0%, transparent 70%)",
            opacity: 0.4,
          }}
        />
        <MockEntryCard />
      </motion.div>
    </div>
  </section>
);
