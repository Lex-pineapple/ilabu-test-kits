import { AnalysisModal } from "#shared/modal/analysis-modal";
import { ErrorModal } from "#shared/modal/error-modal";
import { QrModal } from "#shared/modal/qr-modal";

export const ModalTypes = {
  "ANALYSIS-ITEM": AnalysisModal,
  ERROR: ErrorModal,
  QR: QrModal,
} as const;

export type ModalTypesKeys = keyof typeof ModalTypes;
