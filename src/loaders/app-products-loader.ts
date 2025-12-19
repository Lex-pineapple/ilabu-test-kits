import { redirect } from "react-router-dom";

import { kitsApi } from "#store/api/kits-api";
import store from "#store/store";

export async function loader() {
  const p = store.dispatch(kitsApi.endpoints.getKitsLits.initiate());

  try {
    const response = await p.unwrap();
    return response.kits;
  } catch {
    return redirect("/");
  } finally {
    p.unsubscribe();
  }
}
