import { AnalysisModal } from "#shared/modal/analysis-modal";
import { ErrorModal } from "#shared/modal/error-modal";

export const ModalTypes = {
  "ANALYSIS-ITEM": AnalysisModal,
  ERROR: ErrorModal,
} as const;

export type ModalTypesKeys = keyof typeof ModalTypes;
