import { useEffect } from "react";
import dayjs from "dayjs";

import type { Inputs } from "#/views/checkout-form/components/order-details/order-details";
import { usePostOrderDetailsMutation } from "#store/api/orders-api";
import { useSendOtpMutation } from "#store/api/otp-api";
import { useAppDispatch } from "#store/hooks";
import {
  setFormData,
  setFormState,
  setOtpError,
} from "#store/slices/form-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const useOrderDetails = () => {
  const dispatch = useAppDispatch();
  const [postOrderDetails, { error, isLoading }] =
    usePostOrderDetailsMutation();
  const [sendOtp, { isError: isOtpError, isLoading: isOtpLoading }] =
    useSendOtpMutation();

  useEffect(() => {
    if (error) {
      dispatch(setNotificationVisibility(true));
      dispatch(
        setNotificationData({
          description:
            "Произошла ошибка при отправке данных заказа. Пожалуйста, попробуйте еще раз.",
          status: "error",
        }),
      );
    }
  }, [error]);

  useEffect(() => {
    if (isOtpError) {
      dispatch(setOtpError(true));
    }
  });

  const submitOrderDetails = async (formData: Inputs, skipOtp?: boolean) => {
    dispatch(setFormData(formData));
    const orderDetails = {
      delivery_method: formData.delivery,
      dob: dayjs(formData.date).format("DD.MM.YYYY"),
      email: formData.email,
      first_name: formData.firstName,
      gender: formData.gender,
      lab_address_id:
        formData.delivery === "personal" ? formData.labAdressId : undefined,
      last_name: formData.lastName,
      middle_name: formData.middleName,
      pickup_address:
        formData.delivery === "courier" && formData.deliveryAddress
          ? {
              apartment: formData.deliveryAddress.apartment,
              building: formData.deliveryAddress.building,
              city: formData.deliveryAddress.city,
              comment: formData.deliveryAddress.commentary,
              entrance: formData.deliveryAddress.entryway,
              floor: formData.deliveryAddress.floor,
              phone: formData.deliveryAddress.phone,
              street: formData.deliveryAddress.street,
            }
          : undefined,
    };
    const { data } = await postOrderDetails(orderDetails);
    if (data && data.code === 200) {
      if (skipOtp) dispatch(setFormState("confirmOrder"));
      else {
        const { data: otpData } = await sendOtp();
        if (otpData && otpData.code === 200) {
          dispatch(setFormState("emailConfirm"));
        }
      }
    }
  };

  return { isLoading: isLoading || isOtpLoading, submitOrderDetails };
};
