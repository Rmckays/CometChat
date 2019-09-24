import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { Segment, Form, Button } from 'semantic-ui-react';

const loginForm = (props) => {
    const handleOnSubmit = event => {
        event.preventDefault();

        axios.get(`/api/users/${props.usernameRequest}`,)
            .then(response => {

                if(props.passwordRequest === response.data.password){
                    console.log("Passwords Match!");
                    props.loginUser(response.data);
                } else {
                    console.log("Passwords don't match!")
                }
        })
            .catch(err => console.log(err.data));
    };

   const isLoggedIn = props.userAuthenticated? <Redirect to="/chat" />: null;

   return (
      <Segment style={{margin: "20rem auto", background: "rgba(0,0,0,0)", width: "25%", borderColor: 'rgb(211,114,228)', borderRadius: '0'}}>
          {isLoggedIn}
         <Form onSubmit={handleOnSubmit}>
            <input
               placeholder='Username'
               onChange={props.onUsernameRequestChange}
               style={{borderRadius: '0', margin: '0.5rem 0'}}
               name="username" 
               value={props.usernameRequest}/>
            <input
               placeholder='Password'
               onChange={props.onPasswordRequestChange}
               style={{borderRadius: '0', margin: '0.5rem 0'}}
               name="password"
               type="password"
               value={props.passwordRequest} />
            <Button name="login" type='submit' content='Login' style={{width: "100%", background: "rgb(211,114,228)", borderRadius: '0', margin: '0.5rem 0'}}/>
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
        userAuthenticated: state.userAuthenticated,
        usernameRequest: state.usernameRequest,
        passwordRequest: state.passwordRequest
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUsernameRequestChange: event => {
            dispatch({type:"USERNAMEREQUESTCHANGE", val: event.target.value})
        },
        onPasswordRequestChange: event => {
            dispatch({type: "PASSWORDREQUESTCHANGE", val: event.target.value})
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
