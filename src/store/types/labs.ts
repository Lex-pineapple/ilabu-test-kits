export type AddressType = {
  address: string;
  id: string;
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
