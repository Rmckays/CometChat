import React, { Component } from 'react';
import HomePage from './Containers/Homepage';
import RegisterPage from './Containers/RegisterPage';
import ChatPage from './Containers/ChatPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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
                  <Route exact path='/' component={HomePage}/>
                  <Route
                     exact
                     path='/register'
                     component={RegisterPage}/>
                  <Route exact path='/chat' component={ChatPage} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
