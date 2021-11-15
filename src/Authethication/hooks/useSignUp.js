import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { useEffect, useState } from "react";
import { fireAuth } from "../firebase/config";
import { useHistory } from "react-router";
import { useAuthContext } from "./useAuthContext";
import { firestore } from "../firebase/config";
import { setDoc, doc, collection } from "@firebase/firestore";

export const useSignUp = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const history = useHistory();
    const { dispatch } = useAuthContext();

    const Logon = async(email, password, displayName, photo) => {
        setIsLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(fireAuth, email, password);

            if (!res) {
                throw Error("An error occurred");
            }
            updateProfile(res.user, { displayName, photoURL: photo });

            dispatch({
                type: "SIGNUP",
                payload: res.user,
            });

            if (!isCancelled) {
                setIsLoading(false);
            }

            if (res) {
                const documentRef = doc(firestore, "userdata", res.user.uid);
                const payload = { email, displayName, photo: photo ? photo : displayName.chatAt(0) };
                await setDoc(documentRef, payload);
            }
            history.push("/");
        } catch (error) {
            setIsLoading(false);
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
    return { Logon, isLoading, isError };
};