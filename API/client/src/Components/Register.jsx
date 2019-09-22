import React, {useEffect} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

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
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%", borderColor: 'rgb(211,114,228)'}}>
         {isCreated}
         <Form onSubmit={handleOnSubmit} method="POST" >
            <Form.Input 
               onChange={props.onUsernameChange}
               placeholder='Username' 
               name="username" 
               value={props.username}
            />
            <Form.Input 
               onChange={props.onNameChange}
               placeholder='Name' 
               name="name" 
               value={props.name} />
            <Form.Select
                fluid
                onChange={props.onGenderChange}
                options={options}
                placeholder='Gender'
            />
            <Form.Input 
               onChange={props.onEmailChange}
               type='email' 
               placeholder='Email' 
               name="email" 
               value={props.email}
            />
            <Form.Input 
               onChange={props.onPasswordChange}
               placeholder='Password' 
               name="password" 
               value={props.password}
            />
            <Button name="title" type='submit' content='Create User' style={{width: "100%", background: "rgb(211,114,228)"}}/>
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
         dispatch({type: 'NAMECHANGE', val: newName});},
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
