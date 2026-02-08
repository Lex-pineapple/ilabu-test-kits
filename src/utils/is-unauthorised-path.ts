import { PATHS } from "#constants/paths";

const AUTHORISED_PATHS = [
  PATHS.selectedKit,
  PATHS.orderError,
  PATHS.instruction,
  PATHS.orderPaid,
  PATHS.orderSuccess,
  PATHS.checkout,
  PATHS.tubes,
];

export const isUnauthorisedPath = (currPath: string) =>
  !AUTHORISED_PATHS.includes(currPath);
