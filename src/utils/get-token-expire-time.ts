import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp?: number;
}

export function getTokenExpireTime(token: string): null | number {
  try {
    const decodedToken = jwtDecode<JwtPayload>(token);
    return decodedToken.exp
      ? new Date(decodedToken.exp * 1000).getTime() - Date.now()
      : null;
  } catch (error) {
    console.error("Failed to decode JWT token:", error);
    return null;
  }
}
