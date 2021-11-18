import { createContext, useEffect, useReducer } from "react";
import { fetchReducer } from "../reducer/fetchReducer";
import { onAuthStateChanged } from "@firebase/auth";
import { fireAuth } from "../firebase/config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, { user: null, AuthIsReady: false });
  // to get the current user
  useEffect(() => {
    const unsub = onAuthStateChanged(fireAuth, (user) => {
      return dispatch({ type: "AUTHISREADY", payload: user });
    });
    unsub();
  }, []);
  console.log("auth state", state);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
