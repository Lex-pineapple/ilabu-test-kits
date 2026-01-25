import type { formStatesType } from "#/views/checkout-form/checkout-form";
import { PATHS } from "#constants/paths";
import type { OrderStatusType } from "#store/slices/main-slice";

type AllowedPathType = {
  allowedFormStates: formStatesType[];
  allowedPaths: string[];
  defaultFormState: formStatesType;
  defaultPath: string;
};

export const allowedPathsMap: Record<OrderStatusType, AllowedPathType> = {
  ANALYSES_SELECTED: {
    allowedFormStates: ["orderDetails"],
    allowedPaths: [PATHS._selected, PATHS.checkout],
    defaultFormState: "orderDetails",
    defaultPath: PATHS.checkout,
  },
  DETAILS_FILLED: {
    allowedFormStates: ["orderDetails", "emailConfirm"],
    allowedPaths: [PATHS._selected, PATHS.checkout],
    defaultFormState: "emailConfirm",
    defaultPath: PATHS.checkout,
  },
  EMAIL_CONFIRMED: {
    allowedFormStates: ["orderDetails", "confirmOrder"],
    allowedPaths: [PATHS._selected, PATHS.checkout, PATHS.orderError],
    defaultFormState: "confirmOrder",
    defaultPath: PATHS.checkout,
  },
  NEW: {
    allowedFormStates: [],
    allowedPaths: [PATHS._selected],
    defaultFormState: "orderDetails",
    defaultPath: PATHS._selected,
  },
  PAYMENT_PAID: {
    allowedFormStates: [],
    allowedPaths: [PATHS.instruction, PATHS.orderPaid, PATHS.tubes],
    defaultFormState: "orderDetails",
    defaultPath: PATHS.orderPaid,
  },
  TUBES_LINKED: {
    allowedFormStates: [],
    allowedPaths: [PATHS.orderSuccess],
    defaultFormState: "orderDetails",
    defaultPath: PATHS.orderSuccess,
  },
};
