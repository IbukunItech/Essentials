import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error("AN ERROR OCCURED");
    }
    return context;
};