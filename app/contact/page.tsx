"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

type Status = "idle" | "sending" | "sent";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  return (
    <div className="flex flex-col lg:flex-row" style={{ minHeight: "100vh" }}>
      {/* ── Left: accent panel ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative flex flex-col overflow-hidden lg:sticky lg:top-0 lg:h-screen lg:w-[45%] shrink-0 p-10 lg:p-16"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        {/* Decorative oversized quote mark */}
        <span
          aria-hidden
          className="font-display select-none pointer-events-none"
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-1rem",
            fontSize: "28rem",
            lineHeight: 1,
            fontStyle: "italic",
            color: "#ffffff",
            opacity: 0.04,
            userSelect: "none",
          }}
        >
          &ldquo;
        </span>

        {/* Logo */}
        <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
          <Link
            href="/"
            className="font-display"
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              color: "var(--color-accent-light)",
              opacity: 0.9,
              textDecoration: "none",
            }}
          >
            Lifelog
          </Link>
        </motion.div>

        {/* Main copy */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "#fbf9f4",
              marginBottom: "1.5rem",
            }}
          >
            Say
            <br />
            hello.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display"
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-accent-light)",
              opacity: 0.75,
              marginBottom: "2.5rem",
              lineHeight: 1.4,
            }}
          >
            We read every word.
          </motion.p>

          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            href="mailto:hello@lifelog.app"
            className="flex items-center gap-2"
            style={{
              color: "#fbf9f4",
              opacity: 0.7,
              fontSize: "0.85rem",
              textDecoration: "none",
              width: "fit-content",
            }}
            whileHover={{ opacity: 1 }}
          >
            <Mail size={14} />
            hello@lifelog.app
            <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
          </motion.a>
        </div>

        {/* Bottom meta */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          style={{
            fontSize: "0.7rem",
            color: "var(--color-accent-light)",
            opacity: 0.4,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
          }}
        >
          Usually replies within 1–2 days
        </motion.p>
      </motion.div>

      {/* ── Right: form panel ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="flex flex-col justify-center flex-1 p-10 lg:p-16"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div style={{ maxWidth: "480px", width: "100%" }}>
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  className="label"
                  style={{ fontSize: "0.65rem", marginBottom: "1.25rem" }}
                >
                  SENT
                </p>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "2rem",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--color-text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message received.
                </h2>
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  {"We'll get back to you soon."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-secondary"
                  style={{ fontSize: "0.85rem" }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <p
                    className="label"
                    style={{ fontSize: "0.65rem", marginBottom: "1.25rem" }}
                  >
                    GET IN TOUCH
                  </p>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "1.5rem",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-text-primary)",
                      lineHeight: 1.2,
                    }}
                  >
                    What&apos;s on your mind?
                  </h2>
                </div>

                {/* Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <label
                    className="label"
                    style={{ fontSize: "0.65rem" }}
                    htmlFor="name"
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="input"
                  />
                </div>

                {/* Message */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <label
                    className="label"
                    style={{ fontSize: "0.65rem" }}
                    htmlFor="message"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Write anything — bugs, ideas, thoughts."
                    className="input"
                    style={{ resize: "vertical", minHeight: "140px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary"
                  style={{
                    alignSelf: "flex-start",
                    opacity: status === "sending" ? 0.6 : 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send <Send size={13} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
