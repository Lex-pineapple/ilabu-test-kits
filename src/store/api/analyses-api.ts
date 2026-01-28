import { unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { AnalysisType } from "#store/types/analyses";

export const analysesApi = unautorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getAnalysisDetails: build.query<AnalysisType, string>({
      query: (analysisId: string) => `${API_ENDPOINTS.ANALYSIS}/${analysisId}`,
    }),
  }),
});

export const { useGetAnalysisDetailsQuery } = analysesApi;
