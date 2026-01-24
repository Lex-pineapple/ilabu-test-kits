import { useAuth } from "#/hooks/use-auth";
import { modal } from "#shared/modal";

export const useQrCode = () => {
  const { isAuthorizing, login } = useAuth();

  const onCodeSubmit = async (code: string) => {
    const { errorMessage } = await login({ code });
    if (errorMessage)
      modal.open("loginError", {
        modalData: {
          description: errorMessage,
          title: "Произошла ошибка",
        },
        modalType: "ERROR",
      });
  };

  return {
    isLoading: isAuthorizing,
    onCodeSubmit,
  };
};
