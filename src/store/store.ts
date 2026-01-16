import { configureStore } from "@reduxjs/toolkit";

import { authorizedApi, unautorizedApi } from "#store/api/base-api";
import { appErrorMiddleware } from "#store/middleware/app-error-middleware";
import authReducer, { authSlice } from "#store/slices/auth-slice";
import cartReducer, { cartSlice } from "#store/slices/cart-slice";
import formReducer, { formSlice } from "#store/slices/form-slice";
import mainReducer, { mainSlice } from "#store/slices/main-slice";
import notificationReducer, {
  notificationSlice,
} from "#store/slices/notification-slice";
import orderReducer, { orderSlice } from "#store/slices/order-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // appErrorMiddleware,
      authorizedApi.middleware,
      unautorizedApi.middleware,
    ),
  reducer: {
    [authorizedApi.reducerPath]: authorizedApi.reducer,
    [authSlice.name]: authReducer,
    [cartSlice.name]: cartReducer,
    [formSlice.name]: formReducer,
    [mainSlice.name]: mainReducer,
    [notificationSlice.name]: notificationReducer,
    [orderSlice.name]: orderReducer,
    [unautorizedApi.reducerPath]: unautorizedApi.reducer,
  },
});

export default store;

export type AppDispatch = AppStore["dispatch"];
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
