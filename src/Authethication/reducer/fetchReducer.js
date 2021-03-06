export const fetchReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user: action.payload };

        case "SIGNUP":
            return {...state, user: action.payload };
        case "LOGOUT":
            return {...state, user: action.payload };
        case "AUTHISREADY":
            return {...state, user: action.payload, authIsReady: true };
        default:
            return state;
    }
};