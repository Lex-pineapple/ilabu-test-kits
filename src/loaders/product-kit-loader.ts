import { type Params, redirect } from "react-router-dom";

import { cardExtensiveData } from "#constants/card-extensive-data";

export async function loader({ params }: { params: Params<"uid"> }) {
  const currUid = params?.uid;
  const foundData = cardExtensiveData.find((item) => item.uid === currUid);
  if (!foundData) {
    throw redirect("/not-found");
  }
  return foundData;
}
