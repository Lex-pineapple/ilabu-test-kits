import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { formStatesType } from "#/views/checkout-form/checkout-form";
import type { AddressFormInputs } from "#shared/bottom-sheet-modal/address-form/address-form";

type initialStateType = {
  formData: userInfoType;
  formState: formStatesType;
  tubes: string[];
};

type userInfoType = {
  date: string;
  delivery: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  middleName: string;
  deliveryAddress?: AddressFormInputs;
  labAdressId?: string;
};

const initialState: initialStateType = {
  formData: {
    date: "",
    delivery: "",
    deliveryAddress: {
      apartment: "",
      building: "",
      city: "",
      commentary: "",
      entryway: "",
      floor: "",
      phone: "",
      street: "",
    },
    email: "",
    firstName: "",
    gender: "",
    labAdressId: "",
    lastName: "",
    middleName: "",
  },
  formState: "codeCheck",
  tubes: [],
};

export const formSlice = createSlice({
  initialState,
  name: "form",
  reducers: {
    setFormData: (state, { payload }: PayloadAction<userInfoType>) => {
      state.formData = payload;
    },
    setFormState: (state, { payload }: PayloadAction<formStatesType>) => {
      state.formState = payload;
    },
    setTubes: (state, { payload }: PayloadAction<string[]>) => {
      state.tubes = payload;
    },
  },
  selectors: {
    getFormData: (state) => state.formData,
    getFormState: (state) => state.formState,
    getTubes: (state) => state.tubes,
  },
});

export const { setFormData, setFormState, setTubes } = formSlice.actions;
export const { getFormData, getFormState, getTubes } = formSlice.selectors;
export default formSlice.reducer;
