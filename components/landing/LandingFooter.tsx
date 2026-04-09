import Link from "next/link";

export const LandingFooter = () => (
  <footer className="border-t border-base py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
      <span
        className="font-display text-accent"
        style={{ fontSize: "1rem", fontStyle: "italic" }}
      >
        Lifelog
      </span>
      <p className="text-secondary text-center" style={{ fontSize: "0.75rem" }}>
        One line. Every day. Over time.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <Link href="/contact" className="text-secondary" style={{ fontSize: "0.8rem" }}>
          Contact
        </Link>
        <Link href="/privacy" className="text-secondary" style={{ fontSize: "0.8rem" }}>
          Privacy
        </Link>
        <Link href="/terms" className="text-secondary" style={{ fontSize: "0.8rem" }}>
          Terms
        </Link>
        <Link href="/auth/login" className="text-secondary" style={{ fontSize: "0.8rem" }}>
          Sign in
        </Link>
      </div>
    </div>
  </footer>
);
