import { redirect } from "react-router-dom";

import { PATHS } from "#constants/paths";
import { ordersApi } from "#store/api/orders-api";
import { tubesApi } from "#store/api/tubes-api";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import store from "#store/store";

export async function loader() {
  const p = store.dispatch(ordersApi.endpoints.getOrderInstructions.initiate());
  const p2 = store.dispatch(tubesApi.endpoints.getRequiredTubes.initiate());

  try {
    const response = await p.unwrap();
    const response2 = await p2.unwrap();
    return { instruction: response.instructions[0], tubes: response2.tubes };
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
