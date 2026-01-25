import { redirect } from "react-router";

import { allowedPathsMap } from "#constants/allowed-paths-map";
import { PATHS } from "#constants/paths";
import { authApi, authAuthorizedApi } from "#store/api/auth-api";
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

  try {
    const response = await p.unwrap();

    const pathname = new URL(request.url).pathname;
    const pathByStatus = allowedPathsMap[response.order_status];
    const isAllowedPath = pathByStatus.allowedPaths.some((path) =>
      pathname.match(path),
    );

    store.dispatch(setFormState(pathByStatus.defaultFormState));
    if (!isAllowedPath) {
      return redirect(pathByStatus.defaultPath);
    }
    return "ok";
  } catch {
    store.dispatch(setNotificationVisibility(true));
    store.dispatch(
      setNotificationData({
        description:
          "Ошибка получения статуса заказа. Пожалуйста, введите код набора.",
        status: "error",
      }),
    );
    return redirect(PATHS.root);
  } finally {
    p.unsubscribe();
  }
}
