import { fireAuth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";
import { useHistory } from "react-router";
export const useGoogle = () => {
    const history = useHistory();
    const { dispatch } = useAuthContext();
    const signInGoogle = async() => {
        const Provider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(fireAuth, Provider);
            dispatch({
                type: "LOGIN",
                payload: res.user,
            });
            history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return { signInGoogle };
};