import type { GeneralResponseType } from "#store/types";

export type AnalysesToLinkType = {
  analyses_ids: string[];
};

export type AnalysisItemFullType = {
  article: string;
  description: string;
  execution_time_days: string;
  id: string;
  lab_id: string;
  lab_name: string;
  material_type: string;
  preparation: string[];
  price: string;
  title: string;
};

export type InstructionStepType = {
  description: string;
  step: 0;
  title: string;
};

export type InstructionType = {
  instructions: {
    context: string;
    id: string;
    note: string;
    resource_link: string;
    steps: InstructionStepType[];
    title: string;
  }[];
};

export type LinkedAnalysesResponseType = GeneralResponseType & {
  linked_analyses: number;
};

export type OrderDetailsPDType = {
  delivery_method: "courier" | "personal" | null;
  dob: null | string;
  email: null | string;
  first_name: null | string;
  gender: "female" | "male" | null;
  lab_address_id: null | string;
  last_name: null | string;
  middle_name: null | string;
  pickup_address: null | PickupAddressType;
};

export type OrderDetailsRequestType = {
  delivery_method: string;
  dob: string;
  email: string;
  first_name: string;
  gender: string;
  last_name: string;
  middle_name: string;
  lab_address_id?: string;
  pickup_address?: {
    apartment: string;
    building: string;
    city: string;
    phone: string;
    street: string;
    comment?: string;
    entrance?: string;
    floor?: string;
  };
};

export type OrderDetailsTubeType = {
  cap_color: string;
  code: string;
  tube_id: string;
  tube_name: string;
};

export type OrderDetailsType = {
  analyses: AnalysisItemFullType[] | null;
  personal_data: null | OrderDetailsPDType;
  tubes: null | OrderDetailsTubeType[];
};

export type OrderType = {
  delivery_method: "courier" | "personal";
  dob: string;
  email: string;
  first_name: string;
  gender: string;
  lab_address_id: string;
  last_name: string;
  middle_name: string;
  pickup_address?: PickupAddressType;
};

export type PickupAddressType = {
  apartment: string;
  building: string;
  city: string;
  comment: string;
  entrance: string;
  floor: string;
  phone: string;
  street: string;
};
