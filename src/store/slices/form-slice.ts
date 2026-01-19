import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { get } from "react-hook-form";

import type { formStatesType } from "#/views/checkout-form/checkout-form";
import type { AddressFormInputs } from "#shared/bottom-sheet-modal/address-form/address-form";

type initialStateType = {
  formData: userInfoType;
  formState: formStatesType;
  hasOtpError: boolean;
  stepsCleared: number;
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
  hasOtpError: false,
  stepsCleared: 0,
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
    setOtpError: (state, { payload }: PayloadAction<boolean>) => {
      state.hasOtpError = payload;
    },
    setStepsCleared: (state, { payload }: PayloadAction<number>) => {
      state.stepsCleared = payload;
    },
  },
  selectors: {
    getFormData: (state) => state.formData,
    getFormState: (state) => state.formState,
    getOtpError: (state) => state.hasOtpError,
    getStepsCleared: (state) => state.stepsCleared,
  },
});

export const { setFormData, setFormState, setOtpError, setStepsCleared } =
  formSlice.actions;
export const { getFormData, getFormState, getOtpError, getStepsCleared } =
  formSlice.selectors;
export default formSlice.reducer;
