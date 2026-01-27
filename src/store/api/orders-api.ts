import { authorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import { setCartItems, setCurrLabId } from "#store/slices/cart-slice";
import { setFormData } from "#store/slices/form-slice";
import {
  resetOrderData,
  setOrderData,
  setTubeData,
} from "#store/slices/order-slice";
import type { GeneralResponseType } from "#store/types";
import type {
  AnalysesToLinkType,
  InstructionResponseType,
  LinkedAnalysesResponseType,
  OrderDetailsRequestType,
  OrderDetailsType,
  OrderNNumberResponseType,
} from "#store/types/orders";

export const ordersApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderData: build.query<OrderDetailsType, void>({
      // eslint-disable-next-line complexity
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setOrderData(data));
          if (data.analyses) {
            dispatch(setCartItems(data.analyses));
            dispatch(setCurrLabId(data.analyses[0]?.lab_id ?? ""));
          }
          if (data.personal_data)
            dispatch(
              setFormData({
                date: data.personal_data?.dob ?? "",
                delivery: data.personal_data.delivery_method ?? "",
                deliveryAddress: {
                  apartment:
                    data.personal_data?.pickup_address?.apartment ?? "",
                  building: data.personal_data?.pickup_address?.building ?? "",
                  city: data.personal_data?.pickup_address?.city ?? "",
                  commentary: data.personal_data?.pickup_address?.comment ?? "",
                  entryway: data.personal_data?.pickup_address?.entrance ?? "",
                  floor: data.personal_data?.pickup_address?.floor ?? "",
                  phone: data.personal_data?.pickup_address?.phone ?? "",
                  street: data.personal_data?.pickup_address?.street ?? "",
                },
                email: data.personal_data?.email ?? "",
                firstName: data.personal_data?.first_name ?? "",
                gender: data.personal_data?.gender ?? "",
                labAdressId: data.personal_data?.lab_address_id ?? "",
                lastName: data.personal_data?.last_name ?? "",
                middleName: data.personal_data?.middle_name ?? "",
              }),
            );
          dispatch(setTubeData(data.tubes));
        } catch (error) {
          dispatch(resetOrderData());
          console.error(error);
        }
      },
      query: () => API_ENDPOINTS.ORDERS_CURRENT_PROGRESS,
    }),
    getOrderInstructions: build.query<InstructionResponseType, void>({
      query: () => API_ENDPOINTS.ORDERS_CURRENT_INSTRUCTIONS,
    }),
    getOrderNumber: build.query<OrderNNumberResponseType, void>({
      query: () => API_ENDPOINTS.ORDERS_CURRENT_NUMBER,
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
    postOrderDetails: build.mutation<
      GeneralResponseType,
      OrderDetailsRequestType
    >({
      query: (body) => ({
        body,
        method: "POST",
        url: API_ENDPOINTS.ORDERS_CURRENT,
      }),
    }),
  }),
});

export const {
  useGetOrderDataQuery,
  useGetOrderInstructionsQuery,
  useGetOrderNumberQuery,
  usePostOrderAnalysesMutation,
  usePostOrderDetailsMutation,
} = ordersApi;
