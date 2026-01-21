import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type OrderStatusType =
  | "ANALYSES_SELECTED"
  | "DETAILS_FILLED"
  | "NEW"
  | "PAYMENT_PAID"
  | "TUBES_LINKED";

type initialStateType = {
  currKitUid: string;
  orderStatus: null | OrderStatusType;
};

const initialState: initialStateType = {
  currKitUid: "",
  orderStatus: null,
};

export const mainSlice = createSlice({
  initialState,
  name: "main",
  reducers: {
    setCurrKitUid: (state, { payload }: PayloadAction<string>) => {
      state.currKitUid = payload;
    },
    setOrderStatus: (
      state,
      { payload }: PayloadAction<null | OrderStatusType>,
    ) => {
      state.orderStatus = payload;
    },
  },
  selectors: {
    getCurrKitUid: (state) => state.currKitUid,
    getOrderStatus: (state) => state.orderStatus,
  },
});

export const { setCurrKitUid, setOrderStatus } = mainSlice.actions;
export const { getCurrKitUid, getOrderStatus } = mainSlice.selectors;
export default mainSlice.reducer;
