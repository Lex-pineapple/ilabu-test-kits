import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  currKitUid: string;
};

const initialState: initialStateType = {
  currKitUid: "",
};

export const mainSlice = createSlice({
  initialState,
  name: "main",
  reducers: {
    setCurrKitUid: (state, { payload }: PayloadAction<string>) => {
      state.currKitUid = payload;
    },
  },
  selectors: {
    getCyrrKitUid: (state) => state.currKitUid,
  },
});

export const { setCurrKitUid } = mainSlice.actions;
export const { getCyrrKitUid } = mainSlice.selectors;
export default mainSlice.reducer;
