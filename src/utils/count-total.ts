import type { AnalysisType } from "#store/types/analyses";

export const countTotal = (arr: AnalysisType[]) =>
  arr.reduce((acc, curr) => acc + Number(curr.price), 0);
