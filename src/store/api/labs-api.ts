import { unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type { AddressType, LabAddressesType } from "#store/types/labs";

export const labsApi = unautorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getLabsAddresses: build.query<LabAddressesType, string>({
      query: (labId) => `${API_ENDPOINTS.LABS_LIST}/${labId}/addresses`,
    }),
    getLabsList: build.query<AddressType, void>({
      query: () => `${API_ENDPOINTS.LABS_LIST}`,
    }),
  }),
});

export const { useGetLabsAddressesQuery, useGetLabsListQuery } = labsApi;
