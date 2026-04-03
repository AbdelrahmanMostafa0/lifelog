import * as React from "react";

type LabelProps = React.HTMLAttributes<HTMLDivElement>;

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={["label", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
Label.displayName = "Label";
