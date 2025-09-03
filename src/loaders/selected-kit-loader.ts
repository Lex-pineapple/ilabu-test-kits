import type { Params } from "react-router";

import { cardProductData } from "#constants/card-product-data";

export const loader = ({ params }: { params: Params<"uid"> }) => {
  const currUid = params?.uid;
  const foundItem = cardProductData.find((item) => item.uid === currUid);
  return foundItem;
};
