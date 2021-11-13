import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { useState } from "react";
import { fireAuth } from "../firebase/config";
import { useHistory } from "react-router";
import { useAuthContext } from "./useAuthContext";
<<<<<<< HEAD

=======
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
export const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const history = useHistory();
    const { dispatch } = useAuthContext();

<<<<<<< HEAD
    const Logon = async(email, password, displayName) => {
=======
    const signup = async(email, password, displayName) => {
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
        setIsLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(fireAuth, email, password);

            if (!res) {
                throw Error("An error occurred");
            }
            updateProfile(res.user, { displayName });

            dispatch({
<<<<<<< HEAD
                type: "SIGNUP",
                payload: res.user,
            });

            setIsLoading(false);

=======
                action: "SIGNUP",
                payload: res.user,
            });
            setIsLoading(false);
            // console.log(res.user);
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
            history.push("/");
        } catch (error) {
            setIsLoading(false);
            switch (error.message) {
                case "Firebase: Error (auth/network-request-failed).":
                    return setIsError("Connection failure");
                case "Firebase: Error (auth/email-already-in-use).":
                    return setIsError("Email already in use");
                case "Firebase: Error (auth/wrong-password).":
                    return setIsError("wrong email/password");
                case "Firebase: Error (auth/invalid-email).":
                    return setIsError("wrong email/password");
                case "Firebase: Password should be at least 6 characters (auth/weak-password)":
                    return setIsError("Password should be at least 6 characters");
                case "Firebase: Error (auth/user-not-found).":
                    return setIsError("User not found, please input a correct Email/password");
                default:
                    return setIsError("An error occurred");
            }
        }
    };
<<<<<<< HEAD
    return { Logon, isLoading, isError };
=======
    return { signup, isLoading, isError };
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
};