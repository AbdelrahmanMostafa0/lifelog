import * as React from "react";

type DividerProps = React.HTMLAttributes<HTMLDivElement>;

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={["divider", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
);
Divider.displayName = "Divider";
