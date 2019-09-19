import React, { Fragment } from 'react';
import { Grid, Container, Feed, Icon, Input } from 'semantic-ui-react';

const ChatWindow = () => {
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
                  <Feed.Meta>
                     <Feed.Like>
                        <Icon name='like' />4 Likes
                     </Feed.Like>
                  </Feed.Meta>
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label image='/images/avatar/small/helen.jpg' />
               <Feed.Content>
                  <Feed.Summary>
                     <a>Helen Troy</a> added <a>2 new illustrations</a>
                     <Feed.Date>4 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra images>
                     <a>
                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                     </a>
                     <a>
                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                     </a>
                  </Feed.Extra>
                  <Feed.Meta>
                     <Feed.Like>
                        <Icon name='like' />1 Like
                     </Feed.Like>
                  </Feed.Meta>
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label image='/images/avatar/small/jenny.jpg' />
               <Feed.Content>
                  <Feed.Summary
                     date='2 Days Ago'
                     user='Jenny Hess'
                     content='add you as a friend'
                  />
                  <Feed.Meta>
                     <Feed.Like>
                        <Icon name='like' />8 Likes
                     </Feed.Like>
                  </Feed.Meta>
               </Feed.Content>
            </Feed.Event>

            <Feed.Event
               style={{
                  padding: '1rem',
               }}>
               <Feed.Label image='/images/avatar/small/justen.jpg' />
               <Feed.Content>
                  <Feed.Summary>
                     <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                     <Feed.Date>4 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra images>
                     <a>
                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                     </a>
                     <a>
                        <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                     </a>
                  </Feed.Extra>
                  <Feed.Meta>
                     <Feed.Like>
                        <Icon name='like' />
                        41 Likes
                     </Feed.Like>
                  </Feed.Meta>
               </Feed.Content>
            </Feed.Event>
         </Feed>
         {/* <input
            style={{
               marginTop: '0',
               width: '100%',
               height: '5%',
               border: 'none',
               lineHeight: '1.4rem',
               fontSize: '1.4rem',
               borderRadius: '0 !important',
            }}></input> */}
      </Fragment>
   );
};

export default ChatWindow;
