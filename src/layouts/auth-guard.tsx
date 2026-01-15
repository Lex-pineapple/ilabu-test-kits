import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

import { Spinner } from "#/components/spinner";
import { PATHS } from "#constants/paths";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { selectAccessToken } from "#store/slices/auth-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const AuthGuard = () => {
  const [isGuardLoading, setIsGuardLoading] = useState(true);
  const accessToken =
    useAppSelector(selectAccessToken) || localStorage.getItem("access_token");
  const dispatch = useAppDispatch();
  // const [refreshToken, { error: refreshError, isLoading: refreshLoading }] =
  // useRefreshTokenMutation();

  useEffect(() => {
    // TODO: add token expire time and refresh call
    setIsGuardLoading(false);
  }, [accessToken]);

  if (isGuardLoading) {
    return <Spinner />;
  }

  if (!accessToken) {
    dispatch(setNotificationVisibility(true));
    dispatch(
      setNotificationData({
        description:
          "Не авторизован. Пожалуйста, введите код набора чтобы продолжить.",
        status: "error",
      }),
    );
    return <Navigate replace to={PATHS.root} />;
  }

  return <Outlet />;
};
