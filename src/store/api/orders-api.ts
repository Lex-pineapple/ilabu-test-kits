import { authorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { GeneralResponseType } from "#store/types";
import type {
  AnalysesToLinkType,
  InstructionType,
  LinkedAnalysesResponseType,
  OrderType,
} from "#store/types/orders";

export const addressApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderInstructions: build.query<InstructionType, void>({
      query: () => API_ENDPOINTS.ORDERS_CURRENT_INSTRUCTIONS,
    }),
    postOrderAnalyses: build.mutation<
      LinkedAnalysesResponseType,
      AnalysesToLinkType
    >({
      query: (body) => ({
        body,
        method: "POST",
        url: API_ENDPOINTS.ORDERS_CURRENT_ANALYSES,
      }),
    }),
    postOrderDetails: build.mutation<GeneralResponseType, OrderType>({
      query: (body) => ({
        body,
        method: "POST",
        url: API_ENDPOINTS.ORDERS_CURRENT,
      }),
    }),
  }),
});

export const {
  useGetOrderInstructionsQuery,
  usePostOrderAnalysesMutation,
  usePostOrderDetailsMutation,
} = addressApi;
