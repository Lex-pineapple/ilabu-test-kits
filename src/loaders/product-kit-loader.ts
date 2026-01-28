import { type Params, redirect } from "react-router-dom";

import { kitsApi } from "#store/api/kits-api";
import store from "#store/store";

export async function loader({ params }: { params: Params<"uid"> }) {
  const currKitIdid = params?.uid;
  if (currKitIdid) {
    const p = store.dispatch(
      kitsApi.endpoints.getKitData.initiate(currKitIdid),
    );

    try {
      const response = await p.unwrap();
      return response;
    } catch {
      return redirect("/");
    } finally {
      p.unsubscribe();
    }
  }
}
