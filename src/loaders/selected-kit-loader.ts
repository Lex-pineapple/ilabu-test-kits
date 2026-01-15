import { type Params } from "react-router";

import { kitsApi } from "#store/api/kits-api";
import store from "#store/store";
import type { AnalysisResponse } from "#store/types/analyses";

export type SelectedKitLoaderResponse = {
  data: AnalysisResponse;
  error: boolean;
};

export const loader = async ({ params }: { params: Params<"uid"> }) => {
  const currUid = params?.uid;
  if (currUid) {
    const p = store.dispatch(
      kitsApi.endpoints.getKitAnalyses.initiate(currUid),
    );

    try {
      const response = await p.unwrap();
      return { data: response, error: false };
    } catch {
      return { data: { analyses: [], id: "", title: "" }, error: true };
    } finally {
      p.unsubscribe();
    }
  }
};
