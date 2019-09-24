import React, {useEffect} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {nameChange} from "../Store/dispatchStore";

const options = [
   { key: 'm', text: 'Male', value: 'male' },
   { key: 'f', text: 'Female', value: 'female' },
]

const RegisterForm = (props) => {

   useEffect(() => {
      if(props.createdUser){
         props.onReloadPage()}
   });

   const handleOnSubmit = (event) => {
      event.preventDefault();

      const now = new Date();
      const userId = uuid();


      axios.post('/api/users/', {
         id: userId,
         username: props.username,
         name: props.name,
         avatar: props.avatar,
         email: props.email,
         password: props.password,
         createdOn: now.toISOString()
      })
         .then(response => {
            console.log("You Created a New User");   
            props.userCreated();
         })
         .catch(error => console.log(error));
   };

   const isCreated = props.createdUser? <Redirect to="/" />: null;

   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%", borderColor: 'rgb(211,114,228)', borderRadius: '0'}}>
         {isCreated}
         <Form onSubmit={handleOnSubmit} method="POST" >
            <input
               onChange={props.onUsernameChange}
               placeholder='Username'
               style={{borderRadius: '0', margin: '0.5rem 0'}}
               name="username" 
               value={props.username}
            />
            <input
               onChange={props.onNameChange}
               placeholder='Name'
               style={{borderRadius: '0', margin: '0.5rem 0'}}
               name="name" 
               value={props.name} />
            <Form.Select
                fluid
                onChange={props.onGenderChange}
                style={{borderRadius: '0', margin: '0.5rem 0 0 0'}}
                options={options}
                placeholder='Gender'
            />
            <input
               onChange={props.onEmailChange}
               style={{borderRadius: '0', margin: '0.3rem 0 0.5rem 0'}}
               type='email' 
               placeholder='Email' 
               name="email" 
               value={props.email}
            />
            <input
               onChange={props.onPasswordChange}
               style={{borderRadius: '0', margin: '0.5rem 0'}}
               placeholder='Password' 
               name="password"
               type="password"
               value={props.password}
            />
            <Button name="title" type='submit' content='Create User' style={{width: "100%", background: "rgb(211,114,228)", borderRadius: '0', margin: '0.5rem 0'}}/>
         </Form>
      </Segment>
   );
};

const mapStateToProps = state => {
   return {
      username: state.username,
      userId: state.userId,
      email: state.email,
      name: state.name,
      password: state.password,
      avatar: state.avatar,
      createdOn: state.createdOn,
      createdUser: state.createdUser,

   }
};

const mapDispatchToProps = dispatch => {
   return {
      onNameChange: (event) => {
         let newName = event.target.value;
         dispatch({type: nameChange, val: newName});},
      onEmailChange: event => {
         let email = event.target.value;
         dispatch({type:'EMAILCHANGE', val: email});
      },
      onUsernameChange: event => {
         let username = event.target.value;
         dispatch({type:'USERNAMECHANGE', val: username});
      },
      onPasswordChange: event => {
         let password = event.target.value;
         dispatch({type:'PASSWORDCHANGE', val: password});
      },
      userCreated: () => dispatch({type: 'USERCREATED', val: true}),
      onReloadPage: () => dispatch({type:'RELOADPAGE', payload: {
         username: '',
         name: '',
         password: '',
         createdOn: '',
         userId: '',
         email: '',
         avatar: '',
         createdUser: false
         }}),
      onGenderChange: event => {
         console.log(event.target.innerText);
         dispatch({type: 'GENDERCHANGE', val: event.target.innerText})},
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
