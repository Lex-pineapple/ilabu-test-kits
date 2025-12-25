import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AnalysisType } from "#store/types/analyses";
import { removeFromArray } from "#utils/remove-from-array";

type initialStateType = {
  items: AnalysisType[];
};

const initialState: initialStateType = {
  items: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    clearCartItems: (state) => {
      state.items = [];
    },
    removeCartItems: (state, { payload }: PayloadAction<AnalysisType>) => {
      const idx = state.items.indexOf(payload);
      state.items = removeFromArray(state.items, idx);
    },
    setCartItems: (state, { payload }: PayloadAction<AnalysisType[]>) => {
      state.items = payload;
    },
  },
  selectors: {
    getCartItems: (state) => state.items,
  },
});

export const { clearCartItems, removeCartItems, setCartItems } =
  cartSlice.actions;
export const { getCartItems } = cartSlice.selectors;
export default cartSlice.reducer;
