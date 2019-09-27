import * as actionTypes from './actionTypes';
import {HubConnectionBuilder, LogLevel} from "@aspnet/signalr";

const hubConnection = new HubConnectionBuilder()
    .withUrl('/hub/chat')
    .configureLogging(LogLevel.Information)
    .build();

export const loadMessagesByChannel = response => {
    console.log('Loaded Messages');
    return {
        type: actionTypes.loadMessagesByChannel,
        val: response.data
    }
};


export const receiveMessage = message => {
    console.log('Received Message', message);
    return {
        type: actionTypes.receiveMessage,
        message: message
    }
};

