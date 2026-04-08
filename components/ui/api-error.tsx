import { cn } from "@/lib/cn";
import axios from "axios";

interface ValidationError {
  field: string;
  message: string;
}

interface ApiErrorData {
  message: string;
  errors?: ValidationError[];
}

interface ApiErrorProps {
  error: unknown;
  className?: string;
}

const ApiError = ({ error, className }: ApiErrorProps) => {
  if (!error) return null;

  if (!axios.isAxiosError(error)) {
    return (
      <p className={`text-xs text-red-500 ${className}`}>{String(error)}</p>
    );
  }

  const data = error.response?.data as ApiErrorData | undefined;

  if (!data) {
    return (
      <p className={cn("text-xs text-red-500", className)}>{error.message}</p>
    );
  }

  if (data.errors && data.errors.length > 0) {
    return (
      <div className="space-y-1">
        <p className={cn("text-xs text-red-500", className)}>{data.message}</p>
        <ul className="space-y-0.5">
          {data.errors.map((err) => (
            <li
              key={err.field}
              className={cn("text-xs text-red-500", className)}
            >
              <span className="font-semibold capitalize">{err.field}:</span>{" "}
              {err.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <p className={cn("text-xs text-red-500", className)}>{data.message}</p>
  );
};

export default ApiError;
