import initialState from "./AppState";

const reducer = (state = initialState, action) => {

    if(action.type === "NAMECHANGE"){
        return {
            ...initialState,
            name: action.val,
        }
    }
    return state;
};

export default reducer;