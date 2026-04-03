import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, ...props }, ref) => {
    if (icon) {
      return (
        <div className="input-group">
          <span className="input-icon">{icon}</span>
          <input
            ref={ref}
            className={["input", className].filter(Boolean).join(" ")}
            {...props}
          />
        </div>
      );
    }
    return (
      <input
        ref={ref}
        className={["input", className].filter(Boolean).join(" ")}
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
      className={["input", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
