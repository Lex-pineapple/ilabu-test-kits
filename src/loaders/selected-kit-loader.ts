import type { Params } from "react-router";

import { cardExtensiveData } from "#constants/card-extensive-data";
import { setCurrKitUid } from "#store/slices/main-slice";
import store from "#store/store";

export const loader = ({ params }: { params: Params<"uid"> }) => {
  const currUid = params?.uid;
  if (currUid) store.dispatch(setCurrKitUid(currUid));
  const foundItem = cardExtensiveData.find((item) => item.uid === currUid);
  return foundItem;
};
