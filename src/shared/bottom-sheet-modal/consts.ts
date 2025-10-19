import { AddressForm } from "#shared/bottom-sheet-modal/address-form";
import { ExitMenu } from "#shared/bottom-sheet-modal/exit-menu";

export const BottomSheetModals = {
  ADDRESS_FORM: AddressForm,
  EXIT_MENU: ExitMenu,
} as const;

export type BottomSheetModalsKeys = keyof typeof BottomSheetModals;
