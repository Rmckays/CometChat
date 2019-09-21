import React, { Component } from 'react';
import Backdrop from '../Components/Backdrop/Backdrop';
import Canvas from './Canvas/Canvas';
import Navigation from '../Components/Navigation';
import ChatWindow from '../Components/ChatWindow';
import ChannelWindow from '../Components/ChannelWindow';
import { Grid, Container } from 'semantic-ui-react';

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
                  height: '75vh',
               }}>
               <Grid style={{ height: '100%' }}>
                  <Grid.Column width={4}>
                     <ChannelWindow />
                  </Grid.Column>
                  <Grid.Column stretch width={12}>
                     <ChatWindow />
                  </Grid.Column>
               </Grid>
            </Container>
         </div>
      );
   }
}

export default ChatPage;
