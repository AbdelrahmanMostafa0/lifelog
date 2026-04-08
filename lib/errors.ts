import { AxiosError } from "axios";

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: { field: string; message: string }[];
}

export function parseApiError(error: unknown): ApiError {
  if (error instanceof AxiosError && error.response?.data) {
    const data = error.response.data;
    return {
      message: data.message ?? "Something went wrong",
      statusCode: data.statusCode ?? error.response.status,
      errors: data.errors,
    };
  }
  return { message: "Network error", statusCode: 0 };
}
