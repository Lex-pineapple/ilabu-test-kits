import { redirect } from "react-router";

import { allowedPathsMap } from "#constants/allowed-paths-map";
import { PATHS } from "#constants/paths";
import { authApi, authAuthorizedApi } from "#store/api/auth-api";
import { ordersApi } from "#store/api/orders-api";
import { setFormState } from "#store/slices/form-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import store from "#store/store";

type LoaderArgs = {
  request: {
    url: string;
  };
};

export async function loader({ request }: LoaderArgs) {
  const p = store.dispatch(authAuthorizedApi.endpoints.verifyToken.initiate());
  const p2 = store.dispatch(ordersApi.endpoints.getOrderData.initiate());
  const kitId = localStorage.getItem("kit_id");

  try {
    const response = await p.unwrap();
    const response2 = await p2.unwrap();

    const pathname = new URL(request.url).pathname;
    const pathByStatus = allowedPathsMap[response.order_status];
    const isAllowedPath = pathByStatus.allowedPaths.some((path) =>
      pathname.match(path),
    );

    store.dispatch(setFormState(pathByStatus.defaultFormState));
    if (!isAllowedPath) {
      if (pathByStatus.defaultPath === PATHS._selected)
        return redirect(`${PATHS._selected}/${kitId}`);
      return redirect(pathByStatus.defaultPath);
    }
    return { ...response2 };
  } catch {
    store.dispatch(setNotificationVisibility(true));
    store.dispatch(
      setNotificationData({
        description:
          "Произошла ошибка при получении информации о заказе. Пожалуйста, попробуйте снова.",
        status: "error",
      }),
    );
    return redirect(PATHS.root);
  } finally {
    p.unsubscribe();
  }
}
