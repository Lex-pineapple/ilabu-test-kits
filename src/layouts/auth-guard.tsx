import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";

import { Spinner } from "#/components/spinner";
import { useAuth } from "#/hooks/use-auth";
import { PATHS } from "#constants/paths";
import { useAppDispatch } from "#store/hooks";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const AuthGuard = () => {
  const dispatch = useAppDispatch();
  const {
    accessToken,
    checkIsTokenExpired,
    isAuthorizing,
    loadUserFromStorage,
    logout,
  } = useAuth();

  useEffect(() => {
    const isTokenExpired = checkIsTokenExpired(accessToken);
    if (isTokenExpired) {
      logout();
    } else loadUserFromStorage();
  }, []);

  useEffect(() => {
    if (!accessToken) {
      dispatch(setNotificationVisibility(true));
      dispatch(
        setNotificationData({
          description:
            "Не авторизован. Пожалуйста, введите код набора чтобы продолжить.",
          status: "error",
        }),
      );
    }
  }, [accessToken]);

  if (isAuthorizing) {
    return <Spinner text="Авторизация" />;
  }

  if (!accessToken) {
    return <Navigate replace to={PATHS.root} />;
  }

  return <Outlet />;
};
