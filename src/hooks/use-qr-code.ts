import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router";

import { PATHS } from "#constants/paths";
import { modal } from "#shared/modal";
import { useGetTokenMutation } from "#store/api/auth-api";

export const isFetchBaseQueryError = (
  error: unknown,
): error is FetchBaseQueryError & { data: object } =>
  typeof error === "object" &&
  error !== null &&
  "status" in error &&
  typeof error.status === "number";

export const useQrCode = () => {
  const [getToken, { isLoading }] = useGetTokenMutation();
  const navigate = useNavigate();

  const onCodeSubmit = async (code: string) => {
    const { data, error } = await getToken({ kit_item_code: code });
    if (data?.access_token) navigate(`${PATHS._selected}/${code}`);
    if (error && isFetchBaseQueryError(error)) {
      switch (error.status) {
        case 400:
          modal.open("error_400", {
            modalData: {
              description: "Время И Стекло",
              title: "Произошла ошибка",
            },
            modalType: "ERROR",
          });
          break;
        case 404:
          modal.open("error_404", {
            modalData: {
              description:
                "Набор с таким кодом не найден. Проверьте правильность введенного кода набора.",
              title: "Произошла ошибка",
            },
            modalType: "ERROR",
          });
          break;
        case 422:
          modal.open("error_422", {
            modalData: {
              description: "Код набора введен в неверном формате",
              title: "Произошла ошибка",
            },
            modalType: "ERROR",
          });
          break;
        default:
          modal.open("error_500", {
            modalData: {
              description:
                "Произошла ошибка сервера. Попробуйте еще раз через несколько минут.",
              title: "Произошла ошибка",
            },
            modalType: "ERROR",
          });
          break;
      }
    } else if (error) {
      modal.open("error_500", {
        modalData: {
          description:
            "Произошла ошибка сервера. Попробуйте еще раз через несколько минут.",
          title: "Произошла ошибка",
        },
        modalType: "ERROR",
      });
    }
  };

  return {
    isLoading,
    onCodeSubmit,
  };
};
