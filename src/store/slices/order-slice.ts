import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { OrderDetailsType } from "#store/types/orders";

export const initialState: OrderDetailsType = {
  analyses: [],
  personal_data: {
    delivery_method: "courier",
    dob: "",
    email: "",
    first_name: "",
    gender: "female",
    lab_address_id: "",
    last_name: "",
    middle_name: "",
    pickup_address: {
      apartment: "",
      building: "",
      city: "",
      comment: "",
      entrance: "",
      floor: "",
      phone: "",
      street: "",
    },
  },
  tubes: [],
};

export const orderSlice = createSlice({
  initialState,
  name: "order",
  reducers: {
    resetOrderData: () => initialState,
    setOrderData: (state, action: PayloadAction<OrderDetailsType>) => {
      state = action.payload;
    },
  },
  selectors: {
    selectOrderData: (state) => state,
  },
});

export const { resetOrderData, setOrderData } = orderSlice.actions;
export const { selectOrderData } = orderSlice.selectors;
export default orderSlice.reducer;
