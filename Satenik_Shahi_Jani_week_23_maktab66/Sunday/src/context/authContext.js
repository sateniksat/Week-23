import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState();
  const values = {
    isAuth,
    login: () => setIsAuth(true),
    logout: () => setIsAuth(false)
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
