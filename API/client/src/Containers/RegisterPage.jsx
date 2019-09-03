import React, { Component } from 'react';
import Backdrop from '../Components/Backdrop/Backdrop';
import Register from '../Components/Register';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Canvas from './Canvas/Canvas';

class RegisterPage extends Component {
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
            <Register />
            <Footer />
         </div>
      );
   }
}

export default RegisterPage;
