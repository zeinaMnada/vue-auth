import Cookies from "js-cookie";

const TOKEN_KEY = "access-token";

export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const setToken = (token: string, expiresDays = 7) => {
  Cookies.set(TOKEN_KEY, token, { expires: expiresDays, secure: true, sameSite: "Strict" });
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};
