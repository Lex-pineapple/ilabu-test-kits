import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "#/hooks/use-auth";
import { FORM_STEP_ORDER } from "#constants/form-steps-order";
import { PATHS } from "#constants/paths";
import { useVerifyTokenQuery } from "#store/api/auth-api";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { setFormState, setStepsCleared } from "#store/slices/form-slice";
import { getCurrKitUid } from "#store/slices/main-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import { redirectPathOnStatus } from "#utils/redirect-on-status";

export const useOrderVerify = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const currOrderUid = useAppSelector(getCurrKitUid);
  const { data, error, isLoading } = useVerifyTokenQuery();

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
    if (data) {
      redirectPathOnStatus({
        currUid: currOrderUid,
        onFormStatus: (formState) => {
          dispatch(setFormState(formState));
          dispatch(setStepsCleared(FORM_STEP_ORDER[formState] - 1));
        },
        onRedirect: (path) => navigate(path, { replace: true }),
        status: data.order_status,
      });
    }
  }, [data]);

  return { isLoading };
};
