import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import { Feed, Icon } from 'semantic-ui-react';

const ChatWindow = (props) => {

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
            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label>
                  <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
               </Feed.Label>
               <Feed.Content>
                  <Feed.Summary>
                     <Feed.User>Elliot Fu</Feed.User> added you as a friend
                     <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
               <Feed.Content>
                  <Feed.Summary>
                     <a>Helen Troy</a> added <a>2 new illustrations</a>
                     <Feed.Date>4 days ago</Feed.Date>
                  </Feed.Summary>
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
                style={{
               padding: '1rem',
            }}>
               <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
               <Feed.Content>
                  <Feed.Summary>
                     <a>Joe Henderson</a> posted on his page
                     <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                     Ours is a life of constant reruns. We're always circling back to where
                     we'd we started, then starting all over again. Even if we don't run
                     extra laps that day, we surely will come back for more of the same
                     another day soon.
                  </Feed.Extra>
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
               <Feed.Content>
                  <Feed.Summary
                     date='2 Days Ago'
                     user='Jenny Hess'
                     content='add you as a friend'
                  />
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
               <Feed.Content>
                  <Feed.Summary>
                     <a>Justen Kitsune</a>
                     <Feed.Date>4 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                     Hey, did you see the game last night?
                  </Feed.Extra>
               </Feed.Content>
            </Feed.Event>
            <Feed.Event
                style={{
                   padding: '1rem',
                }}>
               <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/laura.jpg' />
               <Feed.Content>
                  <Feed.Summary>
                     <a>Laura Faucet</a> created a post
                     <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                     Have you seen what's going on in Israel? Can you believe it.
                  </Feed.Extra>
               </Feed.Content>
            </Feed.Event>
         </Feed>
         <form className="ui action"
              style={{
                 marginTop: '0',
                 width: '100%',
                 height: '5%',
                 border: 'none',
                 lineHeight: '1.4rem',
                 fontSize: '1.4rem',
                 borderRadius: '0 !important',
              }} >
            <input type="text" placeholder="Search..."
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
   }
};

export default connect()(ChatWindow);
