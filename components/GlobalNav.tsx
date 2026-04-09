"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/stores/user.store";
import { logoutUser } from "@/services/auth.service";
import Image from "next/image";

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({
  src,
  name,
  size,
}: {
  src?: string;
  name: string;
  size: number;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src) {
    return (
      <Image
        width={size}
        height={size}
        src={src}
        alt={name}
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="rounded-full flex items-center justify-center font-medium shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: size <= 30 ? "0.7rem" : "0.85rem",
        backgroundColor: "var(--color-accent-light)",
        color: "var(--color-accent)",
      }}
    >
      {initials}
    </div>
  );
}

// ─── GlobalNav ────────────────────────────────────────────────────────────────

export const GlobalNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = useUserStore((s) => s.user);
  const clearUser = useUserStore((s) => s.clearUser);
  const router = useRouter();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearUser();
      router.push("/");
    },
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout(undefined);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed w-full top-0 z-50 border-b border-base"
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href={user ? "/home" : "/"}
          className="font-display text-accent"
          style={{
            fontSize: "1.25rem",
            fontStyle: "italic",
            letterSpacing: "-0.01em",
          }}
        >
          Lifelog
        </Link>

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              {/* Trigger */}

              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 hover:opacity-75 transition-opacity"
              >
                <Avatar src={user.avatar} name={user.name} size={30} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {user.name}
                </span>
                <ChevronDown
                  size={14}
                  style={{
                    color: "var(--color-text-secondary)",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 rounded-lg border border-base overflow-hidden"
                    style={{
                      minWidth: 200,
                      backgroundColor: "var(--color-surface)",
                      boxShadow:
                        "0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -1px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* User info */}
                    <div
                      className="px-4 py-3 border-b border-base"
                      style={{ backgroundColor: "var(--color-bg)" }}
                    >
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {user.name}
                      </p>
                      <p
                        className="text-xs mt-0.5 truncate"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {user.email}
                      </p>
                    </div>

                    {/* Logs */}
                    <Link
                      href="/home"
                      onClick={() => setDropdownOpen(false)}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--color-bg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      Logs
                    </Link>

                    {/* Sign out */}
                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors"
                      style={{
                        color: "var(--color-danger)",
                        opacity: isLoggingOut ? 0.5 : 1,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--color-bg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <LogOut size={14} />
                      {isLoggingOut ? "Signing out…" : "Sign out"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link href="/auth/login" className="nav-link text-sm">
                Sign in
              </Link>
              <Link href="/auth/register" className="btn btn-primary">
                Get started free
              </Link>
            </>
          )}
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-secondary p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-base overflow-hidden"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="container flex flex-col gap-4 py-4">
              {user ? (
                <>
                  {/* User info row */}
                  <div className="flex items-center gap-3 pb-3 border-b border-base">
                    <Avatar src={user.avatar} name={user.name} size={36} />
                    <div className="min-w-0">
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {user.name}
                      </p>
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* Logs link */}
                  <Link
                    href="/home"
                    className="nav-link text-sm w-fit"
                    onClick={() => setMenuOpen(false)}
                  >
                    Logs
                  </Link>

                  {/* Sign out */}
                  <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="flex items-center gap-2 text-sm w-fit transition-opacity"
                    style={{
                      color: "var(--color-danger)",
                      opacity: isLoggingOut ? 0.5 : 1,
                    }}
                  >
                    <LogOut size={14} />
                    {isLoggingOut ? "Signing out…" : "Sign out"}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="nav-link text-sm w-fit"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/register"
                    className="btn btn-primary w-fit"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get started free
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
