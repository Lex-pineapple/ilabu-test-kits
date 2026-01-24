export type AddressType = {
  address: string;
  id: string;
  working_hours: string;
};

export type LabAddressesTransformedType = {
  address: string;
  name: string;
  time: string;
  value: string;
};

export type LabAddressesType = {
  addresses: AddressType[];
  lab_id: string;
  lab_name: string;
};

export type LabType = {
  id: string;
  name: string;
};
