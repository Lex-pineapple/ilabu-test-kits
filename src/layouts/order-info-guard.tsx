import { Navigate, Outlet } from "react-router";

import { Spinner } from "#/components/spinner";
import { useOrderVerify } from "#/hooks/use-order-verify";
import { PATHS } from "#constants/paths";
import { useGetOrderDataQuery } from "#store/api/orders-api";
import { useAppDispatch } from "#store/hooks";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const UserInfoGuard = () => {
  const dispatch = useAppDispatch();
  const { isLoading: isOrderVerifyLoading } = useOrderVerify();
  const { error, isLoading } = useGetOrderDataQuery();

  if (isLoading || isOrderVerifyLoading) {
    return <Spinner />;
  }
  if (error) {
    dispatch(setNotificationVisibility(true));
    dispatch(
      setNotificationData({
        description:
          "Произошла ошибка при получении информации о заказе. Пожалуйста, попробуйте снова.",
        status: "error",
      }),
    );
    return <Navigate to={PATHS.root} />;
  }

  return <Outlet />;
};
