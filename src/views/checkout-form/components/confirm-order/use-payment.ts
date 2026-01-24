import { useCreatePaymentSessionMutation } from "#store/api/payments-api";
import { useAppDispatch } from "#store/hooks";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const usePayment = () => {
  const dispatch = useAppDispatch();
  const [initiatePayment, { isLoading }] = useCreatePaymentSessionMutation();

  const onPayClick = async () => {
    const { data, error } = await initiatePayment();

    if (data) {
      window.location.href = data.redirect_url;
    }
    if (error) {
      dispatch(setNotificationVisibility(true));
      dispatch(
        setNotificationData({
          description:
            "Произошла ошибка при создании сессии оплаты. Пожалуйста попробуйте позже",
          status: "error",
        }),
      );
    }
  };

  return {
    isLoading,
    onPayClick,
  };
};
