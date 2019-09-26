import {HubConnectionBuilder, JsonHubProtocol} from "@aspnet/signalr";
import {receiveMessage} from "../Store/actions/activityTypes";

const startSignalRConnection = (connection) => connection.start()
    .then(() => console.info('SignalR Connected'))
    .catch(err => console.error('SignalR Connection Error: ', err));

const signalRMiddleware = (store) => next => async (action) => {

    // create the connection instance
    const connection = new HubConnectionBuilder()
        .withUrl('/hub/chat')
        .build();

    // if(action.type === receiveMessage){
    //     console.log("It triggered");
    //     connection.on('ReceiveMessage', message => {
    //         console.log("Message:",message);
    //     });
    // }



    startSignalRConnection(connection);

    return next(action);
};

export default signalRMiddleware;