import * as React from "react";
import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  variant?: "default" | "ghost";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, variant = "default", className, ...props }, ref) => {
    const baseClass = variant === "ghost"
      ? "bg-transparent border-none outline-none shadow-none ring-0 focus:ring-0 placeholder:opacity-100"
      : "input";

    if (icon) {
      return (
        <div className="input-group">
          <span className="input-icon">{icon}</span>
          <input
            ref={ref}
            className={cn(baseClass, className)}
            {...props}
          />
        </div>
      );
    }
    return (
      <input
        ref={ref}
        className={cn(baseClass, className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn("input", className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
