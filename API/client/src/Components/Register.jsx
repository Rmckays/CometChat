import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import {v4 as uuid} from "uuid";
import axios from 'axios';

const registerForm = () => {

   const inputState = useState({id: '', username: '', name: '', email: '', password: ''})

   const handleOnSubmit = () => {}

   const handleOnInputChange = event => {
      const inputTarget = event.target.value;
      inputState[1](prevInputState => ({
         switch (inputName){
            case 'username':
               break;
            case 'name':
               break;
            case 'email':
               break;
            case 'password':
               break;
         }
      }));
   }

   return (
      <Segment style={{margin: "15rem auto", background: "rgba(0,0,0,0)", width: "25%"}}>
         <Form onSubmit={handleOnSubmit}>
            <Form.Input 
               onChange={event => inputState[1]({username: event.target.value})}
               placeholder='Username' 
               name="username" 
               value={inputState[0].username}/>
            <Form.Input 
               onChange={event => inputState[1]({name: event.target.value})}
               placeholder='Name' 
               name="name" 
               value={inputState[0].name} />
            <Form.Input 
               onChange={event => inputState[1]({email: event.target.value})}
               type='email' 
               placeholder='Email' 
               name="email" 
               value={inputState[0].email}/>
            <Form.Input 
               onChange={event => inputState[1]({password: event.target.value})}
               placeholder='Password' 
               name="password" 
               value={inputState[0].password} />
            <Button name="title" type='submit' content='Create' style={{width: "100%", background: "rgb(240, 156, 96)"}}/>
         </Form>
      </Segment>
   );
};

export default registerForm;
