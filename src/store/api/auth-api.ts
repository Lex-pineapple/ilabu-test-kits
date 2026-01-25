import { authorizedApi, unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
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
          dispatch(setCurrKitUid(data.kit_id));
          localStorage.setItem("kit_id", data.kit_id);
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
        } catch (error) {
          localStorage.removeItem("kit_id");
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
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
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
        } catch (error) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
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
