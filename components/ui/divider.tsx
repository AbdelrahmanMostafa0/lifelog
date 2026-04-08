import * as React from "react";
import { cn } from "@/lib/cn";

type DividerProps = React.HTMLAttributes<HTMLDivElement>;

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("divider", className)}
      {...props}
    />
  )
);
Divider.displayName = "Divider";
