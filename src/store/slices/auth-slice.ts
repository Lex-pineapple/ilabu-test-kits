import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthSliceState = {
  accessToken: string;
};

export const initialState: AuthSliceState = {
  accessToken: "",
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    resetAuth: () => initialState,
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  selectors: {
    selectAccessToken: (state) => state.accessToken,
  },
});

export const { resetAuth, setAccessToken } = authSlice.actions;
export const { selectAccessToken } = authSlice.selectors;
export default authSlice.reducer;
