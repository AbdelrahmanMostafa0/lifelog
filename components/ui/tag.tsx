import * as React from "react";
import { cn } from "@/lib/cn";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ selected, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("tag", selected && "tag-selected", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
Tag.displayName = "Tag";
