import React from 'react';
import {connect} from 'react-redux';
import Backdrop from '../Components/Backdrop/Backdrop';
import Register from '../Components/Register';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import Canvas from './Canvas/Canvas';

const RegisterPage = props => {

      return (
         <div className='App'>
            <Navigation />
            <Canvas width={props.width} height={props.height} />
            <Backdrop />
            <Register />
            <Footer />
         </div>
      );
};

const mapStateToProps = state => {
    return {
        width: state.width,
        height: state.height
    }
}

export default connect(mapStateToProps)(RegisterPage);
