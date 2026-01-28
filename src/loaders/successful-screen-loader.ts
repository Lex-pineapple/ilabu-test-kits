import { redirect } from "react-router-dom";

import { labsApi } from "#store/api/labs-api";
import { ordersApi } from "#store/api/orders-api";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import store from "#store/store";

export async function loader() {
  const p = store.dispatch(ordersApi.endpoints.getOrderData.initiate());
  const p2 = store.dispatch(ordersApi.endpoints.getOrderNumber.initiate());
  const p3 = store.dispatch(
    ordersApi.endpoints.getOrderInstructions.initiate(),
  );

  try {
    const response = await p.unwrap();
    const response2 = await p2.unwrap();
    const response3 = await p3.unwrap();
    const instructionArray = response3.instructions[0].steps;
    const instruction =
      instructionArray[instructionArray.length - 1]?.description;

    const labId = response?.analyses?.[0].lab_id;
    const labAddressId = response.personal_data?.lab_address_id;

    if (labId) {
      const p3 = store.dispatch(
        labsApi.endpoints.getLabsAddresses.initiate(labId),
      );
      const response3 = await p3.unwrap();
      const labAddressData = response3.find(
        ({ value }) => value === labAddressId,
      );

      return {
        instruction,
        labAddressData,
        orderId: response2.order_number,
        tubes: response.tubes,
      };
    }

    return {
      instruction,
      labAddressData: null,
      orderId: response2.order_number,
      tubes: response.tubes,
    };
  } catch {
    store.dispatch(setNotificationVisibility(true));
    store.dispatch(
      setNotificationData({
        description:
          "Произошла ошибка получения статуса заказа. Попробуйте еще раз",
        status: "error",
      }),
    );
    return redirect("/");
  } finally {
    p.unsubscribe();
  }
}
