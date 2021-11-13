<<<<<<< HEAD
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
=======
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
<<<<<<< HEAD
        throw new Error("authCOntext must be in an Auth Provider");
=======
        throw Error("AN ERROR OCCURED");
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
    }
    return context;
};