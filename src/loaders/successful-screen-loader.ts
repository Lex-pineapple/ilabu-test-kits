import { redirect } from "react-router-dom";

import { labsApi } from "#store/api/labs-api";
import { ordersApi } from "#store/api/orders-api";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import store from "#store/store";

const ORDER_QUERY = "wsb_order_num";

type LoaderArgs = {
  request: {
    url: string;
  };
};

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const orderId = url.searchParams.get(ORDER_QUERY);
  const p = store.dispatch(ordersApi.endpoints.getOrderData.initiate());

  try {
    const response = await p.unwrap();
    return { orderId, tubes: response.tubes };
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
