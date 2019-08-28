import React, { Component } from 'react';
import Backdrop from './Components/Backdrop/Backdrop';
import Login from './Components/Login/Login';
import Canvas from './Containers/Canvas/Canvas';
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
         <div className='App'>
            <Canvas width={this.state.width} height={this.state.height} />
            <Backdrop />
            <Login />
         </div>
      );
   }
}

export default App;
