export const fetchReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
<<<<<<< HEAD
            return {...state, user: action.payload };

        case "SIGNUP":
            return {...state, user: action.payload };
        case "LOGOUT":
            return {...state, user: action.payload };
        default:
            return state;
=======
            return {...state, payload: action.user };

        case "SIGNUP":
            return {...state, payload: action.user };
        case "LOGOUT":
            return {...state, payload: action.user };
>>>>>>> e0c72d534c301ecede8fb3cb628b062afc3d5eba
    }
};