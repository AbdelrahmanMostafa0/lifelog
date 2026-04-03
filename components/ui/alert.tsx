import * as React from "react";

type AlertVariant = "info" | "success" | "warning" | "danger";

const variantClass: Record<AlertVariant, string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  danger: "alert-danger",
};

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: AlertVariant;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={["alert", variantClass[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  )
);
Alert.displayName = "Alert";
