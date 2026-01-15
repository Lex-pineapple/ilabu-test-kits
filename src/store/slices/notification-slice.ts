import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type NotificationDataPayload = {
  description: string;
  status: "error" | "info" | "success" | "warning";
  title?: string;
};

type NotificationData = {
  description: string;
  isShowNotification: boolean;
  status: "error" | "info" | "success" | "warning" | null;
  title?: string;
};

const initialState: NotificationData = {
  description: "",
  isShowNotification: false,
  status: null,
  title: "",
};

export const notificationSlice = createSlice({
  initialState,
  name: "notification",
  reducers: {
    resetNotification: (state) => {
      state.isShowNotification = false;
      state.title = "";
      state.description = "";
      state.status = null;
    },
    setNotificationData: (
      state,
      action: PayloadAction<NotificationDataPayload>,
    ) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.status = action.payload.status;
    },
    setNotificationVisibility: (state, action: PayloadAction<boolean>) => {
      state.isShowNotification = action.payload;
    },
  },
  selectors: {
    selectNotificationData: (state) => state,
  },
});

export const { setNotificationData, setNotificationVisibility } =
  notificationSlice.actions;

export const { selectNotificationData } = notificationSlice.selectors;

export default notificationSlice.reducer;
