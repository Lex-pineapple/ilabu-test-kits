import type { formStatesType } from "#/views/checkout-form/checkout-form";

export const FORM_STEP_ORDER: Record<formStatesType, number> = {
  confirmOrder: 3,
  emailConfirm: 2,
  orderDetails: 1,
};

export const formOrder: formStatesType[] = [
  "orderDetails",
  "emailConfirm",
  "confirmOrder",
];
