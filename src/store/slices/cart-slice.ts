import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AnalysisType } from "#store/types/analyses";
import { removeFromArray } from "#utils/remove-from-array";

type initialStateType = {
  items: AnalysisType[];
  selected_lab_id: string;
};

const initialState: initialStateType = {
  items: [],
  selected_lab_id: "",
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    clearCartItems: (state) => {
      state.items = [];
      state.selected_lab_id = "";
    },
    removeCartItems: (state, { payload }: PayloadAction<AnalysisType>) => {
      const idx = state.items.indexOf(payload);
      const newArray = removeFromArray(state.items, idx);
      state.items = newArray;
      if (newArray.length === 0) state.selected_lab_id = "";
    },
    setCartItems: (state, { payload }: PayloadAction<AnalysisType[]>) => {
      state.items = payload;
      state.selected_lab_id = payload[0]?.lab_id;
    },
  },
  selectors: {
    getCartItems: (state) => state.items,
    getCurrLabId: (state) => state.selected_lab_id,
  },
});

export const { clearCartItems, removeCartItems, setCartItems } =
  cartSlice.actions;
export const { getCartItems, getCurrLabId } = cartSlice.selectors;
export default cartSlice.reducer;
