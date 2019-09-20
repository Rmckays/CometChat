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

    if(action.type === "USERCREATED"){
        return {
            ...state,
            createdUser: action.val
        }
    }

    if(action.type === "RELOADPAGE"){
        return {
            ...state,
            username: action.payload.username,
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
            createdOn: action.payload.createdOn,
            userId: action.payload.userId,
            createdUser: action.payload.createdUser
        }
    }

    return state;
};

export default reducer;