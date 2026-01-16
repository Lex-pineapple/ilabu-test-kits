import { useNavigate } from "react-router";

import { PATHS } from "#constants/paths";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { resetAuth, selectAccessToken } from "#store/slices/auth-slice";
import { resetOrderData } from "#store/slices/order-slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorised =
    useAppSelector(selectAccessToken) || localStorage.getItem("access_token");

  const logout = () => {
    navigate(PATHS.root);
    dispatch(resetAuth());
    dispatch(resetOrderData());
    localStorage.removeItem("access_token");
  };

  return { isAuthorised, logout };
};
