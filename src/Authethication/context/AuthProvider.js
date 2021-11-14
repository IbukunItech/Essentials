import { createContext, useEffect, useReducer } from "react";
import { fetchReducer } from "../reducer/fetchReducer";
import { onAuthStateChanged } from "@firebase/auth";
import { fireAuth } from "../firebase/config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, { user: null });
  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => ({
      user: user,
    }));
  }, []);
  console.log("auth state", state);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
