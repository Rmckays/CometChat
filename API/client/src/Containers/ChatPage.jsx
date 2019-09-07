import React, { Component } from 'react';
import Backdrop from '../Components/Backdrop/Backdrop';
import Canvas from './Canvas/Canvas';
import Navigation from '../Components/Navigation';
import ChatWindow from '../Components/ChatWindow';
import ChannelWindow from '../Components/ChannelWindow';
import { Grid, Container, Feed, Icon, Menu } from 'semantic-ui-react';

class ChatPage extends Component {
   constructor() {
      super();
      this.state = {
         height: window.height,
         width: window.width,
      };
   }

   render() {
      return (
         <div className='App'>
            <Canvas width={this.state.width} height={this.state.height} />
            <Backdrop />
            <Navigation />
            <Container
               className='showcase'
               style={{
                  marginTop: '10rem',
               }}>
               <Grid>
                  <Grid.Column width={4}>
                     <ChannelWindow />
                  </Grid.Column>
                  <Grid.Column width={10}>
                     <ChatWindow />
                  </Grid.Column>
               </Grid>
            </Container>
         </div>
      );
   }
}

export default ChatPage;
