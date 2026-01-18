import { authorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { GeneralResponseType } from "#store/types";
import type { OtpCodeType } from "#store/types/otp";

export const otpApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    cofirmOtp: build.mutation<GeneralResponseType, OtpCodeType>({
      query: () => ({
        method: "POST",
        url: API_ENDPOINTS.OTP_CONFIRM,
      }),
    }),
    sendOtp: build.mutation<GeneralResponseType, void>({
      query: () => ({
        method: "POST",
        url: API_ENDPOINTS.OTP,
      }),
    }),
  }),
});

export const { useCofirmOtpMutation, useSendOtpMutation } = otpApi;
