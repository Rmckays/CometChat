import React, {useState, useEffect} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const now = new Date();

const RegisterForm = (props) => {

   const [usernameState, setUsernameState] = useState('');
   // const [nameState, setNameState] = useState('');
   const [emailState, setEmailState] = useState('');
   const [passwordState, setPasswordState] = useState('');
   const [userIdState, setUserIdState] = useState(uuid());
   const [createdOnState, setCreatedOnState] = useState(now.toISOString());
   const [createdUser, setCreatedUser] = useState(false);

   const handleOnSubmit = (event) => {
      event.preventDefault();

      axios.post('/api/users/', {
         id: userIdState,
         username: this.props.username,
         name: this.props.name,
         email: this.props.email,
         password: this.props.password,
         createdOn: createdOnState
      })
         .then(response => {
            console.log("You Created a New User");   
            setCreatedUser(true);       
         })
         .catch(error => console.log(error));

         // props.history.push('/');
   };

   const isCreated = createdUser? <Redirect to="/" />: null;

   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
         {isCreated}
         <Form onSubmit={handleOnSubmit} method="POST" >
            <Form.Input 
               onChange={event => setUsernameState(event.target.value)}
               placeholder='Username' 
               name="username" 
               // value={this.props.username}
            />
            <Form.Input 
               onChange={props.onNameChange}
               placeholder='Name' 
               name="name" 
               value={props.name} />
            <Form.Input 
               onChange={event => setEmailState(event.target.value)}
               type='email' 
               placeholder='Email' 
               name="email" 
               // value={this.props.email}
            />
            <Form.Input 
               onChange={event => setPasswordState(event.target.value)}
               placeholder='Password' 
               name="password" 
               // value={this.props.password}
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
      createdOn: state.createdOn,
      createdUser: state.createdUser,
   }
};

const mapDispatchToProps = dispatch => {
   return {
      onNameChange: (event) => {
         let newName = event.target.value;
         dispatch({type: 'NAMECHANGE', val: newName});}
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
