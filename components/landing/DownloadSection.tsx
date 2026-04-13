"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addToWishlist } from "@/services/wishlist.service";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const viewport = { once: true, amount: 0.3 };
const schema = z.object({
  email: z.email(),
});
const AppStoreBadge = () => (
  <div
    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-base cursor-not-allowed select-none"
    style={{
      backgroundColor: "var(--color-surface)",
      minWidth: 160,
      opacity: 0.45,
    }}
    aria-disabled="true"
  >
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="text-left">
      <p
        className="text-secondary"
        style={{ fontSize: "0.6rem", lineHeight: 1 }}
      >
        Download on the
      </p>
      <p
        className="text-primary font-medium"
        style={{ fontSize: "0.9rem", lineHeight: 1.4 }}
      >
        App Store
      </p>
    </div>
  </div>
);

const GooglePlayBadge = () => (
  <div
    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-base cursor-not-allowed select-none"
    style={{
      backgroundColor: "var(--color-surface)",
      minWidth: 160,
      opacity: 0.45,
    }}
    aria-disabled="true"
  >
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="currentColor"
      aria-hidden
    >
      <path d="M3.18 23.76c.31.17.67.19 1.01.07l.1-.06 10.5-6.07-2.28-2.28-9.33 8.34zm-1.1-20.4A1.49 1.49 0 0 0 2 4.09v15.82c0 .49.23.94.62 1.22l.1.07 8.85-8.86v-.21L2.08 3.36zm15.6 8.5-2.97-1.71-2.55 2.54 2.55 2.55 2.98-1.73c.85-.49.85-1.16-.01-1.65zM4.19.24a1.33 1.33 0 0 0-1.01.07l9.33 9.33 2.28-2.28L4.3.3l-.1-.06z" />
    </svg>
    <div className="text-left">
      <p
        className="text-secondary"
        style={{ fontSize: "0.6rem", lineHeight: 1 }}
      >
        Get it on
      </p>
      <p
        className="text-primary font-medium"
        style={{ fontSize: "0.9rem", lineHeight: 1.4 }}
      >
        Google Play
      </p>
    </div>
  </div>
);

const WaitlistForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: addToWishlist,
  });
  const onSubmit = (data: { email: string }) => {
    mutate(data.email);
  };

  if (isSuccess) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-accent"
        style={{ fontSize: "0.9rem" }}
      >
        You&apos;re on the list. We&apos;ll reach out when it&apos;s ready.
      </motion.p>
    );
  }

  return (
    <div className="space-y-2 w-full mx-auto flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row  gap-2 w-full"
        style={{ maxWidth: "32rem" }}
      >
        <div className="flex-1 space-y-1">
          <Input
            {...register("email", { required: true })}
            className="border"
            placeholder="your@email.com"
          />
        </div>
        <Button disabled={isPending} type="submit">
          {isPending ? "Joining..." : "Join waitlist"} <ArrowRight size={14} />
        </Button>
      </form>
      {errors.email && <p className="text-red-500">Email is required</p>}
    </div>
  );
};

const leaves = [
  { top: "8%", left: "2%", size: 140, rotate: -20, opacity: 0.18, delay: 0 },
  { top: "55%", left: "0%", size: 100, rotate: 30, opacity: 0.12, delay: 0.2 },
  { top: "5%", right: "3%", size: 160, rotate: 140, opacity: 0.15, delay: 0.1 },
  {
    top: "60%",
    right: "1%",
    size: 110,
    rotate: -50,
    opacity: 0.13,
    delay: 0.3,
  },
];

export const DownloadSection = () => (
  <section className="border-t border-base py-20 md:py-28 relative overflow-hidden">
    {/* Floating leaf decorations */}
    {leaves.map((leaf, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none select-none"
        style={{
          top: leaf.top,
          left: "left" in leaf ? leaf.left : undefined,
          right: "right" in leaf ? leaf.right : undefined,
          opacity: leaf.opacity,
          rotate: leaf.rotate,
        }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: leaf.opacity, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: leaf.delay, ease: "easeOut" }}
      >
        <Image
          src="/images/leaf.png"
          alt=""
          width={leaf.size}
          height={leaf.size}
        />
      </motion.div>
    ))}

    <motion.div
      className="container text-center relative"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger}
    >
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="label text-accent mb-4"
      >
        TAKE IT EVERYWHERE
      </motion.p>
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="font-display mb-4"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 4rem)",
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        Log from your pocket,
        <br />
        reflect from anywhere.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-secondary mx-auto mb-8"
        style={{ fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "40ch" }}
      >
        The best moment to write is the moment things happen. Capture it
        instantly on mobile — then revisit everything on any device.
      </motion.p>

      {/* Disabled store badges */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        <AppStoreBadge />
        <GooglePlayBadge />
      </motion.div>

      {/* Divider */}
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-secondary mb-5"
        style={{ fontSize: "0.8rem" }}
      >
        Not available yet — be the first to know when it launches.
      </motion.p>

      {/* Waitlist form */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <WaitlistForm />
      </motion.div>
    </motion.div>
  </section>
);
