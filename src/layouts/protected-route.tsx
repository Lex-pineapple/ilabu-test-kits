import { Navigate, Outlet } from "react-router";

import { useAuth } from "#/hooks/use-auth";
import { PATHS } from "#constants/paths";

export const ProtectedRoute = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate replace to={PATHS.root} />;
  }

  return <Outlet />;
};
