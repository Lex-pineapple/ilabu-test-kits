import { useNavigate } from "react-router";

import { PATHS } from "#constants/paths";
import { useAppDispatch } from "#store/hooks";
import { resetAuth } from "#store/slices/auth-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    navigate(PATHS.root);
    dispatch(resetAuth());
    localStorage.removeItem("access_token");
  };

  return { logout };
};
