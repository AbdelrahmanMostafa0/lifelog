"use client";
import { motion } from "framer-motion";
import { LandingFooter } from "@/components/landing/LandingFooter";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const sections = [
  {
    title: "Acceptance of terms",
    body: "By creating an account or using Lifelog, you agree to these Terms of Service. If you do not agree, please do not use the service. These terms apply to all users of Lifelog.",
  },
  {
    title: "Your account",
    body: "You are responsible for maintaining the security of your account credentials. You must be at least 13 years old to use Lifelog. You may not share your account with others or use another person's account without permission.",
  },
  {
    title: "Your content",
    body: "You own everything you write in Lifelog. By using the service, you grant us a limited license to store and display your content solely for the purpose of operating the service. We do not claim ownership of your entries.",
  },
  {
    title: "Acceptable use",
    body: "You agree not to use Lifelog to store or transmit unlawful content, to attempt to gain unauthorized access to our systems, or to interfere with the service in any way. We reserve the right to suspend accounts that violate these terms.",
  },
  {
    title: "Service availability",
    body: "We aim for high availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or experience downtime. We are not liable for any losses resulting from service interruptions.",
  },
  {
    title: "Termination",
    body: "You may delete your account at any time from your settings. We may terminate or suspend your account if you violate these terms. Upon termination, your data will be deleted in accordance with our Privacy Policy.",
  },
  {
    title: "Limitation of liability",
    body: 'Lifelog is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the service.',
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. We will notify you of material changes by email or in-app notice. Continued use of Lifelog after changes constitutes acceptance of the new terms.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of the jurisdiction in which Lifelog operates, without regard to conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction.",
  },
  {
    title: "Contact",
    body: "Questions about these terms? Reach us at legal@lifelog.app. We aim to respond within 2 business days.",
  },
];

export default function TermsPage() {
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
            Terms of Service
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
            These terms govern your use of Lifelog. We have written them to be
            as clear as possible — no legal jargon where plain language works.
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
