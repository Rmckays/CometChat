import initialState from "./AppState";

const reducer = (state = initialState, action) => {

    if(action.type === "NAMECHANGE"){
        return {
            ...state,
            name: action.val,
        }
    }

    if(action.type === "EMAILCHANGE"){
        return {
            ...state,
            email: action.val,
        }
    }

    if(action.type === "USERNAMECHANGE"){
        return {
            ...state,
            username: action.val,
        }
    }

    if(action.type === "PASSWORDCHANGE"){
        return {
            ...state,
            password: action.val,
        }
    }

    return state;
};

export default reducer;