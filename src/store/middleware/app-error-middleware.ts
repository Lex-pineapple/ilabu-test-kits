import {
  isRejectedWithValue,
  type Middleware,
  type MiddlewareAPI,
} from "@reduxjs/toolkit";

import {
  type NotificationDataPayload,
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const appErrorMiddleware: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      if (
        action.payload instanceof Object &&
        "appNotificationState" in action.payload
      ) {
        const {
          appNotificationState: { description, status, title },
        } = action.payload as { appNotificationState: NotificationDataPayload };
        dispatch(setNotificationVisibility(false));
        dispatch(setNotificationData({ description, status, title }));
        dispatch(setNotificationVisibility(true));
      }
    }

    return next(action);
  };
