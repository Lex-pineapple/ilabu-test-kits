import type { formStatesType } from "#/views/checkout-form/checkout-form";
import { PATHS } from "#constants/paths";
import type { OrderStatusType } from "#store/slices/main-slice";

type RedirectPathOnStatusType = {
  currUid: string;
  status: OrderStatusType;
  onFormStatus: (formState: formStatesType) => void;
  onRedirect: (path: string) => void;
};

export const redirectPathOnStatus = ({
  currUid,
  onFormStatus,
  onRedirect,
  status,
}: RedirectPathOnStatusType) => {
  switch (status) {
    case "ANALYSES_SELECTED":
      onFormStatus("orderDetails");
      onRedirect(`${PATHS.checkout}`);
      break;
    case "DETAILS_FILLED":
      onFormStatus("emailConfirm");
      onRedirect(`${PATHS.checkout}`);
      break;
    case "NEW":
      onRedirect(`${PATHS._selected}/${currUid}`);
      break;
    case "PAYMENT_PAID":
      onRedirect(PATHS.tubes);
      break;
    case "TUBES_LINKED":
      onRedirect(PATHS.orderSuccess);
      break;
    default:
      onRedirect(PATHS.root);
      break;
  }
};
