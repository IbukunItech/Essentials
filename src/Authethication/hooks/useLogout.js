import { fireAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useHistory } from "react-router";

export const useLogout = () => {
<<<<<<< HEAD
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
=======
  const { dispatch } = useAuthContext();
  const history = useHistory();

  const logOut = async () => {
    await fireAuth.signOut();

    dispatch({
      action: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  return { logOut };
};
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
