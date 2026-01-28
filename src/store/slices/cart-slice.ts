import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AnalysisType } from "#store/types/analyses";
import { removeFromObjectArray } from "#utils/remove-from-object-array";

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
    addItemToCart: (state, { payload }: PayloadAction<AnalysisType>) => {
      const foundItem = state.items.find((item) => item.id === payload.id);
      if (foundItem) {
        const newArray = removeFromObjectArray(state.items, foundItem.id);
        state.items = newArray;
        if (newArray.length === 0) state.selected_lab_id = "";
      } else {
        state.items = [...state.items, payload];
        state.selected_lab_id = payload?.lab_id;
      }
    },
    clearCartItems: (state) => {
      state.items = [];
      state.selected_lab_id = "";
    },
    removeCartItems: (state, { payload }: PayloadAction<AnalysisType>) => {
      const newArray = removeFromObjectArray(state.items, payload.id);
      state.items = newArray;
      if (newArray.length === 0) state.selected_lab_id = "";
    },
    setCartItems: (state, { payload }: PayloadAction<AnalysisType[]>) => {
      state.items = payload;
      state.selected_lab_id = payload[0]?.lab_id;
    },
    setCurrLabId: (state, { payload }: PayloadAction<string>) => {
      state.selected_lab_id = payload;
    },
  },
  selectors: {
    getCartItems: (state) => state.items,
    getCurrLabId: (state) => state.selected_lab_id,
  },
});

export const {
  addItemToCart,
  clearCartItems,
  removeCartItems,
  setCartItems,
  setCurrLabId,
} = cartSlice.actions;
export const { getCartItems, getCurrLabId } = cartSlice.selectors;
export default cartSlice.reducer;
