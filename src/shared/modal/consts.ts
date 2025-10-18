import { AnalysisModal } from "#shared/modal/analysis-modal";

export const ModalTypes = {
  "ANALYSIS-ITEM": AnalysisModal,
} as const;

export type ModalTypesKeys = keyof typeof ModalTypes;
