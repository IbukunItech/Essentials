import { createContext, useReducer } from "react";
import { fetchReducer } from "../reducer/fetchReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fetchReducer, { user: null });
  console.log("AuthContext", state);
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
