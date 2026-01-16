import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router";

import { Spinner } from "#/components/spinner";
import { useAuth } from "#/hooks/use-auth";
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
  const { logout } = useAuth();
  // const [refreshToken, { error: refreshError, isLoading: refreshLoading }] =
  // useRefreshTokenMutation();

  useEffect(() => {
    // TODO: decode token and get .exp to check if token is expired
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      const tokenExpirationTime = decodedToken?.exp
        ? decodedToken.exp * 1000
        : null;
      if (
        (tokenExpirationTime && Date.now() >= tokenExpirationTime) ||
        !tokenExpirationTime
      ) {
        setIsGuardLoading(false);
        dispatch(setNotificationVisibility(true));
        dispatch(
          setNotificationData({
            description:
              "Время авторизации истекло. Пожалуйста, войдите снова.",
            status: "error",
          }),
        );
        logout();
      }
    }
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
