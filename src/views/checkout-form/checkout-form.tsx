import { useState } from "react";

import { Container } from "@chakra-ui/react";

import { CodeCheck } from "#/views/checkout-form/components/code-check";
import { ConfirmOrder } from "#/views/checkout-form/components/confirm-order";
import { EmailConfirmation } from "#/views/checkout-form/components/email-confirmation";
import { OrderDetails } from "#/views/checkout-form/components/order-details";

const formStates = {
  codeCheck: <CodeCheck />,
  confirmOrder: <ConfirmOrder />,
  emailConfirm: <EmailConfirmation />,
  orderDetails: <OrderDetails />,
};

const formStatesKeys = Object.keys(formStates) as Array<
  keyof typeof formStates
>;
type formStatesType = (typeof formStatesKeys)[number];

export const CheckoutForm = () => {
  const [formState, setFormState] = useState<formStatesType>("confirmOrder");
  return <Container p="30px 14px">{formStates[formState]}</Container>;
};
