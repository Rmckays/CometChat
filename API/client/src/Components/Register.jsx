import React, {useState, useEffect} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


const RegisterForm = (props) => {

   const [createdUser, setCreatedUser] = useState(false);

   const handleOnSubmit = (event) => {
      event.preventDefault();

      const now = new Date();
      const userId = uuid();


      axios.post('/api/users/', {
         id: userId,
         username: props.username,
         name: props.name,
         email: props.email,
         password: props.password,
         createdOn: now.toISOString()
      })
         .then(response => {
            console.log("You Created a New User");   
            setCreatedUser(true);       
         })
         .catch(error => console.log(error));
   };

   const isCreated = createdUser? <Redirect to="/" />: null;

   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
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
            <Button name="title" type='submit' content='Create User' style={{width: "100%", background: "rgb(240, 156, 96)"}}/>
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
         console.log(password);
         dispatch({type:'PASSWORDCHANGE', val: password});
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
