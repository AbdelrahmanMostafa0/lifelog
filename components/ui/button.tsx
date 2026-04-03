"use client";
import * as React from "react";

type Variant = "primary" | "secondary" | "tertiary" | "danger";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  danger: "btn-danger",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={["btn", variantClass[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
