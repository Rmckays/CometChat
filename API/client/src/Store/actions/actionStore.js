import {HubConnectionBuilder} from "@aspnet/signalr/dist/esm/HubConnectionBuilder";
import {LogLevel} from "@aspnet/signalr";
import {v4 as uuid} from "uuid";


const createHubConnection = () => {
    hubConnection = new HubConnectionBuilder()
        .withUrl('/hub/chat')
        .configureLogging(LogLevel.Information)
        .build();

    hubConnection.start()
        .then(() => console.log(hubConnection.state()))
        .catch(err => console.log(err));

    hubConnection.on("ReceiveMessage", message => state.messages.concat(message));
};

const stopHubConnection = () => {
    hubConnection.stop();
};

const createMessage = async(event) => {

    const now = new Date();
    const id = uuid();
    const userid = props.loggedInUser.userId;
    const channelid = props.currentChannelId;
    const text = event.target[0].value;
    const createdAt = now.toISOString();

    try {
        await hubConnection.invoke('SendMessage', { id, userid, channelid, text, createdAt } )
    } catch {

    }
};