import { authorizedApi, unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import { resetAuth, setAccessToken } from "#store/slices/auth-slice";
import type {
  AccessTokenType,
  AuthKitType,
  AuthResponseType,
  RefreshTokenType,
  VerifyTokenType,
} from "#store/types/auth";

export const authApi = unautorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getToken: build.mutation<AuthResponseType, AuthKitType>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAccessToken(data.access_token));
        } catch (error) {
          dispatch(resetAuth());
          console.error(error);
        }
      },
      query: (body) => ({
        body,
        credentials: "include",
        method: "POST",
        url: API_ENDPOINTS.LOGIN,
      }),
    }),
    refreshToken: build.mutation<AccessTokenType, RefreshTokenType>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setAccessToken(data.access_token);
        } catch (error) {
          dispatch(resetAuth());
          console.error(error);
        }
      },
      query: (body) => ({
        body,
        method: "POST",
        url: API_ENDPOINTS.REFRESH_TOKEN,
      }),
    }),
  }),
});

export const authAuthorizedApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    verifyToken: build.mutation<VerifyTokenType, void>({
      query: () => ({
        method: "POST",
        url: API_ENDPOINTS.VERIFY_TOKEN,
      }),
    }),
  }),
});

export const { useVerifyTokenMutation } = authAuthorizedApi;
export const { useGetTokenMutation, useRefreshTokenMutation } = authApi;
