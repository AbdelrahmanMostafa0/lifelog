"use client";
import { motion } from "framer-motion";
import { LandingFooter } from "@/components/landing/LandingFooter";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const sections = [
  {
    title: "Information we collect",
    body: "We collect only what you choose to give us: your name, email address, and the entries you write. We do not collect browsing history, device fingerprints, or any data beyond what is necessary to run the service.",
  },
  {
    title: "How we use your data",
    body: "Your data is used solely to provide and improve Lifelog. We use your entries to display them back to you — nothing else. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "Data storage & security",
    body: "All data is stored on secured servers with encryption at rest and in transit. Access is strictly limited to systems that need it to operate the service. We use industry-standard practices to protect your information.",
  },
  {
    title: "Cookies",
    body: "We use cookies only for authentication. No tracking cookies, no advertising cookies. A session cookie is set when you sign in and cleared when you sign out.",
  },
  {
    title: "Third-party services",
    body: "Lifelog offers optional sign-in via Google OAuth. If you use this, Google's privacy policy governs the information shared during that process. We only receive your name and email from Google.",
  },
  {
    title: "Your rights",
    body: "You can export or delete your account and all associated data at any time from your account settings. Deletion is permanent and processed within 30 days.",
  },
  {
    title: "Changes to this policy",
    body: "If we make material changes to this policy, we will notify you by email or a prominent notice in the app before the changes take effect.",
  },
  {
    title: "Contact",
    body: "Questions about this policy? Reach us at privacy@lifelog.app. We aim to respond within 2 business days.",
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <main className="container py-16 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ maxWidth: "680px" }}
        >
          {/* Header */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="label text-accent"
            style={{ fontSize: "0.65rem", marginBottom: "1rem" }}
          >
            LEGAL
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="text-secondary"
            style={{ fontSize: "0.875rem", marginBottom: "3rem" }}
          >
            Last updated April 9, 2026
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--color-text-primary)",
              marginBottom: "3rem",
              paddingBottom: "3rem",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            Lifelog is built on a simple premise: your thoughts are yours. This
            policy explains plainly what we collect, why, and how we protect it.
          </motion.p>

          {/* Sections */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                style={{
                  paddingBottom: i < sections.length - 1 ? "2.5rem" : 0,
                  borderBottom:
                    i < sections.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                }}
              >
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {s.title}
                </h2>
                <p
                  className="text-secondary"
                  style={{ fontSize: "0.9rem", lineHeight: 1.8 }}
                >
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <LandingFooter />
    </div>
  );
}
