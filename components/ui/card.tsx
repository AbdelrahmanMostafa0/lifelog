import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={["card", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";
