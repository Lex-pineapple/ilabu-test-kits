import type { Params } from "react-router";

import { cardExtensiveData } from "#constants/card-extensive-data";

export const loader = ({ params }: { params: Params<"uid"> }) => {
  const currUid = params?.uid;
  const foundItem = cardExtensiveData.find((item) => item.uid === currUid);
  return foundItem;
};
