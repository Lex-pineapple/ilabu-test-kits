import { authorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { PaymentSessionType } from "#store/types/payments";

export const paymentsApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    createPaymentSession: build.mutation<PaymentSessionType, void>({
      query: () => ({
        method: "POST",
        url: API_ENDPOINTS.PAYMENT_SESSION,
      }),
    }),
  }),
});

export const { useCreatePaymentSessionMutation } = paymentsApi;
