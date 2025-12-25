import { type Params, redirect } from "react-router";

import { kitsApi } from "#store/api/kits-api";
import store from "#store/store";

export const loader = async ({ params }: { params: Params<"uid"> }) => {
  const currUid = params?.uid;
  if (currUid) {
    const p = store.dispatch(
      kitsApi.endpoints.getKitAnalyses.initiate(currUid),
    );

    try {
      const response = await p.unwrap();
      return response;
    } catch {
      return redirect("/not-found");
    } finally {
      p.unsubscribe();
    }
  }
};
