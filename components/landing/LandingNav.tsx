"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const LandingNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-base"
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <span
          className="font-display text-accent"
          style={{ fontSize: "1.25rem", fontStyle: "italic", letterSpacing: "-0.01em" }}
        >
          Lifelog
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/auth/login" className="nav-link text-sm">Sign in</Link>
          <Link href="/auth/register" className="btn btn-primary">Get started free</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-secondary p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-base overflow-hidden"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="container flex flex-col gap-4 py-4">
              <Link href="/auth/login" className="nav-link text-sm w-fit" onClick={() => setOpen(false)}>
                Sign in
              </Link>
              <Link href="/auth/register" className="btn btn-primary w-fit" onClick={() => setOpen(false)}>
                Get started free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
