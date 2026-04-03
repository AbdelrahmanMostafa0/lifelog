import * as React from "react";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ selected, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={["tag", selected && "tag-selected", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
Tag.displayName = "Tag";
