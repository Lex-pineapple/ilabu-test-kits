import { type Action, combineReducers, configureStore } from "@reduxjs/toolkit";

import { authorizedApi, unautorizedApi } from "#store/api/base-api";
import cartReducer, { cartSlice } from "#store/slices/cart-slice";
import formReducer, { formSlice } from "#store/slices/form-slice";
import mainReducer, { mainSlice } from "#store/slices/main-slice";
import notificationReducer, {
  notificationSlice,
} from "#store/slices/notification-slice";
import orderReducer, { orderSlice } from "#store/slices/order-slice";

const appReducer = combineReducers({
  [authorizedApi.reducerPath]: authorizedApi.reducer,
  [cartSlice.name]: cartReducer,
  [formSlice.name]: formReducer,
  [mainSlice.name]: mainReducer,
  [notificationSlice.name]: notificationReducer,
  [orderSlice.name]: orderReducer,
  [unautorizedApi.reducerPath]: unautorizedApi.reducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: Action,
) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // appErrorMiddleware,
      authorizedApi.middleware,
      unautorizedApi.middleware,
    ),
  reducer: rootReducer,
});

export default store;

export type AppDispatch = AppStore["dispatch"];
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
