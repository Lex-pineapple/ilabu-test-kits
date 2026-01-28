import { redirect } from "react-router-dom";

import { PATHS } from "#constants/paths";
import { ordersApi } from "#store/api/orders-api";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import store from "#store/store";

export async function loader() {
  const p = store.dispatch(ordersApi.endpoints.getOrderInstructions.initiate());

  try {
    const response = await p.unwrap();
    return response.instructions[0];
  } catch {
    store.dispatch(setNotificationVisibility(true));
    store.dispatch(
      setNotificationData({
        description:
          "Произошла ошибка при получении инструкции. Пожалуйста, попробуйте еще раз.",
        status: "error",
      }),
    );
    return redirect(PATHS.orderPaid);
  } finally {
    p.unsubscribe();
  }
}
