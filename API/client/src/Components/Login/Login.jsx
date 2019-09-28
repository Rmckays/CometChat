import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { Segment, Form, Button, Message } from 'semantic-ui-react';

const LoginForm = (props) => {
    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;

        axios.get(`/api/users/${props.usernameRequest}`,)
            .then(response => {

                if(props.passwordRequest === response.data.password){
                    console.log("Passwords Match!");
                    props.loginUser(response.data);
                } else {
                    props.failedLogin();
                    console.log("Passwords don't match!")
                }
        })
            .catch(err => console.log(err.data));

    };

   const isLoggedIn = props.userAuthenticated? <Redirect to="/chat" />: null;

   const failedLogin = !props.failedUserLogin?
       null : <Message
               style={{color: "red", background: 'rgb(255, 171, 171)', borderRadius: '0'}}
               header='Wrong Password'
               content='Please verify your password and sign in again.'
              />;

   // useEffect(() => {
   //
   // },[props.failedUserLogin]);

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
             {failedLogin}
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
        passwordRequest: state.passwordRequest,
        failedUserLogin: state.failedUserLogin
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
        },
        failedLogin: () => {
            dispatch({type:"FAILEDLOGIN"})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
