import type { Params } from "react-router-dom";

import { cardExtensiveData } from "#constants/card-extensive-data";

export async function loader({ params }: { params: Params<"uid"> }) {
  const currUid = params?.uid;
  const foundData = cardExtensiveData.find((item) => item.uid === currUid);
  return foundData;
}
