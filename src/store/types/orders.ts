import type { GeneralResponseType } from "#store/types";
import type { TubeType } from "#store/types/tubes";

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
  delivery_method: "courier" | "personal";
  dob: string;
  email: string;
  first_name: string;
  gender: "female" | "male";
  lab_address_id: string;
  last_name: string;
  middle_name: string;
  pickup_address: PickupAddressType;
};

export type OrderDetailsType = {
  analyses: AnalysisItemFullType[];
  personal_data: OrderDetailsPDType;
  tubes: TubeType[];
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
