import { Container } from "@chakra-ui/react";

import { ConfirmOrder } from "#/views/checkout-form/components/confirm-order";
import { EmailConfirmation } from "#/views/checkout-form/components/email-confirmation";
import { OrderDetails } from "#/views/checkout-form/components/order-details";
import { useAppSelector } from "#store/hooks";
import { getFormState } from "#store/slices/form-slice";

const formStates = {
  confirmOrder: <ConfirmOrder />,
  emailConfirm: <EmailConfirmation />,
  orderDetails: <OrderDetails />,
};

const formStatesKeys = Object.keys(formStates) as Array<
  keyof typeof formStates
>;
export type formStatesType = (typeof formStatesKeys)[number];

export const CheckoutForm = () => {
  const formState = useAppSelector(getFormState);

  return <Container p="30px 0">{formStates[formState]}</Container>;
};
