"use client";
import { motion } from "framer-motion";
import { PenLine, Repeat2, TrendingUp, Lock } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, amount: 0.15 };

const smallCards = [
  {
    icon: <Repeat2 size={18} />,
    title: "Some days it's one line. That's enough.",
    body: "Lifelog doesn't nag. No reminders. No guilt. You'll come back when something's worth writing down — and that turns out to be more often than you'd think.",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Patterns show up without you trying",
    body: "After a few weeks, you'll notice things. A mood that comes back on Sundays. A word you keep using. A version of your week that only makes sense in hindsight.",
  },
  {
    icon: <Lock size={18} />,
    title: "It's yours. Nothing leaves.",
    body: "No ads. No sharing. No algorithmic feed of your own feelings. Just a private record that exists for exactly one person.",
  },
];

export const FeaturesSection = () => (
  <section className="border-t border-base py-20 md:py-28">
    <div className="container">
      {/* Header */}
      <motion.div
        className="mb-10 md:mb-14"
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
          THE IDEA
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="font-display"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontStyle: "italic",
            fontWeight: 400,
            maxWidth: "22ch",
          }}
        >
          Write first.
          <br />
          Understand later.
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        {/* Featured card */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3 }}
          className="sm:col-span-2 lg:col-span-3 p-8 rounded-xl flex flex-row items-end justify-between gap-8 overflow-hidden"
          style={{ backgroundColor: "var(--color-accent)", minHeight: 240 }}
        >
          {/* Left: content */}
          <div className="flex flex-col justify-between h-full gap-6 min-w-0">
            <div
              style={{
                display: "inline-flex",
                padding: "0.55rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "rgba(255,255,255,0.15)",
                width: "fit-content",
              }}
            >
              <PenLine size={22} color="white" />
            </div>
            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.35rem",
                  fontStyle: "italic",
                  color: "white",
                  marginBottom: "0.45rem",
                }}
              >
                No wrong way to start
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: "38ch",
                }}
              >
                One line or five paragraphs. Both count. The app doesn&apos;t
                care — and that turns out to be the whole point.
              </p>
            </div>
          </div>

          {/* Right: decorative journal excerpt */}
          <div
            className="hidden md:block shrink-0 pointer-events-none select-none self-center"
            aria-hidden
            style={{ opacity: 0.4, maxWidth: "22ch" }}
          >
            {[
              "Didn't do much today.",
              "Just walked around the block",
              "and noticed the light had changed.",
              "That felt like enough.",
              "",
            ].map((line, i) => (
              <p
                key={i}
                className="font-display"
                style={{
                  fontSize: "0.82rem",
                  color: "white",
                  lineHeight: 2,
                  fontStyle: "italic",
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Remaining small cards */}
        {smallCards.map((card) => (
          <SmallCard key={card.title} card={card} />
        ))}
      </motion.div>
    </div>
  </section>
);

type SmallCardProps = {
  card: { icon: React.ReactNode; title: string; body: string };
};

const SmallCard = ({ card }: SmallCardProps) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -3 }}
    className="p-6 rounded-xl border border-base flex flex-col gap-4"
    style={{ backgroundColor: "var(--color-surface)" }}
  >
    <div
      style={{
        display: "inline-flex",
        padding: "0.5rem",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--color-accent-light)",
        color: "var(--color-accent)",
        width: "fit-content",
      }}
    >
      {card.icon}
    </div>
    <div>
      <h3
        className="font-display"
        style={{
          fontSize: "1rem",
          fontStyle: "italic",
          marginBottom: "0.4rem",
        }}
      >
        {card.title}
      </h3>
      <p
        className="text-secondary"
        style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
      >
        {card.body}
      </p>
    </div>
  </motion.div>
);
