import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import {Feed} from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import Moment from 'react-moment';
import axios from 'axios';
import {HubConnectionBuilder} from "@aspnet/signalr";

const connection = new HubConnectionBuilder().withUrl("/hub/chat").build();
connection.start()
    .then(response => console.log("Start", response))
    .catch(err => console.log(err));

const ChatWindow = (props) => {

    const createMessages = props.messages.map(message => {
        return <Feed.Event
            style={{padding: '1rem'}}
            id={message.id}>
                <Feed.Label>
                    <img src={message.user.avatar} />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <Feed.User>{message.user.name}</Feed.User>
                        <Feed.Date><Moment fromNow>{message.createdAt}</Moment></Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                        {message.text}
                    </Feed.Extra>
                </Feed.Content>
            </Feed.Event>
    });

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const now = new Date();
        const id = uuid();
        const userid = props.loggedInUser.userId;
        const channelid = props.currentChannelId;
        const text = event.target[0].value;
        const createdAt = now.toISOString();

        connection.invoke("SendMessage", {id, userid, channelid, text, createdAt})
            .then(response => {
                console.log("You Created a message");
            })
            .catch(err => console.log(err));
        event.target[0].value = '';
    };

    useEffect(() => {
        axios.get(`/api/messages/channels/${props.currentChannelId}`)
            .then(response => {
                props.loadMessagesByChannel(response);
            })
            .catch(error => console.log(error));
    }, [props.currentChannelId]);


    useEffect(() => {
        connection.on("ReceiveMessage", message => {
            props.receiveMessage(message);
        });
    }, []);

   return (
      <Fragment>
         <Feed
            style={{
               color: 'white',
               backgroundColor: 'rgba(255,255,255, 0.7)',
               height: '92.5%',
               marginBottom: '2.5%',
               overflowY: 'scroll',
                maxHeight: '800px'
            }}>
             {createMessages}
         </Feed>
         <form onSubmit={handleOnSubmit} method="POST" className="ui action"
              style={{
                 marginTop: '0',
                 width: '100%',
                 height: '5%',
                 border: 'none',
                 lineHeight: '1.4rem',
                 fontSize: '1.4rem',
                 borderRadius: '0 !important',
              }} >
            <input type="text" placeholder="Enter your message"
                   style={{paddingLeft: '1rem',
                           borderRadius: 'none',
                           width: '90%', border: 'none',
                           height: '100%'}}/>
            <button type="submit" className="ui" style={{border: 'none', width: '10%', height: '100%', background: "rgb(211,114,228)"}}>Send</button>
         </form>
      </Fragment>
   );
};

const mapStateToProps = state => {
   return {
      messages: state.messages,
      loggedInUser: state.loggedInUser,
      currentChannelId: state.currentChannelId
   }
};

const mapDispatchToProps = dispatch => {
    return {
        loadMessagesByChannel: response => {
            dispatch({type: "LOADMESSAGESBYCHANNEL", val: response.data});
        },
        receiveMessage: message => {
            dispatch({type:"RECEIVEMESSAGE", message: message});
        }
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
