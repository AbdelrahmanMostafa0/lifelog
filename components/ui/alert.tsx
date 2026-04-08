import * as React from "react";
import { cn } from "@/lib/cn";

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
      className={cn("alert", variantClass[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
);
Alert.displayName = "Alert";
