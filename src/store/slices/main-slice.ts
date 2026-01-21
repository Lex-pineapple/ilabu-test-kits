import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  currKitUid: string;
  orderStatus: string;
};

const initialState: initialStateType = {
  currKitUid: "",
  orderStatus: "",
};

export const mainSlice = createSlice({
  initialState,
  name: "main",
  reducers: {
    setCurrKitUid: (state, { payload }: PayloadAction<string>) => {
      state.currKitUid = payload;
    },
    setOrderStatus: (state, { payload }: PayloadAction<string>) => {
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
