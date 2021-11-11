export const fetchReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, payload: action.user };

        case "SIGNUP":
            return {...state, payload: action.user };
        case "LOGOUT":
            return {...state, payload: action.user };
    }
};