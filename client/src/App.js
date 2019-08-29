import React, { Component } from 'react';
import HomePage from './Containers/Homepage';
import ChannelsPage from './Containers/ChannelsPage';
import RegisterPage from './Containers/RegisterPage';
import ChatPage from './Containers/ChatPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         height: window.height,
         width: window.width,
      };
   }

   render() {
      return (
         <BrowserRouter>
            <div className='App'>
               <Switch>
                  <Route exact path='/' component={HomePage}></Route>
                  <Route
                     exact
                     path='/register'
                     component={RegisterPage}></Route>
                  <Route exact path='/chat' component={ChatPage}></Route>
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
