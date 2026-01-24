import { useLocation, useNavigate } from "react-router";

import { PATHS } from "#constants/paths";
import {
  useGetTokenMutation,
  useRefreshTokenMutation,
} from "#store/api/auth-api";
import { useAppDispatch } from "#store/hooks";
import { resetOrderData } from "#store/slices/order-slice";
import { getTokenExpireTime } from "#utils/get-token-expire-time";
import { isFetchBaseQueryError } from "#utils/is-fetch-base-query-error";

type TLoginProps = {
  code: string;
  withRedirect?: boolean;
};

const oneMinute = 60000;

const ErrorMessages = {
  400: "Время И Стекло",
  404: "Набор с таким кодом не найден. Проверьте правильность введенного кода набора.",
  422: "Код набора введен в неверном формате",
  500: "Произошла ошибка сервера. Попробуйте еще раз через несколько минут.",
};

export const useAuth = () => {
  const [getToken, { isLoading }] = useGetTokenMutation();
  const [updateRefreshToken] = useRefreshTokenMutation();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const isAuthorised = !!localStorage.getItem("access_token");

  const checkIsTokenExpired = (accessToken: null | string) => {
    if (!accessToken) return true;

    const tokenExpireTime = getTokenExpireTime(accessToken);

    return tokenExpireTime ? tokenExpireTime <= 0 : true;
  };

  const getRefreshToken = async (refreshToken: string) => {
    const kitId = localStorage.getItem("kit_id");
    const { data, error } = await updateRefreshToken({
      refresh_token: refreshToken,
    });

    if (data) {
      const tokenExpireTime =
        getTokenExpireTime(data.access_token) ?? oneMinute * 9;

      setTimeout(loadUserFromStorage, tokenExpireTime - oneMinute);
      if (pathname === "/") {
        if (kitId) navigate(`${PATHS._selected}/${kitId}`);
      }
    }
    if (error) logout();
  };

  const scheduleRefreshToken = (accessToken: string) => {
    const tokenExpireTime = getTokenExpireTime(accessToken) ?? oneMinute * 9;
    setTimeout(loadUserFromStorage, tokenExpireTime - oneMinute);
  };

  const loadUserFromStorage = async () => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const kitId = localStorage.getItem("kit_id");

    if (accessToken) {
      const tokenExpireTime = getTokenExpireTime(accessToken) ?? oneMinute * 9;

      if (tokenExpireTime <= oneMinute && refreshToken) {
        await getRefreshToken(refreshToken);
      } else if (refreshToken) {
        setTimeout(loadUserFromStorage, tokenExpireTime - oneMinute);
        if (pathname === "/") {
          if (kitId) navigate(`${PATHS._selected}/${kitId}`);
        }
      } else {
        logout();
      }
    } else if (refreshToken) {
      await getRefreshToken(refreshToken);
    } else if (!accessToken && !refreshToken) logout();
  };

  const login = async ({ code, withRedirect = true }: TLoginProps) => {
    const { data, error } = await getToken({ kit_item_code: code });
    if (data) {
      scheduleRefreshToken(data.access_token);
      if (withRedirect) navigate(`${PATHS._selected}/${data.kit_id}`);
      return { errorMessage: "" };
    }
    if (error && isFetchBaseQueryError(error)) {
      switch (error.status) {
        case 400:
        case 404:
        case 422:
          return { errorMessage: ErrorMessages[error.status] };
        default:
          return { errorMessage: ErrorMessages[500] };
      }
    } else if (error) {
      return { errorMessage: ErrorMessages[500] };
    }
    return { errorMessage: "" };
  };

  const logout = () => {
    navigate(PATHS.root);
    dispatch(resetOrderData());
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return {
    accessToken,
    checkIsTokenExpired,
    isAuthorised,
    isAuthorizing: isLoading,
    loadUserFromStorage,
    login,
    logout,
  };
};
