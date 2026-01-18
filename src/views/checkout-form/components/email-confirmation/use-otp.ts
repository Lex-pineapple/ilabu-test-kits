import { useEffect, useState } from "react";

import { isFetchBaseQueryError } from "#/hooks/use-qr-code";
import { useCofirmOtpMutation, useSendOtpMutation } from "#store/api/otp-api";
import { useAppDispatch } from "#store/hooks";
import { setFormState } from "#store/slices/form-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const useOtp = () => {
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [sendOtp, { isError, isLoading }] = useSendOtpMutation();
  const [firstCodeSent, setFirstCodeSent] = useState(false);
  const [confirmOtp, { error: confirmError, isLoading: isConfirmLoading }] =
    useCofirmOtpMutation();

  useEffect(() => {
    sendOtp();
    setFirstCodeSent(true);
  }, []);

  useEffect(() => {
    const confirm = async () => {
      if (otp.join("").length === 4) {
        const { data } = await confirmOtp({ code: otp.join("") });
        if (data && data.code === 200) dispatch(setFormState("confirmOrder"));
      }
    };
    confirm();
  }, [confirmOtp, otp]);

  useEffect(() => {
    if (confirmError) {
      if (
        isFetchBaseQueryError(confirmError) &&
        (confirmError.status === 400 ||
          confirmError.status === 404 ||
          confirmError.status === 422)
      ) {
        dispatch(setNotificationVisibility(true));
        dispatch(
          setNotificationData({
            description:
              "Произошла ошибка при подтверждении кода. Пожалуйста, проверьте правильность введенного кода.",
            status: "error",
          }),
        );
      } else {
        dispatch(setNotificationVisibility(true));
        dispatch(
          setNotificationData({
            description:
              "Произошла ошибка сервера. Пожалуйста, попробуйте еще раз позже.",
            status: "error",
          }),
        );
      }
    }
  }, [confirmError]);

  return {
    isConfirmLoading,
    isError,
    isFirstCodeLoading: isLoading && !firstCodeSent,
    isLoading,
    otp,
    resend: sendOtp,
    setOtp,
  };
};
