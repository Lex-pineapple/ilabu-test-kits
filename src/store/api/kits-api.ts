import { unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { AnalysisResponse } from "#store/types/analyses";
import type { KitMinimalType, KitType } from "#store/types/kits";

export const kitsApi = unautorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getKitAnalyses: build.query<AnalysisResponse, string>({
      query: (kitId) => `${API_ENDPOINTS.KITS_LIST}/${kitId}/analyses`,
    }),
    getKitData: build.query<KitType, string>({
      query: (kitId) => `${API_ENDPOINTS.KITS_LIST}/${kitId}`,
    }),
    getKitsLits: build.query<KitMinimalType[], void>({
      query: () => `${API_ENDPOINTS.KITS_LIST}`,
    }),
  }),
});

export const {
  useGetKitAnalysesQuery,
  useGetKitDataQuery,
  useGetKitsLitsQuery,
} = kitsApi;
