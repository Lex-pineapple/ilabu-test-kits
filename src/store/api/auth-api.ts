import { authorizedApi, unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import { resetAuth, setAccessToken } from "#store/slices/auth-slice";
import { setCurrKitUid, setOrderStatus } from "#store/slices/main-slice";
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
          dispatch(setCurrKitUid(data.kit_id));
          localStorage.setItem("access_token", data.access_token);
        } catch (error) {
          dispatch(resetAuth());
          console.error(error);
        }
      },
      query: (body) => ({
        body,
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
    verifyToken: build.query<VerifyTokenType, void>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setOrderStatus(data.order_status));
        } catch (error) {
          dispatch(setOrderStatus(null));
          console.error(error);
        }
      },
      query: () => ({
        method: "POST",
        url: API_ENDPOINTS.VERIFY_TOKEN,
      }),
    }),
  }),
});

export const { useVerifyTokenQuery } = authAuthorizedApi;
export const { useGetTokenMutation, useRefreshTokenMutation } = authApi;
