import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart-slice";
import formReducer from "./slices/form-slice";
import mainReducer from "./slices/main-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    main: mainReducer,
  },
});

export default store;

export type AppDispatch = AppStore["dispatch"];
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
