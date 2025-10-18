import { ExitMenu } from "#shared/bottom-sheet-modal/exit-menu";

export const BottomSheetModals = {
  EXIT_MENU: ExitMenu,
} as const;

export type BottomSheetModalsKeys = keyof typeof BottomSheetModals;
