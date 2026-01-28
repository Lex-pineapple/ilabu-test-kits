import { authorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { GeneralResponseType } from "#store/types";
import type { RequiredTubesType, TubesCodesType } from "#store/types/tubes";

export const tubesApi = authorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getRequiredTubes: build.query<RequiredTubesType, void>({
      query: () => API_ENDPOINTS.TUBES_REQ,
    }),
    linkTubes: build.mutation<GeneralResponseType, TubesCodesType>({
      query: (body) => ({
        body,
        method: "POST",
        url: API_ENDPOINTS.TUBES,
      }),
    }),
  }),
});

export const { useGetRequiredTubesQuery, useLinkTubesMutation } = tubesApi;
