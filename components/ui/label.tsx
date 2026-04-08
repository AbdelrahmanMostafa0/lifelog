import * as React from "react";
import { cn } from "@/lib/cn";

type LabelProps = React.HTMLAttributes<HTMLDivElement>;

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("label", className)}
      {...props}
    >
      {children}
    </div>
  )
);
Label.displayName = "Label";
