import { unautorizedApi } from "#store/api/base-api";
import { API_ENDPOINTS } from "#store/api/consts";
import type {
  AddressType,
  LabAddressesTransformedType,
  LabAddressesType,
} from "#store/types/labs";

export const labsApi = unautorizedApi.injectEndpoints({
  endpoints: (build) => ({
    getLabsAddresses: build.query<LabAddressesTransformedType[], string>({
      query: (labId) => `${API_ENDPOINTS.LABS_LIST}/${labId}/addresses`,
      transformResponse(response: LabAddressesType) {
        return response.addresses.map((lab) => ({
          address: lab.address,
          name: response.lab_name,
          time: "КРУГЛОСУТОЧНО",
          value: lab.id,
        }));
      },
    }),
    getLabsList: build.query<AddressType, void>({
      query: () => `${API_ENDPOINTS.LABS_LIST}`,
    }),
  }),
});

export const { useGetLabsAddressesQuery, useGetLabsListQuery } = labsApi;
