import { fireAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useHistory } from "react-router";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const history = useHistory();

    const logOut = async() => {
        await fireAuth.signOut();

        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        history.push("/login");
    };
    return { logOut };
};