import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { Segment, Form, Button } from 'semantic-ui-react';

const loginForm = (props) => {
    const handleOnSubmit = event => {
        event.preventDefault();

        axios.get('/api/users/', {
            params: {
                username: props.usernameRequest,
            }
        })
            .then(response => {
                if(props.passwordRequest === response.password){
                    props.loginUser(response);
                } else {

                }
        })
            .catch(err => console.log(err.data));
    };

   const isLoggedIn = props.userLoggedIn? <Redirect to="/chat" />: null;

   return (
      <Segment style={{margin: "20rem auto", background: "rgba(0,0,0,0)", width: "25%", borderColor: 'rgb(211,114,228)'}}>
          {isLoggedIn}
         <Form onSubmit={handleOnSubmit}>
            <Form.Input 
               placeholder='Username' 
               name="username" 
               value=""/>
            <Form.Input 
               placeholder='Password' 
               name="password" 
               value="" />
            <Button name="login" type='submit' content='Login' style={{width: "100%", background: "rgb(211,114,228)"}}/>
         </Form>
      </Segment>
   );
};

const mapStateToProps = state => {
    return {
        userLoggedIn: state.userLoggedIn,
        username: state.loggedInUser.username,
        userId: state.loggedInUser.userId,
        name: state.loggedInUser.name,
        usernameRequest: state.usernameRequest,
        passwordRequest: state.passwordRequest
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUsernameChange: event => {

        },
        loginUser: response => {
            dispatch({type: 'LOGINUSER', payload:{
                userId: response.id,
                username: response.username,
                name: response.name,
            }})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
