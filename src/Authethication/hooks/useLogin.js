import { signInWithEmailAndPassword } from "@firebase/auth";
import { fireAuth } from "../firebase/config";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(null);
    const [IsCancelled, setIsCancelled] = useState(false);
    const history = useHistory();
    const { dispatch } = useAuthContext();

    const Login = async(email, password) => {
        setIsPending(true);
        try {
            const res = await signInWithEmailAndPassword(fireAuth, email, password);

            dispatch({
                type: "LOGIN",
                payload: res.user,
            });

            if (!IsCancelled) {
                setIsPending(false);
                setIsError(null);
            }
            history.push("/");
        } catch (error) {
            setIsPending(false);
            console.log(error.message);
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
    useEffect(() => {
        return () => setIsCancelled(true);
    });

    return { Login, isError, isPending };
};