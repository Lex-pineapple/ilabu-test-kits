import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AnalysisItemType } from "#constants/card-product-data";
import { removeFromArray } from "#utils/remove-from-array";

type initialStateType = {
  items: AnalysisItemType[];
};

const initialState: initialStateType = {
  items: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    removeCartItems: (state, { payload }: PayloadAction<AnalysisItemType>) => {
      const idx = state.items.indexOf(payload);
      state.items = removeFromArray(state.items, idx);
    },
    setCartItems: (state, { payload }: PayloadAction<AnalysisItemType[]>) => {
      state.items = payload;
    },
  },
  selectors: {
    getCartItems: (state) => state.items,
  },
});

export const { removeCartItems, setCartItems } = cartSlice.actions;
export const { getCartItems } = cartSlice.selectors;
export default cartSlice.reducer;
