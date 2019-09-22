import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import {Feed} from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import Moment from 'react-moment';
import axios from 'axios';

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

        console.log(event.target[0].value);

        const now = new Date();
        const messageId = uuid();


        axios.post('/api/messages/', {
            id: messageId,
            userid: props.loggedInUser.userId,
            channelid: props.currentChannelId,
            text: event.target[0].value,
            createdAt: now.toISOString()
        })
            .then(response => {
                console.log("You Created a message");

            })
            .catch(error => console.log(error));
        event.target.value = '';
    };

   useEffect(() => {
       axios.get(`/api/messages/channels/2790a38f-87b2-41ab-b893-d945188b32fa`)
           .then(response => {
                props.loadMessagesByChannel(response);
           })
           .catch(error => console.log(error));
   }, [props.currentChannelId]);

   // Use this to reload messages when a message is submitted.
   // useEffect(() => {
   //     props.loadMessagesByChannel();
   // });

   // Use this to reload messages when a channel is changed.
   // useEffect();

   return (
      <Fragment>
         <Feed
            style={{
               color: 'white',
               backgroundColor: 'rgba(255,255,255, 0.7)',
               height: '92.5%',
               marginBottom: '2.5%',
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
            <button type="submit" className="ui" style={{border: 'none', width: '10%', height: '100%', background: "rgb(240, 156, 96)"}}>Send</button>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
