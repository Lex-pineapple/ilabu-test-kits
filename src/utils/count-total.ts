import type { AnalysisItemType } from "#constants/card-product-data";

export const countTotal = (arr: AnalysisItemType[]) =>
  arr.reduce((acc, curr) => acc + curr.price, 0);
