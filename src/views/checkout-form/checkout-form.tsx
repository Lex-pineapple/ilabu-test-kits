import { Container } from "@chakra-ui/react";

import { CodeCheck } from "#/views/checkout-form/components/code-check";
import { ConfirmOrder } from "#/views/checkout-form/components/confirm-order";
import { EmailConfirmation } from "#/views/checkout-form/components/email-confirmation";
import { OrderDetails } from "#/views/checkout-form/components/order-details";
import { useFormQuery } from "#/views/checkout-form/use-form-query";
import { useAppSelector } from "#store/hooks";
import { getFormState } from "#store/slices/form-slice";

const formStates = {
  codeCheck: <CodeCheck />,
  confirmOrder: <ConfirmOrder />,
  emailConfirm: <EmailConfirmation />,
  orderDetails: <OrderDetails />,
};

const formOrder: formStatesType[] = [
  "codeCheck",
  "orderDetails",
  "emailConfirm",
  "confirmOrder",
];

const formStatesKeys = Object.keys(formStates) as Array<
  keyof typeof formStates
>;
export type formStatesType = (typeof formStatesKeys)[number];

export const CheckoutForm = () => {
  const { step } = useFormQuery();
  const formState = useAppSelector(getFormState);
  const formStateFull = step ? formOrder[step - 1] : formState;

  return <Container p="30px 0">{formStates[formStateFull]}</Container>;
};
