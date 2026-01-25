import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { useAuth } from "#/hooks/use-auth";
import { PATHS } from "#constants/paths";
import { useVerifyTokenMutation } from "#store/api/auth-api";
import { useAppDispatch } from "#store/hooks";
import { type OrderStatusType } from "#store/slices/main-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

type AllowedPathType = {
  allowedPaths: string[];
  defaultPath: string;
};

const allowedPathsMap: Record<OrderStatusType, AllowedPathType> = {
  ANALYSES_SELECTED: {
    allowedPaths: [PATHS._selected, `${PATHS.checkout}?step=1`],
    defaultPath: `${PATHS.checkout}?step=1`,
  },
  DETAILS_FILLED: {
    allowedPaths: [
      PATHS._selected,
      `${PATHS.checkout}?step=1`,
      `${PATHS.checkout}?step=2`,
    ],
    defaultPath: `${PATHS.checkout}?step=2`,
  },
  EMAIL_CONFIRMED: {
    allowedPaths: [
      PATHS._selected,
      `${PATHS.checkout}?step=1`,
      `${PATHS.checkout}?step=3`,
      PATHS.orderError,
    ],
    defaultPath: `${PATHS.checkout}?step=3`,
  },
  NEW: {
    allowedPaths: [PATHS._selected],
    defaultPath: PATHS._selected,
  },
  PAYMENT_PAID: {
    allowedPaths: [PATHS.instruction, PATHS.orderPaid, PATHS.tubes],
    defaultPath: PATHS.orderPaid,
  },
  TUBES_LINKED: {
    allowedPaths: [PATHS.orderSuccess],
    defaultPath: PATHS.orderSuccess,
  },
};

export const useOrderVerify = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const [getVeryStatus, { error, isLoading }] = useVerifyTokenMutation();

  useEffect(() => {
    if (error) {
      dispatch(setNotificationVisibility(true));
      dispatch(
        setNotificationData({
          description:
            "Ошибка получения статуса заказа. Пожалуйста, введите код набора.",
          status: "error",
        }),
      );
      logout();
      navigate(PATHS.root, { replace: true });
    }
  }, [error]);

  useEffect(() => {
    const setPathnameByStatus = async () => {
      const { data } = await getVeryStatus();
      if (data) {
        const pathByStatus = allowedPathsMap[data.order_status];
        const isAllowedPath = pathByStatus.allowedPaths.some((path) =>
          pathname.match(path),
        );
        if (!isAllowedPath) navigate(pathByStatus.defaultPath);
      }
    };
    setPathnameByStatus();
  }, [pathname]);

  return { isLoading };
};
