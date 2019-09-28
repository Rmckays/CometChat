import initialState from "./AppState";
import * as dispatchState from './actionTypes';
import {failedLogin} from "./actionTypes";

const reducer = (state = initialState, action) => {

    switch(action.type){
        case dispatchState.nameChange:
            return {
                ...state,
                name: action.val,
            };
        case dispatchState.emailChange:
            return {
                ...state,
                email: action.val,
            };
        case dispatchState.usernameChange:
            return {
                ...state,
                username: action.val,
            };
        case dispatchState.passwordChange:
            return {
                ...state,
                password: action.val,
            };
        case dispatchState.genderChange:
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
        case dispatchState.userCreated:
            return {
                ...state,
                createdUser: action.val
            };
        case dispatchState.reloadPage:
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
        case dispatchState.loadChannels:
            const newChannels = action.val.filter(channels => channels);

            return {
                ...state, channels: newChannels
            };
        case dispatchState.channelChange:
            return {
                ...state,
                currentChannelId: action.payload.id,
                currentChannelName: action.payload.name,
                messages: []
            };
        case dispatchState.loadMessagesByChannel:
            const allMessages = action.val.filter(messages => messages);
            return {
                ...state,
                messages: allMessages
            };
        case dispatchState.receiveMessage:
            if(action.message.channel.id === state.currentChannelId){
                console.log("It matches");
                const newMessages = state.messages.concat(action.message);
                console.log(newMessages);
                return {
                    ...state,
                    messages: newMessages
                };
            }
            break;
        case dispatchState.userRequestChange:
            return {
                ...state,
                usernameRequest: action.val,
            };
        case dispatchState.passwordRequestChange:
            return {
                ...state,
                passwordRequest: action.val
            };
        case dispatchState.loginUser:
            const loggedUser = Object.assign(state.loggedInUser);
            loggedUser.userId = action.payload.userId;
            loggedUser.username = action.payload.username;
            loggedUser.name = action.payload.name;
            return {
                ...state,
                loggedInUser: loggedUser,
                userAuthenticated: true
            }
        case dispatchState.failedLogin:
            return{
                ...state,
                failedUserLogin: true,
                usernameRequest: '',
                passwordRequest: ''
            }
    }

    return state;
};

export default reducer;