import { PATHS } from "#constants/paths";
import type { OrderStatusType } from "#store/slices/main-slice";

type AllowedPathType = {
  allowedPaths: string[];
  defaultPath: string;
};

export const allowedPathsMap: Record<OrderStatusType, AllowedPathType> = {
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
