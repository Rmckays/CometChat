import React, { Component } from 'react';
import Backdrop from '../Components/Backdrop/Backdrop';
import Login from '../Components/Login/Login';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Canvas from './Canvas/Canvas';

class HomePage extends Component {
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
            <Navigation />
            <Canvas width={this.state.width} height={this.state.height} />
            <Backdrop />
            <Login />
            <Footer />
         </div>
      );
   }
}

export default HomePage;
