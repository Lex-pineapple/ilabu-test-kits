import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { AppState } from "#/types/store";

const baseUrl = import.meta.env.VITE_MAIN_API;

export const unautorizedApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  reducerPath: "unauthorized-api",
});

export const authorizedApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as AppState).auth.accessToken;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: "authorized-api",
});
