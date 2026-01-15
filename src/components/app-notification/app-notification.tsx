import { useEffect } from "react";

import { toaster } from "#/components/toaster/toaster-use";
import { useAppSelector } from "#store/hooks";
import { selectNotificationData } from "#store/slices/notification-slice";

export const AppNotification = () => {
  const { description, isShowNotification, status, title } = useAppSelector(
    selectNotificationData,
  );

  useEffect(() => {
    if (isShowNotification)
      toaster.create({
        closable: true,
        description,
        duration: 2000,
        title,
        type: status ?? "info",
      });
  }, [description, isShowNotification, status, title]);
  return null;
};
