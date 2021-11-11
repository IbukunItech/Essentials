import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { useState } from "react";
import { fireAuth } from "../firebase/config";
import { useHistory } from "react-router";
import { useAuthContext } from "./useAuthContext";
export const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const history = useHistory();
    const { dispatch } = useAuthContext();

    const signup = async(email, password, displayName) => {
        setIsLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(fireAuth, email, password);

            if (!res) {
                throw Error("An error occurred");
            }
            updateProfile(res.user, { displayName });

            dispatch({
                action: "SIGNUP",
                payload: res.user,
            });
            setIsLoading(false);
            // console.log(res.user);
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
    return { signup, isLoading, isError };
};