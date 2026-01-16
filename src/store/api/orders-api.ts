import { authorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import { resetOrderData, setOrderData } from "#store/slices/order-slice";
import type { GeneralResponseType } from "#store/types";
import type {
  AnalysesToLinkType,
  InstructionType,
  LinkedAnalysesResponseType,
  OrderDetailsType,
} from "#store/types/orders";

export const addressApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderData: build.query<OrderDetailsType, void>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setOrderData(data));
        } catch (error) {
          dispatch(resetOrderData());
          console.error(error);
        }
      },
      query: () => API_ENDPOINTS.ORDERS_CURRENT_PROGRESS,
    }),
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
    postOrderDetails: build.mutation<GeneralResponseType, void>({
      query: (body) => ({
        body,
        method: "POST",
        url: API_ENDPOINTS.ORDERS_CURRENT_PROGRESS,
      }),
    }),
  }),
});

export const {
  useGetOrderDataQuery,
  useGetOrderInstructionsQuery,
  usePostOrderAnalysesMutation,
  usePostOrderDetailsMutation,
} = addressApi;
