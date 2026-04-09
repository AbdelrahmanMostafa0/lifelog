"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const viewport = { once: true, amount: 0.3 };

export const CTASection = () => (
  <section className="py-24 md:py-32">
    <motion.div
      className="container text-center"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger}
    >
      <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="label text-accent mb-4">
        START TODAY
      </motion.p>
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="font-display mb-4"
        style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontStyle: "italic", fontWeight: 400 }}
      >
        Your story, one line
        <br />
        at a time.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-secondary mx-auto mb-8"
        style={{ fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "38ch" }}
      >
        Write one line tonight. Come back tomorrow if you want.
        That&apos;s all it takes to start seeing yourself more clearly.
      </motion.p>
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-3"
      >
        <Link href="/auth/register" className="btn btn-primary">
          Start logging — it&apos;s free <ArrowRight size={14} />
        </Link>
        <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
          Takes 10 seconds · No credit card needed
        </p>
      </motion.div>
    </motion.div>
  </section>
);
