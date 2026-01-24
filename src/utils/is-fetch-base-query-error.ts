import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const isFetchBaseQueryError = (
  error: unknown,
): error is FetchBaseQueryError & { data: object } =>
  typeof error === "object" &&
  error !== null &&
  "status" in error &&
  typeof error.status === "number";
