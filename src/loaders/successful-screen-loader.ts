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

  try {
    const response = await p.unwrap();
    return { tubes: response.tubes };
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
