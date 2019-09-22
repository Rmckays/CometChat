import initialState from "./AppState";

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'NAMECHANGE':
            return {
                ...state,
                name: action.val,
            };
        case 'EMAILCHANGE':
            return {
                ...state,
                email: action.val,
            };
        case 'USERNAMECHANGE':
            return {
                ...state,
                username: action.val,
            };
        case 'PASSWORDCHANGE':
            return {
                ...state,
                password: action.val,
            };
        case 'GENDERCHANGE':
            const random = Math.floor(Math.random() * 3);
            let newAvatar;
            if(action.val === 'Male'){
                newAvatar = state.maleAvatars[random];
            } else if(action.val ==='Female'){
                newAvatar = state.femaleAvatars[random];
            }

            return {
                ...state, avatar: newAvatar
            };
        case 'USERCREATED':
            return {
                ...state,
                createdUser: action.val
            };
        case 'RELOADPAGE':
            return {
                ...state,
                username: action.payload.username,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                createdOn: action.payload.createdOn,
                userId: action.payload.userId,
                createdUser: action.payload.createdUser
            };
        case 'LOADCHANNELS':
            const newChannels = action.val.filter(channels => channels);

            return {
                ...state, channels: newChannels
            };
        case 'CHANNELCHANGE':
            console.log(state.currentChannelId);
            return {
                ...state,
                currentChannelId: action.payload.id,
                currentChannelName: action.payload.name
            };
        case "LOADMESSAGESBYCHANNEL":
            const newMessages = action.val.filter(messages => messages);

            return {
                ...state,
                messages: newMessages
            }
    }

    return state;
};

export default reducer;