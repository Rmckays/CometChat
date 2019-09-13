import React, {useState, useEffect} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const now = new Date();

const RegisterForm = (props) => {

   const [usernameState, setUsernameState] = useState('');
   const [nameState, setNameState] = useState('');
   const [emailState, setEmailState] = useState('');
   const [passwordState, setPasswordState] = useState('');
   const [userIdState, setUserIdState] = useState(uuid());
   const [createdOnState, setCreatedOnState] = useState(now.toISOString());
   const [createdUser, setCreatedUser] = useState(false);

   const handleOnSubmit = (event) => {
      event.preventDefault();

      axios.post('/api/users/', {
         id: userIdState,
         username: usernameState,
         name: nameState,
         email: emailState,
         password: passwordState,
         createdOn: createdOnState
      })
         .then(response => {
            console.log("You Created a New User");   
            setCreatedUser(true);       
         })
         .catch(error => console.log(error));

         // props.history.push('/');
   }

   const isCreated = createdUser? <Redirect to="/" />: null;

   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
         {isCreated}
         <Form onSubmit={handleOnSubmit} method="POST" >
            <Form.Input 
               onChange={event => setUsernameState(event.target.value)}
               placeholder='Username' 
               name="username" 
               value={usernameState}/>
            <Form.Input 
               onChange={event => setNameState(event.target.value)}
               placeholder='Name' 
               name="name" 
               value={nameState} />
            <Form.Input 
               onChange={event => setEmailState(event.target.value)}
               type='email' 
               placeholder='Email' 
               name="email" 
               value={emailState}/>
            <Form.Input 
               onChange={event => setPasswordState(event.target.value)}
               placeholder='Password' 
               name="password" 
               value={passwordState} />
            <Button name="title" type='submit' content='Create User' style={{width: "100%", background: "rgb(240, 156, 96)"}}/>
         </Form>
      </Segment>
   );
};

export default RegisterForm;
