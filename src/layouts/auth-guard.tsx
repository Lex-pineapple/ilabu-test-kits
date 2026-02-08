import { type PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router";

import { Spinner } from "#/components/spinner";
import { useAuth } from "#/hooks/use-auth";
import { isUnauthorisedPath } from "#utils/is-unauthorised-path";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const {
    accessToken,
    checkIsTokenExpired,
    isAuthorizing,
    loadUserFromStorage,
    logout,
  } = useAuth();

  useEffect(() => {
    const unauthPath = isUnauthorisedPath(pathname);
    if (!unauthPath) {
      const isTokenExpired = checkIsTokenExpired(accessToken);
      if (isTokenExpired) {
        logout();
      } else {
        loadUserFromStorage();
      }
    }
  }, []);

  if (isAuthorizing) {
    return <Spinner text="Авторизация" />;
  }

  return children;
};
